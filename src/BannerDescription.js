import React from "react";

const BannerDescription = () => {
  return (
    <div className="mt-4 p-4 bg-gradient-to-r from-yellow-400 via-red-400 to-red-600 rounded-xl shadow-lg text-center">
      <h3 className="text-white text-2xl font-extrabold animate-pulse">
        Baixe vídeos ou áudios de até <span className="text-black">1GB</span> por apenas{" "}
        <span className="text-yellow-300">97 centavos!</span>
      </h3>
      <br />
      <p className="text-white text-lg mt-2">
        A melhor experiência de download com rapidez e praticidade!
      </p>
    </div>
  );
};

export default BannerDescription;
