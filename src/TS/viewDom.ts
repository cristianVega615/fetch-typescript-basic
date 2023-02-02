import { Results } from "../types/Types"

function view(value: Results[]){
    let parent = document.querySelector("#nodo-parent") as HTMLDivElement;
    let fragment = document.createDocumentFragment();

    if(value.length > 0){
        parent.innerHTML= "";
        value.forEach( (result) => {
            let divChild = document.createElement("div");
            let imgFace = document.createElement("img")
            let contentInfo = document.createElement("div")
            let contentParrafo = document.createElement("div")
            let parrafoChild = document.createElement("p");
            let email = document.createElement("p")
            /*Atributos */
            imgFace.setAttribute("src", `${result.picture.medium}`)
            

            /*Incrustar el contenido */
            email.textContent = `${result.email}`
            parrafoChild.textContent = `${result.name.title} ${result.name.first} ${result.name.last}`
            
            
            
            /*CLass */
            divChild.classList.add(...["my-5","py-8", "px-8", "max-w-sm", "mx-auto", "bg-white",  "rounded-xl" ,"shadow-lg", "space-y-2",  "sm:py-4",  "sm:flex",  "sm:items-center",  "sm:space-y-0", "sm:space-x-6"])
            imgFace.classList.add(...["mx-auto", "bg-black" ,"rounded-full",  "sm:mx-0" ,"sm:shrink-0"])
            contentInfo.classList.add(...["text-center", "space-y-2", "sm:text-left"])
            contentParrafo.classList.add(...["space-y-0.5"])
            parrafoChild.classList.add(...["text-lg", "text-black", "font-semibold"])
            email.classList.add(...["text-slate-500", "font-medium"])
            



            /*Incrustar los valores al DOM */
            contentParrafo.append(parrafoChild, email)
            contentInfo.append(contentParrafo)
            divChild.append(imgFace, contentInfo)
            fragment.appendChild(divChild)
        })

        parent.append(fragment)

    } if (value.length === 0 ){
        parent.innerHTML = ""
    }
}

export {view}