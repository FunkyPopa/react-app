import {Route, Routes} from "react-router-dom";
import {MainLayout} from "./layout/MainLayout";
import {PostsPage, UsersPage} from "./pages";


function App() {
  return (
    <div className="App">

        <Routes>
            <Route path={'/'} element={<MainLayout/>}>
                <Route path={'/users'} element={<UsersPage/>}/>
                <Route path={'/posts'} element={<PostsPage/>}/>
            </Route>
        </Routes>

    </div>
  );
}

export default App;
