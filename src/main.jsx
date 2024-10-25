import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
function NavBar() {
  return (
    <>
      <nav className="navBar">
        <img
          src="https://www.logo.wine/a/logo/Facebook/Facebook-f_Logo-Black-Logo.wine.svg"
          alt="Facebook Logo"
          className="logo"
        />
        <input
          type="text"
          placeholder="What's on your mind"
          className="searchBar"
        />
      </nav>
    </>
  );
}
function Post() {
  return (
    <>
      <div className="post">
        <div className="postTopSection">
          <img
            className="userImage"
            src="https://avatars.githubusercontent.com/u/153676357?v=4"
            alt="user"
          />
          <div>
            <p>Muhammad Anas</p>
            <p>12 DEC 2024</p>
          </div>
        </div>
      </div>
    </>
  );
}

function App() {
  return (
    <>
      <NavBar />
      <Post />
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
