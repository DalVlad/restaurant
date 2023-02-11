package com.dalv.restaurant.dto;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

import com.dalv.restaurant.models.TypeDish;

public class DishDTO {

    private long id;

    @Size(min = 2, max = 255, message = "Title must be between 2 and 30 characters")
    private String name;

    @Min(value = 0, message = "Invalid price")
    private double price;

    @NotNull
    private TypeDish typeDish;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public TypeDish getTypeDish() {
        return typeDish;
    }

    public void setTypeDish(TypeDish typeDish) {
        this.typeDish = typeDish;
    }

}
