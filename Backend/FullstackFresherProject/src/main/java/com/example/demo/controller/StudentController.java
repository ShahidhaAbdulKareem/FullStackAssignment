package com.example.demo.controller;

import java.util.Arrays;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Student;
import com.example.demo.repository.StudentRepository;
import com.example.demo.service.StudentServices;

@CrossOrigin(origins = "*")
@RestController
public class StudentController {
	@Autowired
	private StudentRepository studentRepository;
	private StudentServices studentServices;
	@PostMapping("/create")
	public void createStudent(@RequestBody Student student) {
		studentRepository.insert(student);
		
	}
	@PutMapping("/edit/{id}")
    private Student update(@RequestBody Student student, @PathVariable(name = "id") String id) {
        student.setId(id);
        studentServices.saveorUpdate(student);
        return student;
    }
	@ModelAttribute("standardDetails")
	 
	public List<String> standardDetailsList()
	    {
	        List<String> standardList = Arrays.asList(
	            "I", "II", "III","1V","V","V1","V11","V111","1X","X","X1","X12");
	 
	        return standardList;
	    }
	@ModelAttribute("divisionDetails")
	 
	public List<String> divisionDetailsList()
	    {
	        List<String> divisionList = Arrays.asList(
	            "A", "B", "C");
	 
	        return divisionList;
	    }
	
	

	@PostMapping("/delete/{id}")
    private void deleteStudent(@PathVariable("id") String id) {
		studentRepository.deleteById(id);
    }
	
	@GetMapping("/list")
	public List<Student> listStudents(){
		return studentRepository.findAll();
	}

}