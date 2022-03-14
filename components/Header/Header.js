import React from "react";

const Header = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <div className="text d-flex justify-content-center myfont">
        sliversmuse
      </div>
      <div className="text d-flex align-items-center logo-section">
        <img src='/Assets/logo_animated.gif' alt="logo" className="logo"/>
        <div className="text d-flex justify-content-center flex-column">
          <a
            onClick={() => {
              window?.gtag("event", "select_content", {
                content_type: "youtube",
                item_id: "youtube"
              });
            }}
            href="https://www.youtube.com/channel/UCWmb-lfq3dQGAM4BbJ7VZ6A"
            className="d-flex justify-content-center"
          >
            <img
              src="/Assets/youtube.png"
              alt="youtube"
              className="w-50"
            />
          </a>
          <a
            onClick={() => {
              window?.gtag("event", "select_content", {
                content_type: "tiktok",
                item_id: "tiktok"
              });
            }}
            href="https://www.tiktok.com/@sliversmuse?lang=en"
            className="d-flex justify-content-center"
          >
            <img src="/Assets/tiktok.png" alt="tiktok" className="w-50" />
          </a>
          <a
            onClick={() => {
              window?.gtag("event", "select_content", {
                content_type: "instagram",
                item_id: "instagram"
              });
            }}
            href="https://www.instagram.com/sliversmuse/"
            className="d-flex justify-content-center"
          >
            <img
              src="/Assets/instagram.png"
              alt="instagram"
              className="w-50 p-3 pt-0 mb-5"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
