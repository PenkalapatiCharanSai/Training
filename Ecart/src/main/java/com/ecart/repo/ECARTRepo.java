package com.ecart.repo;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.ecart.entity.Laptops;

@Repository
public interface ECARTRepo extends JpaRepository<Laptops, Integer> {
}