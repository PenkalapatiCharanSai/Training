package com.ecart.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecart.entity.Laptops;
import com.ecart.repo.ECARTRepo;


@Service
public class ECARTService {
	
	@Autowired
	private ECARTRepo repo;
	
	public List<Laptops> getAllLaptops(){
		return repo.findAll();
	}
}
