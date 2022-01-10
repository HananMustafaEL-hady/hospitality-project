export interface Room {
    id: string,
    description: string,
    imageurl: string,
    location: string,
    price: number,
    countUsers: number,
    urllink?:string

}

export interface RoomIncomingReques{
    id: number,
    description: string,
    imageurl: string,
    location: string,
    price: number,
    FromDate:string,
    Todate:string,
}