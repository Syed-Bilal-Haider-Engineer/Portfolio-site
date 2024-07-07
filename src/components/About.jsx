const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I'm Web Developer with extensive experience in building High-quality
          Web applications or websites. I have 2 years of experience with all
          stages of website development. I have developed websites using PHP,
          Javascript, ReactJS, Node Js Express, HTML/CSS, NFT minting, Land
          NFTs, web3 integrations, and ethers JS. <br />I am seeking
          opportunities to build websites from the ground up for you or your
          business. I also have strong skills in SEO optimization,on-page SEO
          web design, and photo editing. I am certifiebyom Digiskills in SEO and
          graphics designng.
          <br /> I have a particular focus on creative design and maintaining
          relationships with clients. I love my work and always try to follow
          the best practices. I can assure you of maximum availability and
          error-free semantic code.
        </p>
        <br />
        <h2 style={{ fontSize: "bold" }}>Technologies we use: </h2>
        <p className="text-xl ">
          {" "}
          ✔ React JS ✔ Redux ✔ JavaScript ✔ Nodejs ✔ Express ✔ PHP ✔ SQL ✔
          Firebase ✔ Bootstrap 4 ✔ HTML5 ✔ CSS ✔ Material UI.
        </p>
        <br />
        <h2 style={{ fontSize: "bold" }}> DEVELOPMENT PROCESS </h2>
        <p className="text-xl ">
          ✔ Collect and Analyze Client Requirements ✔ Wireframing App Flow ✔
          Design Development ✔ QA and Testing ✔ Maintenance & Support
        </p>
      </div>
    </div>
  );
};

export default About;
