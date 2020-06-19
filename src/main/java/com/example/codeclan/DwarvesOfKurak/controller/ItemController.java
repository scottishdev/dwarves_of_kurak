package com.example.codeclan.DwarvesOfKurak.controller;
import com.example.codeclan.DwarvesOfKurak.models.Item;
import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import com.example.codeclan.DwarvesOfKurak.repository.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class ItemController {

    @Autowired
    ItemRepository itemRepository;

    @GetMapping(value = "/api/items")
    public ResponseEntity<List<Item>> getAllItems(){
        return new ResponseEntity<>(itemRepository.findAll(), HttpStatus.OK);
    }
}
