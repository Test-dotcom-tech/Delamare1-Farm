const LINKS = [
  { href: "#dairy-cows", label: "🐄 Cows" },
  { href: "#dairy-goats", label: "🐐 Goats" },
  { href: "#dorper-sheep", label: "🐑 Sheep" },
  { href: "#potato-seeds", label: "🌽 Crops" },
  { href: "#mature-birds", label: "🐓 Poultry" },
  { href: "#napier", label: "🌿 Fodder" },
  { href: "#eggs", label: "🥚 Eggs" },
  { href: "#feeds", label: "🛒 Supplies" },
];

const SectionNav = () => (
  <div className="sticky top-[60px] z-40 border-b border-border bg-card/95 shadow-sm backdrop-blur md:top-[68px]">
    <div className="container mx-auto px-2">
      <div className="flex gap-1 overflow-x-auto py-2 scrollbar-thin sm:justify-center sm:flex-wrap sm:overflow-visible">
        {LINKS.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="whitespace-nowrap rounded-full border border-border bg-background px-4 py-2 text-xs font-semibold text-foreground transition hover:bg-primary hover:text-primary-foreground sm:text-sm"
          >
            {l.label}
          </a>
        ))}
      </div>
    </div>
  </div>
);

export default SectionNav;
