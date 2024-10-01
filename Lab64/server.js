const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});


app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

app.post("/upload", (req, res) => {
  let fileData = "";

  
  req.on("data", (chunk) => {
    fileData += chunk;
  });

  req.on("end", () => {
    res.status(200).json({ message: "Upload simulado com sucesso!" });
  });
});

app.use((req, res) => {
  res.status(404).sendFile(path.join(__dirname, "public", "404.html"));
});


app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
