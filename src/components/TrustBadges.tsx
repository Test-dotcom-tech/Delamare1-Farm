import { ShieldCheck, MapPin, FileCheck } from "lucide-react";

const TrustBadges = () => (
  <div className="border-b border-border bg-accent/10">
    <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-2 px-4 py-3 text-xs font-semibold text-foreground sm:text-sm">
      <span className="flex items-center gap-1.5"><ShieldCheck className="h-4 w-4 text-accent" /> KEPHIS Registered</span>
      <span className="flex items-center gap-1.5"><FileCheck className="h-4 w-4 text-accent" /> VERIFIED</span>
      <span className="flex items-center gap-1.5"><MapPin className="h-4 w-4 text-accent" /> Physical Farm: Naivasha, off Mai-Mahiu Rd</span>
    </div>
  </div>
);

export default TrustBadges;
