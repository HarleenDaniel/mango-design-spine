export const Footer = () => {
  return (
    <footer className="mt-20 md:mt-28 border-t">
      <div className="px-6 md:px-12 py-10 grid md:grid-cols-3 gap-6 items-start">
        <div>
          <img src="/images/logo.png" alt="Mango Remodel Company logo" className="h-8 w-auto mb-3" />
          <p className="text-sm text-muted-foreground max-w-sm">License #000000 • Serving California statewide • © {new Date().getFullYear()} Mango Remodel Company</p>
        </div>
        <nav aria-label="Footer" className="text-sm">
          <ul className="grid sm:grid-cols-2 gap-2">
            <li><a className="story-link" href="#projects">Projects</a></li>
            <li><a className="story-link" href="#process">Process</a></li>
            <li><a className="story-link" href="#estimate">Estimator</a></li>
            <li><a className="story-link" href="#contact">Contact</a></li>
          </ul>
        </nav>
        <div className="text-sm text-muted-foreground">
          <p>1234 Market St, San Francisco, CA 94103</p>
          <p><a href="tel:+15555555555" className="story-link">(555) 555-5555</a></p>
          <p><a href="mailto:hello@mangodesignbuild.com" className="story-link">hello@mangodesignbuild.com</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
