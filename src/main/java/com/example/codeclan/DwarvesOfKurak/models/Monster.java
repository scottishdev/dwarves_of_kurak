package com.example.codeclan.DwarvesOfKurak.models;

import javax.persistence.*;

@Entity
@Table(name = "monsters")
public class Monster {
    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name")
    private String name;

    @Column(name = "race")
    private String race;

    @Column(name = "weapon")
    private String weapon;

    @Column(name = "armour")
    private String armour;

    @Column(name = "hitPoints")
    private int hitPoints;

    @Column(name = "manaPoints")
    private int manaPoints;

    @Column(name = "strength")
    private int strength;

    @Column(name = "intelligence")
    private int intelligence;

//    @Column(name = "inventory")
//    private List<Item> inventory;

//    @Column(name = "skills")
//    private List<Skill> skills;
//
//    @Column(name = "coinPurse")
//    private int coinPurse;

    public Monster(String name, String race, int hitPoints, int manaPoints, int strength, int intelligence) {
        this.name = name;
        this.race = race;
        this.hitPoints = hitPoints;
        this.manaPoints = manaPoints;
        this.strength = strength;
        this.intelligence = intelligence;
        this.weapon = null;
        this.armour = null;
    }

    public Monster(){

    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getRace() {
        return race;
    }

    public void setRace(String race) {
        this.race = race;
    }

    public String getWeapon() {
        return weapon;
    }

    public void setWeapon(String weapon) {
        this.weapon = weapon;
    }

    public String getArmour() {
        return armour;
    }

    public void setArmour(String armour) {
        this.armour = armour;
    }

    public int getHitPoints() {
        return hitPoints;
    }

    public void setHitPoints(int hitPoints) {
        this.hitPoints = hitPoints;
    }

    public int getManaPoints() {
        return manaPoints;
    }

    public void setManaPoints(int manaPoints) {
        this.manaPoints = manaPoints;
    }

    public int getStrength() {
        return strength;
    }

    public void setStrength(int strength) {
        this.strength = strength;
    }

    public int getIntelligence() {
        return intelligence;
    }

    public void setIntelligence(int intelligence) {
        this.intelligence = intelligence;
    }

//    public List<Item> getInventory() {
//        return inventory;
//    }
//
//    public void setInventory(List<Item> inventory) {
//        this.inventory = inventory;
//    }
//
//    public List<Skill> getSkills() {
//        return skills;
//    }
//
//    public void setSkills(List<Skill> skills) {
//        this.skills = skills;
//    }
//
//    public int getCoinPurse() {
//        return coinPurse;
//    }
//
//    public void setCoinPurse(int coinPurse) {
//        this.coinPurse = coinPurse;
//    }
}
