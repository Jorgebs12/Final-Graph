import mongoose from "mongoose"
import { Contacto } from "../types.ts"

const Schema= mongoose.schema;

const ContactoSchema = new mongoose.Schema({

    nombre:{ type: String, requiered: true},
    apellido:{ type: String, requiered: true},
    numTelefono:{ type: String, requiered: true, unique: true},
});


export type ContactoModelType = Document & Omit<Contacto, "id">;
export const ContactoModel = mongoose.model<ContactoModelType>("Contacto", ContactoSchema);