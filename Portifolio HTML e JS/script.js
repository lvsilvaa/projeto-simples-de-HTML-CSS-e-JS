 let invertido = false; // controla o estado
  let textoOriginal = "";

  function inverterTexto() {
    const entrada = document.getElementById("entrada");

    // Se ainda não salvamos o texto original, guardamos
    if (textoOriginal === "") {
      textoOriginal = entrada.value;
    }

    if (!invertido) {
      // Inverte
      const invertida = entrada.value.split("").reverse().join("");
      document.getElementById("saida").textContent = invertida;
      invertido = true;
    } else {
      // Volta ao normal
      document.getElementById("saida").textContent = textoOriginal;
      invertido = false;
    }
  }

    // Função para alternar entre tema claro/escuro
    function alternarTema() {
      document.body.classList.toggle("dark");
    }