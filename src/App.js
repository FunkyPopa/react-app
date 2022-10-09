import './App.css';
import {useState} from "react";

import {Users} from "./components/Users/Users";
import {postService} from "./services";
import {Posts} from "./components/Posts/Posts";


function App() {
    let [posts, setPosts] = useState(null);
    const getUserId = (userId) => {
        postService.getPosts(userId).then(({data}) => {
            setPosts(data)
            console.log(data);
        })
    }

  return (
      <div className='wrapper'>
        <Users getUserId={getUserId}/>
          {posts && <Posts posts={posts}/>}
      </div>
  );
}

export default App;
