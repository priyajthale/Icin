package com.bank.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.bank.project.model.Admin;
import com.bank.project.service.AdminService;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:4200")
public class AdminController {

	@Autowired
	AdminService service;
	
	@PostMapping("/add")
	public Admin saveAdmin(@RequestBody Admin admin){
		return service.saveAdmid(admin);
		
	}
	
	@GetMapping("/list")
	public List<Admin> getAll(){
		return service.getAllAdmins();
	}
}
