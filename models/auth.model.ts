export interface authUser{
    email: string;
    name: string;
    phone: string;
    profileImage:any;
    password:string;
    
}
export interface authContext{
   user:authUser,
   AddUser:Function
    }