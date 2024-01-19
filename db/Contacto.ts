import mongoose from "mongoose"
import { Contacto } from "../types.ts"

const Schema= mongoose.schema;

const ContactoSchema = new mongoose.Schema({

    nombre:{ type: String, requiered: true},
    apellido:{ type: String, requiered: true},
    numTelefono:{ type: String, requiered: true},
});

/*
ContactoSchema.path("numTelefono").validate(async function (numTelefono:string) {
    
    console.log("Comprobando telefono");
    try{
        if(numTelefono){
            return false;
        }
    }catch(e){
        throw new GraphQLError("No se puede añadir un contacto con el mismo numero de telefono");
    }    
});
*/
export type ContactoModelType = Document & Omit<Contacto, "id">;
export const ContactoModel = mongoose.model<ContactoModelType>("Contacto", ContactoSchema);