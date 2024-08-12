package com.smartfinance_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.smartfinance_backend.entity.User;
import com.smartfinance_backend.repository.UserRepository;
import java.math.BigDecimal;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository){
        this.userRepository = userRepository;
    }

    public User saveUser(User user){
        return userRepository.save(user);
    }

    public BigDecimal calculateEMI(User user){
        BigDecimal totalExpenses = user.getRent()
        .add(user.getFoodExpenses())
        .add(user.getTravelExpenses())
        .add(user.getUtilityBills())
        .add(user.getMiscExpenses());

        BigDecimal availableIncome = user.getMonthlySalary().subtract(totalExpenses);

        return availableIncome.multiply(new BigDecimal("0.5"));
    }  
    
}
