
import React from "react";

const BannerDescription = ({ isGrayMode = false }) => {
  return (
    <div
      className={`mt-4 p-4 ${isGrayMode
        ? "bg-gray-400 text-gray-700"
        : "bg-gradient-to-r from-yellow-400 via-red-400 to-red-600 text-white"
        } rounded-xl shadow-lg text-center`}
    >
      <h3
        className={`text-2xl font-extrabold ${isGrayMode ? "" : "animate-pulse"
          }`}
      >
        Baixe vídeos ou áudios de até{" "}
        <span className={isGrayMode ? "text-gray-900" : "text-black"}>1GB</span>{" "}
        por apenas{" "}
        <span
          className={isGrayMode ? "text-gray-700" : "text-yellow-300"}
        >
          97 centavos!
        </span>
      </h3>
      <br />
      <p className={`text-lg mt-2 ${isGrayMode ? "text-gray-600" : "text-white"}`}>
        A melhor experiência de download com rapidez e praticidade!
      </p>
    </div>
  );
};

export default BannerDescription;
