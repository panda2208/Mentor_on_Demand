package com.example.demo;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface PaymentRepository extends Repository<Payment, Integer> {

    void delete(Payment payment);

    List<Payment> findAll();

    Payment findOne(int id);

    Payment save(Payment payment);
    
    
    @Query("select payment from Payment payment where payment.userId=?")
    List<Payment> findByUser(int userId);
    
    @Query("select payment from Payment payment where payment.mentorId=?")
	List<Payment> findByMentor(int mentorId);
}
