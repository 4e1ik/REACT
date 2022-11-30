import {useSelector, useDispatch} from "react-redux";
import {inc, dec} from './store/counterSlice';
import {fetchPosts, removePost} from './store/postsSlice';
import countriesReducer from "./store/countriesSlice";


function Ls_30_11() {
    const dispatch = useDispatch();
    const count =  useSelector((store) => store.counter.count);
    const {posts, loading} = useSelector((store) => store.posts);

    // console.log(loading)

    const incHandler = () => {
        dispatch(inc());
    };

    const decHandler = (event) => {
        event.preventDefault();
        dispatch(dec());
    };

    return(
        <div>
            {/*<h1 onClick={incHandler} onContextMenu={decHandler}>{count}</h1>*/}

            { !posts.length && (<button onClick={() => dispatch(fetchPosts())}>FetchPosts</button>)}
            { posts.length > 0 && (<h1>{posts.map((post, i) => {
                return <p key={post.id} onClick={() => dispatch(removePost(post.id))}>{i+1}. {post.title}</p>
            })}</h1>) }
            {loading && <h1>Loading...</h1>}
        </div>
    );
}

export default Ls_30_11;