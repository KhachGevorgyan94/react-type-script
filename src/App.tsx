import Box from "./components/box";
import {useEffect, useState, useMemo} from "react";

export const App = () => {
    const [count, setCount] = useState(0);
    const [todos, setTodos] = useState([]);
    console.log('1111111111111111111')
    const increment = () => {
        setCount((c) => c + 1);
    };


    const expensiveCalculation = (num: number) => {
        console.log("Calculating...");
        for (let i = 0; i < 1000000000; i++) {
            num += 1;
        }
        return num;
    };

    const memoCount = useMemo(() => {
        return expensiveCalculation(count)
    }, [count])

    // useEffect(() => {
    //     expensiveCalculation(count)
    // }, [count]);
    const addTodo = () => {
        setTodos((t: any): any => [...t, "New Todo"]);
    };

    console.log(count)
    console.log(memoCount)
    return <div>
        {todos.map((todo, index) => {
            return <p key={index}>{todo}</p>;
        })}
        <p>{count}</p>
        <p>memoCount {memoCount}</p>
        <button onClick={increment}>click
        </button>
        <button onClick={addTodo}>click
        </button>
        {/*<Box counter={counter}/>*/}
    </div>
}