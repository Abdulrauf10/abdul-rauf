import type { StaticImageData } from "next/image"

export interface Product {
  id: string
  name: string
  price: number
  image: string | StaticImageData
  description: string
  category: string
}

export interface CartItem {
  product: Product
  quantity: number
}

export interface CartContextType {
  items: CartItem[]
  addItem: (product: Product) => void
  removeItem: (productId: string) => void
  updateQuantity: (productId: string, quantity: number) => void
  clearCart: () => void
  totalItems: number
  totalPrice: number
}
