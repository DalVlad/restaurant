import typeDishModel from "./typeDishModel";

export default class dishModel{
    id: number = 0;
    name: string = "";
    price: number = 0.0;
    typeDish: typeDishModel = new typeDishModel;
}
