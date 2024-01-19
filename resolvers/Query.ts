import { Contacto } from "../types.ts"
import { ContactoModel, ContactoModelType } from "../db/Contacto.ts"
import { validatePhone } from "../controllers/validatePhone.ts";
import { GraphQLError } from "graphql"

export const Query = {
    
    getContact: async(parent_:unknown, args: {id:string}): Promise<ContactoModelType> =>{
        //tiene que devolver pais y hora
        try{

            const per = await ContactoModel.findById(args.id);
            if(!per){
                throw new GraphQLError("Contacto no encontrado")
            }
            //const da = await validatePhone()
            return per;

        }catch(e){
            throw new GraphQLError (e.message)            
        }
    },


    getContacts: async(parent_:unknown, args: any): Promise<ContactoModelType[]> =>{
                
        //tiene que devolver pais y hora
        try{
            const p = await ContactoModel.find();
            if(!p){
                throw new GraphQLError("No se ha encontrado ningun contacto")
            }
            return p;

        }catch(e){
            throw new GraphQLError (e.message)            
        }
    },
};