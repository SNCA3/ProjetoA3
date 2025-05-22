import { useState } from "react";
import Banner from "../../Components/Banner/Banner";
import MultiSelect from "../../Components/CheckBox/CheckBox";
import axios from "axios"; 
const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [resposta, setResposta] = useState("");

  const perguntarAoGemini = async () => {
    try {
      const response = await axios.post("http://localhost:3000/pergunte-ao-gemini", {
        prompt: prompt,
      });
      setResposta(response.data.resposta); 
    } catch (error) {
      setResposta("Erro ao se comunicar com o Gemini");
      console.error(error);
    }
  };

  return (
    <div>
      <MultiSelect />
      <Banner />

      {}
      <div style={{
        backgroundColor: "#121212",
        color: "#ffffff",
        padding: "20px",
        borderRadius: "12px",
        margin: "20px",
        maxWidth: "600px"
      }}>
        <h2 style={{ marginBottom: "15px" }}>Pergunte ao Gemini</h2>
        <input
          type="text"
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder="Digite sua pergunta..."
          style={{
            padding: "10px",
            width: "300px",
            marginRight: "10px",
            backgroundColor: "#1e1e1e",
            border: "1px solid #444",
            borderRadius: "5px",
            color: "#fff"
          }}
        />
        <button
          onClick={perguntarAoGemini}
          style={{
            padding: "10px",
            backgroundColor: "#2196f3",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer"
          }}
        >
          Enviar
        </button>
        <div style={{ marginTop: "20px" }}>
          <strong>Resposta:</strong>
          <p>{resposta}</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
