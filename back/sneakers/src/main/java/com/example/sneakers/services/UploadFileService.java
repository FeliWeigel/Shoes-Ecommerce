package com.example.sneakers.services;

import jakarta.annotation.Resource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;

public interface UploadFileService {

    public Resource load(String filename) throws MalformedURLException;
    public String copy(MultipartFile file) throws IOException;
}
