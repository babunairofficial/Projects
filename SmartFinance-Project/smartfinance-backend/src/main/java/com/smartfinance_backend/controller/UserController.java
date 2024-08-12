package com.smartfinance_backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.smartfinance_backend.entity.User;
import com.smartfinance_backend.service.UserService;
import java.math.BigDecimal;
// import java.util.List;
import java.util.Map;
import java.util.HashMap;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserService userService;
    

    @PostMapping
    public ResponseEntity<User> addUser(@RequestBody User user){
        User savedUser = userService.saveUser(user);
        return ResponseEntity.ok(savedUser);
    }
    
    @PostMapping("/{id}/calculate-emi")
    public ResponseEntity<Map<String, BigDecimal>> calculateEMI(@RequestBody User user) {
        User savedUser = userService.saveUser(user);
        BigDecimal emi = userService.calculateEMI(savedUser);
        Map<String, BigDecimal> response = new HashMap<>();
        response.put("permittedEMI", emi);
        return ResponseEntity.ok(response);
    }   

}
