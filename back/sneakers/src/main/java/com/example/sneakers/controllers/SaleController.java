package com.example.sneakers.controllers;

import com.example.sneakers.entities.Sale;
import com.example.sneakers.service.SaleService;
import com.example.sneakers.service.UserService;
import com.example.sneakers.user.User;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/sales")
public class SaleController {
    private SaleService saleService;
    private UserService userService;

    public SaleController(SaleService saleService, UserService userService) {
        this.saleService = saleService;
        this.userService = userService;
    }

    @GetMapping("/all")
    public ResponseEntity<List<Sale>> getClientSales(){
        Object userDetails =  SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getClass().getName();
        return new ResponseEntity<>(saleService.listClientSales(userName), HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<String> createSale(){
        Object userDetails = (UserDetails) SecurityContextHolder.getContext()
                .getAuthentication().getPrincipal();
        String userName = userDetails.getClass().getName();
        Optional<User> user = userService.getUserByName(userName);
        saleService.createSale(user.get().getEmail());
        return new ResponseEntity<>("Successful sale", HttpStatus.OK);
    }
}
