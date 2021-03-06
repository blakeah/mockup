package com.team.testapp.systems.devs;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;

@Controller
public class DevsController {

    @RequestMapping(value = {"", "/"},
            method = {RequestMethod.GET, RequestMethod.POST})
    public String home() {
        return "home";
    }
    @GetMapping("/help/contact")
    public String contact (){
        System.out.println ("contact-page");
        return "help/contact";
    }
    @GetMapping("/actors/actors")
    public String actors (){
        System.out.println ("actors");
        return "actors/actors";
    }    
    @GetMapping(value = {"/{page}"})
    public String page (@PathVariable String page){
        System.out.println ("page: " + page);
        return page;
    }
}
