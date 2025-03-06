package com.ecart.service;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ecart.repo.ECARTWatchesRepo;
import com.ecart.entity.Watches;

@Service
public class ECARTWatchesService {
	
	@Autowired
	private ECARTWatchesRepo repo;

	public List<Watches> getAllWatches(){
		return repo.findAll();
	}
}
