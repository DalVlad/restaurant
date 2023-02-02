package com.dalv.restaurant.dto;

import com.dalv.restaurant.models.Dish;

import java.util.List;

public class TypeDishDTO {

    private long id;

    private String typeName;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTypeName() {
        return typeName;
    }

    public void setTypeName(String typeName) {
        this.typeName = typeName;
    }

}
