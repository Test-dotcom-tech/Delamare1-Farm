import { Minus, Plus, Trash2, MessageCircle, ShoppingBag } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetFooter } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";
import { whatsappLink } from "./Navbar";
import { formatKES } from "@/data/products";
import { toast } from "sonner";

const CartDrawer = () => {
  const { items, isOpen, closeCart, removeItem, updateQty, total, count, clear } = useCart();

  const buildWhatsAppMessage = () => {
    const lines = [
      "Hello Delamare Farm! I'd like to place an order:",
      "",
      ...items.map(
        (it) =>
          `• ${it.quantity}× ${it.name} @ ${formatKES(it.price)} = ${formatKES(it.price * it.quantity)}`
      ),
      "",
      `Total: ${formatKES(total)}`,
      "",
      "Please confirm availability and delivery to my location.",
    ];
    return lines.join("\n");
  };

  const handleCheckout = () => {
    if (items.length === 0) return;
    const url = whatsappLink(buildWhatsAppMessage());
    window.open(url, "_blank", "noopener,noreferrer");
    toast.success("Order summary sent to WhatsApp", {
      description: "Our team will confirm shortly.",
    });
  };

  return (
    <Sheet open={isOpen} onOpenChange={(o) => (o ? null : closeCart())}>
      <SheetContent className="flex w-full flex-col bg-card p-0 sm:max-w-md">
        <SheetHeader className="border-b border-border px-6 py-4">
          <SheetTitle className="font-serif text-xl text-foreground">
            Your Cart {count > 0 && <span className="text-muted-foreground">({count})</span>}
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center">
              <ShoppingBag className="mb-3 h-12 w-12 text-muted-foreground" />
              <p className="font-serif text-lg font-bold text-foreground">Your cart is empty</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Add livestock or farm supplies to get started.
              </p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li
                  key={it.id}
                  className="flex gap-3 rounded-lg border border-border bg-background p-3 animate-in fade-in slide-in-from-right-2 duration-200"
                >
                  <img
                    src={it.image}
                    alt={it.name}
                    loading="lazy"
                    className="h-16 w-16 shrink-0 rounded-md object-cover"
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="text-sm font-semibold leading-tight text-foreground">{it.name}</p>
                    <p className="mt-0.5 text-sm font-bold text-primary">{formatKES(it.price)}</p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-1 rounded-md border border-border">
                        <button
                          type="button"
                          aria-label="Decrease quantity"
                          onClick={() => updateQty(it.id, it.quantity - 1)}
                          className="flex h-7 w-7 items-center justify-center text-foreground hover:bg-muted"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-semibold">{it.quantity}</span>
                        <button
                          type="button"
                          aria-label="Increase quantity"
                          onClick={() => updateQty(it.id, it.quantity + 1)}
                          className="flex h-7 w-7 items-center justify-center text-foreground hover:bg-muted"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                      <button
                        type="button"
                        aria-label={`Remove ${it.name}`}
                        onClick={() => removeItem(it.id)}
                        className="text-muted-foreground transition hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <SheetFooter className="flex-col gap-3 border-t border-border bg-muted/40 px-6 py-4 sm:flex-col sm:space-x-0">
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-muted-foreground">Total</span>
              <span className="font-serif text-2xl font-bold text-primary">{formatKES(total)}</span>
            </div>
            <button
              type="button"
              onClick={handleCheckout}
              className="flex w-full items-center justify-center gap-2 rounded-lg bg-cta px-4 py-3 font-bold text-cta-foreground transition hover:brightness-110"
            >
              <MessageCircle className="h-5 w-5" />
              Checkout via WhatsApp
            </button>
            <button
              type="button"
              onClick={clear}
              className="text-xs font-medium text-muted-foreground underline-offset-4 hover:underline"
            >
              Clear cart
            </button>
          </SheetFooter>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
