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

	@Test
	public void contextLoads() {
        System.out.println("message test" + actorRepository);

        List<Actor> actors = actorRepository.findAll();
        for (Actor a : actors) {
            System.out.println(a);
        }
	}

}
