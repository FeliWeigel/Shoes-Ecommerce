package com.example.sneakers.service;

import com.example.sneakers.entities.Product;

import java.util.List;

public interface IProductService {
	void save(Product product);
	List<Product> listAll();
	void deleteById(int id);
	Product listById(int id);
}
