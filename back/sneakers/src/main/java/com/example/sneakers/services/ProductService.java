package com.example.sneakers.services;

import com.example.sneakers.entities.Product;

import java.util.List;

public interface ProductService {
    void save(Product product);
    List<Product> listAll();
    Product listById(int id);

}
