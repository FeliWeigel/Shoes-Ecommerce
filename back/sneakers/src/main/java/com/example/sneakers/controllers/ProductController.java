package com.example.sneakers.controllers;

import com.example.sneakers.entities.Product;
import com.example.sneakers.repository.ProductRepository;
import com.example.sneakers.services.UploadFileService;
import jakarta.annotation.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.net.MalformedURLException;

@RestController
public class ProductController {

    private UploadFileService uploadFileService;
    private ProductRepository productRepository;

    @GetMapping(value = "/uploads/{filename}")
    public ResponseEntity<Resource> goImage(@PathVariable String filename){
        Resource resource = null;
        try{
            resource = uploadFileService.load(filename);
        }catch(MalformedURLException e){
            e.printStackTrace();
        }
        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getClass().getName() + "\"")
                .body(resource);
    }

    @RequestMapping(value = "/api/v1/products/save", method = RequestMethod.POST, consumes = "multipart/form-data")
    @CrossOrigin("http://localhost:3000")
    public String saveProduct(@Validated @ModelAttribute("product")Product product,
                              BindingResult result, Model model, @RequestParam("file")MultipartFile image,
                              RedirectAttributes flash, SessionStatus status) throws Exception{

        if(result.hasErrors()){
            System.out.println(result.getFieldError());
            return "fail";
        }else{
            if(!image.isEmpty()){
                String uniqueFilename = uploadFileService.copy(image);
                product.setImage(uniqueFilename);
            }else{
                return "fail!!";
            }
            productRepository.save(product);
            status.setComplete();
        }

        return "save!";
    }
}
