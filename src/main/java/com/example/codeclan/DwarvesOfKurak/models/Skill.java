package com.example.codeclan.DwarvesOfKurak.models;


import javax.persistence.*;

@Entity
@Table(name ="skills")
public class Skill {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private String sideEffect;

    @Column
    private int damage;

    public Skill(String name, String type, String sideEffect, int damage) {
        this.name = name;
        this.type = type;
        this.sideEffect = sideEffect;
        this.damage = damage;
    }

    public Skill(){

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getSideEffect() {
        return sideEffect;
    }

    public void setSideEffect(String sideEffect) {
        this.sideEffect = sideEffect;
    }

    public int getDamage() {
        return damage;
    }

    public void setDamage(int damage) {
        this.damage = damage;
    }
}
