package com.example.sneakers.service.product;

import com.example.sneakers.entities.Product;

import java.util.List;

public interface ProductService {
	void save(Product product);
	List<Product> listAll();
	void deleteById(int id);
	Product listById(int id);
}
