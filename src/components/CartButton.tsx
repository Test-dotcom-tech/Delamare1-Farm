import { ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

const CartButton = () => {
  const { count, openCart } = useCart();
  return (
    <button
      type="button"
      onClick={openCart}
      aria-label={`Open cart (${count} item${count === 1 ? "" : "s"})`}
      className="fixed bottom-6 left-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition hover:scale-110"
    >
      <ShoppingCart className="h-6 w-6" />
      {count > 0 && (
        <span
          key={count}
          className="absolute -right-1 -top-1 flex h-6 min-w-6 items-center justify-center rounded-full bg-cta px-1.5 text-xs font-bold text-cta-foreground shadow-md ring-2 ring-background animate-in zoom-in-50 duration-200"
        >
          {count}
        </span>
      )}
    </button>
  );
};

export default CartButton;
