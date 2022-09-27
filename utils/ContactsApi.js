import axios from 'axios';
const api = axios.create({
    baseURL: 'https://api.jsonstorage.net/v1/json/b8b28667-4983-42a1-b60b-4aad38f39f99/56f707f6-4355-40d7-a720-1ff179e0486e',

});
const key = "0fd11bd1-3ecd-42c3-a3f9-a0a2b73f2b11";
const config ={
    params:{apikey: key},
    header:{authorization: key }
}

export const getContacts = async () =>{
 try{
    const contacts = await api.get('/');
    return contacts;
 }
 catch(err){
  return err;
 }
};

export const updateContacts= async (contact)=>{
    try{
        const newContacts = [...getContact().map((cont)=>{
            if(cont.id== contact.id){
                cont=[...contact];
            }
            return cont;
        })];
         await api.put('/',newContacts, config);
         
    }
    catch(err){
     return err;
    }
}

export const deleteContacts = async (id)=>{
    const newContacts = [...getContacts().filter((contact)=>contact.id != id)];
    try{
        await api.put('/',newContacts, config);

    }
    catch(err){
     return err;
    }

}

