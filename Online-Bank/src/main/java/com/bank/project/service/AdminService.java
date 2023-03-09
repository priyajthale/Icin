package com.bank.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.project.model.Admin;
import com.bank.project.repository.AdminRepository;

@Service
public class AdminService {

	@Autowired
	AdminRepository repo;
	
	public Admin saveAdmid(Admin a) {
		return repo.save(a);
	}
	
	public List<Admin> getAllAdmins(){
		return repo.findAll();	}
}
