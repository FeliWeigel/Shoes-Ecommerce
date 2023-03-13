package com.example.sneakers.services;

import com.example.sneakers.entities.Product;
import com.example.sneakers.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;


    @Override
    public void save(Product product) {
        productRepository.save(product);
    }

    @Override
    public List<Product> listAll() {
        return productRepository.findAll();
    }

    @Override
    public Product listById(int id) {
        return productRepository.findById(id).get();
    }
}
