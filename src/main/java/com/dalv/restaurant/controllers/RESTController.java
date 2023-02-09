package com.dalv.restaurant.controllers;


import com.dalv.restaurant.dto.DishDTO;
import com.dalv.restaurant.dto.MenuDTO;
import com.dalv.restaurant.dto.TypeDishDTO;
import com.dalv.restaurant.models.Dish;
import com.dalv.restaurant.models.Menu;
import com.dalv.restaurant.models.TypeDish;
import com.dalv.restaurant.services.DishService;
import com.dalv.restaurant.services.MenuService;
import com.dalv.restaurant.services.TypeDishService;
import com.dalv.restaurant.util.DishError.DishNotCreatedException;
import com.dalv.restaurant.util.DishError.DishNotFoundException;
import com.dalv.restaurant.util.ErrorResponse;
import com.dalv.restaurant.util.MenuError.MenuNotCreatedException;
import com.dalv.restaurant.util.MenuError.MenuNotFoundException;
import com.dalv.restaurant.util.TypeDishError.TypeDishNotCreatedException;
import com.dalv.restaurant.util.TypeDishError.TypeDishNotFoundException;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.BindingResult;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api")
@CrossOrigin
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

    @GetMapping("/typeDish")
    public List<TypeDishDTO> getAllTypeDish(){
        return typeDishService.findAll().stream().map(this::convertToTypeDishDTO).collect(Collectors.toList());
    }

    @GetMapping("/typeDish/{id}")
    public TypeDishDTO getTypeDish(@PathVariable("id") Long id){
        return convertToTypeDishDTO(typeDishService.findOne(id));
    }

    @PostMapping("/typeDish")
    public ResponseEntity<HttpStatus> createTypeDish(@RequestBody @Valid TypeDishDTO typeDishDTO,
                                                     BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new TypeDishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        typeDishService.save(convertToTypeDish(typeDishDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/updateTypeDish/{id}")
    public ResponseEntity<HttpStatus> updateTypeDish(@RequestBody @Valid TypeDishDTO typeDishDTO,
                                                     BindingResult bindingResult, @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            throw new TypeDishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        typeDishService.update(id, convertToTypeDish(typeDishDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/deleteTypeDish/{id}")
    public ResponseEntity<HttpStatus> deleteTypeDish(@PathVariable("id") Long id){
        typeDishService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/dish")
    public List<DishDTO> getAllDish(){
        return dishService.findAll().stream().map(this::convertToDishDTO).collect(Collectors.toList());
    }

    @GetMapping("/dish/{id}")
    public DishDTO getDish(@PathVariable("id") Long id){
        return convertToDishDTO(dishService.findOne(id));
    }

    @PostMapping("/dish")
    public ResponseEntity<HttpStatus> createDish(@RequestBody @Valid DishDTO dishDTO, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new DishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        dishService.save(convertToDish(dishDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/updateDish/{id}")
    public ResponseEntity<HttpStatus> updateDish(@RequestBody @Valid DishDTO dishDTO, BindingResult bindingResult,
                                                     @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            throw new DishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        dishService.update(id, convertToDish(dishDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/deleteDish/{id}")
    public ResponseEntity<HttpStatus> deleteDish(@PathVariable("id") Long id){
        dishService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @GetMapping("/menu")
    public List<MenuDTO> getAllMenu(){
        return menuService.findAll().stream().map(this::convertToMenuDTO).collect(Collectors.toList());
    }

    @GetMapping("/menu/{id}")
    public MenuDTO getMenu(@PathVariable("id") Long id){
        return convertToMenuDTO(menuService.findOne(id));
    }

    @PostMapping("/menu")
    public ResponseEntity<HttpStatus> createMenu(@RequestBody @Valid MenuDTO menuDTO, BindingResult bindingResult){
        if(bindingResult.hasErrors()){
            throw new DishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        menuService.save(convertToMenu(menuDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @PatchMapping("/updateMenu/{id}")
    public ResponseEntity<HttpStatus> updateMenu(@RequestBody @Valid MenuDTO menuDTO, BindingResult bindingResult,
                                                     @PathVariable("id") Long id){
        if(bindingResult.hasErrors()){
            throw new DishNotCreatedException(createErrorMsg(bindingResult.getFieldErrors()));
        }
        menuService.update(id, convertToMenu(menuDTO));
        return ResponseEntity.ok(HttpStatus.OK);
    }

    @DeleteMapping("/deleteMenu/{id}")
    public ResponseEntity<HttpStatus> deleteMenu(@PathVariable("id") Long id){
        menuService.delete(id);
        return ResponseEntity.ok(HttpStatus.OK);
    }

    private TypeDish convertToTypeDish(TypeDishDTO typeDishDTO){
        return modelMapper.map(typeDishDTO, TypeDish.class);
    }

    private TypeDishDTO convertToTypeDishDTO(TypeDish typeDish){
        return modelMapper.map(typeDish, TypeDishDTO.class);
    }

    private Dish convertToDish(DishDTO dishDTO){
        return modelMapper.map(dishDTO, Dish.class);
    }

    private DishDTO convertToDishDTO(Dish dish){
        return modelMapper.map(dish, DishDTO.class);
    }

    private Menu convertToMenu(MenuDTO menuDTO){
        return modelMapper.map(menuDTO, Menu.class);
    }

    private MenuDTO convertToMenuDTO(Menu menu){
        return modelMapper.map(menu, MenuDTO.class);
    }

    private String createErrorMsg(List<FieldError> errors){
        StringBuilder errorMsg = new StringBuilder();
        for(FieldError error: errors){
            errorMsg.append(error.getField()).append(" - ").append(error.getDefaultMessage()).append(";");
        }
        return errorMsg.toString();
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

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> dishNotCreatedException(DishNotCreatedException e){
        ErrorResponse response = new ErrorResponse(e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> dishNotFoundException(DishNotFoundException e){
        ErrorResponse response = new ErrorResponse("Dish with this id wasn't found");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> menuNotCreatedException(MenuNotCreatedException e){
        ErrorResponse response = new ErrorResponse(e.getMessage());
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

    @ExceptionHandler
    private ResponseEntity<ErrorResponse> menuNotFoundException(MenuNotFoundException e){
        ErrorResponse response = new ErrorResponse("Menu with this id wasn't found");
        return new ResponseEntity<>(response, HttpStatus.BAD_REQUEST);
    }

}
