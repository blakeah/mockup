package com.team.testapp.systems.devs;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ActorRestController {

    @Autowired
    private ActorRepository actorRepository;
    List<Actor> actors = new ArrayList<>();

    // @PostConstruct
    // public void init() {
    //     try {
    //         ObjectMapper mapper = new ObjectMapper();
    //         TypeReference<List<Actor>> typeRef =
    //                 new TypeReference<List<Actor>>() {
    //                 };
    //         String path = "/actor-data.json";
    //         InputStream is = TypeReference.class.getResourceAsStream(path);
    //         actors = mapper.readValue(is, typeRef);
    //     } catch (Exception e) {
    //         System.err.println("ERROR: " + e);
    //     }
    // }

    // @GetMapping("/api/actors")
    // public ResponseEntity<List<Actor>> apiActors() {
    //     return new ResponseEntity<>(actors, HttpStatus.OK);
    // }

    @GetMapping("/api/actordata")
    public ResponseEntity<List<Actor>> apiActorsData() {
        return new ResponseEntity<>(actorRepository.findAll(), HttpStatus.OK);
    }

    @PostMapping("/api/deleteactor")
    public ResponseEntity<Actor> deleteActor(@RequestBody Actor actor) {
        Actor a = actorRepository.findById(actor.getId());
        if (a != null) {
            actorRepository.delete(a);
        }
        System.out.println("actor = " + actor);
        System.out.println("a = " + a);

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @PostMapping("/api/addactor")
    public ResponseEntity<Actor> addActor(@RequestBody Actor actor) {
        Actor a = new Actor();

        System.out.println("actor = " + actor);
        a.setName(actor.getName());
        a.setHeight(actor.getHeight());
        a.setImg(actor.getImg());
        a.setHair(actor.getHair());
        a.setEyes(actor.getEyes());
        a.setGender(actor.getGender());
        a.setDescription(actor.getDescription());
        a.setTraits(actor.getTraits());

        System.out.println("a = " + a);

        a = actorRepository.save(a);

        return new ResponseEntity<>(a, HttpStatus.OK);
    }

    @PostMapping("/api/saveactor")
    public ResponseEntity<Actor> saveActor(@RequestBody Actor actor) {
        Actor a = actorRepository.findById(actor.getId());

        System.out.println("actor = " + actor);
        a.setName(actor.getName());
        a.setHeight(actor.getHeight());
        a.setImg(actor.getImg());
        a.setHair(actor.getHair());
        a.setEyes(actor.getEyes());
        a.setGender(actor.getGender());
        a.setDescription(actor.getDescription());
        a.setTraits(actor.getTraits());

        System.out.println("a = " + a);

        a = actorRepository.save(a);

        return new ResponseEntity<>(a, HttpStatus.OK);
    }

}
