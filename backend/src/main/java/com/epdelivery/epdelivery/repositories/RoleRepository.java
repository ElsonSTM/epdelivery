package com.epdelivery.epdelivery.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.epdelivery.epdelivery.entities.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
	
	
}
