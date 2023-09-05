import { getPalabras } from "./contador";


describe("Contador de frases", () => {
    it("Deberia poder identificar las palabras en la frase: 'el password' que estan separadas por un espacio", () => {
      expect(getPalabras("el password")).toEqual(["el", "password"]);
    });

    it("Deberia poder identificar las palabras en la frase: 'el password de' que estan separadas por un espacio", () => {
        expect(getPalabras("el password de")).toEqual(["el", "password", "de"]);
      });
  });
  
