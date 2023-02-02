import axios from 'axios'
async function apiUser() {

    let json = await axios.get("https://randomuser.me/api/?results=50");    
    return new Promise((resolve, reject) => {
        resolve(json);
        reject(new Error("Error al recibir los valores en el API"))
    })
}




export{ apiUser }