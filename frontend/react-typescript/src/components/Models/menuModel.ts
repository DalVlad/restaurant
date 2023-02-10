import {dishModel} from './dishModel';

export type menuModel = {
    id: number;
    name: string;
    timeStart: string;
    timeEnd: string;
    dishes: Array<dishModel>;
}
