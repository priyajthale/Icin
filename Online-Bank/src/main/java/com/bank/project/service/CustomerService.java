package com.bank.project.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.bank.project.model.Customer;
import com.bank.project.repository.CustomerRepository;

@Service
public class CustomerService {

	@Autowired
	CustomerRepository repo;
	
	public Customer saveCustomer(Customer c) {
		return repo.save(c);
	}
	
	public List<Customer> getAllCustomers(){
		return repo.findAll();
	}
	
	public Customer updateCustomer(Customer newData, long id) {
		if(repo.findById(id).isPresent()) {
			Customer oldData=repo.findById(id).get();
			oldData.setcUserName(newData.getcUserName());
			oldData.setcPassword(newData.getcPassword());
			oldData.setEmailId(newData.getEmailId());
			oldData.setBalance(newData.getBalance());
			oldData.setContact(newData.getContact());
			return repo.save(oldData);
		}else
			return null;
	}
	
	public boolean deleteCustomer(long id) {
		if (repo.findById(id).isPresent()) {
			repo.deleteById(id);
			return true;
		}
		return false;
	}
	
	public Customer getCustomerById(long id) {
		if (repo.findById(id).isPresent()) {
			return repo.findById(id).get();
		}
		return null;
	}
}
