import axios from "axios";
import { dishModel } from "./Models/dishModel";
import { menuModel } from "./Models/menuModel";
import { typeDishModel } from "./Models/typeDishModel";


export default class HttpService{

    private static url = "http://localhost:8080/";

    public static async getAllMenu(){
        return await axios.get(HttpService.url + "api/menu/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getMenu(id: number){
        return await axios.get(HttpService.url + `api/menu/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

        public static async deleteMenu(id: number){
        return await axios.delete(HttpService.url + `api/menu/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async updateMenu(id: number, body: menuModel){
        return await axios.patch(HttpService.url + `api/menu/${id}`, body)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllDish(){
        return await axios.get(HttpService.url + "api/dish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getDish(id: number){
        return await axios.get(HttpService.url + `api/dish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async deleteDish(id: number){
        return await axios.delete(HttpService.url + `api/dish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async updateDish(id: number, body: dishModel){
        return await axios.patch(HttpService.url + `api/dish/${id}`, body)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllTypeDish(){
        return await axios.get(HttpService.url + "api/typeDish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getTypeDish(id: number){
        return await axios.get(HttpService.url + `api/typeDish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async updateTypeDish(id: number, body: typeDishModel){
        return await axios.patch(HttpService.url + `api/typeDish/${id}` , body)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async deleteTypeDish(id: number){
        return await axios.delete(HttpService.url + `api/typeDish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

}