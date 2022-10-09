import css from './App.css'
import {useEffect, useState} from "react";
import {
    BrowserRouter,
    Routes,
    Switch,
    Route,
    Link,
    Outlet
} from "react-router-dom";

import {Albums, Comments, Todos} from "./components";
import {PostService} from "./services";




function App() {
    const [posts, setPosts] = useState(null);


    const getPosts = (postId) => {
        PostService.getPostsById(postId).then(({data}) => {
            setPosts(data)
            console.log(data);
        })
    }


  return (
      <div>
          <div className='links'>
              <li className='link'><Link to={'/'}>Home</Link></li>
              <li className='link'><Link to={'/todos'}>Todos</Link></li>
              <li className='link'><Link to={'/comments'}>Comments</Link></li>
              <li className='link'><Link to={'/albums'}>Albums</Link></li>
          </div>

          <hr/>

          <Routes>
              <Route path={'/todos'} element={<Todos/>}/>
              <Route path={'/comments'} element={<Comments getPosts={getPosts} posts={posts}/>}/>
              <Route path={'/albums'} element={<Albums/>}/>
          </Routes>
      </div>
  );
}

export default App;
