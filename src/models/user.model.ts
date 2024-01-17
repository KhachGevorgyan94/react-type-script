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

