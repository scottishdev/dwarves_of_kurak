package com.example.codeclan.DwarvesOfKurak.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name= "Jobs")
public class Job {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private int strengthBonusStat;

    @Column
    private int intelBonusStat;

    @JsonIgnoreProperties(value="job")
    @OneToMany(mappedBy="job", fetch = FetchType.LAZY)
    private List<Character> character;


    public Job(String name, int strengthBonusStat, int intelBonusStat) {
        this.name = name;
        this.strengthBonusStat = strengthBonusStat;
        this.intelBonusStat = intelBonusStat;
        this.character = new ArrayList<>();
    }

    public Job(){

    }

    public List<Character> getCharacters() {
        return character;
    }

    public void setCharacter(List<Character> character) {
        this.character = character;
    }

    public void addCharacter(Character character){
        this.character.add(character);
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

    public int getStrengthBonusStat() {
        return strengthBonusStat;
    }

    public void setStrengthBonusStat(int strengthBonusStat) {
        this.strengthBonusStat = strengthBonusStat;
    }

    public int getIntelBonusStat() {
        return intelBonusStat;
    }

    public void setIntelBonusStat(int intelBonusStat) {
        this.intelBonusStat = intelBonusStat;
    }

}