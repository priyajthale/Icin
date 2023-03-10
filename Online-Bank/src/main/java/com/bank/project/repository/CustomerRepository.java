package com.bank.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.bank.project.model.Customer;

@Repository
public interface CustomerRepository extends JpaRepository<Customer, Long> {

}
