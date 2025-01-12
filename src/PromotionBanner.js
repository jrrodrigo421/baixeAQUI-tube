import React from "react";

const PromotionBanner = () => {
  return (
    <div className="relative">
      {/* Faixa listrada superior */}
      <div className="absolute top-0 left-0 w-full bg-yellow-400 text-black h-12 flex items-center justify-center z-20 shadow-xl border-b-4 border-black">
        <h4 className="text-lg font-extrabold uppercase tracking-wide">
          🎉 Grátis por tempo limitado! 🎉
        </h4>
      </div>
      {/* Faixa listrada inferior */}
      <div className="absolute top-12 left-0 w-full bg-gradient-to-r from-yellow-400 to-black h-12 flex items-center justify-center z-20 shadow-xl border-t-4 border-black">
        <h4 className="text-white font-bold uppercase tracking-wide">
          🎬 Baixe sem pagar!
        </h4>
      </div>
    </div>
  );
};

export default PromotionBanner;
