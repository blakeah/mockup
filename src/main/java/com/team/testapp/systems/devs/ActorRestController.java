package edu.hawaii.its.tenure.controller;

import java.io.InputStream;
import java.util.ArrayList;
import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

import edu.hawaii.its.tenure.type.Actor;

@RestController
public class ActorRestController {

    @GetMapping("/api/actors")
    public ResponseEntity<List<Actor>> apiActors() {
        List<Actor> actors = new ArrayList<>();
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

        return new ResponseEntity<>(actors, HttpStatus.OK);
    }

}
