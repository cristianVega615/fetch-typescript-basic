import { AxiosHeaders } from "axios"
type Location = {
    street: object, 
    city: string, 
    state: string, 
    country: string,
}

type Login = {
    username: string, 
    password: string, 
}

export type Name = {
    title: string, 
    first:string, 
    last: string
}

type Picture = {
    large: string,
    medium: string,
    thumbnail: string
}
export interface Results {
    email: string, 
    gender: string, 
    location: Location, 
    login: Login,
    name: Name,
    picture: Picture
}

export interface jsonResponse {
    config: object,
    data: {
        results: Results[]
    } , 
    headers: AxiosHeaders
    request: XMLHttpRequest
}




