"use client"

import { useState } from "react"
import { Header } from "@/components/Header"
import { ProductCard } from "@/components/ProductCard"
import { CartSidebar } from "@/components/CartSidebar"
import { CheckoutForm } from "@/components/CheckoutForm"
import { products } from "@/product/products"

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false)
  const [showCheckout, setShowCheckout] = useState(false)

  const handleCartClick = () => {
    setIsCartOpen(true)
  }

  const handleCloseCart = () => {
    setIsCartOpen(false)
  }

  const handleCheckout = () => {
    setIsCartOpen(false)
    setShowCheckout(true)
  }

  const handleBackToCart = () => {
    setShowCheckout(false)
    setIsCartOpen(true)
  }

  if (showCheckout) {
    return <CheckoutForm onBackToCart={handleBackToCart} />
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onCartClick={handleCartClick} />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary-hover text-primary-foreground py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Discover Amazing Products</h1>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Shop the latest trends with our curated collection of premium
            products. Quality guaranteed, fast shipping included.
          </p>
          <div className="flex justify-center space-x-4">
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              ✨ Gratis Ongkir
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              🛡️ Secure Checkout
            </span>
            <span className="px-4 py-2 bg-white/20 rounded-full text-sm font-medium">
              🚀 Fast Delivery
            </span>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Featured Products</h2>
            <p className="text-muted-foreground text-lg">
              Carefully selected products for the modern lifestyle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🚚</span>
              </div>
              <h3 className="text-xl font-semibold">Gratis Ongkir</h3>
              <p className="text-muted-foreground">
                Gratis ongkir untuk semua pembelian di atas Rp 800.000.
                Pengiriman cepat dan terpercaya.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">🔒</span>
              </div>
              <h3 className="text-xl font-semibold">Secure Payment</h3>
              <p className="text-muted-foreground">
                Your payment information is processed securely with encryption.
              </p>
            </div>
            <div className="space-y-4">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary-hover rounded-full flex items-center justify-center mx-auto">
                <span className="text-2xl">💎</span>
              </div>
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-muted-foreground">
                We curate only the highest quality products for our customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      <CartSidebar
        isOpen={isCartOpen}
        onClose={handleCloseCart}
        onCheckout={handleCheckout}
      />
    </div>
  )
}

export default Index
