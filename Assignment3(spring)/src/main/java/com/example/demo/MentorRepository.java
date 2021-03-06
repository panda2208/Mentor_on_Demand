package com.example.demo;




import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.Repository;
import org.springframework.stereotype.Service;



import java.util.List;

public interface MentorRepository extends Repository<Mentor, Integer> {

    void delete(Mentor mentor);

    List<Mentor> findAll();

    Mentor findOne(int id);

    Mentor save(Mentor mentor);
    
    @Query("select mentor from Mentor mentor where mentor.userName=? and mentor.password=?")
    Mentor findMentor(String userName,String password);
}
