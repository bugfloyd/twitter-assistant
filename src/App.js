import { useState } from "react";
import "./App.css";

function App() {
  const [authorName, setAuthorName] = useState("");
  const [tweetText, setTweetText] = useState("");

  const tweets = [
    {
      text: "This is the first tweet!",
      author: "Yashar",
      date: "20-11-2022 18:50",
      authorAvatar: "/user_avatar.png",
    },
    {
      text: "This is the second tweet!",
      author: "Mahsa",
      date: "20-11-2022 17:50",
      authorAvatar: "/user_avatar.png",
    },
    {
      text: "This is the third tweet!",
      author: "Pegah",
      date: "21-11-2022 18:50",
      authorAvatar: "/user_avatar.png",
    },
  ];

  const renderTweet = (tweet) => {
    return (
      <div className="tweet-wrap">
        <div className="author-wrap">
          <img className="author-avatar" src={tweet.authorAvatar} />
          <div className="author-name-wrap">
            <span>{tweet.author}</span>
          </div>
        </div>
        <div className="tweet-text">
          <p className="tweet">{tweet.text}</p>
          <span>{tweet.date}</span>
        </div>
      </div>
    );
  };

  const tweetsHTML = tweets.map((tweet) => {
    return renderTweet(tweet);
  });

  return (
    <div>
      <div id="header-wrap">
        <h1>Tweet List</h1>
      </div>
      <div className="add-new-wrap">
        <div id="add-new-tweet">
          <div id="new-tweet-author-wrap">
            <label htmlFor="author-name">Tweet author:</label>
            <input
              type="text"
              id="author-name"
              value={authorName}
              onChange={(event) => {
                setAuthorName(event.target.value);
              }}
            />
          </div>
          <div id="new-tweet-text-wrap">
            <label htmlFor="new-tweet-text">Tweet text:</label>
            <textarea
              id="new-tweet-text"
              onChange={(event) => {
                setTweetText(event.target.value);
              }}
            >
              {tweetText}
            </textarea>
          </div>
          <p>{tweetText}</p>
          <button>Add</button>
        </div>
      </div>
      <div id="tweet-container">{tweetsHTML}</div>
    </div>
  );
}

export default App;
