package com.dalv.restaurant.services;

import com.dalv.restaurant.models.Menu;
import com.dalv.restaurant.repositories.MenuRepository;
import com.dalv.restaurant.util.MenuNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional(readOnly = true)
public class MenuService {

    private final MenuRepository menuRepository;

    @Autowired
    public MenuService(MenuRepository menuRepository) {
        this.menuRepository = menuRepository;
    }

    public List<Menu> findAll(){
        return menuRepository.findAll();
    }

    public Menu findOne(long id){
        Optional<Menu> foundDish = menuRepository.findById(id);
        return foundDish.orElseThrow(MenuNotFoundException::new);
    }

    @Transactional
    public void save(Menu menu){
        menuRepository.save(menu);
    }

    @Transactional
    public void update(long id, Menu updatedMenu){
        updatedMenu.setId(id);
        menuRepository.save(updatedMenu);
    }

    @Transactional
    public void delete(long id){
        menuRepository.deleteById(id);
    }

}
