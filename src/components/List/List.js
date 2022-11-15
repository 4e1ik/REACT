

import {useState, useEffect} from "react";

const myList = ['1', '2', '3', '4', '5'];

export const List = () => {
    const [list, setList] = useState(myList);

    // console.log(list);

    // const clickHandler = (el) => {
    //     const li = el.target.innerText;
    //     // const index = list.indexOf(li);
    //     // const myArray = [...list];
    //     // let newEl = myArray.splice(index, 1);
    //     // setList(myArray)
    //
    //     // setList((prev) => prev.filter((el) !== li));
    // };

    useEffect(() => {
        console.log('Ваш массив:', list);
        return () => {

        }
    }, [list]);

    const clickHandler = (el) => {
        
        
        
            const li = el.target.innerText;
            const index = list.indexOf(li);
            const myArray = [...list];
            let newEl = myArray.splice(index, 1);
            setList(myArray)
    }

    return  <ul>
        {
            list.map( (el) => (<li onClick={clickHandler} key={el}>{el}</li>) )
        }
    </ul>;
}

export default List;