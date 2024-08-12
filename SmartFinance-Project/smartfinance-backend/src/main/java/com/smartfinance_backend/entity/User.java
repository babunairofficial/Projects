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

    //default constructor
    public User() {
    }

    public User(BigDecimal monthlySalary, BigDecimal rent, BigDecimal foodExpenses, 
                BigDecimal travelExpenses, BigDecimal utilityBills, BigDecimal miscExpenses) {
        this.monthlySalary = monthlySalary;
        this.rent = rent;
        this.foodExpenses = foodExpenses;
        this.travelExpenses = travelExpenses;
        this.utilityBills = utilityBills;
        this.miscExpenses = miscExpenses;
    }


    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public BigDecimal getMonthlySalary() {
        return monthlySalary;
    }
    public void setMonthlySalary(BigDecimal monthlySalary) {
        this.monthlySalary = monthlySalary;
    }
    public BigDecimal getRent() {
        return rent;
    }
    public void setRent(BigDecimal rent) {
        this.rent = rent;
    }
    public BigDecimal getFoodExpenses() {
        return foodExpenses;
    }
    public void setFoodExpenses(BigDecimal foodExpenses) {
        this.foodExpenses = foodExpenses;
    }
    public BigDecimal getTravelExpenses() {
        return travelExpenses;
    }
    public void setTravelExpenses(BigDecimal travelExpenses) {
        this.travelExpenses = travelExpenses;
    }
    public BigDecimal getUtilityBills() {
        return utilityBills;
    }
    public void setUtilityBills(BigDecimal utilityBills) {
        this.utilityBills = utilityBills;
    }
    public BigDecimal getMiscExpenses() {
        return miscExpenses;
    }
    public void setMiscExpenses(BigDecimal miscExpenses) {
        this.miscExpenses = miscExpenses;
    }

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", monthlySalary=" + monthlySalary +
                ", rent=" + rent +
                ", foodExpenses=" + foodExpenses +
                ", travelExpenses=" + travelExpenses +
                ", utilityBills=" + utilityBills +
                ", miscExpenses=" + miscExpenses +
                '}';
    }
}



