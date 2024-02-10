export interface IUserData {
    firstName: string,
    lastName: string,
    age: number,
    position: string,
    password?: string
    address: IAddressData
}

export interface IAddressData {
    city: string,
    postCode: number
}

export interface IProfileData extends IUserData {
    company: string,
    price: number,
    isVerify: boolean
}




export interface IToDoItem{
    value:string,
    _id?:string
}



export interface IUserModel{
    firstName:string,
    lastName:string,
    _id?:string
}