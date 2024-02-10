import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useAppSelector} from "./hooks/redux";
import {fetchProductDatta} from "./store/redusers/auth/extra-actions";
import {addToDoList, getToDoList} from "./store/redusers/todoSlize/extra-actions";
import {PostApi, useGetProductsQuery} from "./store/redusers/auth/auth-query";
import {UsersList} from "./components/users-list";

/**
 *  TypeScript projkect@ install anelu hamar reacti mijocov  grum eqn hetevyal hraman@
 *
 *  npx create-react-app  <folderName> || .  --template typescript
 *  any -  da nshanakum e amen inch karox e @Nddunel mer parametr@
 * **/
function App() {

    // const {data:postList, isLoading, error } = useGetProductsQuery({
    //
    // }).

    const {data,isLoading, error,refetch} = useGetProductsQuery(null)
    // const [getProducts, {data, isLoading}] = useGetProductsQuery(null)
    // console.log(data)


    // const [trigger, {data, isLoading}] = PostApi.endpoints.getProducts.useLazyQuery()
    // const [inputValue, setInputValue] = useState<string>('')
    //
    // const loader = useAppSelector(state=>state.toDoSlize.loader)
    // const list = useAppSelector(state=>state.toDoSlize.list)
    //
    //
    //
    // const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(getToDoList() as any)
    // }, []);

    return (
        <div>
            {/*<button onClick={()=>{*/}
            {/*    refetch()*/}
            {/*}}>Click me</button>*/}

            {/*{isLoading ? <p>loading....</p> : null}*/}

            <UsersList/>
        </div>
    );
}

export default App;
