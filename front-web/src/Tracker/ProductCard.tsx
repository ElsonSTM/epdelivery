import { formatPrice } from './helpers';
import { Product } from './types';

type Props = {
  product: Product;
  onSelectProduct: (product: Product) => void;
  isSelected: boolean;
}

function ProductCard({product, onSelectProduct, isSelected}: Props){
  return (
    <div 
      className={`order-card-container ${isSelected ? 'selected' : ''}`} //ternário
      onClick={() => onSelectProduct(product)}  
    >
      <h3 className="order-card-title">
        Pedido: {product.id}
      </h3>
      <h3 className="order-card-price">
        {formatPrice(product.price)}
      </h3>
      <div className="order-card-description">
        <h3>Descrição</h3>
        <p>
        {product.description}  
        </p>
      </div>
    </div>
  )
}

export default ProductCard
;