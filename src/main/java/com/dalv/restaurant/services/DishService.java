package com.dalv.restaurant.services;


import com.dalv.restaurant.repositories.DishRepository;
import com.dalv.restaurant.models.Dish;
import com.dalv.restaurant.util.DishNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class DishService {

    private DishRepository dishRepository;

    @Autowired
    public DishService(DishRepository dishRepository) {
        this.dishRepository = dishRepository;
    }

    public List<Dish> findAll(){
        return dishRepository.findAll();
    }

    public Dish findOne(long id){
        Optional<Dish> foundDish = dishRepository.findById(id);
        return foundDish.orElseThrow(DishNotFoundException::new);
    }

    @Transactional
    public void save(Dish dish){
        dishRepository.save(dish);
    }

    @Transactional
    public void update(long id, Dish updatedDish){
        updatedDish.setId(id);
        dishRepository.save(updatedDish);
    }

    @Transactional
    public void delete(long id){
        dishRepository.deleteById(id);
    }

}
