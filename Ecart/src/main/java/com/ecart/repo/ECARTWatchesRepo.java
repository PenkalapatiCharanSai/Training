package com.ecart.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecart.entity.Watches;

@Repository
public interface ECARTWatchesRepo extends JpaRepository<Watches, Integer> {

}
