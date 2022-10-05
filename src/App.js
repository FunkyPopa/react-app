import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {CommentsPage, PostsPage, UsersPage} from "./pages";
import {useDispatch, useSelector} from "react-redux";


function App() {

    let userState = useSelector( state => {
        console.log(state.userReducer);
        console.log(state.postReducer);
    });



    let dispatch = useDispatch();

    return (
    <div className="App">

      <Routes>
        <Route path={'/'} element={<MainLayout/>}>
          <Route path={'/users'} element={<UsersPage dispatch={dispatch}/>}/>
          <Route path={'/posts'} element={<PostsPage dispatch={dispatch}/>}/>
          <Route path={'/comments'} element={<CommentsPage dispatch={dispatch}/>}/>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
