export function capitalize(str: string) {
  // Dividir la cadena en palabras
  const words = str.split(" ");

  // Capitalizar cada palabra
  const capitalizedWords = words.map((word) => {
    // Convertir la primera letra a mayúscula y el resto a minúscula
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
  });

  // Unir las palabras capitalizadas en una sola cadena
  return capitalizedWords.join(" ");
}
