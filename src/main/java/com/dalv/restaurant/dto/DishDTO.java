package com.dalv.restaurant.dto;

import com.dalv.restaurant.models.TypeDish;

public class DishDTO {

    private long id;

    private String name;

    private double price;

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
