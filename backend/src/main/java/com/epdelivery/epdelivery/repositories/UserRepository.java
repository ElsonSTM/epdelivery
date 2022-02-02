package com.epdelivery.epdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epdelivery.epdelivery.entities.User;

public interface UserRepository extends JpaRepository<User, Long> {
	
	User findByEmail(String email);
}
