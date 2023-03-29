package com.example.sneakers.repository;

import com.example.sneakers.entities.Detail;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface DetailRepository extends JpaRepository<Detail, Integer> {
    List<Detail> findBySaleId(int saleId);
}
