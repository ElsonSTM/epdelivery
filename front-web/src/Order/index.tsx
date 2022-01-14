import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import OrdersLocation from './OrderLocation';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders(){
  const [products, setProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  useEffect(() => {
    fetchProducts()
    .then(response => setProducts(response.data))
    .catch(error => console.log(error))
  }, []);

  console.log(products);

  return (
    <div className="order-container">
      <StepsHeader />
      <ProductsList products={products} />
      <OrdersLocation onChangeLocation={location => setOrderLocation(location)} />
    </div>
  )
}

export default Orders;