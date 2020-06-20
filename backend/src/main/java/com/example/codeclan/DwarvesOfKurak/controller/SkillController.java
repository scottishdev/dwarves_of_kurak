package com.example.codeclan.DwarvesOfKurak.controller;


import com.example.codeclan.DwarvesOfKurak.models.Skill;
import com.example.codeclan.DwarvesOfKurak.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class SkillController {

    @Autowired
    SkillRepository skillRepository;

    @GetMapping(value ="/api/skills")
    public ResponseEntity<List<Skill>> getAllSkills(){
        return new ResponseEntity<>(skillRepository.findAll(), HttpStatus.OK);
    }
}
