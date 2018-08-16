package com.team.testapp.systems.devs;

import org.springframework.data.jpa.repository.JpaRepository;

public interface TraitRepository extends JpaRepository<Trait, Integer> {

    Trait findById(Integer id);

}
