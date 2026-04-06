console.log("JS loaded 🚀");

// mostra horário atual
const timeElement = document.getElementById("time");

if (timeElement) {
  const now = new Date();
  timeElement.innerText = "Page loaded at: " + now.toLocaleString();
}

async function loadProducts() {
  console.log("Fetching products...");

  // 🔥 agora usando o Worker (CDN + cache)
  const API_URL = "https://mymessage.mrhoeser.workers.dev/api/products";

  try {
    const response = await fetch(API_URL);

    if (!response.ok) {
      throw new Error("API error: " + response.status);
    }

    const data = await response.json();

    const list = document.getElementById("product-list");

    // limpa lista antes (evita duplicação)
    list.innerHTML = "";

    data.products.forEach(product => {
      const li = document.createElement("li");
      li.textContent = product;
      list.appendChild(li);
    });

  } catch (error) {
    console.error("Error fetching products:", error);

    const list = document.getElementById("product-list");
    list.innerHTML = "<li>Failed to load products</li>";
  }
}

// chamada
loadProducts();