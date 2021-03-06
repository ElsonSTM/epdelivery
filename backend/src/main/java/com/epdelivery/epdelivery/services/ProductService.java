package com.epdelivery.epdelivery.services;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.epdelivery.epdelivery.dto.ProductDTO;
import com.epdelivery.epdelivery.entities.Product;
import com.epdelivery.epdelivery.repositories.ProductRepository;

@Service
public class ProductService {
	
	@Autowired
	private ProductRepository repository; //injeção de dependencia

	@Transactional(readOnly = true) // garantia de transação operação - somente leitura
	public List<ProductDTO> findAll() {
		List<Product> list = repository.findAllByOrderByNameAsc();
		return list.stream().map(x -> new ProductDTO(x)).collect(Collectors.toList());
	}
}
