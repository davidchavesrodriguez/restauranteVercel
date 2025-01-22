let contentFrame = document.getElementById("contentFrame");
let logo = document.getElementById("logo");
let linkCarta = document.getElementById("linkCarta");
let linkConocenos = document.getElementById("linkConocenos");
let linkContacto = document.getElementById("linkContacto");

// Cargar diferentes páginas en el iframe según el enlace que se haga clic
logo.addEventListener("click", () => {
  contentFrame.src = "principal.html";
});

linkCarta.addEventListener("click", () => {
  contentFrame.src = "carta.html";
});

linkConocenos.addEventListener("click", () => {
  contentFrame.src = "conocenos.html";
});

linkContacto.addEventListener("click", () => {
  contentFrame.src = "contacto.html";
});

// Mostrar el Aviso Legal
document.getElementById("linkLegal").onclick = function (event) {
  event.preventDefault();
  Swal.fire({
    title: "Aviso Legal",
    text: "Este sitio web es propiedad de Celtic Heritage. Todos los derechos reservados. El uso de este sitio implica la aceptación de nuestros términos y condiciones. Si tienes dudas, puedes contactar con nosotros a través de la sección de contacto.",
    icon: "warning",
    confirmButtonText: "Ok",
    background: "#235bb5",
    color: "white",
    customClass: {
      popup: "sweetalert-border",
    },
  });
};

// Mostrar la Política de Privacidad
document.getElementById("linkPolitica").onclick = function (event) {
  event.preventDefault();
  Swal.fire({
    title: "Política de Privacidad",
    text: "En Celtic Heritage, valoramos tu privacidad. Recopilamos datos personales para mejorar tu experiencia en nuestro sitio. Utilizamos cookies para analizar el tráfico y personalizar el contenido. Puedes gestionar tus preferencias en cualquier momento.",
    icon: "info",
    confirmButtonText: "Ok",
    background: "#235bb5",
    color: "white",
    customClass: {
      popup: "sweetalert-border",
    },
  });
};

// Mostrar el formulario del Área Interna
document.getElementById("linkArea").onclick = function (event) {
  event.preventDefault();

  const contentHtml = `
    <form id="loginForm">
      <div>
        <label for="username">Usuario:</label><br>
        <input type="text" id="username" required style="margin-bottom: 10px;"/><br>
      </div>
      <div>
        <label for="password">Contraseña:</label><br>
        <input type="password" id="password" required style="margin-bottom: 10px;"/><br>
      </div>
    </form>
  `;

  Swal.fire({
    title: "Área Interna",
    html: contentHtml,
    showCancelButton: true,
    confirmButtonText: "Entrar",
    cancelButtonText: "Cerrar",
    background: "#235bb5",
    color: "white",
    customClass: {
      popup: "sweetalert-border",
    },
    preConfirm: () => {
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (!username || !password) {
        Swal.showValidationMessage("Por favor ingresa tu usuario y contraseña");
        return false;
      }

      Swal.showValidationMessage(
        "Acceso denegado. Usuario o contraseña incorrectos."
      );
      return false;
    },
  });
};
