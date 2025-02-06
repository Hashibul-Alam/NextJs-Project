import Buttons from "@/common/button";

const Hero = () => {
  return (
    <section className="h-[492px] flex items-center" style={{backgroundImage: 'url("/stars.png")'}}>
      <div className="absolute size-64 rounded-full bg-purple-500  border border-white/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  bg-[radial-gradient(50%_50%_at_16.8%_18.3%,white,rgba(184,148,255)_37.7%,rgb(24,0,66))] shadow-[-20px_-20px_50px_rgb(255,255,255,0.5),-20px_-20px_80px_rgb(255,255,255,0.1),0px_0px_50px_rgb(140,69,255)] "></div>
     <div className=" absolute size-[344px]  border-white opacity-20 border rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
     <div className="absolute size-2 top-1/2 left-0 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute size-2 top-0 left-1/2 bg-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute size-5 top-1/2 left-full border border-white rounded-full -translate-x-1/2 -translate-y-1/2 inline-flex items-center justify-center">
    <div className="size-2 bg-white rounded-full"></div>
    </div>
     </div>
      <div className=""></div>
      <div className="container relative">
        <h1 className="text-7xl font-semibold tracking-tighter bg-white bg-[radial-gradient(100%_100%_at_top_left,white,white,rgba(74,32,138,0.5))] text-transparent bg-clip-text text-center">
          AI Boost
        </h1>

        <p className="text-lg text-white/70 text-center mt-5">
          Elevate your site’s visibility effortlessly with AI, where smart
          technology meets user-friendly SEO tools.
        </p>
        <div className="flex justify-center mt-5">
          <Buttons>Start for free</Buttons>
        </div>
      </div>
    </section>
  );
};

export default Hero;
