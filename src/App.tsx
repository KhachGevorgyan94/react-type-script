import React, {useState} from 'react';
import {Box} from "./components/box";
import {IUserData} from "./models/user.model";


/**
 *  TypeScript projkect@ install anelu hamar reacti mijocov  grum eqn hetevyal hraman@
 *
 *  npx create-react-app  <folderName> || .  --template typescript
 *  any -  da nshanakum e amen inch karox e @Nddunel mer parametr@
 * **/

interface IProfile {
    name: string,
    age: number,
    position?: string
}

function App() {
    const [counter, setCounter] = useState<number>(0)
    let numbersValue: string = 'fldkghdflkg'
    // numbersValue


    const profile: IProfile = {
        name: '24234234',
        age: 2342354,
    }


    let isCheck: boolean = true
    const userData: IUserData = {
        firstName: 'khachik',
        lastName: 'gevorgyan',
        age: 123234,
        position: 'skdjfhaksjhdg',
        address: {
            city: 'kjdahjsd',
            postCode: 345345
        }
    }

    const counterFunction = (test: string) => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <Box onCounter={counterFunction} data={userData} index={42}/>

            <p>{counter}</p>
        </div>
    );
}

export default App;
