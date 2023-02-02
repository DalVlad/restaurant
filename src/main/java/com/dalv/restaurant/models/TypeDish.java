package com.dalv.restaurant.models;

import javax.persistence.*;
import java.util.List;

@Table(name = "Type_Dish")
@Entity
public class TypeDish {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private long id;

    @Column(name = "type_name")
    private String typeName;

    @OneToMany(mappedBy = "typeDish")
    private List<Dish> dish;

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

    public List<Dish> getDish() {
        return dish;
    }

    public void setDish(List<Dish> dish) {
        this.dish = dish;
    }
}
