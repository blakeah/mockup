package com.team.testapp.systems.devs;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.PostConstruct;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class ActorRestController {
    List<Actor> actors = new ArrayList<>();
    @PostConstruct
    public void init(){
        try {
            ObjectMapper mapper = new ObjectMapper();
            TypeReference<List<Actor>> typeRef =
                    new TypeReference<List<Actor>>() {
                    };
            String path = "/actor-data.json";
            InputStream is = TypeReference.class.getResourceAsStream(path);
            actors = mapper.readValue(is, typeRef);
        } catch (Exception e) {
            System.err.println("ERROR: " + e);
        }
    }

    @GetMapping("/api/actors")
    public ResponseEntity<List<Actor>> apiActors() {
        return new ResponseEntity<>(actors, HttpStatus.OK);
    }

}
