package com.dalv.restaurant.services;

import com.dalv.restaurant.models.TypeDish;
import com.dalv.restaurant.repositories.TypeDishRepository;
import com.dalv.restaurant.util.TypeDishNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class TypeDishService {

    private final TypeDishRepository typeDishRepository;

    @Autowired
    public TypeDishService(TypeDishRepository typeDishRepository) {
        this.typeDishRepository = typeDishRepository;
    }

    public List<TypeDish> findAll(){
        return typeDishRepository.findAll();
    }

    public TypeDish findOne(long id){
        Optional<TypeDish> foundDish = typeDishRepository.findById(id);
        return foundDish.orElseThrow(TypeDishNotFoundException::new);
    }

    @Transactional
    public void save(TypeDish typeDish){
        typeDishRepository.save(typeDish);
    }

    @Transactional
    public void update(long id, TypeDish updatedTypeDish){
        updatedTypeDish.setId(id);
        typeDishRepository.save(updatedTypeDish);
    }

    @Transactional
    public void delete(long id){
        typeDishRepository.deleteById(id);
    }

}
