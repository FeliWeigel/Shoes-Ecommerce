package com.example.sneakers.repository;

import com.example.sneakers.entities.Cart;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface CartRepository extends JpaRepository<Cart, Integer> {
    Optional<Cart> findByClientId(int clientId);
    List<Cart> findByClientName(String clientName);
    List<Cart> findByClientEmail(String clientEmail);
    void removeById(int productId);
    void deleteByClientId(int clientId);
    Long countByClientId(int clientId);

}
