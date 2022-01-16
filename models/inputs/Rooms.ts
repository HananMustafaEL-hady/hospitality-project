import {Room} from "../rooms"
export interface RoomCardProps {
 room:Room
    urllink?:string

}

export interface RoomIncomingReques{
    id: string,
    description: string,
    imageurl: string,
    location: string,
    price: number,
    FromDate:string,
    Todate:string,
}