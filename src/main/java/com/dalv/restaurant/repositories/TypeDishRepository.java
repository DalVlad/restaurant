package com.dalv.restaurant.repositories;

import com.dalv.restaurant.models.TypeDish;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeDishRepository extends JpaRepository<TypeDish, Long> {
}
