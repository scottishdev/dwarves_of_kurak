package com.example.codeclan.DwarvesOfKurak.components;

import com.example.codeclan.DwarvesOfKurak.models.*;
import com.example.codeclan.DwarvesOfKurak.models.Character;
import com.example.codeclan.DwarvesOfKurak.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.ApplicationArguments;
import org.springframework.boot.ApplicationRunner;
import org.springframework.stereotype.Component;

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

        Item stick = new Item("wooden Stick", "weapon", 5.0, 10.0, 1.0);
        Item leatherShirt = new Item("leather Shirt", "armour",5.0,10.0,1.0);
        Item potion = new Item("health Pot","hp_potion",10.0,5.0,2.0);
        itemRepository.save(stick);
        itemRepository.save(potion);
        itemRepository.save(leatherShirt);


        Character jim = new Character("Jim", "Dwarf", "Male", "the mystery of Jim");
        characterRepository.save(jim);
        potion.setCharacter(jim);
        stick.setCharacter(jim);
        leatherShirt.setCharacter(jim);
        itemRepository.save(potion);
        itemRepository.save(stick);
        itemRepository.save(leatherShirt);
        jim.setWeapon(stick);
        jim.setArmour(leatherShirt);
        characterRepository.save(jim);


        Skill fart = new Skill("fart", "gas", "poison", 5);
        skillRepository.save(fart);

        Job bum = new Job ("Bum", 1, 1);
        jobRepository.save(bum);

        Monster air = new Monster("Air Freshener", "Perfume", 5, 3, 10, 0);
        monsterRepository.save(air);
    }

}
