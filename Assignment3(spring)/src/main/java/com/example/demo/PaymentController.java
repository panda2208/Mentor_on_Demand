package com.example.demo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
//@RequestMapping({"/api"})
@RequestMapping({"/payments"})
public class PaymentController {

    @Autowired
    private PaymentService PaymentService;

    
    
    @Autowired
   	 	private TrainingService trainingService;

    
    @PostMapping
    public Payment create(@RequestBody Payment payment){
        return PaymentService.create(payment);
    }

    @GetMapping(path = {"/{id}"})
    public Payment findOne(@PathVariable("id") int id){
        return PaymentService.findById(id);
    }

    
    @GetMapping(path = "/{amount}/{remark}/{id}")
    public Payment SetAmount(@PathVariable("amount") float amount,@PathVariable("remark") String remark,@PathVariable("id") Integer id){
    	int amt=(int) amount;
    	Payment payment=PaymentService.findById(id);
    	payment.setmentorAmount(amt);
    	payment.setRemarks(remark);
        return PaymentService.create(payment);
    }
    
    
    @GetMapping(path = {"/withdraw/{id}/{amount}"})
    public Payment withdraw(@PathVariable("id") int id,@PathVariable("amount") int amount){
    	Payment payment=PaymentService.findById(id);
    	payment.setmentorAmount(-amount);
        return PaymentService.create(payment);
    }
    
    
    
    @PutMapping(path = {"/{id}"})
    public Payment update(@PathVariable("id") int id, @RequestBody Payment payment){
        payment.setId(id);
        return PaymentService.update(payment);
    }

    @DeleteMapping(path ={"/{id}"})
    public Payment delete(@PathVariable("id") int id) {
        return PaymentService.delete(id);
    }
    
    @GetMapping(path = {"/findbyuser/{userid}"})
    public List<Payment> findByUser(@PathVariable("userid") int userid){
        return PaymentService.findByUser(userid);
    }
    
    @GetMapping(path = {"/findbymentor/{mentorid}"})
    public List<Payment> findByMentor(@PathVariable("mentorid") int mentorid){
        return PaymentService.findByMentor(mentorid);
    }
    
    
    @GetMapping(path = {"/payfees/{id}/{amount}"})
    public Payment payfees(@PathVariable("id") int id,@PathVariable("amount") int amount){
    	Payment payment=PaymentService.findById(id);
    	Training training=trainingService.findById(payment.getTrainingId());
    	payment.setAmount(amount);
    	training.setAmountRecived(amount);
    	trainingService.create(training);
        return PaymentService.create(payment);
    }

    

    @GetMapping
    public List<Payment> findAll(){
        return PaymentService.findAll();
    }
}

