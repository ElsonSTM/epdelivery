import { Product } from "./types";

export function checkSelected(selectedProducts: Product[], product: Product){
  return selectedProducts.some(item => item.id === product.id)
}