
package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping({"/api"})
@RequestMapping({"/trainings"})
public class TrainingController {

    @Autowired
    private TrainingService TrainingService;

    
 

    
    @PostMapping
    public Training create(@RequestBody Training training){
        return TrainingService.create(training);
    }

    @GetMapping(path = {"/{id}"})
    public Training findOne(@PathVariable("id") int id){
        return TrainingService.findById(id);
    }
    
    @GetMapping("/findTrainingByMentorId/{mentorId}")
    public List < Training> findTrainingByMentorId(@PathVariable(value = "mentorId") int mentorId) {
        return TrainingService.findTrainingByMentorId(mentorId);
    }
    

    @GetMapping("/findTrainingByUserId/{userId}")
    public List < Training> findTrainingByUserId(@PathVariable(value = "userId") int userId) {
        return TrainingService.findTrainingByUserId(userId);
    }
    
    
    @GetMapping("/findByIdAndMentorId/{mentorId}/{Id}")
    public  Training  findByIdAndMentorId(@PathVariable(value = "mentorId") int mentorId,
            @PathVariable(value = "Id") Integer Id) {
        return TrainingService.findByIdAndMentorId(Id, mentorId);
    }
    
    @GetMapping("/findTrainingByStartDateBetween/{startDate}/{endDate}")
    public List<Training> findTrainingByStartDateBetween(@PathVariable(value="startDate") String startDate, @PathVariable(value="endDate") String endDate) {
    	SimpleDateFormat simpleDateFormat=new SimpleDateFormat("yyyy-MM-dd");
    	Date startDateDate1;
		try {
			startDateDate1 = simpleDateFormat.parse(startDate);
		} catch (ParseException e) {
			startDateDate1=new Date();
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	Date dateStartDate2;
		try {
			dateStartDate2 = simpleDateFormat.parse(endDate);
		} catch (ParseException e) {
			dateStartDate2=new Date();
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	
    	return TrainingService.findTrainingByStartDateBetween(startDateDate1, dateStartDate2);
    }

    
    
    @GetMapping("/findByIdAndUserId/{userId}/{Id}")
    public  Training  findByIdAndUserId(@PathVariable(value = "userId") Integer userId,
            @PathVariable(value = "Id") Integer trainingId) {
        return TrainingService.findByIdAndUserId(trainingId, userId);
    }
   
   

    @PutMapping(path = {"/{id}"})
    public Training update(@PathVariable("id") Integer id, @RequestBody Training training){
        training.setId(id);
        return TrainingService.update(training);
    }

    @DeleteMapping(path ={"/{id}"})
    public Training delete(@PathVariable("id") int id) {
        return TrainingService.delete(id);
    }
    @GetMapping(path="/ChangeCommision/{commission}/{trainingId}")
    public Training ChangeCommission(@PathVariable(value = "commission") Integer commission,
    		@PathVariable(value = "trainingId") Integer trainingId){
	 
	 		Training training=TrainingService.findById(trainingId);
	 		training.setCommissionAmount(commission);
	 		 
	 		return TrainingService.create(training);
    }

    @GetMapping
    public List<Training> findAll(){
        return TrainingService.findAll();
    }
}

