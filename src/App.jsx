import React, { useState } from "react";
import ProductCard from "./components/ProductCard";
import OrderSidebar from "./components/OrderSidebar";

const initialProducts = [
  { id: 1, name: "Hamburguesa", price: 5.5, desc: "Hamburguesa" },
  { id: 2, name: "Papas fritas", price: 2.5, desc: "Papas" },
  { id: 3, name: "Cheeseburger", price: 6.0, desc: "Cheeseburger" },
  { id: 4, name: "Refresco", price: 1.8, desc: "Refresco" }
];

export default function App() {
  const [products] = useState(initialProducts);
  const [order, setOrder] = useState({ items: [] });

  const addToOrder = (product) => {
    setOrder((prev) => {
      const existing = prev.items.find((it) => it.id === product.id);
      if (existing) {
        return {
          ...prev,
          items: prev.items.map((it) =>
            it.id === product.id ? { ...it, qty: it.qty + 1 } : it
          )
        };
      }
      return { ...prev, items: [...prev.items, { ...product, qty: 1 }] };
    });
  };

  const changeQty = (productId, delta) => {
    setOrder((prev) => {
      const items = prev.items
        .map((it) =>
          it.id === productId ? { ...it, qty: Math.max(0, it.qty + delta) } : it
        )
        .filter((it) => it.qty > 0);
      return { ...prev, items };
    });
  };

  const total = order.items.reduce((s, it) => s + it.price * it.qty, 0);

  return (
    <div className="page">
      <div className="tablet">
        <header className="tablet-header">
          <div className="brand">
            <div className="logo">🍔</div>
            <div>
              <div className="title">RÁPIDO</div>
              <div className="subtitle">Y SABROSO</div>
            </div>
          </div>
          <div className="menu">MENÚ</div>
        </header>

        <div className="tablet-body">
          <OrderSidebar
            order={order}
            onChangeQty={changeQty}
            total={total}
            onSend={() => alert("Pedido enviado (demo)")}
          />

          <main className="product-area">
            <div className="product-grid">
              {products.map((p) => (
                <ProductCard key={p.id} product={p} onAdd={() => addToOrder(p)} />
              ))}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
