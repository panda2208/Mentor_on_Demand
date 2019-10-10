package com.example.demo;


import java.util.Date;
import java.util.List;

public interface TrainingService {


    Training create(Training Training);

    Training delete(int id);

    List<Training> findAll();

    Training findById(Integer id);

    Training update(Training Training);
    
    
    
    List<Training> findTrainingByMentorId(Integer mentorId);
    List<Training> findTrainingByUserId(Integer userId);
    Training findByIdAndMentorId(Integer Id, Integer mentorId);
    Training findByIdAndUserId(Integer Id, Integer userId);

    List<Training> findTrainingByStartDateBetween(Date startDateDate1, Date dateStartDate2);





	


    
}
