package com.example.sneakers.service.impl;

import com.example.sneakers.entities.Product;
import com.example.sneakers.repository.IProductRepository;
import com.example.sneakers.service.IProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductServiceImpl implements IProductService {

	@Autowired
	private IProductRepository productRepository;

	@Override
	public void save(Product product) {
		productRepository.save(product);
	}

	@Override
	public List<Product> listAll() {
		return productRepository.findAll();
	}

	@Override
	public void deleteById(int id) {
		productRepository.deleteById(id);
	}

	@Override
	public Product listById(int id) {
		return productRepository.findById(id).get();
	}

}
