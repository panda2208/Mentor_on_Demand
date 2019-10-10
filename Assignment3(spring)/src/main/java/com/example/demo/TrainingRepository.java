package com.example.demo;


import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

public interface TrainingRepository extends Repository<Training, Integer> {


    void delete(Training Training);

    List<Training> findAll();

    Training findOne(int id);

   Training save(Training Training);
   @Query("select Training from Training Training where Training.mentor.id=?")
   
   List<Training> findTrainingByMentorId(Integer mentorId);
   List<Training> findTrainingByUserId(Integer userId);
   @Query("select Training from Training Training where Training.id=? and Training.mentor.id=?")
   Training findByIdAndMentorId(Integer Id, Integer mentorId);

   Training findByIdAndUserId(Integer Id, Integer userId);

   List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate);
   
   
   
}
