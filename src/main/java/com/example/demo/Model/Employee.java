package com.example.demo.Model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Employee {

 private long id;
 private String firstName;
 private String lastName;
 private String emailId;
 
//constru 
public Employee() {
	super();
}

public Employee(String firstName, String lastName, String emailId) {
	super();
	this.firstName = firstName;
	this.lastName = lastName;
	this.emailId = emailId;
}
@Id
@GeneratedValue(strategy = GenerationType.AUTO)
public long getId() {
	return id;
}

public void setId(long id) {
	this.id = id;
}

@Column(name="first_name",nullable=false)
public String getFirstName() {
	return firstName;
}

public void setFirstName(String firstName) {
	this.firstName = firstName;
}
@Column(name="last_name",nullable=false)
public String getLastName() {
	return lastName;
}

public void setLastName(String lastName) {
	this.lastName = lastName;
}
@Column(name="email_address",nullable=false)
public String getEmail() {
	return emailId;
}

public void setEmail(String email) {
	this.emailId = email;
}

@Override
public String toString() {
	return "Employee [id=" + id + ", firstName=" + firstName + ", lastName=" + lastName + ", email=" + emailId + "]";
}
 
 
}
