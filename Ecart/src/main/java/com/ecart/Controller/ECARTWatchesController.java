package com.ecart.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;


import com.ecart.entity.Watches;
import com.ecart.service.ECARTWatchesService;
import org.springframework.web.bind.annotation.GetMapping;


@RestController
@CrossOrigin
public class ECARTWatchesController {
	@Autowired
	private ECARTWatchesService service;
	

	@GetMapping("/Watches")
	public List<Watches> allWatches(){
		return service.getAllWatches();
		
	}
	
	
}
