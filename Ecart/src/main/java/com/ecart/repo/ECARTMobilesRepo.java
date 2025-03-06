package com.ecart.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecart.entity.Mobiles;

@Repository
public interface ECARTMobilesRepo extends JpaRepository<Mobiles, Integer>{

}
