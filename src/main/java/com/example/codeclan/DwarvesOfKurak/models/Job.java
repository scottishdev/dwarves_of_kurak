package com.example.codeclan.DwarvesOfKurak.models;

import javax.persistence.*;
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

    @OneToMany
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    public Job(String name, int strengthBonusStat, int intelBonusStat) {
        this.name = name;
        this.strengthBonusStat = strengthBonusStat;
        this.intelBonusStat = intelBonusStat;
    }

    public Job(){

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