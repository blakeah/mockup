package com.team.testapp.systems.devs;

import static org.hamcrest.CoreMatchers.equalTo;
import static org.junit.Assert.assertFalse;
import static org.junit.Assert.assertThat;
import static org.junit.Assert.assertTrue;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.ArrayList;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = { DevsApplication.class })
public class ActorRepositoryTest {

    @Autowired
    private ActorRepository actorRepository;

    @Autowired
    private TraitRepository traitRepository;

    @Test
	public void list() {
        System.out.println("message test" + actorRepository);

        printActors();


        System.out.println(".............................");

        Actor a = actorRepository.findById(1);
        assertThat(a.getId(), equalTo(1));
        assertThat(a.getName(), equalTo("Nathan Hunt"));
        actorRepository.delete(a);

        printActors();

        System.out.println(".............................");

        a = actorRepository.findById(2);
        List<Trait> traits = a.getTraits();
        traits.remove(0);
        a.setTraits(traits);
        a = actorRepository.save(a);


        printActors();
        System.out.println(".............................");
        Trait t = traitRepository.findById(22);
        traits = new ArrayList<>();
        traits.add(t);
        a.setTraits(traits);
        a = actorRepository.save(a);

        printActors();
        System.out.println(".............................");

        a.setTraits(new ArrayList<Trait>(0));
        a = actorRepository.save(a);

        assertThat(a.getTraits().size(), equalTo(0));

        printActors();
        System.out.println(".............................");

        t = traitRepository.findById(20);
        a.addTrait(t);
        t= traitRepository.findById(21);
        a.addTrait(t);
        a = actorRepository.save(a);

        printActors();
        System.out.println(".............................");

        traits = traitRepository.findAll();

        a.setTraits(traits);
        a = actorRepository.save(a);

        printActors();
        System.out.println(".............................");
	}

    private void printActors(){

        List<Actor> actors = actorRepository.findAll();
        for (Actor a : actors) {
            System.out.println(a);
        }
    }
}
