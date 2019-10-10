package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping({"/api"})
@RequestMapping({"/skills"})
public class SkillController {

    @Autowired
    private SkillService SkillService;

    
 

    
    @PostMapping
    public Skill create(@RequestBody Skill skill){
        return SkillService.create(skill);
    }

    @GetMapping(path = {"/{id}"})
    public Skill findOne(@PathVariable("id") int id){
        return SkillService.findById(id);
    }

    @PutMapping(path = {"/{id}"})
    public Skill update(@PathVariable("id") int id, @RequestBody Skill skill){
        skill.setId(id);
        return SkillService.update(skill);
    }

    @DeleteMapping(path ={"/{id}"})
    public Skill delete(@PathVariable("id") int id) {
        return SkillService.delete(id);
    }

    @GetMapping("/findByMentorId/{mentorId}")
    public List < Skill > findTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
        return SkillService.findByMentorId(mentorId);
    }
    @GetMapping
    public List<Skill> findAll(){
        return SkillService.findAll();
    }
}

