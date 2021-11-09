package com.epdelivery.epdelivery.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.epdelivery.epdelivery.entities.Order;

public interface OrderRepository extends JpaRepository<Order, Long> {
	
	@Query("SELECT DISTINCT obj FROM Order obj JOIN FETCH obj.products " //obj= apelido do objeto que for buscar
			+ " WHERE obj.status = 0 ORDER BY obj.moment ASC")           // JOIN FETCH= junção dos pedidos com os produtos
	List<Order> findOrdersWithProducts();
}
