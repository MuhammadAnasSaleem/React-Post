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
function Post(props) {
  return (
    <>
      <div className="hero">
        <div className="post">
          <div className="postTop">
            <img className="userImage" src={props.userImage} alt="user-image" />
            <div className="info">
              <h3>{props.name}</h3>
              <span>{props.date}</span>
            </div>
          </div>
          <div className="postBottom">
            <p className="postText">{props.postText}</p>
            {props.postImage ? (
              <img
                src={props.postImage}
                alt="post image"
                className="postImage"
                id="my-id"
              />
            ) : null}
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
      <div>
        <Post
          name="JAVA SCRIPT Official"
          date="Just now"
          userImage="https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png "
          postImage="https://www.orientsoftware.com/Themes/Content/Images/blog/2024-06-18/javascript-vs-python.webp"
          postText="We are the best language in the world right now python is nothin comapre to us. We are the Future"
        />
        <Post
          name="Jhon wick"
          date="12 hours ago"
          userImage="https://heroshotphotography.com/wp-content/uploads/2023/03/male-linkedin-corporate-headshot-on-white-square-1024x1024.jpg"
          postImage="https://na.rdcpix.com/31b3ac20b944ffeaa0cd37c7d6a68336w-c1323232378rd-w832_h468_r4_q80.jpg"
          postText="In a world where shadows dance and fate is sealed,
John Wick rises, a force of vengeance revealed."
        />
        <Post
          name="Mr Bean"
          date="1 jan 2022"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQM53lx3N5alG2m7OzmW4FwkE9RuWAj8_eASg&s"
          postImage="https://optiver.com/wp-content/uploads/2023/11/AdobeStock_604288309-scaled.jpeg"
          postText="
In a world of silence, laughter finds its way,
Mr. Beans antics turn the mundane to play."
        />
        <Post
          name="MikeTyson"
          date="12 Dec 2024"
          userImage="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSu9lDNcTf4hTwJ8nMScGcn85-OtZrvfo1_Tw&s"
          postImage="https://static01.nyt.com/images/2021/09/19/arts/19NEW-ALI2/merlin_193159812_1177f04c-1bb1-4437-97de-71c5dec7ea34-mediumSquareAt3X.jpg"
          postText="
With a punch like thunder and a heart of fire,
Mike Tyson's spirit soars, a champion's desire."
        />
        <Post
          name="Sponge bob"
          date="12 Dec 2024"
          userImage="https://i1.sndcdn.com/artworks-270NfGy2wimgfdqZ-wRTLdg-t500x500.jpg"
          postText="
Under the sea where the fun never ends,
SpongeBob's laughter bubbles, and joy transcends!"
        />
        <Post
          name="Cristiano Ronaldo"
          date="12 Dec 2024"
          userImage="https://i.pinimg.com/564x/34/45/87/3445879644fd21116a42087b10c6cf05.jpg"
          postImage="https://assets.goal.com/images/v3/bltb7d9998f06c980a4/dfdade2bc59127c4e1c3e9ccd5b28d4f07ad7b06.jpg"
          postText="With every goal he scores, legends come alive,
Cristiano conquers Europe, where champions thrive!"
        />
        <Post
          name="Helth Leadger"
          date="16 May 2024"
          userImage="https://i1.sndcdn.com/artworks-270NfGy2wimgfdqZ-wRTLdg-t500x500.jpg"
          postImage="https://i0.wp.com/picjumbo.com/wp-content/uploads/amazing-stone-path-in-forest-free-image.jpg?w=600&quality=80"
        />
        <Post
          name="React Official"
          date="13 June 2024"
          userImage="https://static-00.iconduck.com/assets.00/react-icon-2048x2048-o8k3ymqa.png"
          postImage="https://media.licdn.com/dms/image/D4D12AQF26-NZ279EaA/article-cover_image-shrink_600_2000/0/1688018102545?e=2147483647&v=beta&t=Q9aUSt_UHzSqZYyDycri3s2kqVDlPc-YM0ZzlH2yfYc"
          postText="
In the whispering woods where secrets softly hide,
The forest breathes magic, nature's wild side"
        />
      </div>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
