import { useEffect, useState } from 'react';
import { fetchProducts } from '../api';
import Footer from '../Footer';
import { checkSelected } from './helpers';
import OrdersLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import './styles.css';
import { OrderLocationData, Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(error => console.log(error))
  }, []);

  const handleSelectProduct = (product: Product) => {
    const isAlreadySelected = checkSelected(selectedProducts, product);

    if (isAlreadySelected) {
      const selected = selectedProducts.filter(item => item.id !== product.id);
      setSelectedProducts(selected);
    } else {
      setSelectedProducts(previous => [...previous, product]);
    }
  }

  console.log(products);

  return (
    <div className="order-container">
      <>
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <OrdersLocation 
         onChangeLocation={location => setOrderLocation(location)} />
        <OrderSummary />
        <Footer />
      </>
    </div>
  )
}

export default Orders;