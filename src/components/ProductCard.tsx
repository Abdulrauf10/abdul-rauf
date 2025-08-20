"use client"

import { Product } from "@/types"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useCart } from "@/contexts/CartContext"
import { useToast } from "@/hooks/use-toast"
import { formatCurrency } from "@/utils/currency"
import Image from "next/image"

interface ProductCardProps {
  product: Product
}

export const ProductCard = ({ product }: ProductCardProps) => {
  const { addItem } = useCart()
  const { toast } = useToast()

  const handleAddToCart = () => {
    addItem(product)
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`
    })
  }

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-hover hover:-translate-y-1">
      <div className="aspect-square overflow-hidden">
        <Image
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          width={500}
          height={500}
        />
      </div>
      <CardContent className="p-4">
        <div className="space-y-2">
          <h3 className="font-semibold text-lg leading-tight">
            {product.name}
          </h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            {product.description}
          </p>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-primary">
              {formatCurrency(product.price)}
            </span>
            <span className="text-xs uppercase tracking-wide text-muted-foreground bg-muted px-2 py-1 rounded">
              {product.category}
            </span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Button
          onClick={handleAddToCart}
          className="w-full bg-gradient-to-r from-primary to-primary-hover hover:opacity-90 transition-opacity"
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  )
}
