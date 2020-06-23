package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.models.Character;
import com.example.codeclan.DwarvesOfKurak.models.Encounter;
import com.example.codeclan.DwarvesOfKurak.repository.EncounterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EncounterController {

    @Autowired
    EncounterRepository encounterRepository;

    //Insert get mapping here
    //One Encounter
    @GetMapping(value="/api/encounters/{id}")
    public ResponseEntity getEncounter(@PathVariable Long id){
        return new ResponseEntity<>(encounterRepository.findById(id), HttpStatus.OK);
    }

    //All encounters
    @GetMapping(value="/api/encounters")
    public ResponseEntity<List<Encounter>> getAllCharacters(){
        return new ResponseEntity<>(encounterRepository.findAll(), HttpStatus.OK);
    }
}
