package com.dalv.restaurant.controllers;


import com.dalv.restaurant.dto.TypeDishDTO;
import com.dalv.restaurant.models.Dish;
import com.dalv.restaurant.models.TypeDish;
import com.dalv.restaurant.services.DishService;
import com.dalv.restaurant.services.MenuService;
import com.dalv.restaurant.services.TypeDishService;
import com.dalv.restaurant.util.ErrorResponse;
import com.dalv.restaurant.util.TypeDishNotCreatedException;
import com.dalv.restaurant.util.TypeDishNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.websocket.server.PathParam;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
public class RESTController {

    private final DishService dishService;
    private final TypeDishService typeDishService;
    private final MenuService menuService;
    private final ModelMapper modelMapper;

    @Autowired
    public RESTController(DishService dishService,
                          TypeDishService typeDishService, MenuService menuService, ModelMapper modelMapper) {
        this.dishService = dishService;
        this.typeDishService = typeDishService;
        this.menuService = menuService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/typeDishes")
    public List<TypeDishDTO> getAllTypeDish(){
        return typeDishService.findAll().stream().map(this::convertToTypeDishDTO).collect(Collectors.toList());
    }

    @GetMapping("/typeDish/{id}")
    public TypeDishDTO getAllDish(@PathVariable("id") Long id){
        return convertToTypeDishDTO(typeDishService.findOne(id));
    }

    @PostMapping("/typeDish")
    public ResponseEntity<HttpStatus> createTypeDish(@RequestBody @Valid TypeDishDTO typeDishDTO, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            StringBuilder errorMsg = new StringBuilder();
            List<FieldError> errors = bindingResult.getFieldErrors();
            for(FieldError error: errors){
                errorMsg.append(error.getField()).append(" - ").append(error.getDefaultMessage()).append(";");
            }
            throw new TypeDishNotCreatedException(errorMsg.toString());
        }
        typeDishService.save(convertToTypeDish(typeDishDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    private TypeDish convertToTypeDish(TypeDishDTO typeDishDTO){
        return modelMapper.map(typeDishDTO, TypeDish.class);
    }

    private TypeDishDTO convertToTypeDishDTO(TypeDish typeDish){
        return modelMapper.map(typeDish, TypeDishDTO.class);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> typeDishNotCreatedException(TypeDishNotCreatedException e){
        ErrorResponse response = new ErrorResponse(e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> typeDishNotFoundException(TypeDishNotFoundException e){
        ErrorResponse response = new ErrorResponse("Type dish with this id wasn't found");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
