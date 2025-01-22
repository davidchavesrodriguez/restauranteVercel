// Función para cargar el menú desde el archivo JSON
async function loadMenu() {
  try {
    const response = await fetch("menu.json");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const menuContainer = document.getElementById("menu");

    // Sección de Aperitivos
    const appetizersSection = document.createElement("div");
    appetizersSection.classList.add("menu-section", "menu-appetizers");
    const appetizersHeader = document.createElement("h1");
    appetizersHeader.innerText = "Aperitivos";
    appetizersSection.appendChild(appetizersHeader);

    data.menu.appetizers.forEach((item) => {
      const appetizerDiv = document.createElement("div");
      appetizerDiv.classList.add("product", "appetizer");
      appetizerDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img class="menu-image" src="${item.image}" alt="${item.name}" />
            <p class="menu-description">${item.description}</p>
            <div class="allergens hidden">
              <strong>Alérgenos:</strong> ${item.allergens.join(", ")}
            </div>
            <div class="video hidden">
              <iframe width="300" height="200" src="${
                item.video_url
              }" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="price">$${item.price.toFixed(2)}</p>
          `;
      appetizerDiv.addEventListener("click", () => {
        toggleContent(appetizerDiv, item);
      });
      appetizersSection.appendChild(appetizerDiv);
    });
    menuContainer.appendChild(appetizersSection);

    // Sección de Platos Principales
    const mainSection = document.createElement("div");
    mainSection.classList.add("menu-section", "menu-main");
    const mainHeader = document.createElement("h1");
    mainHeader.innerText = "Platos Principales";
    mainSection.appendChild(mainHeader);

    data.menu.main.forEach((item) => {
      const mainDiv = document.createElement("div");
      mainDiv.classList.add("product", "main");
      mainDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img class="menu-image" src="${item.image}" alt="${item.name}" />
            <p class="menu-description">${item.description}</p>
            <div class="allergens hidden">
              <strong>Alérgenos:</strong> ${item.allergens.join(", ")}
            </div>
            <div class="video hidden">
            <iframe width="300" height="200" 
            src="${item.video_url}" 
            title="YouTube video player" 
            frameborder="0" allow="accelerometer; 
            autoplay; clipboard-write; encrypted-media;
            gyroscope; picture-in-picture; web-share" 
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen>
            </iframe>
            </div>
            <p class="price">$${item.price.toFixed(2)}</p>
          `;
      mainDiv.addEventListener("click", () => {
        toggleContent(mainDiv, item);
      });
      mainSection.appendChild(mainDiv);
    });
    menuContainer.appendChild(mainSection);

    // Sección de Postres
    const dessertsSection = document.createElement("div");
    dessertsSection.classList.add("menu-section", "menu-desserts");
    const dessertsHeader = document.createElement("h1");
    dessertsHeader.innerText = "Postres";
    dessertsSection.appendChild(dessertsHeader);

    data.menu.desserts.forEach((item) => {
      const dessertDiv = document.createElement("div");
      dessertDiv.classList.add("product", "dessert");
      dessertDiv.innerHTML = `
            <h2>${item.name}</h2>
            <img class="menu-image" src="${item.image}" alt="${item.name}" />
            <p class="menu-description">${item.description}</p>
            <div class="allergens hidden">
              <strong>Alérgenos:</strong> ${item.allergens.join(", ")}
            </div>
            <div class="video hidden">
              <iframe width="300" height="200" src="${
                item.video_url
              }" frameborder="0" allowfullscreen></iframe>
            </div>
            <p class="price">$${item.price.toFixed(2)}</p>
          `;
      dessertDiv.addEventListener("click", () => {
        toggleContent(dessertDiv, item);
      });
      dessertsSection.appendChild(dessertDiv);
    });
    menuContainer.appendChild(dessertsSection);
  } catch (error) {
    console.error("Error al cargar el menú:", error);
    const menuContainer = document.getElementById("menu");
    menuContainer.innerHTML = "<p>Hubo un error al cargar el menú.</p>";
  }
}

// Función para alternar entre los contenidos: imagen y descripción por video y alérgenos
function toggleContent(productDiv, item) {
  const image = productDiv.querySelector(".menu-image");
  const description = productDiv.querySelector(".menu-description");
  const allergens = productDiv.querySelector(".allergens");
  const video = productDiv.querySelector(".video");

  if (image.classList.contains("hidden")) {
    // Mostrar la imagen y la descripción
    image.classList.remove("hidden");
    description.classList.remove("hidden");
    allergens.classList.add("hidden");
    video.classList.add("hidden");
  } else {
    // Ocultar la imagen y la descripción, y mostrar alérgenos y video
    image.classList.add("hidden");
    description.classList.add("hidden");
    allergens.classList.remove("hidden");
    video.classList.remove("hidden");
  }
}

loadMenu();

// Función para restablecer los elementos a su estado inicial
function resetHiddenElements() {
  document.querySelectorAll(".menu-image, .menu-description").forEach((el) => {
    el.classList.remove("hidden");
  });
  document.querySelectorAll(".allergens, .video").forEach((el) => {
    el.classList.add("hidden");
  });
}

document.getElementById("print-btn").addEventListener("click", () => {
  resetHiddenElements();
  window.print();
});
