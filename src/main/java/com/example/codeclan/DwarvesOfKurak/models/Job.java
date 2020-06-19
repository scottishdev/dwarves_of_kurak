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
    private int bonusStat;

    public Job(String name, List<Integer> bonusStat) {
        this.name = name;
        this.bonusStat = bonusStat;
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

    public List<Integer> getBonusStat() {
        return bonusStat;
    }

    public void setBonusStat(List<Integer> bonusStat) {
        this.bonusStat = bonusStat;
    }
}