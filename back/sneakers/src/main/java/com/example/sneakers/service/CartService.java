package com.example.sneakers.service;

import com.example.sneakers.entities.Cart;
import com.example.sneakers.repository.CartRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class CartService {

    private CartRepository cartRepository;
    public List<Cart> getListByName(String clientName){
        return this.cartRepository.findByClientName(clientName);
    }

    public List<Cart> getListByEmail(String clientEmail){
        return this.cartRepository.findByClientEmail(clientEmail);
    }
    public void cleanCartList(int clientId){
        this.cartRepository.deleteByClientId(clientId);
    }
    public void addProduct(Cart cart){
        this.cartRepository.save(cart);
    }
    public void removeProductById(int productId){
        this.cartRepository.removeById(productId);
    }
    public long countList(int clientId){
        return this.cartRepository.countByClientId(clientId);
    }
}
