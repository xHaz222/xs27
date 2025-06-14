// Frases motivacionales
const quotes = [
    "El éxito es la suma de pequeños esfuerzos repetidos día tras día.",
    "No esperes. El tiempo nunca será justo.",
    "El único modo de hacer un gran trabajo es amar lo que haces.",
    "El único lugar donde el éxito viene antes que el trabajo es en el diccionario.",
    "Lo único imposible es aquello que no intentas.",
    "No te rindas, cada fracaso es un paso hacia el éxito."
];

// Función para mostrar la frase del día
function displayDailyQuote() {
    const date = new Date();
    const dayOfYear = Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 86400000);  // Calcula el día del año
    const quoteIndex = dayOfYear % quotes.length; // Asegura que la frase se repita después de un año
    document.getElementById("quoteText").textContent = quotes[quoteIndex];
}

// Mostrar la frase cuando la página cargue
window.onload = function() {
    displayDailyQuote();
};
