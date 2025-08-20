"use client"

import { ShoppingCart, Store } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/CartContext"

interface HeaderProps {
  onCartClick: () => void
}

export const Header = ({ onCartClick }: HeaderProps) => {
  const { totalItems } = useCart()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <Store className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold">Shop</span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Products
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Categories
          </a>
          <a
            href="#"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </a>
        </nav>

        <Button
          variant="outline"
          size="sm"
          onClick={onCartClick}
          className="relative"
        >
          <ShoppingCart className="h-4 w-4" />
          {totalItems > 0 && (
            <Badge
              variant="destructive"
              className="absolute -top-2 -right-2 h-5 w-5 rounded-full p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
        </Button>
      </div>
    </header>
  )
}
