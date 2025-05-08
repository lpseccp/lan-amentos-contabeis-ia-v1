async function gerarLancamento() {
  const input = document.getElementById("descricao").value;
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Processando...";

  const resposta = await fetch("async function gerarLancamento() {
  const input = document.getElementById("descricao").value;
  const resultado = document.getElementById("resultado");
  resultado.textContent = "Processando...";

  try {
    const resposta = await fetch("https://api-inference.huggingface.co/models/google/flan-t5-large", {
      method: "POST",
      headers: {
        "Authorization": "Bearer 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",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        inputs: `Transforme isso em um lançamento contábil:\n${input}`,
      }),
    });

    const data = await resposta.json();

    if (Array.isArray(data) && data[0]?.generated_text) {
      resultado.textContent = data[0].generated_text;
    } else if (typeof data === "string") {
      resultado.textContent = data;
    } else {
      resultado.textContent = JSON.stringify(data, null, 2);
    }
  } catch (err) {
    resultado.textContent = `Erro de rede: ${err.message}`;
  }
}", {
    method: "POST",
    headers: {
      "Authorization": "Bearer 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", // Coloque aqui seu token
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ inputs: `Transforme isso em um lançamento contábil: ${input}` }),
  });

  const data = await resposta.json();
  if (data && Array.isArray(data) && data[0]?.generated_text) {
    resultado.textContent = data[0].generated_text;
  } else {
    resultado.textContent = "Erro ao gerar lançamento.";
  }
}
