import { Button } from "@/components/ui/button";

export const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-28 bg-card">
      <div className="px-6 md:px-12 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6">Start Your Project</h2>
        <div className="rounded-xl border p-6 bg-background shadow-elev-1">
          <form className="grid md:grid-cols-2 gap-4">
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Name</span>
              <input aria-label="Name" required className="h-11 rounded-md border bg-background px-3" placeholder="Your name" />
            </label>
            <label className="grid gap-2">
              <span className="text-sm text-muted-foreground">Email</span>
              <input aria-label="Email" type="email" required className="h-11 rounded-md border bg-background px-3" placeholder="you@example.com" />
            </label>
            <label className="grid gap-2 md:col-span-2">
              <span className="text-sm text-muted-foreground">Project details</span>
              <textarea aria-label="Project details" required className="min-h-28 rounded-md border bg-background p-3" placeholder="Tell us about your remodel..." />
            </label>
            <div className="md:col-span-2">
              <Button type="submit">Send Request</Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
