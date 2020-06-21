package com.example.codeclan.DwarvesOfKurak.controller;


import com.example.codeclan.DwarvesOfKurak.models.Job;
import com.example.codeclan.DwarvesOfKurak.models.Skill;
import com.example.codeclan.DwarvesOfKurak.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
public class SkillController {

    @Autowired
    SkillRepository skillRepository;

    @GetMapping(value ="/api/skills")
    public ResponseEntity<List<Skill>> getAllSkills(){
        return new ResponseEntity<>(skillRepository.findAll(), HttpStatus.OK);
    }

    @GetMapping(value="/api/skills/{id}")
    public ResponseEntity getSkill(@PathVariable Long id){
        return new ResponseEntity<>(skillRepository.findById(id), HttpStatus.OK);
    }

    @PostMapping(value="/api/skills")
    public ResponseEntity<Skill> createSkill(@RequestBody Skill skill){
        skillRepository.save(skill);
        return new ResponseEntity<>(skill, HttpStatus.CREATED);
    }

    @PutMapping (value="/api/skills/{id}")
    public ResponseEntity<Skill> updateSkill(@RequestBody Skill skill){
        skillRepository.save(skill);
        return new ResponseEntity<>(skill, HttpStatus.OK);
    }

    @DeleteMapping(value="/api/skills/{id}")
    public ResponseEntity<Long> deleteSkill(@PathVariable Long id){
        skillRepository.deleteById(id);
        return new ResponseEntity<>(id, HttpStatus.OK);
    }
}
