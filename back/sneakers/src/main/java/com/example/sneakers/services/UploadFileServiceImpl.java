package com.example.sneakers.services;

import jakarta.annotation.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.UUID;

@Service
public class UploadFileServiceImpl implements UploadFileService{

    private final static String UPLOADS_FOLDER = "uploads";

    @Override
    public Resource load(String filename) throws MalformedURLException {
        Path path = getPath(filename);
        Resource resource = (Resource) new UrlResource(path.toUri());

        if(resource == null){
            throw new RuntimeException("Error in path: " + path.toString());
        }
        return resource;
    }

    @Override
    public String copy(MultipartFile file) throws IOException {
        String uniqueFileName = UUID.randomUUID().toString() + "_" + file.getOriginalFilename();
        Path rootPath = getPath(uniqueFileName);
        Files.copy(file.getInputStream(), rootPath);

        return uniqueFileName;
    }

    public Path getPath(String filename){
        return Paths.get(UPLOADS_FOLDER).resolve(filename).toAbsolutePath();
    }
}
