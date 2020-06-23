package com.example.codeclan.DwarvesOfKurak.controller;

import com.example.codeclan.DwarvesOfKurak.models.Party;
import com.example.codeclan.DwarvesOfKurak.repository.PartyRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class PartyController {

        @Autowired
        PartyRepository partyRepository;

        @GetMapping(value = "/api/party")
        public ResponseEntity<List<Party>> getAllPartys(){
            return new ResponseEntity<>(partyRepository.findAll(), HttpStatus.OK);
        }


        @GetMapping(value="/api/party/{id}")
        public ResponseEntity getItem(@PathVariable Long id){
            return new ResponseEntity<>(partyRepository.findById(id), HttpStatus.OK);
        }

        @PostMapping(value="/api/party")
        public ResponseEntity<Party> createItem(@RequestBody Party party){
            partyRepository.save(party);
            return new ResponseEntity<>(party, HttpStatus.CREATED);
        }

        @PutMapping (value="/api/party/{id}")
        public ResponseEntity<Party> updateParty(@RequestBody Party party){
            partyRepository.save(party);
            return new ResponseEntity<>(party, HttpStatus.OK);
        }

        @DeleteMapping(value="/api/party/{id}")
        public ResponseEntity<Long> deleteParty(@PathVariable Long id){
            partyRepository.deleteById(id);
            return new ResponseEntity<>(id, HttpStatus.OK);
        }
}
