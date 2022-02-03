import { useEffect, useState } from 'react';
import{ toast } from 'react-toastify';


import { fetchProducts } from '../api';
import Footer from '../Footer';
import { checkSelected } from './helpers';
import ProductsList from './ProductsList';
import StepsHeader from './StepsHeader';
import '../Tracker/styles.css';
import { Product } from './types';

function Orders() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  
  

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
  return (
    <div className="order-container">
      <>
        <StepsHeader />
        <ProductsList
          products={products}
          onSelectProduct={handleSelectProduct}
          selectedProducts={selectedProducts}
        />
        <Footer />
      </>
    </div>
  )
}

export default Orders;