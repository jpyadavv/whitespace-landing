const footerLinks = {
  Product: ["Overview", "Pricing", "Customer stories", "Security", "Studio"],
  Resources: ["Blog", "Guides & tutorials", "Help center", "API & developers", "Community forum"],
  Company: ["About", "Careers", "Media kit", "Contact"],
};

const Footer = () => (
  <footer className="bg-[#0B1D3A] pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 lg:px-8">

      <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-10">

        {/* Brand */}
        <div className="lg:col-span-2 text-center lg:text-left">
          <a
            href="#"
            className="flex items-center justify-center lg:justify-start gap-3 text-white"
          >
            <img
              src="/whitespace.jpg"
              alt="logo"
              className="w-14 sm:w-18 md:w-22 lg:w-26 h-auto object-contain rounded-lg"
            />
            <span className="text-lg font-bold">whitespace</span>
          </a>

          <p className="mt-4 text-white/60 text-sm max-w-xs mx-auto lg:mx-0 leading-relaxed">
            whitespace was created for the new ways we live and work. We make a
            beautifully simple project management tool for teams.
          </p>
        </div>

        {/* Links */}
        {Object.entries(footerLinks).map(([heading, links]) => (
          <div key={heading} className="text-center lg:text-left">
            <p className="text-white font-bold text-sm mb-4">{heading}</p>

            <ul className="space-y-2">
              {links.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-white/60 text-sm hover:text-white transition"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom */}
      <div className="mt-14 pt-6 border-t border-white/10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left">

          <div className="flex flex-wrap justify-center md:justify-start gap-6 text-sm text-white/50">
            <a href="#" className="hover:text-white transition">
              Terms & Conditions
            </a>
            <a href="#" className="hover:text-white transition">
              Privacy Policy
            </a>
          </div>

          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} whitespace LLC.
          </p>

        </div>
      </div>

    </div>
  </footer>
);

export default Footer;