import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import ManagePage from "./pages/Manage";
import NewPostPage from "./pages/NewPost";

function RoutesApp() {
    return (
        <Routes>
            <Route path='/' element={<HomePage/>}/>
            <Route path='/new-post' element={<NewPostPage/>}/>
            <Route path='/manage' element={<ManagePage/>}/>
        </Routes>
    );
}

export default RoutesApp;