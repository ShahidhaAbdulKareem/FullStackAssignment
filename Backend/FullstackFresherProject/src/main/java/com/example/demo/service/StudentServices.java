package com.example.demo.service;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;

public class StudentServices {
	@Autowired
    private StudentRepository repo;
 
    public void saveorUpdate(Student students) {
 
        repo.save(students);
    }

    

	
}
