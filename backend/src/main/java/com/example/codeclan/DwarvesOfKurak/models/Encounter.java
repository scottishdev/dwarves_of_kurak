package com.example.codeclan.DwarvesOfKurak.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="encounters")
public class Encounter {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(value="encounter")
    @OneToMany(mappedBy = "encounter", fetch = FetchType.LAZY)
    private List<Monster> monsters;

    @JsonIgnoreProperties(value="encounter")
    @OneToMany(mappedBy = "encounter", fetch = FetchType.LAZY)
    private List<Item> items;

    @Column(name= "coinPurse")
    private int coinPurse;

    public Encounter(int coinPurse) {
        this.coinPurse = coinPurse;
        this.monsters = new ArrayList<>();
        this.items = new ArrayList<>();
    }

    public Encounter() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public List<Item> getItems() {
        return items;
    }

    public void setItems(List<Item> items) {
        this.items = items;
    }

    public List<Monster> getMonsters() {
        return monsters;
    }

    public void setMonsters(List<Monster> monsters) {
        this.monsters = monsters;
    }

    public int getCoinPurse() {
        return coinPurse;
    }

    public void setCoinPurse(int coinPurse) {
        this.coinPurse = coinPurse;
    }
}
