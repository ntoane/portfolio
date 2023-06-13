import React from "react";
import MyImage from "../assets/Lekuba.jpeg";
import Typewriter from "typewriter-effect";
import { useEffect, useState } from "react";

const Home = () => {
  const [isReady, setIsReady] = useState(false);
  const [isProfileReady, setIsProfileReady] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsReady(true);
    }, 11000);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setIsProfileReady(true);
    }, 45000);
  }, []);

  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-left h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-sm sm:text-lg font-bold text-white">
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .typeString("Hi! I'm still learning how to")
                  .pauseFor(1000)
                  .deleteAll()
                  .typeString("Hi! I'm Lekuba Ntoane")
                  .start();
              }}
            />
          </h2>
          {isReady && (
            <p className="text-gray-500 py-4 max-w-md">
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .typeString(
                      "I'm still working on my website portfolio, but in the meantime, please use the buttons on the left to visit my LinkedIn profile or GitHub repo to see some of the work I've done. You can also reach out to me directly via email."
                    )
                    .start();
                }}
              />
            </p>
          )}
        </div>

        <div className="w-60 justify-end">
          {isProfileReady && (
            <img
              src={MyImage}
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
