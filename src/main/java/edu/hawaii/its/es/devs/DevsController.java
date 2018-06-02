package edu.hawaii.its.es.devs;

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

    // @GetMapping("/about")
    // public String about (){
    //     return "about";
    // };

    @GetMapping("/help/contact")
    public String contact (){
        System.out.println ("contact-page");
        return "help/contact";
    }

    @GetMapping(value = {"/{page}"})
    public String page (@PathVariable String page){
        System.out.println ("page: " + page);
        return page;
    }
}