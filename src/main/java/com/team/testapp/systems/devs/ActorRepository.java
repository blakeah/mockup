package com.team.testapp.systems.devs;

import org.springframework.data.jpa.repository.JpaRepository;

public interface ActorRepository extends JpaRepository<Actor, Integer> {

    Actor findById(Integer id);

}
