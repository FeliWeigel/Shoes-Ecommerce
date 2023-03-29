package com.example.sneakers.service;

import com.example.sneakers.entities.Detail;
import com.example.sneakers.repository.DetailRepository;
import jakarta.transaction.Transactional;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@Transactional
@AllArgsConstructor
public class DetailService {

    private DetailRepository detailRepository;

    public void createDetail(Detail detail){
        detailRepository.save(detail);
    }
    public List<Detail> getDetailBySale(int saleId){
        return detailRepository.findBySaleId(saleId);
    }

}
