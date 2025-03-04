package com.ecart.Controller;


import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecart.service.ECARTService;
import com.ecart.entity.Laptops;


@RestController
@CrossOrigin
public class ECARTController {
	
	@Autowired
	private ECARTService service;
	
	@GetMapping("/Laptops")
	public List<Laptops> allLaptops(){
		return service.getAllLaptops();
	}
}
