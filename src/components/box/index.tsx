import {IUserData} from "../../models/user.model";
import {Text} from "../Text";

interface IProps {
    data: IUserData,
    index?: number,
    onCounter(test: string): void
}

export const Box = ({data, onCounter}: IProps) => {
    return <div>
        <p>{data.firstName}</p>
        <p>{data.lastName}</p>
        <button onClick={() => {
            onCounter('Barev')
        }}>click
        </button>
    </div>
}