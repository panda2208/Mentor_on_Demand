package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@EnableJpaRepositories("com.example.*")
@ComponentScan(basePackages = { "com.example.*" })
@EntityScan("com.example.*")   

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping({"/api"})
@RequestMapping({"/mentors"})
public class MentorController {

    @Autowired
    private MentorService MentorService;

    
 

    
    @PostMapping
    public Mentor create(@RequestBody Mentor mentor){
        return MentorService.create(mentor);
    }

    @GetMapping(path = {"/{id}"})
    public Mentor findOne(@PathVariable("id") int id){
        return MentorService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Mentor update(@PathVariable("id") int id, @RequestBody Mentor mentor){
        mentor.setId(id);
        return MentorService.update(mentor);
    }

    @DeleteMapping(path ={"/{id}"})
    public Mentor delete(@PathVariable("id") int id) {
        return MentorService.delete(id);
    }
    
    @GetMapping(path = {"/{userName}/{password}"})
    public Mentor findUser(@PathVariable("userName") String userName,
    @PathVariable("password") String password){
    	return MentorService.findMentor(userName,password);
    }
    

    @GetMapping
    public List<Mentor> findAll(){
        return MentorService.findAll();
    }
}

