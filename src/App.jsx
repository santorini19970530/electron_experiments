import React, { useEffect, useState } from "react";
import background_image from "../img/gfriend.jpeg";
import logo from "../img/logo.png";
import "./index.css"; // Ensure to import your CSS file with fade classes

export default function App() {
  const [showLogo, setShowLogo] = useState(true);
  const [fadeLogo, setFadeLogo] = useState("fade-exit");
  const [fadeEdit, setFadeEdit] = useState("fade-enter");

  useEffect(() => {
    // Start fade out for logo after 5 seconds
    const timer = setTimeout(() => {
      setFadeLogo("fade-exit");
      // Wait for the fade-out to complete before hiding the logo and showing the edit panel
      setTimeout(() => {
        setShowLogo(false); // Hide logoPanel
        setFadeEdit("fade-enter"); // Start fade-in for editPanel
      }, 100); // Match with the CSS transition time
    }, 5000);

    // Cleanup timer on unmount
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="h-screen w-full bg-custom-image backdrop-blur-md flex flex-col"
      style={{
        backgroundImage: `url(${background_image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Logo Panel with Fade Effect */}
      {showLogo && (
        <div
          className={`flex items-center justify-center h-full ${fadeLogo}`}
          id="logoPanel"
        >
          <img src={logo} className="size-20" alt="gfriend" />
        </div>
      )}

      {/* Edit Panel with Fade Effect */}
      <div
        className={`backdrop-blur-md flex flex-col flex-grow ${
          !showLogo ? "block" : "hidden"
        } ${fadeEdit}`}
        id="editPanel"
      >
        {/* Header */}
        <header className="flex items-center justify-between p-4 bg-transparent">
          <h1 className="text-black">Hello World</h1>
        </header>
        {/* End of Header */}

        {/* Content Area */}
        <div className="flex flex-col flex-grow items-center justify-center bg-transparent">
          <div className="h-[calc(100%_-_10px)] w-[calc(100%_-_10px)] flex flex-col items-center justify-center bg-fuchsia-200 border bg-opacity-30">
            <p className="text-black">Hello World</p>
          </div>
        </div>
        {/* End of Content Area */}
      </div>
    </div>
  );
}
