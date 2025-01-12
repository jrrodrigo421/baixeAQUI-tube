import React, { useState } from "react";
import axios from "axios";
import { FaYoutube } from "react-icons/fa";

function Home() {
  const [message, setMessage] = useState(""); // Guarda o link do vídeo
  const [response, setResponse] = useState(""); // Mensagem de resposta do backend
  const [isLoading, setIsLoading] = useState(false); // Indica se o envio está em andamento

  const sendMessage = async () => {
    if (!message.trim()) {
      setResponse("Por favor, insira o link do vídeo.");
      return;
    }

    setIsLoading(true);
    setResponse("");
    try {
      const res = await axios.post(
        "https://4da0-138-94-55-46.ngrok-free.app/api/download",
        { video_url: message }, // Enviando o link como JSON
        { headers: { "Content-Type": "application/json" } } // Definindo o Content-Type correto
      );

      if (res.data.drive_link) {
        setResponse(
          `Download disponível no Google Drive: ` +
          `<a href="${res.data.drive_link}" target="_blank" class="text-blue-500 underline">Clique aqui</a>`
        );
      } else {
        setResponse("Erro ao obter o link de download. Tente novamente.");
      }
    } catch (error) {
      setResponse("Erro ao enviar o link. Verifique a URL e tente novamente.");
    } finally {
      setIsLoading(false);
      setMessage("");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4 pb-48">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transition duration-500 transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(255,0,0,0.5)]">
        <div className="text-center">
          {/* Ícone do YouTube com animação descendo */}
          <FaYoutube className="text-red-600 text-6xl mx-auto mb-4 animate-slide-down" />
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-left">
              Baixe
            </h2>
            <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slide-right">
              AQUI
            </h2>
          </div>
        </div>

        <label className="block mb-2 text-gray-800 font-semibold">
          Insira o link do vídeo:
        </label>
        <textarea
          rows="3"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="https://www.youtube.com/watch?v=EXAMPLE"
          className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
        ></textarea>

        <button
          onClick={sendMessage}
          className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 flex items-center justify-center hover:bg-red-700 hover:shadow-lg animate-slide-up"
          disabled={isLoading}
        >
          {isLoading ? (
            <>
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                ></path>
              </svg>
              Processando...
            </>
          ) : (
            "Download"
          )}
        </button>

        {response && (
          <div
            className={`mt-4 text-center font-medium transition-opacity duration-500 ${response.includes("Download disponível") ? "text-green-600" : "text-red-500"
              }`}
            dangerouslySetInnerHTML={{ __html: response }}
          ></div>
        )}
      </div>

      <style jsx global>{`
        @keyframes slide-down {
          0% {
            transform: translateY(-100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        @keyframes slide-left {
          0% {
            transform: translateX(-100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-right {
          0% {
            transform: translateX(100px);
            opacity: 0;
          }
          100% {
            transform: translateX(0);
            opacity: 1;
          }
        }

        @keyframes slide-up {
          0% {
            transform: translateY(100px);
            opacity: 0;
          }
          100% {
            transform: translateY(0);
            opacity: 1;
          }
        }

        .animate-slide-down {
          animation: slide-down 2s ease-in-out;
        }

        .animate-slide-left {
          animation: slide-left 2s ease-in-out;
        }

        .animate-slide-right {
          animation: slide-right 2s ease-in-out;
        }

        .animate-slide-up {
          animation: slide-up 2s ease-in-out;
        }
      `}</style>
    </div>
  );
}

export default Home;
