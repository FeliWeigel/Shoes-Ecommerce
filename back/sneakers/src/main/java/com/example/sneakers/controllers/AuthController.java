package com.example.sneakers.controllers;

import com.example.sneakers.auth.AuthenticationRequest;
import com.example.sneakers.auth.AuthenticationResponse;
import com.example.sneakers.auth.AuthenticationService;
import com.example.sneakers.auth.RegisterRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authService;

    @PostMapping("/register")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> userRegister(
            @RequestBody RegisterRequest registerRequest
            ){
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/login")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> userAuth(
            @RequestBody AuthenticationRequest authRequest
    ){
        return ResponseEntity.ok(authService.authenticate(authRequest));
    }
}
