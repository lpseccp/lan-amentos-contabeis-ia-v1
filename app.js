async function gerarLancamento() {
  const input = document.getElementById("descricao").value;
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Processando...";

  const resposta = await fetch("https://api-inference.huggingface.co/models/bigscience/bloom", {
    method: "POST",
    headers: {
      "Authorization": "Bearer YOUR_HUGGINGFACE_TOKEN", // Substituir depois
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: `Transforme essa descrição em um lançamento contábil: ${input}` }),
  });

  const data = await resposta.json();
  resultado.textContent = data[0]?.generated_text || "Erro ao gerar lançamento.";
}