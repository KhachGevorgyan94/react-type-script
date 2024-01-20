import React, {useEffect, useState} from 'react';
import {Box} from "./components/box";
import {IUserData} from "./models/user.model";
import ReactDatePicker from "react-datepicker";
import './assets/style/index.scss'
import axios, {AxiosResponse} from "axios";

/**
 *  TypeScript projkect@ install anelu hamar reacti mijocov  grum eqn hetevyal hraman@
 *
 *  npx create-react-app  <folderName> || .  --template typescript
 *  any -  da nshanakum e amen inch karox e @Nddunel mer parametr@
 * **/

interface IProductData {
    categoryId: string,
    color: string,
    description: string,
    image: string,
    name: string,
    price: number,
    rate: number,
    size: string[],
    _id: string
}

function App() {
    const [productList,setProductList] = useState<IProductData[]>([])


    useEffect(() => {
        getProductList()
    }, [])


    const getProductList = async () => {
        const result = await axios.get<null,AxiosResponse<IProductData[]>>('https://crudcrud.com/api/9e6dd515c4cb4eac9edac88b7b70617d/productH')
        if (result) {
            console.log(result.data)
            setProductList(result.data)
        }
    }

    // function GET(url:string, data:any){
    //     axios.get(url, data)
    // }

    return (
        <div>
            {productList.map((item,index)=>{
                return <div>
                    {item.name}
                </div>
            })}
        </div>
    );
}

export default App;
