import React from "react";

const PromotionBanner = () => {
  return (
    <div className="relative w-full">
      {/* Faixa listrada superior com letreiro animado sobreposto e destacado 24px abaixo */}
      <div className="absolute top-8 left-0 w-full bg-yellow-400 text-black h-16 shadow-xl border-b-4 border-black flex items-center overflow-hidden z-40">
        <div className="marquee-content">
          <h4 className="text-lg font-extrabold uppercase tracking-wide inline-block whitespace-nowrap">
            🎉 Grátis por tempo limitado! 🎉 &nbsp; 🎉 Aproveite antes que acabe! 🎉 &nbsp;
          </h4>
          <h4 className="text-lg font-extrabold uppercase tracking-wide inline-block whitespace-nowrap">
            🎉 Grátis por tempo limitado! 🎉 &nbsp; 🎉 Aproveite antes que acabe! 🎉 &nbsp;
          </h4>
        </div>
      </div>

      {/* Componente filho (exemplo: BannerDescription) */}
      <div className="relative top-20 w-full bg-gradient-to-r from-yellow-400 to-black h-16 flex items-center justify-center z-10 shadow-xl border-t-4 border-black">
        <h4 className="text-white font-bold uppercase tracking-wide">
          🎬 Baixe sem pagar!
        </h4>
      </div>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-content {
          display: flex;
          white-space: nowrap;
          animation: marquee 10s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default PromotionBanner;
