import { PHONE_DISPLAY } from "./Navbar";
import { FARM_EMAIL } from "./ContactSection";

const Footer = () => (
  <footer className="border-t border-border bg-card py-8">
    <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
      <p className="font-serif font-bold text-foreground">🐄 Delamare Farm Naivasha</p>
      <p className="mt-1">Helpline: {PHONE_DISPLAY} | Manager Ibrahim Kassim</p>
      <p className="mt-1">
        Email:{" "}
        <a href={`mailto:${FARM_EMAIL}`} className="underline hover:text-foreground">
          {FARM_EMAIL}
        </a>
      </p>
      <p className="mt-3 text-xs">© {new Date().getFullYear()} Delamare Farm Animal Shop. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
