import {Serviecs} from "./services"
import { Owner } from "./owner"
export interface images{
    original:string
placeholder:string
}
export interface Room{
    services:Serviecs;
    owner:Owner;
    location: {coordinates: [number],type:string};
    verified:boolean;
    images:[images];
    nightPrice: number;
capacity: number;
description: string;
name:string;
createdAt: string;
updatedAt: string;
id:string

}

export interface Roomspage{
    data:[Room]
    limit: number;
totalCount: number;
currentPage: number;
pageCount: number;
}