import { Contacto } from "../types.ts"
import { ContactoModel, ContactoModelType } from "../db/Contacto.ts"
import { GraphQLError } from "graphql"
import { validatePhone } from "../controllers/validatePhone.ts"


export const Mutation = {

    addContact: async(parent_:unknown, args:{nombre: string, apellido: string, numTelefono: string}): Promise<ContactoModelType> =>{
        
        const {nombre, apellido, numTelefono} = args;
        const contacto = new ContactoModel({
            nombre,
            apellido,
            numTelefono
        });
            await contacto.save()
            return contacto;
    },

    deleteContact: async(parent_:unknown, args:{id: string}): Promise<ContactoModelType> =>{
        
        try{
            const {id} = args;
            const contacto = await ContactoModel.findByIdAndDelete(id);

            if(!contacto){
                throw new GraphQLError("Contacto no encontrado");
            }
            return contacto;

        }catch(e){
            return false;
        }
    },

    updateContact: async(parent_:unknown, args:{id: string, nombre: string, apellido: string, numTelefono: string }): Promise<ContactoModelType> =>{

        const {id, nombre, apellido, numTelefono} = args;
        const contacto = await ContactoModel.findByIdAndUpdate(id,{
            nombre,
            apellido,
            numTelefono
        });

        if(!contacto){
            throw new GraphQLError("Contacto no encontrado");
        }
        return contacto;
    }
};