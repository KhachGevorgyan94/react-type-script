import {IUserData} from "../../models/user.model";
import React from "react";

interface IProps {
    data: IUserData,
    index?: number,
    onCounter(test: string): void
}


export const Box = ({data, onCounter, index}: IProps) => {
    //  React.MouseEvent
    //  aystex pahvum en mouse het ashxatox bolor hasaneli tiper@
    //  React.ChangeEvent
    //  sa naxatesvac e  input tesaki elementer@ ashxatanqi hamar
    const handleCLick = (e:React.MouseEvent)=>{
        console.log('s')
    }
    return <div>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <button onClick={handleCLick}>click
        </button>
    </div>
}