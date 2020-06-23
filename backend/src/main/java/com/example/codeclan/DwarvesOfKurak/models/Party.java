package com.example.codeclan.DwarvesOfKurak.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name="party")
public class Party {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnoreProperties(value="party")
    @OneToMany(mappedBy="party", fetch = FetchType.LAZY)
    private List<Character> character;


    public Party() {
        this.character = new ArrayList<>();
    }

    public Long getId() {
        return id;
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
}
