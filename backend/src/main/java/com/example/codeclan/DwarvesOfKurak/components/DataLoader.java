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

    @Autowired
    EncounterRepository encounterRepository;

    @Autowired
    PartyRepository partyRepository;

    public DataLoader(){
    }

    public void run(ApplicationArguments args) {

        //Potions
        Item healthPotion = new Item("Health Pot","hp_potion",10.0,5.0,2.0, "http://localhost:8080/api/assets/png?health_potion");
        itemRepository.save(healthPotion);
        Item manaPotion = new Item("Mana Potion", "mp_potion", 15.0, 5.0, 2.0,"http://localhost:8080/api/assets/png?mana_potion");
        itemRepository.save(manaPotion);

        //Weapons
        Item stick = new Item("wooden Stick", "weapon", 5.0, 10.0, 1.0,"http://localhost:8080/api/assets/png?longsword");
        itemRepository.save(stick);
        Item sword = new Item("Sword", "weapon", 5.0, 30.0, 5.0,"http://localhost:8080/api/assets/png?longsword");
        itemRepository.save(sword);
        Item axe = new Item("Axe", "weapon", 8.0, 35.0, 8.0,"http://localhost:8080/api/assets/png?doubleaxe");
        itemRepository.save(axe);

        //Armour
        Item leatherShirt = new Item("leather Shirt", "armour",5.0,10.0,1.0,"http://localhost:8080/api/assets/png?leather_armour");
        itemRepository.save(leatherShirt);
        Item breastPlate = new Item("BreastPlate", "armour", 20.0, 100.0, 20.0,"http://localhost:8080/api/assets/png?breastplate");
        itemRepository.save(breastPlate);
        Item chainMail = new Item("ChainMail", "armour", 15.0, 80.0,15.0,"http://localhost:8080/api/assets/png?chainmail");
        itemRepository.save(chainMail);

        // Job Classes
        Job bum = new Job ("Bum", 1, 1);
        jobRepository.save(bum);
        Job warrior = new Job("Warrior", 5, 0);
        jobRepository.save(warrior);
        Job cleric = new Job("Cleric", 2, 2);
        jobRepository.save(cleric);
        Job mage = new Job("Mage", 0, 5);
        jobRepository.save(mage);

        // Skills
        Skill fart = new Skill("fart", "gas", "poison", 5,"http://localhost:8080/api/assets/png?heal");
        skillRepository.save(fart);
        Skill fireBall = new Skill("Fire Ball", "fire", null, 10,"http://localhost:8080/api/assets/png?fireball");
        skillRepository.save(fireBall);
        Skill iceShard = new Skill("Ice Shard", "ice", null, 10,"http://localhost:8080/api/assets/png?iceshard");
        skillRepository.save(iceShard);
        Skill healLight = new Skill("Light Heal", "heal", null, 40,"http://localhost:8080/api/assets/png?heal");
        skillRepository.save(healLight);

        // Monsters
        Monster air = new Monster("Air Freshener", "Perfume", 5, 3, 10, 0,"http://localhost:8080/api/assets/gif?image=slime");
        monsterRepository.save(air);
        Monster slime1 = new Monster("Slime 1", "slime", 20, 0, 1, 0,"http://localhost:8080/api/assets/gif?image=slime");
        monsterRepository.save(slime1);
        Monster goblin1 = new Monster("Goblin 1", "greenSkin", 50, 0, 2, 0,"http://localhost:8080/api/assets/gif?image=orc_idle");
        monsterRepository.save(goblin1);
        Monster orc1 = new Monster("Orc 1", "greenSkin", 70, 0, 5, 0,"http://localhost:8080/api/assets/gif?image=orc_idle");
        monsterRepository.save(orc1);
        Monster zombie1 = new Monster("Zombie 1", "undead", 30, 0, 2, 0,"http://localhost:8080/api/assets/gif?image=orc_idle");
        monsterRepository.save(zombie1);
        Monster zombie2 = new Monster("Zombie 2", "undead", 30, 0, 2, 0,"http://localhost:8080/api/assets/gif?image=orc_idle");
        monsterRepository.save(zombie2);

        //Characters
        Character jim = new Character("Jim", "Dwarf", "Male", "the mystery of Jim","http://localhost:8080/api/assets/png?warrior");
        characterRepository.save(jim);
        Character brunor = new Character("Brunor", "ForestKin", "Male", "Brunor is one of the many ForestKin who commune with the spirits of the forest and are as such, one with the leylines of rejuvinating forest energy.","http://localhost:8080/api/assets/png?warrior");
        characterRepository.save(brunor);
        Character dumas = new Character("Dumas", "MountainKin", "Male", "The mountain kin, proud and strong and one of the oldest clans of dwarf. Skilled in melee, Dumas still guards their ancestral mountain homes till this day","http://localhost:8080/api/assets/png?warrior");
        characterRepository.save(dumas);
        Character durlin = new Character("Durlin", "CityKin", "Male", "Though few in number, the city kin live in large cities among the other greater races - Humans and Elves. The more magically attuned of them even join the guilds of magic and learn the ways or sorcery","http://localhost:8080/api/assets/png?mage");
        characterRepository.save(durlin);

        //Encounters
        //Adding monsters + items to encounter
        Encounter encounter1 = new Encounter(100);
        encounterRepository.save(encounter1);

        zombie1.setEncounter(encounter1);
        monsterRepository.save(zombie1);
        zombie2.setEncounter(encounter1);
        monsterRepository.save(zombie2);

        sword.setEncounter(encounter1);
        itemRepository.save(sword);
        chainMail.setEncounter(encounter1);
        itemRepository.save(chainMail);


        // Test Logic
        healthPotion.setCharacter(jim); //adds character name to character variable in items. Hence populating chars inventory.
        itemRepository.save(healthPotion);
        stick.setCharacter(jim);
        itemRepository.save(stick);
        leatherShirt.setCharacter(jim);
        itemRepository.save(leatherShirt);

        jim.setWeapon(stick);  //Equips item to character.
        jim.setArmour(leatherShirt);
        jim.addSkill(fart);
       jim.setJob(warrior);
        characterRepository.save(jim);

        brunor.setJob(cleric);
        characterRepository.save(brunor);

        dumas.setJob(bum);
        dumas.addSkill(iceShard);
        characterRepository.save(dumas);

        Party party = new Party();
        partyRepository.save(party);
        party.addCharacter(jim);
        jim.setParty(party);
        characterRepository.save(jim);
        brunor.setParty(party);
        characterRepository.save(brunor);
        dumas.setParty(party);
        characterRepository.save(dumas);

    }

}
