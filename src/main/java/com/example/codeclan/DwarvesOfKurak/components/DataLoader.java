package com.example.codeclan.DwarvesOfKurak.components;

import com.example.codeclan.DwarvesOfKurak.repository.CharacterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;
import com.example.codeclan.DwarvesOfKurak.models.Character;

@Component
public class DataLoader implements ApplicationRunner {
    @Autowired
    CharacterRepository characterRepository;


    public DataLoader(){
    }

    public void run(ApplicationArguments args) {
        Character jim = new Character("Jim", "Dwarf", "Male", "asjdfjakdhfjhsdjkghshjdgj");
        characterRepository.save(jim);
    }
}
