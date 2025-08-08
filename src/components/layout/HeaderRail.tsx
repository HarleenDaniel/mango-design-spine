import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import { Drawer, DrawerContent, DrawerHeader, DrawerTitle } from "@/components/ui/drawer";
import { useState } from "react";

const navItems = [
  { href: "#projects", label: "Projects" },
  { href: "#process", label: "Process" },
  { href: "#estimate", label: "Estimate" },
  { href: "#contact", label: "Contact" },
];

export const HeaderRail = () => {
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);

  if (isMobile) {
    return (
      <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="max-w-screen-2xl mx-auto flex items-center justify-between px-4 py-3">
          <a href="#hero" className="flex items-center gap-2">
            <img src="/images/logo.png" alt="Mango Remodel Company logo" className="h-7 w-auto" />
          </a>
          <div className="flex items-center gap-2">
            <Button variant="secondary" asChild>
              <a href="#projects">Portfolio</a>
            </Button>
            <Button onClick={() => setOpen(true)}>Get Quote</Button>
          </div>
        </div>
        <Drawer open={open} onOpenChange={setOpen}>
          <DrawerContent className="animate-slide-in-right">
            <DrawerHeader>
              <DrawerTitle>Book a Free Consultation</DrawerTitle>
            </DrawerHeader>
            <div className="px-6 pb-8 text-sm text-muted-foreground">
              <p className="mb-4">Tell us about your project and we’ll reach out within 24 hours.</p>
              <form className="grid gap-3">
                <input aria-label="Name" placeholder="Your name" className="h-11 rounded-md border bg-background px-3" />
                <input aria-label="Email" placeholder="Email" type="email" className="h-11 rounded-md border bg-background px-3" />
                <input aria-label="Phone" placeholder="Phone" className="h-11 rounded-md border bg-background px-3" />
                <textarea aria-label="Project details" placeholder="Project details" className="min-h-28 rounded-md border bg-background p-3" />
                <Button className="mt-1">Send Request</Button>
              </form>
            </div>
          </DrawerContent>
        </Drawer>
      </header>
    );
  }

  return (
    <header className="fixed right-0 top-0 h-screen w-[140px] z-40 border-l bg-background/85 backdrop-blur supports-[backdrop-filter]:bg-background/65 flex flex-col items-center py-6">
      <a href="#hero" className="mb-8">
        <img src="/images/logo.png" alt="Mango Remodel Company logo" className="h-10 w-auto" />
      </a>
      <nav aria-label="Primary" className="flex-1 flex flex-col items-center gap-8">
        {navItems.map((n) => (
          <a key={n.href} href={n.href} className="writing-vertical story-link text-sm">
            {n.label}
          </a>
        ))}
      </nav>
      <div className="flex flex-col items-center gap-3">
        <Button onClick={() => setOpen(true)} className="shadow-elev-1 hover:shadow-elev-2 transition-shadow">Get Quote</Button>
        <a className="text-sm text-muted-foreground" href="tel:+15555555555">(555) 555-5555</a>
      </div>
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerContent className="animate-slide-in-right">
          <DrawerHeader>
            <DrawerTitle>Book a Free Consultation</DrawerTitle>
          </DrawerHeader>
          <div className="px-6 pb-8 text-sm text-muted-foreground">
            <p className="mb-4">Tell us about your project and we’ll reach out within 24 hours.</p>
            <form className="grid gap-3">
              <input aria-label="Name" placeholder="Your name" className="h-11 rounded-md border bg-background px-3" />
              <input aria-label="Email" placeholder="Email" type="email" className="h-11 rounded-md border bg-background px-3" />
              <input aria-label="Phone" placeholder="Phone" className="h-11 rounded-md border bg-background px-3" />
              <textarea aria-label="Project details" placeholder="Project details" className="min-h-28 rounded-md border bg-background p-3" />
              <Button className="mt-1">Send Request</Button>
            </form>
          </div>
        </DrawerContent>
      </Drawer>
    </header>
  );
};

export default HeaderRail;
