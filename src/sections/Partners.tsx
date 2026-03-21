

const Partners = () => {
  const partners = [
     {
      name: "DEVFOLIO LOGO",
      logo: "/Devfolio.png",
      link: "https://devfolio.co/",
    },
  ];

  return (
    <section id="partners" className="py-24 relative overflow-hidden bg-[#0a0a1a]">
      {/* Decorative elements */}
      <div className="absolute top-8 left-8">
        <div className="w-3 h-3 bg-[#a855f7] rotate-45" />
      </div>
      <div className="absolute top-8 right-8">
        <div className="w-4 h-4 border-2 border-[#00d4d4] rounded-full" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Title */}
        <h2 className="text-5xl md:text-6xl font-black text-[#00d4d4] text-center mb-16 tracking-tight">
          PARTNERS
        </h2>

        {/* Partner Grid */}
        <div className="flex flex-wrap justify-center gap-6">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="partner-card w-40 h-28 bg-[#0f0f1a] rounded-xl border border-[#1a1a2e] flex items-center justify-center cursor-pointer hover:border-[#00d4d4] transition-colors"
            >
              {partner.logo ? (
                <img 
                  src={partner.logo} 
                  alt={partner.name}
                  className="max-w-[90%] max-h-[90%] object-contain"
                />
              ) : (
                <span className="text-white font-bold text-lg tracking-wider">
                  {partner.name}
                </span>
              )}
            </a>
          ))}
        </div>

        {/* Bottom decorative line */}
        <div className="mt-16 flex justify-center">
          <div className="w-32 h-1 bg-gradient-to-r from-[#ec4899] to-[#00d4d4] rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Partners;
