package com.example.codeclan.DwarvesOfKurak.models;

import com.fasterxml.jackson.annotation.JsonBackReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "encounters")
public class Encounter {

    @JsonBackReference
    @OneToMany(mappedBy = "encounter", fetch = FetchType.LAZY)
    private List<Monster> monsters;

    @OneToMany(mappedBy = "encounter", fetch = FetchType.LAZY)
    private List<Item> inventory;

    @Column(name = "coinPurse")
    private int coinPurse;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;


    public Encounter(int coinPurse) {
        this.monsters = new ArrayList<Monster>();
        this.inventory = new ArrayList<Item>();
        this.coinPurse = coinPurse;
    }

    public Encounter() {
    }

    public List<Monster> getMonsters() {
        return monsters;
    }

    public void setMonsters(List<Monster> monsters) {
        this.monsters = monsters;
    }

    public List<Item> getInventory() {
        return inventory;
    }

    public void setInventory(List<Item> inventory) {
        this.inventory = inventory;
    }

    public int getCoinPurse() {
        return coinPurse;
    }

    public void setCoinPurse(int coinPurse) {
        this.coinPurse = coinPurse;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
