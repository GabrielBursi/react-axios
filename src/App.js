import { Link } from "react-router-dom";

import RoutesApp from "./Routes";

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/new-post">New post</Link>
        <Link to="/manage">Manage</Link>
      </nav>
      <RoutesApp/>
    </>
  );
}

export default App;
