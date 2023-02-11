package com.dalv.restaurant.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;
import java.util.List;

@Table(name = "Dish")
@Entity
public class Dish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "name")
    @Size(min = 2, max = 255, message = "Title must be between 2 and 30 characters")
    private String name;

    @Column(name = "price")
    @Min(value = 0, message = "Invalid price")
    private double price;

    @ManyToOne
    @JoinColumn(name = "type_dish_id", referencedColumnName = "id")
    @NotNull
    private TypeDish typeDish;

    @ManyToMany(mappedBy = "dishes")
    @JsonIgnore
    private List<Menu> menus;

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

    public List<Menu> getMenus() {
        return menus;
    }

    public void setMenus(List<Menu> menus) {
        this.menus = menus;
    }
}
