package com.dalv.restaurant.dto;

import com.dalv.restaurant.models.Dish;

import java.util.List;

import javax.validation.constraints.Size;

public class MenuDTO {

    private long id;
    
    @Size(min = 2, max = 30, message = "Title must be between 2 and 30 characters")
    private String name;

    @Size(min = 3, max = 10, message = "Incorrect time specified")
    private String timeStart;

    @Size(min = 3, max = 10, message = "Incorrect time specified")
    private String timeEnd;

    private List<Dish> dishes;

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

    public String getTimeStart() {
        return timeStart;
    }

    public void setTimeStart(String timeStart) {
        this.timeStart = timeStart;
    }

    public String getTimeEnd() {
        return timeEnd;
    }

    public void setTimeEnd(String timeEnd) {
        this.timeEnd = timeEnd;
    }

    public List<Dish> getDishes() {
        return dishes;
    }

    public void setDishes(List<Dish> dishes) {
        this.dishes = dishes;
    }
}
