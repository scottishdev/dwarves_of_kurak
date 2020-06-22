package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.example.codeclan.DwarvesOfKurak.models.Character;

import java.util.List;

@RestController

public class CharacterController {

        @Autowired
        CharacterRepository characterRepository;

        @GetMapping(value="/api/characters/{id}")
        public ResponseEntity getCharacter(@PathVariable Long id){
                return new ResponseEntity<>(characterRepository.findById(id), HttpStatus.OK);
        }

        @GetMapping(value="/api/characters")
        public ResponseEntity<List<Character>> getAllCharacters(){
            return new ResponseEntity<>(characterRepository.findAll(), HttpStatus.OK);
        }

        @PostMapping(value="/api/characters")
        public ResponseEntity<Character> createCharacter(@RequestBody Character character){
                characterRepository.save(character);
                return new ResponseEntity<>(character, HttpStatus.CREATED);
        }

        @PutMapping (value="/api/characters/{id}")
        public ResponseEntity<Character> updateCharacter(@RequestBody Character character){
                characterRepository.save(character);
                return new ResponseEntity<>(character, HttpStatus.OK);
        }

        @DeleteMapping(value="/api/characters/{id}")
        public ResponseEntity<Long> deleteCharacter(@PathVariable Long id){
                characterRepository.deleteById(id);
                return new ResponseEntity<>(id, HttpStatus.OK);
        }

}
