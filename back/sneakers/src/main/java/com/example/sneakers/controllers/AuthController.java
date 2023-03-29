package com.example.sneakers.controllers;

import com.example.sneakers.security.auth.AuthenticationRequest;
import com.example.sneakers.security.auth.AuthenticationResponse;
import com.example.sneakers.security.auth.AuthenticationService;
import com.example.sneakers.security.auth.RegisterRequest;
import com.example.sneakers.security.config.CookieUtil;
import com.example.sneakers.security.config.JwtService;
import com.example.sneakers.service.UserService;
import com.example.sneakers.user.User;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("/api/v1/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthenticationService authService;
    private final JwtService jwtService;
    private final UserService userService;
    @Value("${jwt.accessTokenCookieName}")
    private String cookieName;

    @PostMapping("/register")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<AuthenticationResponse> userRegister(
            @RequestBody RegisterRequest registerRequest
            ){
        return ResponseEntity.ok(authService.register(registerRequest));
    }

    @PostMapping("/login")
    @CrossOrigin("http://localhost:3000")
    public ResponseEntity<Object> userAuth(
            @RequestBody AuthenticationRequest authRequest,
            HttpServletResponse httpServletResponse
    ){
        AuthenticationResponse authentication = (AuthenticationResponse) authService.authenticate(authRequest);
        CookieUtil.create(httpServletResponse, cookieName, authentication.getToken(), false, -1, "localhost");
        return new ResponseEntity<>(authentication, HttpStatus.OK);
    }

    @GetMapping("/user_details")
    public ResponseEntity<User> getUserDetails(){

        Object userDetails = SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        String userName = userDetails.getClass().getName();
        Optional<User> user = userService.getUserByName(userName);
        if(!user.isPresent()){
            return null;
        }

        return new ResponseEntity<>(user.get(), HttpStatus.OK);

    }

    @GetMapping("/logout")
    public ResponseEntity<String> userLogOut(HttpServletResponse httpServletResponse){
        CookieUtil.clear(httpServletResponse, cookieName);
        return new ResponseEntity<>("Closed session!", HttpStatus.OK);
    }
}
