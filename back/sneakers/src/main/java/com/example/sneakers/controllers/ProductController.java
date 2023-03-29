package com.example.sneakers.controllers;

import com.example.sneakers.entities.Product;
import com.example.sneakers.service.product.ProductService;
import com.example.sneakers.service.product.UploadFileService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.net.MalformedURLException;
import java.util.List;

@RestController
@RequestMapping("/api/products")
public class ProductController {

	@Autowired
	private ProductService productService;

	@Autowired
	private UploadFileService uploadFileService;

	@GetMapping
	@CrossOrigin("http://localhost:3000")
	public List<Product> productList() {
		List<Product> products = productService.listAll();
		return products;
	}

	@GetMapping(value = "/uploads/{filename}")
	public ResponseEntity<Resource> productImage(@PathVariable String filename) {
		Resource resource = null;
		try {
			resource = uploadFileService.load(filename);
		} catch (MalformedURLException e) {
			e.printStackTrace();
		}
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + resource.getFilename() + "\"")
				.body(resource);
	}

	@GetMapping("/new")
	public void newProduct(Model model) {
		model.addAttribute("product", new Product());
		model.addAttribute("listProducts", productService.listAll());
	}

	@PostMapping("/save")
	public String saveProduct(@Validated @ModelAttribute("product") Product product, BindingResult result, Model model,
			@RequestParam("file") MultipartFile image, RedirectAttributes flash, SessionStatus status)
			throws Exception {
		if (result.hasErrors()) {
			System.out.println(result.getFieldError());
			return "product/product";
		} else {
			if (!image.isEmpty()) {
				if (product.getId() > 0 && product.getImage() != null && product.getImage().length() > 0) {
					uploadFileService.delete(product.getImage());
				}
				String uniqueFileName = uploadFileService.copy(image);
				product.setImage(uniqueFileName);
			}
			productService.save(product);
			status.setComplete();
		}
		return "redirect:/product/product";
	}

	@RequestMapping("/update/{id}")
	public void productUpdate(@PathVariable(value = "id") int id, Model model) {
		Product product = productService.listById(id);
		model.addAttribute("product", product);
	}
	
	@RequestMapping("/details/{id}")
	@CrossOrigin("http://localhost:3000")
	public Product productDetail(@PathVariable(value = "id") int id, Model model) {
		Product product = productService.listById(id);
		model.addAttribute("product", product);
		return product;
	}

	@RequestMapping("/delete/{id}")
	public void productDelete(@PathVariable(value = "id") int id, Model model) {
		try {
			productService.deleteById(id);
		} catch (Exception e) {
			e.printStackTrace();
		}
	}
}
