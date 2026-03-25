const testimonials = [
  {
    quote:
      "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    highlight: false,
  },
  {
    quote:
      "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    highlight: true,
  },
  {
    quote:
      "Whitespace is designed as a collaboration tool for businesses that is a full project management solution.",
    name: "Oberon Shaw, MCH",
    title: "Head of Talent Acquisition, North America",
    image: "https://randomuser.me/api/portraits/men/65.jpg",
    highlight: true,
  },
];

const Testimonial = () => (
  <section className="py-20 lg:py-28 bg-[#F7F7F7]">
    <div className="max-w-6xl mx-auto px-4 lg:px-8">

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-14 text-[#1E1E1E]">
        What Our Clients{" "}
        <span className="relative inline-block">
          <span className="relative z-10">Says</span>
          <span className="absolute left-0 bottom-1 w-full h-3 bg-[#FFD54F] rounded-sm"></span>
        </span>
      </h2>

      {/* Cards */}
      <div className="grid md:grid-cols-3 gap-8">

        {testimonials.map((t, i) => (
          <div
            key={i}
            className={`rounded-xl p-8 shadow-md transition-all duration-300 cursor-pointer transform hover:-translate-y-2 hover:scale-[1.02] hover:shadow-xl ${
              t.highlight
                ? "bg-[#4F9CF9] text-white hover:bg-[#3B82F6]"
                : "bg-white text-[#1E1E1E] hover:bg-gray-50"
            }`}
          >

            {/* Quote */}
            <span className="text-5xl leading-none opacity-80 transition-transform duration-300 hover:scale-110">
              “
            </span>

            <p className="text-sm leading-relaxed mt-4 opacity-90">
              {t.quote}
            </p>

            {/* Divider */}
            <div
              className={`mt-6 h-[1px] transition-all duration-300 ${
                t.highlight ? "bg-white/40" : "bg-gray-300"
              }`}
            />

            {/* User */}
            <div className="mt-6 flex items-center gap-3">

              {/* Avatar */}
              <img
                src={t.image}
                alt={t.name}
                className="w-10 h-10 rounded-full object-cover transition-transform duration-300 hover:scale-110"
              />

              {/* Info */}
              <div>
                <p className="text-sm font-bold">{t.name}</p>
                <p className="text-xs opacity-70">{t.title}</p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  </section>
);

export default Testimonial;