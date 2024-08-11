package com.smartfinance_backend.entity;

import jakarta.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name="users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private BigDecimal monthlySalary;
    private BigDecimal rent;
    private BigDecimal foodExpenses;
    private BigDecimal travelExpenses;
    private BigDecimal utilityBills;
    private BigDecimal miscExpenses;

}
