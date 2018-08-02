package com.team.testapp.systems.devs;

import java.util.List;

public class Actor {

    Integer id;
    String name;
    String gender;
    String description;
    String height;
    String img;
    String hair;
    String eyes;
    List<String> traits;

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

    public List<String> getTraits() {
        return traits;
    }

    public void setTraits(List<String> traits) {
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
                + ", traits=" + traits
                + "]";
    }

}
