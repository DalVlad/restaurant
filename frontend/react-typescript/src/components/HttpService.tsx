import axios from "axios";
import { dishModel } from "./Models/dishModel";


export default class HttpService{



    public static async getAllMenu(){
        return await axios.get("http://localhost:8080/api/menu/")
        .then((res) => res.data)
        .catch((error) => error)
    }

        public static async deleteMenu(id: number){
        return await axios.delete(`http://localhost:8080/api/menu/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllDish(){
        return await axios.get("http://localhost:8080/api/dish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getDish(id: number){
        return await axios.get(`http://localhost:8080/api/dish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async deleteDish(id: number){
        return await axios.delete(`http://localhost:8080/api/dish/${id}`)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async updateDish(id: number, body: dishModel){
        return await axios.patch(`http://localhost:8080/api/dish/${id}`, body)
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllTypeDish(){
        return await axios.get("http://localhost:8080/api/typeDish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

}