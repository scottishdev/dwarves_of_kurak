package com.example.codeclan.DwarvesOfKurak.components;

import com.example.codeclan.DwarvesOfKurak.controller.JobController;
import com.example.codeclan.DwarvesOfKurak.models.*;
import com.example.codeclan.DwarvesOfKurak.models.Character;
import com.example.codeclan.DwarvesOfKurak.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    CharacterRepository characterRepository;

    @Autowired
    ItemRepository itemRepository;

    @Autowired
    SkillRepository skillRepository;

    @Autowired
    JobRepository jobRepository;

    @Autowired
    MonsterRepository monsterRepository;


    public DataLoader(){
    }

    public void run(ApplicationArguments args) {
        Character jim = new Character("Jim", "Dwarf", "Male", "the mystery of Jim");
        characterRepository.save(jim);

        Item stick = new Item("wooden Stick", "weapon", 5.0, 10.0, 1.0);
        itemRepository.save(stick);

        Skill fart = new Skill("fart", "gas", "poison", 5);
        skillRepository.save(fart);

        Job bum = new Job ("Bum", 1, 1);
        jobRepository.save(bum);

        Monster air = new Monster("Air Freshener", "Perfume", 5, 3, 10, 0);
        monsterRepository.save(air);
    }

}
