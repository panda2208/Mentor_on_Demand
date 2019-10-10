package com.example.demo;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface SkillRepository extends Repository<Skill, Integer> {


    void delete(Skill skill);

    List<Skill> findAll();

    Skill findOne(int id);

   Skill save(Skill skill);
   
   @Query("select skill from Skill skill where skill.mentorId=?")
   List<Skill> findByMentorId(int mentorId);
}
