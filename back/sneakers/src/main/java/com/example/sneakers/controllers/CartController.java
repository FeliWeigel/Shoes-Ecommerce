package com.example.sneakers.controllers;

import com.example.sneakers.entities.Cart;
import com.example.sneakers.service.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.validation.BindingResult;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/cart")
public class CartController {

    private CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @GetMapping()
    public ResponseEntity<List<Cart>> getListByClient(){
        Object userDetails =  SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getClass().getName();
        return new ResponseEntity<>(cartService.getListByName(userName), HttpStatus.OK);
    }

    @GetMapping("/count/{client_id}")
    public ResponseEntity<Long> getCountByClient(@PathVariable("client_id") int clientId){
        return new ResponseEntity<>(cartService.countList(clientId), HttpStatus.OK);
    }

    @PostMapping("/add")
    public ResponseEntity<String> addProduct(@Validated @RequestBody Cart cart, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            return new ResponseEntity<>("Error to add product", HttpStatus.OK);
        }
        cartService.addProduct(cart);
        return new ResponseEntity<>("Product correctly added!", HttpStatus.OK);
    }

    @DeleteMapping("/delete/{product_id}")
    public ResponseEntity<String> deleteProduct(@PathVariable("product_id") int productId){
        cartService.removeProductById(productId);
        return new ResponseEntity<>("Product correctly removed!", HttpStatus.OK);
    }
}
