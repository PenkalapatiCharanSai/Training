package com.ecart.service;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecart.entity.Mobiles;
import com.ecart.repo.ECARTMobilesRepo;


@Service
public class ECARTMobilesService {
	
	@Autowired
	private ECARTMobilesRepo repo;
	
	public List<Mobiles> getAllMobiles(){
		return repo.findAll();
	}
}
