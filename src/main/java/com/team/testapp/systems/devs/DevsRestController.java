// package com.team.testapp.systems.devs;
//
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RestController;
// import org.springframework.http.ResponseEntity;
// import java.util.*;
//
// @RestController
// public class DevsRestController {
//
//     @GetMapping("/api/actors")
//     public ResponseEntity<List<Actor>> apiactors() {
//         System.out.println("inside actors");
//         ResponseEntity<List<Actor>> e= ResponseEntity
//             .ok()
//             .body(actors());
//             System.out.println("e:" +e);
//         return e;
//     }
//
//     private List<Actor> actors() {
//         List<Actor> actors = new ArrayList<>();
//         Actor a0 = new Actor();
//         a0.setName("Kayla Rogers");
//         a0.setId("0006");
//         a0.setGender("Female");
//         actors.add(a0);
//
//         Actor a1 = new Actor();
//         a1.setName("Frank");
//         a1.setId("0007");
//         a1.setGender("Male");
//         actors.add(a1);
//
//         return actors;
//     }
//
// }
