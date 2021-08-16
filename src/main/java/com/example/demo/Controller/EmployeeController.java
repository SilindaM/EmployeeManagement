package com.example.demo.Controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.Model.Employee;
import com.example.demo.Repository.EmployeeRepository;

@RestController
@RequestMapping("/api/")
public class EmployeeController {

	@Autowired
	EmployeeRepository employeeRepository;
	
	//get All employees
	@GetMapping("/")
	public ResponseEntity<List<Employee>> getAllEmployees(){
		try {
			List<Employee> employees= employeeRepository.findAll();
			return new ResponseEntity<>(employees,HttpStatus.OK);
			
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
	
	//get employee by id
	@GetMapping("/{id}")
	public ResponseEntity<Employee> getById(@PathVariable(value="id") Long employeeId){
		try {
			Optional<Employee> employee=employeeRepository.findById(employeeId);
			if(employee.isPresent()) {
				return new ResponseEntity<Employee>(employee.get(),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		} 
		catch (Exception e) {
		return new ResponseEntity<Employee>(HttpStatus.INTERNAL_SERVER_ERROR);	
			// TODO: handle exception
		}
	}
	//post employee
	@PostMapping("/create")
	public ResponseEntity<Employee> createEmployee(@RequestBody Employee employee){
		try {
			Employee createEmployee=employeeRepository.save(employee);
			return new ResponseEntity<Employee>(createEmployee,HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
			// TODO: handle exception
		}
	}
	//Update employee
	@PutMapping("/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable("id") long id,@RequestBody Employee employee){
		Optional<Employee> employe=employeeRepository.findById(id);
		try {
			if(employe.isPresent()) {
				Employee empl=employe.get();
				empl.setFirstName(employee.getFirstName());
				empl.setLastName(employee.getLastName());
				empl.setEmail(employee.getEmail());
				
				return new ResponseEntity<Employee>(employeeRepository.save(empl),HttpStatus.OK);
			}
			else {
				return new ResponseEntity<>(null,HttpStatus.NOT_FOUND);
			}
			
		}
		catch (Exception e) {
			return new ResponseEntity<>(null,HttpStatus.INTERNAL_SERVER_ERROR);
		}
	 }
	//DELETE BY ID
	
	}

