package com.epdelivery.epdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epdelivery.epdelivery.entities.Product;

public interface OrderRepository extends JpaRepository<Product, Long> {
	
}
