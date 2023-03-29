package com.example.sneakers.controllers;

import com.example.sneakers.entities.Detail;
import com.example.sneakers.service.DetailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/detail")
public class DetailController {

    private DetailService detailService;

    @PostMapping("/create")
    public ResponseEntity<String> createDetail(@Validated @RequestBody Detail detail){
        detailService.createDetail(detail);
        return new ResponseEntity<>("Detail correctly created!", HttpStatus.OK);
    }

    @GetMapping("/{sale_id}")
    public ResponseEntity<List<Detail>> getDetailsBySale(@PathVariable("sale_id") int saleId){
        return new ResponseEntity<>(detailService.getDetailBySale(saleId), HttpStatus.OK);
    }

}
