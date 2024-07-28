import AllMemes from "./AllMemes";
import React from "react";

export function MemeComponent() {
  const [currentUrl, setCurrentUrl] = React.useState("");

  function getMemeImage() {
    const memesArray = AllMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setCurrentUrl(url);
    console.log(url);
  }

  return (
    <main>
      <div className="form">
        <div>
          <label htmlFor="toptext">Top Text</label>
          <input
            id="toptext"
            type="text"
            placeholder="Shut up"
            className="form--input"
          />
        </div>
        <div>
          <label htmlFor="bottomtext">Bottom Text</label>
          <input
            id="bottomtext"
            type="text"
            placeholder="and take my money"
            className="form--input"
          />
        </div>
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
        <img className="meme--image" alt="image" src={currentUrl} />
      </div>
    </main>
  );
}
