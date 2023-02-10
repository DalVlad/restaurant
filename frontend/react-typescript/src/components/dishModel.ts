import {typeDishModel} from "./typeDishModel";

export type dishModel = {
    id: number;
    name: string;
    price: number;
    typeDish: typeDishModel;
}
