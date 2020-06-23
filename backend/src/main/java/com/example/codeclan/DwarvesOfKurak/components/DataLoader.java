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

    public DataLoader(){
    }

    public void run(ApplicationArguments args) {

        //Potions
        Item healthPotion = new Item("Health Pot","hp_potion",10.0,5.0,2.0, "/api/assets/health_potion.png");
        itemRepository.save(healthPotion);
        Item manaPotion = new Item("Mana Potion", "mp_potion", 15.0, 5.0, 2.0,"/api/assets/mana_potion.png");
        itemRepository.save(manaPotion);

        //Weapons
        Item stick = new Item("wooden Stick", "weapon", 5.0, 10.0, 1.0,"/api/assets/longsword.png");
        itemRepository.save(stick);
        Item sword = new Item("Sword", "weapon", 5.0, 30.0, 5.0,"/api/assets/longsword.png");
        itemRepository.save(sword);
        Item axe = new Item("Axe", "weapon", 8.0, 35.0, 8.0,"/api/assets/doubleaxe.png");
        itemRepository.save(axe);

        //Armour
        Item leatherShirt = new Item("leather Shirt", "armour",5.0,10.0,1.0,"/api/assets/leather_armour.png");
        itemRepository.save(leatherShirt);
        Item breastPlate = new Item("BreastPlate", "armour", 20.0, 100.0, 20.0,"/api/assets/breastplate.png");
        itemRepository.save(breastPlate);
        Item chainMail = new Item("ChainMail", "armour", 15.0, 80.0,15.0,"/api/assets/chainmail.png");
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
        Skill fart = new Skill("fart", "gas", "poison", 5,"/api/assets/heal.png");
        skillRepository.save(fart);
        Skill fireBall = new Skill("Fire Ball", "fire", null, 10,"/api/assets/fireball.png");
        skillRepository.save(fireBall);
        Skill iceShard = new Skill("Ice Shard", "ice", null, 10,"/api/assets/iceshard.png");
        skillRepository.save(iceShard);
        Skill healLight = new Skill("Light Heal", "heal", null, 40,"/api/assets/heal.png");
        skillRepository.save(healLight);

        // Monsters
        Monster air = new Monster("Air Freshener", "Perfume", 5, 3, 10, 0,"/api/assets/slime.gif");
        monsterRepository.save(air);
        Monster slime1 = new Monster("Slime 1", "slime", 20, 0, 1, 0,"/api/assets/slime.gif");
        monsterRepository.save(slime1);
        Monster goblin1 = new Monster("Goblin 1", "greenSkin", 50, 0, 2, 0,"/api/assets/orc_idle.gif");
        monsterRepository.save(goblin1);
        Monster orc1 = new Monster("Orc 1", "greenSkin", 70, 0, 5, 0,"/api/assets/orc_idle.gif");
        monsterRepository.save(orc1);
        Monster zombie1 = new Monster("Zombie 1", "undead", 30, 0, 2, 0,"/api/assets/orc_idle.gif");
        monsterRepository.save(zombie1);
        Monster zombie2 = new Monster("Zombie 2", "undead", 30, 0, 2, 0,"/api/assets/orc_idle.gif");
        monsterRepository.save(zombie2);

        //Characters
        Character jim = new Character("Jim", "Dwarf", "Male", "the mystery of Jim","/api/assets/warrior.png");
        characterRepository.save(jim);
        Character brunor = new Character("Brunor", "ForestKin", "Male", "Brunor is one of the many ForestKin who commune with the spirits of the forest and are as such, one with the leylines of rejuvinating forest energy.","/api/assets/warrior.png");
        characterRepository.save(brunor);
        Character dumas = new Character("Dumas", "MountainKin", "Male", "The mountain kin, proud and strong and one of the oldest clans of dwarf. Skilled in melee, Dumas still guards their ancestral mountain homes till this day","/api/assets/warrior.png");
        characterRepository.save(dumas);
        Character durlin = new Character("Durlin", "CityKin", "Male", "Though few in number, the city kin live in large cities among the other greater races - Humans and Elves. The more magically attuned of them even join the guilds of magic and learn the ways or sorcery","/api/assets/mage.png");
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

    }

}
