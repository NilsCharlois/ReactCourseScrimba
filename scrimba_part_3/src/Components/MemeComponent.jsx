import AllMemes from "./AllMemes";
import React from "react";

export function MemeComponent() {
  const [currentMemeData, setCurrentMemeData] = React.useState({
    url:"https://i.imgflip.com/1bij.jpg",
    topText:"",
    bottomText:""
  });

  const [allMemesData, setAllMemesData] = React.useState(AllMemes);

  function getMemeImage() {
    const memesArray = AllMemes.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setCurrentMemeData(prevState=>({
      ...prevState,
      url:memesArray[randomNumber].url,
    }));
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
        <img className="meme--image" alt="image" src={currentMemeData.url} />
      </div>
    </main>
  );
}
