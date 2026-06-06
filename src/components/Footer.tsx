import { PHONE_DISPLAY } from "./Navbar";
import { FARM_EMAIL } from "./ContactSection";

const Footer = () => (
  <footer className="border-t border-border bg-card py-10">
    <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
      <p className="font-serif text-lg font-bold text-foreground">🐄 Delamare Farm Naivasha</p>
      <p className="mt-2">📞 Call: {PHONE_DISPLAY} | 📧 Email:{" "}
        <a href={`mailto:${FARM_EMAIL}`} className="underline hover:text-foreground">
          {FARM_EMAIL}
        </a>
      </p>
      <p className="mt-1">📍 Visit: Delamare Farm, Naivasha (off Nairobi-Nakuru Highway)</p>
      <p className="mt-1">⏰ Farm Visit Hours: Mon–Sat 8am–5pm</p>
      <p className="mt-4 text-xs">© {new Date().getFullYear()} Delamare Farm Animal Shop. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
