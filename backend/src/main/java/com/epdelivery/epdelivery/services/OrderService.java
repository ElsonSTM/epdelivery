package com.epdelivery.epdelivery.services;

import java.time.Instant;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.epdelivery.epdelivery.dto.OrderDTO;
import com.epdelivery.epdelivery.dto.ProductDTO;
import com.epdelivery.epdelivery.entities.Order;
import com.epdelivery.epdelivery.entities.OrderStatus;
import com.epdelivery.epdelivery.entities.Product;
import com.epdelivery.epdelivery.repositories.OrderRepository;
import com.epdelivery.epdelivery.repositories.ProductRepository;

@Service
public class OrderService {
	
	@Autowired
	private OrderRepository repository; //injeção de dependencia
	
	@Autowired
	private ProductRepository productRepository;

	@Transactional(readOnly = true) // garantia de transação operação - somente leitura
	public List<OrderDTO> findAll() {
		List<Order> list = repository.findOrdersWithProducts();
		return list.stream().map(x -> new OrderDTO(x)).collect(Collectors.toList());
	}
	
	@Transactional
	public OrderDTO insert(OrderDTO dto) {
		Order order = new Order(null, dto.getAddress(), dto.getLatitude(), dto.getLongitude(),
				Instant.now(), OrderStatus.EMPREPARACAO);
		for(ProductDTO p : dto.getProducts()) {                      //Criando o pedido com os itens
			Product product = productRepository.getOne(p.getId());
			order.getProducts().add(product);
		}
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	@Transactional
	public OrderDTO setSaiuParaEntrega(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.SAIUPARAENTREGA);
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
	
	@Transactional
	public OrderDTO setEntregue(Long id) {
		Order order = repository.getOne(id);
		order.setStatus(OrderStatus.ENTREGUE);
		order = repository.save(order);
		return new OrderDTO(order);
	}
	
}
