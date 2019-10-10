package com.example.demo;


import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class TrainingServiceImpl implements TrainingService {



   @Autowired
    private TrainingRepository repository;

    @Override
    public Training create(Training Training) {
        return repository.save(Training);
    }

    @Override
    public Training delete(int id) {
        Training Training = findById(id);
        if(Training != null){
            repository.delete(Training);
        }
        return Training;
    }

    @Override
    public List<Training> findAll() {
        return repository.findAll();
    }

    @Override
    public Training findById(Integer id) {
        return repository.findOne(id);
    }

    @Override
    public Training update(Training Training) {
        return repository.save(Training);
    }

	@Override
	public List<Training> findTrainingByMentorId(Integer mentorId) {
		return repository.findTrainingByMentorId(mentorId);
	}

	@Override
	public List<Training> findTrainingByUserId(Integer userId) {
		return repository.findTrainingByUserId(userId);
	}

	@Override
	public Training findByIdAndMentorId(Integer Id, Integer mentorId) {
		return repository.findByIdAndMentorId(Id, mentorId);
	}

	@Override
	public Training findByIdAndUserId(Integer Id, Integer userId) {
		return repository.findByIdAndUserId(Id, userId);
	}

	@Override
	public List<Training> findTrainingByStartDateBetween(Date startDate, Date endDate) {
		// TODO Auto-generated method stub
		return repository. findTrainingByStartDateBetween( startDate, endDate);
	}


	



	
	}

