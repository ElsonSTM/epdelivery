import { useEffect, useState } from 'react';
import{ toast } from 'react-toastify';


import { fetchProducts, saveOrder } from '../api';
import Footer from '../Footer';
import { checkSelected } from './helpers';
import OrdersLocation from './OrderLocation';
import OrderSummary from './OrderSummary';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import '../Order/styles.css';
import { OrderLocationData, Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
  const totalPrice = selectedProducts.reduce((sum, item) => {
    return sum + item.price
  }, 0)

  useEffect(() => {
    fetchProducts()
      .then(response => setProducts(response.data))
      .catch(() => {toast.warning('Erro ao listar produtos')})
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

  const handleSubmit = () => {
    const productsIds = selectedProducts.map(({ id }) => ({ id }));
    const payload = {
      ...orderLocation!,
      products: productsIds
    }
  
    saveOrder(payload).then((response) => {
      toast.error(`Pedido enviado com sucesso! Nº ${response.data.id}`);
      setSelectedProducts([]);
    })
      .catch(() => {
        toast.warning('Erro ao enviar pedido');
      })
  }

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
        <OrderSummary 
          amount={selectedProducts.length} 
          totalPrice={totalPrice} 
          onSubmit={handleSubmit}
          />
        <Footer />
      </>
    </div>
  )
}

export default Orders;