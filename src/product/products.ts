import { Product } from "@/types"
import mechanicalKeyboard from "@/assets/mechanical-keyboard.png"
import hoodie from "@/assets/hoodie.png"
import ledDesk from "@/assets/led-lamp.png"

export const products: Product[] = [
  {
    id: "1",
    name: "Mechanical Keyboard",
    price: 300000,
    image: mechanicalKeyboard,
    description:
      "Durable mechanical keyboard with tactile switches, RGB backlight, and ergonomic design for fast, comfortable typing or gaming.",
    category: "Electronics"
  },
  {
    id: "2",
    name: "Github Hoodie",
    price: 150000,
    image: hoodie,
    description:
      "Soft, comfy GitHub hoodie with the iconic Octocat logo, featuring a relaxed fit, drawstring hood, and front pocket.",
    category: "Fashion"
  },
  {
    id: "3",
    name: "LED Desk Lamp",
    price: 67000,
    image: ledDesk,
    description:
      "Modern LED desk lamp with adjustable brightness, color modes, and a flexible arm—perfect for work, study, or reading.",
    category: "Accessories"
  }
]
