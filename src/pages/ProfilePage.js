import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import "./Pages.css";
const ProfilePage = () => {
  const [imgUrl, setImgUrl] = useState("");
  useEffect(() => {
    // GET request using fetch with error handling
    fetch("https://picsum.photos/285/285")
      .then(async (response) => {
        const data = await response;
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setImgUrl(data.url);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  }, []);

  const getImg = () => {
    // GET request using fetch with error handling
    fetch("https://picsum.photos/285/285")
      .then(async (response) => {
        const data = await response;
        // check for error response
        if (!response.ok) {
          // get error message from body or default to response statusText
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error);
        }
        setImgUrl(data.url);
      })
      .catch((error) => {
        console.error("There was an error!", error);
      });
  };

  return (
    <div className="profilePage page">
      <img src={imgUrl} alt="tempAvatar"></img>
      <h2>Goran Urukalo</h2>
      <div className="contactSection">
        <a href="mailto:goranurukalo@teletraider.com">
          goranurukalo@teletraider.com
        </a>
        <a href="http://goranurukalo.github.io">
          http://goranurukalo.github.io
        </a>
      </div>
      <Button onClick={getImg} variant="contained" color="primary">
        Toggle Avatar
      </Button>
    </div>
  );
};
export default ProfilePage;
