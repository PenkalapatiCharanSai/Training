package com.ecart.Controller;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ecart.entity.Mobiles;
import com.ecart.service.ECARTMobilesService;




@RestController
@CrossOrigin
public class ECARTMobilesController {
	
	@Autowired
	private ECARTMobilesService service;
	
	@GetMapping("/Mobiles")
	public List<Mobiles> allMobiles(){
		return service.getAllMobiles();
		
	}
}
