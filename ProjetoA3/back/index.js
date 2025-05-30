require('dotenv').config()
const express = require ('express')
const { GoogleGenAI } = require ('@google/genai')
const app = express()
app.use(express.json())

const cors = require('cors');
app.use(cors({
  origin: 'http://localhost:5173'
}));

app.post('/pergunte-ao-gemini', async (req, res) => {
  const { selecionados } = req.body;
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
  const prompt = `De acordo com as emoções e personalidades: ${selecionados}, indique um livro que vou gostar. No texto não quero nenhum tipo de apresentação, quero somente o título do livro, o autor, o genêro, e uma sinopse de no máximo 5 linhas, essa sinopse deve ser contada de uma forma intrigante para que o usuário queira ler, deixando um mistério para a continuação, preciso que o texto venha obrigatoriamente nesse padrão:
  Título: Nome do Livro
  Autor: Fulano
  Gênero: Ficção
  Sinopse: Texto da sinopse...`;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: prompt,
  });
  ultimaResposta = response.text;
  res.json({ "resposta": response.text });
});

app.get('/resposta-gemini', (req, res) => {
  res.json({ "resposta": ultimaResposta });
});

app.listen(3000, () => console.log("Beleza, rodando"))