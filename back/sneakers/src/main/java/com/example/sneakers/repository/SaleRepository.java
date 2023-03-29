package com.example.sneakers.repository;

import com.example.sneakers.entities.Sale;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface SaleRepository extends JpaRepository<Sale, Integer> {
    List<Sale> findByClientName(String clientName);
}
