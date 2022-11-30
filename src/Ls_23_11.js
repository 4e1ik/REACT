import store from './redux/store';
import {useRef, useState} from "react";

function Ls_23_11() {

    const inputRef = useRef();

    const [tasks, setTasks] = useState(store.getState);

    // const increase = () => {
    //     store.dispatch({
    //         type: 'INCREASE',
    //         payload: {},
    //     });
    //
    //     console.log(store.getState());
    // }
    //
    // const decrease = () => {
    //     store.dispatch({
    //         type: 'DECREASE',
    //     });
    //
    //     console.log(store.getState());
    // }

    const clickHandler = () => {

        const task = {
            text:inputRef.current.value,
            done: false,
        }

        inputRef.current.value = '';

        store.dispatch({
            type: 'ADD_TASK',
            task: task
        })

        console.log(store.getState())
    }

    store.subscribe(()=>{
        setTasks(store.getState)
    });

    const doneHandler = (task) => {
        store.dispatch({
            type:'DONE_TASK',
            id:task.id,
        });
    }

    const clickDoneTaskHandler = () => {
        store.dispatch({
            type:'SHOW_DONE',
        });
    }

    const clickAllHandler = () => {
        store.dispatch({
            type:'SHOW_ALL',
        });
    }

    return(
        <div className={'ls_23_11'}>

            <input type="text" ref={inputRef} />
            <button onClick={clickHandler}>Добавить</button>
            <button onClick={clickDoneTaskHandler}>Выполненые задачи</button>
            <button onClick={clickAllHandler}>Все задачи</button>
            <hr/>
            {tasks.map((task)=>(
                <p style={{color: task.done ? 'pink' : 'black'}}  onClick={() => doneHandler(task)} key={task.id}>{task.text}</p>
            ))}
        </div>
    )
}

export default Ls_23_11;