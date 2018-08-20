package com.team.testapp.systems.devs;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;
import javax.persistence.Transient;

@Entity
@Table(name = "actor")
public class Actor {

    @Id
    @Column(name = "id")
    Integer id;

    @Column(name = "name")
    String name;

    @Column(name = "gender")
    String gender;

    String description;
    String height;
    String img;
    String hair;
    String eyes;
    String resume;
    @Transient
    String traitstring;

    public void setTraitstring(String traitstring) {
        this.traitstring = traitstring;
    }

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "actor_trait",
            joinColumns = @JoinColumn(name = "actor_id", unique = false),
            inverseJoinColumns = @JoinColumn(name = "trait_id", unique = false))
    @OrderBy(value = "description")
    List<Trait> traits = new ArrayList<>(0);

    // Constructor.
    public Actor() {
        // Empty.
    }

    public String getTraitstring() {
        traitstring = "";
        for (Trait trait : traits) {
            traitstring += trait.toString();
        }
        return traitstring;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getHeight() {
        return height;
    }

    public void setHeight(String height) {
        this.height = height;
    }

    public String getImg() {
        return img;
    }

    public void setImg(String img) {
        this.img = img;
    }

    public String getHair() {
        return hair;
    }

    public void setHair(String hair) {
        this.hair = hair;
    }

    public String getEyes() {
        return eyes;
    }

    public void setEyes(String eyes) {
        this.eyes = eyes;
    }

    public List<Trait> getTraits() {
        return traits;
    }

    public void setTraits(List<Trait> traits) {
        this.traits = traits;
    }

    @Override
    public String toString() {
        return "Actor [id=" + id
                + ", name=" + name
                + ", gender=" + gender
                + ", description=" + description
                + ", height=" + height
                + ", img=" + img
                + ", hair=" + hair
                + ", eyes=" + eyes
                + "]";
    }

}
