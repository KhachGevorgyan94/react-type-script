import {useEffect, memo} from "react";

 function Box ({counter}:{counter?:number}){
    console.log('22222222222222222222')
    useEffect(() => {

    }, []);

    return <div>
        box  {counter}
    </div>
}

export default memo(Box)