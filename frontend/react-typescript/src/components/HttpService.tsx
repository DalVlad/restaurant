import axios from "axios";


export default class HttpService{



    public static async getAllMenu(){
        return await axios.get("http://localhost:8080/api/menu/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllDish(){
        return await axios.get("http://localhost:8080/api/dish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

    public static async getAllTypeDish(){
        return await axios.get("http://localhost:8080/api/typeDish/")
        .then((res) => res.data)
        .catch((error) => error)
    }

}