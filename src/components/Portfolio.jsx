import React from "react";
import foodifi from "../assets/portfolio/foodifi.jpg";
import mata from "../assets/portfolio/mata.png";
import nfts from "../assets/portfolio/nft.png";
import quint from "../assets/portfolio/quint.png";
import staking from "../assets/portfolio/staking.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: foodifi,
      link: "https://foodfi.netlify.app/",
    },
    {
      id: 2,
      src: mata,
      link: "https://metastart-design.netlify.app/",
    },

    {
      id: 3,
      src: nfts,
      link: "https://keen-heliotrope-20f1f9.netlify.app",
    },
    {
      id: 4,
      src: quint,
      link: "https://quintapp.netlify.app/Poolstaking",
    },
    {
      id: 5,
      src: staking,
      link: "https://web3staking.netlify.app",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, link, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt="not"
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a
                    href={link}
                    style={{ textDecoration: "none" }}
                    target="_blank"
                    alt=""
                  >
                    Demo
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
