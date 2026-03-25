const Extension = () => {
  return (
    <section className="py-20 bg-[#0B3A6E]">
      <div className="max-w-7xl mx-auto px-12 grid lg:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div className="text-white text-center lg:text-left">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
            Use as Extension
          </h2>

          <p className="mt-4 text-white/80 text-sm md:text-base max-w-md mx-auto lg:mx-0">
            Use the web clipper extension, available on Chrome and Firefox, 
            to save web pages or take screenshots as notes.
          </p>

          <button className="mt-6 bg-[#4F9CF9] px-6 py-3 rounded text-sm md:text-base hover:opacity-90 transition">
            Let’s Go →
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center lg:justify-end">
          <img
            src="/coll.png"
            alt="img"
            className="w-full max-w-sm sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Extension;