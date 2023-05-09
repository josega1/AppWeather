import { kelvinToCelsius } from "./kelvinToCelsius"

export const kelvinToFareheit = (kelvinDegrades) => {
    const celsius = kelvinToCelsius(kelvinDegrades);
    const farConversion = 9/5;
    const heitConversion = 32;

    return celsius * farConversion + heitConversion;
}