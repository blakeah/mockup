package com.team.testapp.systems.devs;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;
import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;

@RunWith(SpringRunner.class)
@SpringBootTest(classes = { DevsApplication.class })
public class DevsApplicationTests {

    @Autowired
    private ActorRepository actorRepository;

    @Autowired
    private TraitRepository traitRepository;

	@Test
	public void contextLoads() {
        System.out.println("message test" + actorRepository);

        List<Actor> actors = actorRepository.findAll();
        for (Actor a : actors) {
            System.out.println(a);
        }

        System.out.println(".............................");

        List<Trait> traits = traitRepository.findAll();
        for (Trait t : traits) {
            System.out.println(t);
        }

        System.out.println(".............................");

        Actor a = actorRepository.findById(1);
        System.out.println(a);
	}

}
