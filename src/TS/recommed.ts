import { Results } from "../types/Types";

function recommedInput(value: Results[]){
    let inputPlace = document.querySelector("#input-user") as HTMLInputElement;
    
    setInterval(() => {
        let random = Math.floor((Math.random() * ((value.length - 1) - 0 + 1)) + 0);
        let arrayValue = value[random] 
        let first: string = arrayValue?.name.first
        let last: string = arrayValue?.name.last
        let title:string = arrayValue?.name.title

        inputPlace?.setAttribute("placeholder", `Reccomend: ${title} ${first} ${last}`)
    }, 1500)
}


export {recommedInput}