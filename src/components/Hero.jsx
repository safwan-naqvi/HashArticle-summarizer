import { logo } from "../assets";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <img src={logo} alt="HashArticle" className="w-28" />
        <button
          type="button"
          onClick={() => window.open("https://github.com/safwan-naqvi")}
          className="black_btn"
        >
          GitHub
        </button>
      </nav>

      <h1 className="head_text">
        Effortless Article Summarization with <br className="max-md:hidden" />{" "}
        <span className="orange_gradient">OpenAI GPT-4</span>
      </h1>
      <h2 className="desc">
        Unlock the future of article summarization with our cutting-edge SaaS
        app. Powered by OpenAI's GPT-4, we make summarizing articles a breeze.
        Say goodbye to information overload and hello to concise, meaningful
        summaries that save you time and effort. Try it today and experience the
        next level of content clarity.
      </h2>
    </header>
  );
};

export default Hero;
