import { checkSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
  products: Product[];
  selectedProducts: Product[];
  onSelectProduct: (product: Product) => void;
}

function ProductsList({products, selectedProducts, onSelectProduct}: Props){
  return (
    <div className="orders-list-container">
      <div className="orders-list-items-tracker">
        {products.map(product => (
          <ProductCard 
          key={product.id} 
          product={product}
          onSelectProduct={onSelectProduct}
          isSelected={checkSelected(selectedProducts, product)}
          />
        ))}
      </div>
    </div>
  )
}

export default ProductsList;