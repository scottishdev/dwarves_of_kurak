package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.models.Character;
import com.example.codeclan.DwarvesOfKurak.models.Monster;
import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import com.example.codeclan.DwarvesOfKurak.repository.MonsterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MonsterController {

    @Autowired
    MonsterRepository monsterRepository;

    @GetMapping(value = "/api/monsters")
    public ResponseEntity<List<Monster>> getAllMonsters(){
        return new ResponseEntity<>(monsterRepository.findAll(), HttpStatus.OK);
    }
}
