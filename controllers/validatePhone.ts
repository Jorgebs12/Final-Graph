import { Contacto } from "../types.ts";

const apiKey = "CbmwFqPFOskF4+mJRHqIUQ==pv7Sz9vc428fBkK7";
const options = {
    method: "GET",
    headers: {
        "x-api-key": apiKey,
    },
};

export const validatePhone = async(telefono: string): Promise<string> =>{

    const url = "https://api.api-ninjas.com/v1/validatephone?number="+telefono;
    const response = await fetch(url,options);
    if(response.status !== 200){
        throw new Error("No se puede validar el telefono");
    }
    const data = await response.json();
    console.log(data);
    const check = {
        is_valid: data[0].is_valid
    }
    console.log(check);
    return check;
};
