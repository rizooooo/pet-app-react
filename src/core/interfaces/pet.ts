import { ICommon } from "./common";

export interface IPet extends ICommon {
    name: string;
    breed: string;
    gender: string;
    age: number;
}