// Ejercicio 1: evitar el comportamiento por defecto al hacer clic
document.addEventListener("click", (event) => {
  event.preventDefault();
});

// Ejercicio 2: modificar el elemento al hacer clic
document.addEventListener("click", (event) => {
  const element = event.target.closest("img, p, article, section");

  if (element === null) {
    return null;
  }

  if (element.tagName === "IMG") {
    element.src = getRandom(gifs);
  } else if (element.tagName === "P") {
    element.style.color = getRandom(colors.slice(3));
    element.style.backgroundColor = getRandom(colors.slice(0, 3));
  } else {
    element.style.backgroundColor = getRandom(colors.slice(3));
  }
});

// Ejercicio 3: cambiar al entrar el ratón y restaurar al salir
const elements = document.querySelectorAll("img, p, article, section");

elements.forEach((element) => {
  const originalSrc = element.getAttribute("src");
  const originalColor = element.style.color;
  const originalBackgroundColor = element.style.backgroundColor;

  element.addEventListener("mouseenter", () => {
    if (element.tagName === "IMG") {
      element.src = "assets/abracadabra.gif";
    } else if (element.tagName === "P") {
      element.style.color = getRandom(colors.slice(3));
      element.style.backgroundColor = getRandom(colors.slice(0, 3));
    } else {
      element.style.backgroundColor = getRandom(colors.slice(3));
    }
  });

  element.addEventListener("mouseleave", () => {
    if (element.tagName === "IMG") {
      element.setAttribute("src", originalSrc);
    } else {
      element.style.color = originalColor;
      element.style.backgroundColor = originalBackgroundColor;
    }
  });
});

// Ejercicio 4: devolver un elemento aleatorio de un array
const getRandom = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};
