// // import React, { useState } from "react";
// // import axios from "axios";
// // import { FaYoutube } from "react-icons/fa";

// // function Home() {
// //   const [message, setMessage] = useState(""); // Guarda o link do vídeo
// //   const [type, setType] = useState("video"); // Tipo de download ("video" ou "audio")
// //   const [response, setResponse] = useState(""); // Mensagem de resposta do backend
// //   const [isLoading, setIsLoading] = useState(false); // Indica se o envio está em andamento

// //   const sendMessage = async () => {
// //     if (!message.trim()) {
// //       setResponse("Por favor, insira o link do vídeo.");
// //       return;
// //     }

// //     setIsLoading(true);
// //     setResponse("");

// //     try {
// //       // Realiza a requisição para o backend
// //       const res = await axios.post(
// //         // "https://relative-trademarks-ethernet-pacific.trycloudflare.com/api/download",
// //         "https://myers-batman-beam-split.trycloudflare.com/api/download",
// //         { video_url: message, type }, // Enviando o link e o tipo (áudio ou vídeo)
// //         {
// //           headers: { "Content-Type": "application/json" },
// //           responseType: "blob", // Para receber um arquivo binário (blob)
// //         }
// //       );

// //       // Criação do link de download no navegador
// //       const url = window.URL.createObjectURL(new Blob([res.data]));
// //       const link = document.createElement("a");
// //       link.href = url;
// //       link.setAttribute(
// //         "download",
// //         type === "audio" ? "audio.mp3" : "video.mp4" // Nome do arquivo baixado
// //       );
// //       document.body.appendChild(link);
// //       link.click();
// //       link.remove();

// //       setResponse("Download concluído com sucesso!");
// //     } catch (error) {
// //       setResponse("Erro ao baixar o arquivo. Tente novamente.");
// //     } finally {
// //       setIsLoading(false);
// //       setMessage("");
// //     }
// //   };

// //   return (
// //     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4 pb-48">
// //       <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transition duration-500 transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(255,0,0,0.5)]">
// //         <div className="text-center">
// //           <FaYoutube className="text-red-600 text-6xl mx-auto mb-4 animate-slide-down" />
// //           <div className="flex justify-center items-center">
// //             <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-left">
// //               Baixe
// //             </h2>
// //             <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slide-right">
// //               AQUI
// //             </h2>
// //           </div>
// //         </div>

// //         <label className="block mb-2 text-gray-800 font-semibold">
// //           Insira o link do vídeo:
// //         </label>
// //         <textarea
// //           rows="3"
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           placeholder="https://www.youtube.com/watch?v=EXAMPLE"
// //           className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
// //         ></textarea>

// //         <div className="mt-4 flex justify-around">
// //           <button
// //             className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "video" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
// //               }`}
// //             onClick={() => setType("video")}
// //           >
// //             Vídeo
// //           </button>
// //           <button
// //             className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "audio" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
// //               }`}
// //             onClick={() => setType("audio")}
// //           >
// //             Áudio
// //           </button>
// //         </div>

// //         <button
// //           onClick={sendMessage}
// //           className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 flex items-center justify-center hover:bg-red-700 hover:shadow-lg animate-slide-up"
// //           disabled={isLoading}
// //         >
// //           {isLoading ? (
// //             <>
// //               <svg
// //                 className="animate-spin h-5 w-5 mr-2 text-white"
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 fill="none"
// //                 viewBox="0 0 24 24"
// //               >
// //                 <circle
// //                   className="opacity-25"
// //                   cx="12"
// //                   cy="12"
// //                   r="10"
// //                   stroke="currentColor"
// //                   strokeWidth="4"
// //                 ></circle>
// //                 <path
// //                   className="opacity-75"
// //                   fill="currentColor"
// //                   d="M4 12a8 8 0 018-8v8H4z"
// //                 ></path>
// //               </svg>
// //               Processando...
// //             </>
// //           ) : (
// //             "Download"
// //           )}
// //         </button>

// //         {response && (
// //           <div
// //             className={`mt-4 text-center font-medium transition-opacity duration-500 ${response.includes("concluído") ? "text-green-600" : "text-red-500"
// //               }`}
// //           >
// //             {response}
// //           </div>
// //         )}
// //       </div>

// //       <style jsx global>{`
// //         @keyframes slide-down {
// //           0% {
// //             transform: translateY(-100px);
// //             opacity: 0;
// //           }
// //           100% {
// //             transform: translateY(0);
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes slide-left {
// //           0% {
// //             transform: translateX(-100px);
// //             opacity: 0;
// //           }
// //           100% {
// //             transform: translateX(0);
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes slide-right {
// //           0% {
// //             transform: translateX(100px);
// //             opacity: 0;
// //           }
// //           100% {
// //             transform: translateX(0);
// //             opacity: 1;
// //           }
// //         }

// //         @keyframes slide-up {
// //           0% {
// //             transform: translateY(100px);
// //             opacity: 0;
// //           }
// //           100% {
// //             transform: translateY(0);
// //             opacity: 1;
// //           }
// //         }

// //         .animate-slide-down {
// //           animation: slide-down 2s ease-in-out;
// //         }

// //         .animate-slide-left {
// //           animation: slide-left 2s ease-in-out;
// //         }

// //         .animate-slide-right {
// //           animation: slide-right 2s ease-in-out;
// //         }

// //         .animate-slide-up {
// //           animation: slide-up 2s ease-in-out;
// //         }
// //       `}</style>
// //     </div>
// //   );
// // }

// // export default Home;


// import React, { useState } from "react";
// import { FaYoutube } from "react-icons/fa";

// function Home() {
//   const [message, setMessage] = useState(""); // Guarda o link do vídeo
//   const [type, setType] = useState("video"); // Tipo de download ("video" ou "audio")
//   const [response, setResponse] = useState(""); // Mensagem de resposta do backend
//   const [isLoading, setIsLoading] = useState(false); // Indica se o envio está em andamento
//   const [progress, setProgress] = useState(0); // Progresso do download

//   const sendMessage = async () => {
//     if (!message.trim()) {
//       setResponse("Por favor, insira o link do vídeo.");
//       return;
//     }

//     setIsLoading(true);
//     setResponse("");
//     setProgress(0);

//     try {
//       const xhr = new XMLHttpRequest();
//       xhr.open("POST", "https://myers-batman-beam-split.trycloudflare.com/api/download", true);
//       xhr.responseType = "blob";

//       xhr.setRequestHeader("Content-Type", "application/json");

//       xhr.onload = () => {
//         if (xhr.status === 200) {
//           const url = window.URL.createObjectURL(xhr.response);
//           const link = document.createElement("a");
//           link.href = url;
//           link.setAttribute("download", type === "audio" ? "audio.mp3" : "video.mp4");
//           document.body.appendChild(link);
//           link.click();
//           link.remove();
//           setResponse("Download concluído com sucesso!");
//         } else {
//           setResponse("Erro ao baixar o arquivo. Tente novamente.");
//         }
//         setIsLoading(false);
//       };

//       xhr.onerror = () => {
//         setResponse("Erro ao conectar ao servidor.");
//         setIsLoading(false);
//       };

//       xhr.onprogress = (event) => {
//         if (event.lengthComputable) {
//           const percentCompleted = Math.round((event.loaded / event.total) * 100);
//           setProgress(percentCompleted);
//         }
//       };

//       const data = JSON.stringify({ video_url: message, type });
//       xhr.send(data);
//     } catch (error) {
//       setResponse("Erro ao baixar o arquivo. Tente novamente.");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4 pb-48">
//       <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transition duration-500 transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(255,0,0,0.5)]">
//         <div className="text-center">
//           <FaYoutube className="text-red-600 text-6xl mx-auto mb-4 animate-slide-down" />
//           <div className="flex justify-center items-center">
//             <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-left">Baixe</h2>
//             <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slide-right">AQUI</h2>
//           </div>
//         </div>

//         <label className="block mb-2 text-gray-800 font-semibold">
//           Insira o link do vídeo:
//         </label>
//         <textarea
//           rows="3"
//           value={message}
//           onChange={(e) => setMessage(e.target.value)}
//           placeholder="https://www.youtube.com/watch?v=EXAMPLE"
//           className="w-full p-3 border-2 border-gray-300 rounded-lg focus:border-red-600 focus:ring-2 focus:ring-red-600 focus:outline-none resize-none"
//         ></textarea>

//         <div className="mt-4 flex justify-around">
//           <button
//             className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "video" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
//               }`}
//             onClick={() => setType("video")}
//           >
//             Vídeo
//           </button>
//           <button
//             className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "audio" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
//               }`}
//             onClick={() => setType("audio")}
//           >
//             Áudio
//           </button>
//         </div>

//         <button
//           onClick={sendMessage}
//           className="w-full bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 mt-6 flex items-center justify-center hover:bg-red-700 hover:shadow-lg animate-slide-up"
//           disabled={isLoading}
//         >
//           {isLoading ? (
//             <>
//               <svg
//                 className="animate-spin h-5 w-5 mr-2 text-white"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8H4z"
//                 ></path>
//               </svg>
//               <span>Baixando... {progress}%</span>
//             </>
//           ) : (
//             "Download"
//           )}
//         </button>

//         {response && (
//           <div
//             className={`mt-4 text-center font-medium transition-opacity duration-500 ${response.includes("concluído") ? "text-green-600" : "text-red-500"
//               }`}
//           >
//             {response}
//           </div>
//         )}

//         {isLoading && (
//           <div className="relative mt-4 h-2 w-full bg-gray-200 rounded">
//             <div
//               className="absolute top-0 left-0 h-full bg-red-600 rounded animate-pulse"
//               style={{ width: `${progress}%` }}
//             ></div>
//           </div>
//         )}
//       </div>

//       <style jsx global>{`
//         @keyframes slide-down {
//           0% {
//             transform: translateY(-100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slide-left {
//           0% {
//             transform: translateX(-100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slide-right {
//           0% {
//             transform: translateX(100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateX(0);
//             opacity: 1;
//           }
//         }

//         @keyframes slide-up {
//           0% {
//             transform: translateY(100px);
//             opacity: 0;
//           }
//           100% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//         }

//         .animate-slide-down {
//           animation: slide-down 2s ease-in-out;
//         }

//         .animate-slide-left {
//           animation: slide-left 2s ease-in-out;
//         }

//         .animate-slide-right {
//           animation: slide-right 2s ease-in-out;
//         }

//         .animate-slide-up {
//           animation: slide-up 2s ease-in-out;
//         }
//       `}</style>
//     </div>
//   );
// }

// export default Home;




import React, { useState } from "react";
import { FaYoutube } from "react-icons/fa";

function Home() {
  const [message, setMessage] = useState(""); // Guarda o link do vídeo
  const [type, setType] = useState("video"); // Tipo de download ("video" ou "audio")
  const [response, setResponse] = useState(""); // Mensagem de resposta do backend
  const [isLoading, setIsLoading] = useState(false); // Indica se o envio está em andamento
  const [progress, setProgress] = useState(0); // Progresso do download

  const sendMessage = async () => {
    if (!message.trim()) {
      setResponse("Por favor, insira o link do vídeo.");
      return;
    }

    setIsLoading(true);
    setResponse("");
    setProgress(0);

    try {
      const xhr = new XMLHttpRequest();
      xhr.open("POST", "https://myers-batman-beam-split.trycloudflare.com/api/download", true);
      xhr.responseType = "blob";

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = () => {
        if (xhr.status === 200) {
          const url = window.URL.createObjectURL(xhr.response);
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", type === "audio" ? "audio.mp3" : "video.mp4");
          document.body.appendChild(link);
          link.click();
          link.remove();
          setResponse("Download concluído com sucesso!");
        } else {
          const reader = new FileReader();
          reader.onload = () => {
            const errorData = JSON.parse(reader.result);
            if (errorData.detail && errorData.detail.includes("excede o limite")) {
              setResponse("O arquivo excede o limite de 1 GB. Tente um arquivo menor.");
            } else {
              setResponse("Erro ao baixar o arquivo. Tente novamente.");
            }
          };
          reader.readAsText(xhr.response);
        }
        setIsLoading(false);
      };

      xhr.onerror = () => {
        setResponse("Erro ao conectar ao servidor.");
        setIsLoading(false);
      };

      xhr.onprogress = (event) => {
        if (event.lengthComputable) {
          const percentCompleted = Math.round((event.loaded / event.total) * 100);
          setProgress(percentCompleted);
        }
      };

      const data = JSON.stringify({ video_url: message, type });
      xhr.send(data);
    } catch (error) {
      if (error.response && error.response.data && error.response.data.detail) {
        setResponse(error.response.data.detail);
      } else {
        setResponse("Erro ao baixar o arquivo. Tente novamente.");
      }
      setIsLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 p-4 pb-48">
      <div className="bg-white shadow-2xl rounded-xl p-8 w-full max-w-md transition duration-500 transform hover:scale-105 hover:shadow-[0px_0px_15px_5px_rgba(255,0,0,0.5)]">
        <div className="text-center">
          <FaYoutube className="text-red-600 text-6xl mx-auto mb-4 animate-slide-down" />
          <div className="flex justify-center items-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 animate-slide-left">Baixe</h2>
            <h2 className="text-4xl font-bold text-red-600 mb-6 animate-slide-right">AQUI</h2>
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

        <div className="mt-4 flex justify-around">
          <button
            className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "video" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
              }`}
            onClick={() => setType("video")}
          >
            Vídeo
          </button>
          <button
            className={`px-4 py-2 rounded-lg font-bold transition-all ${type === "audio" ? "bg-red-600 text-white" : "bg-gray-300 text-gray-800"
              }`}
            onClick={() => setType("audio")}
          >
            Áudio
          </button>
        </div>

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
              <span>Baixando... {progress}%</span>
            </>
          ) : (
            "Download"
          )}
        </button>

        {response && (
          <div
            className={`mt-4 text-center font-medium transition-opacity duration-500 ${response.includes("concluído") || response.includes("1 GB") ? "text-green-600" : "text-red-500"
              }`}
          >
            {response}
          </div>
        )}

        {isLoading && (
          <div className="relative mt-4 h-2 w-full bg-gray-200 rounded">
            <div
              className="absolute top-0 left-0 h-full bg-red-600 rounded animate-pulse"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
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
