package com.example.codeclan.DwarvesOfKurak.components;

import com.example.codeclan.DwarvesOfKurak.controller.JobController;
import com.example.codeclan.DwarvesOfKurak.models.Item;
import com.example.codeclan.DwarvesOfKurak.models.Job;
import com.example.codeclan.DwarvesOfKurak.models.Skill;
import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import com.example.codeclan.DwarvesOfKurak.repository.ItemRepository;
import com.example.codeclan.DwarvesOfKurak.repository.JobRepository;
import com.example.codeclan.DwarvesOfKurak.repository.SkillRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.example.codeclan.DwarvesOfKurak.models.Character;

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


    public DataLoader(){
    }

    public void run(ApplicationArguments args) {
        Character jim = new Character("Jim", "Dwarf", "Male", "asjdfjakdhfjhsdjkghshjdgj");
        characterRepository.save(jim);

        Item stick = new Item("wooden Stick", "Sword", 5.0, 10.0, 1.0);
        itemRepository.save(stick);

        Skill fart = new Skill("fart", "gas", "posion", 5);
        skillRepository.save(fart);

        List<Integer> bonusStat = new ArrayList<>();
        bonusStat.add(3);
        bonusStat.add(6);
        Job bum = new Job ("Bum", bonusStat);
        jobRepository.save(bum);
    }

}
