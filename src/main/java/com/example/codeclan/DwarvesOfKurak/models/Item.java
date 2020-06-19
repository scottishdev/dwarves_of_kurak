package com.example.codeclan.DwarvesOfKurak.models;


import javax.persistence.*;

@Entity
@Table(name = "Item")
public class Item {

    @Id
    @GeneratedValue( strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String name;

    @Column
    private String type;

    @Column
    private Double itemStrength;

    @Column
    private Double buyCost;

    @Column
    private Double sellCost;

    @ManyToOne
    @JoinColumn(name = "character_id", nullable = false)
    private Character character;

    public Item(String name, String type, Double itemStrength, Double buyCost, Double sellCost) {
        this.name = name;
        this.type = type;
        this.itemStrength = itemStrength;
        this.buyCost = buyCost;
        this.sellCost = sellCost;
    }

    public Item (){

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

    public Double getItemStrength() {
        return itemStrength;
    }

    public void setItemStrength(Double itemStrength) {
        this.itemStrength = itemStrength;
    }

    public Double getBuyCost() {
        return buyCost;
    }

    public void setBuyCost(Double buyCost) {
        this.buyCost = buyCost;
    }

    public Double getSellCost() {
        return sellCost;
    }

    public void setSellCost(Double sellCost) {
        this.sellCost = sellCost;
    }
}

