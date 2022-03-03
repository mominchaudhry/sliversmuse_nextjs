import React from "react";

const Header = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-around">
      <div className="text d-flex justify-content-center myfont">
        sliversmuse
      </div>
      <div className="text d-flex align-items-center logo-section">
        <img loading="lazy" src='/Assets/logo_animated.gif' alt="logo" className="logo" />
        <div className="text d-flex justify-content-center flex-column">
          <a
            href="https://www.youtube.com/channel/UCWmb-lfq3dQGAM4BbJ7VZ6A"
            className="d-flex justify-content-center"
          >
            <img
              loading="lazy"
              src="/Assets/youtube.png"
              alt="youtube"
              className="w-50"
            />
          </a>
          <a
            href="https://www.tiktok.com/@sliversmuse?lang=en"
            className="d-flex justify-content-center"
          >
            <img loading="lazy" src="/Assets/tiktok.png" alt="tiktok" className="w-50" />
          </a>
          <a
            href="https://www.instagram.com/sliversmuse/"
            className="d-flex justify-content-center"
          >
            <img
              loading="lazy"
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
