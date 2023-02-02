package com.dalv.restaurant.controllers;


import com.dalv.restaurant.models.Dish;
import com.dalv.restaurant.models.TypeDish;
import com.dalv.restaurant.services.DishService;
import com.dalv.restaurant.services.MenuService;
import com.dalv.restaurant.services.TypeDishService;
import com.dalv.restaurant.util.ErrorResponse;
import com.dalv.restaurant.util.TypeDishNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class RESTController {

    private final DishService dishService;
    private final TypeDishService typeDishService;
    private final MenuService menuService;

    @Autowired
    public RESTController(DishService dishService,
                          TypeDishService typeDishService, MenuService menuService) {
        this.dishService = dishService;
        this.typeDishService = typeDishService;
        this.menuService = menuService;
    }

    @GetMapping("/dishes")
    public List<Dish> getAllDish(){
        return dishService.findAll();
    }

    @GetMapping("/TypeDishes")
    public List<Dish> getAllTypeDish(){
        return dishService.findAll();
    }






    @ExceptionHandler
    private ResponseEntity<ErrorResponse> typeDishNotFoundException(TypeDishNotFoundException e){
        ErrorResponse response = new ErrorResponse("Type dish with this id wasn't found");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
