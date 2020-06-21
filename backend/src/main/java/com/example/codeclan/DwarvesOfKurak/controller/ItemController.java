package com.example.codeclan.DwarvesOfKurak.controller;
import com.example.codeclan.DwarvesOfKurak.models.Character;
import com.example.codeclan.DwarvesOfKurak.models.Item;
import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import com.example.codeclan.DwarvesOfKurak.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/api/items")
    public ResponseEntity<List<Item>> getAllItems(){
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }


    @GetMapping(value="/api/items/{id}")
    public ResponseEntity getItem(@PathVariable Long id){
        return new ResponseEntity<>(itemRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/api/items")
    public ResponseEntity<Item> createItem(@RequestBody Item item){
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.CREATED);
    }

    @PutMapping (value="/api/items/{id}")
    public ResponseEntity<Item> updateItem(@RequestBody Item item){
        itemRepository.save(item);
        return new ResponseEntity<>(item, HttpStatus.OK);
    }

    @DeleteMapping(value="/api/items/{id}")
    public ResponseEntity<Long> deleteItem(@PathVariable Long id){
        itemRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
