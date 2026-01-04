import Image from "next/image";
import Lanyard from "./components/Lanyard/Lanyard";
import RotatingText from "./components/RotatingText/RotatingText";
import SplitText from "./components/SplitText/SplitText";
import BlurText from "./components/BlurText/BlurText";
import AnimatedContent from "./components/AnimatedContent/AnimatedContent";
import Squares from "./components/Squares/Squares";
import SplashCursor from "./components/SplashCursor/SplashCursor";
import GradientText from "./components/GradientText/GradientText";
import CircularText from "./components/CircularText/CircularText";
import ScrollVelocity from "./components/ScrollVelocity/ScrollVelocity";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#19222D]">
      <SplashCursor />
      <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal" // up, down, left, right, diagonal
          borderColor="#F1FFB2"
          hoverFillColor="#C6F10E"
        />
      </div>
      <div className="container mx-auto  h-screen">
        <div className="grid grid-cols-12">
          <div className="col-span-6 ">
            <div className="flex items-center h-full">
              <div className="flex flex-col gap-6 px-3">
                <AnimatedContent
                  className="flex items-center gap-2"
                  distance={150}
                  direction="horizontal"
                  reverse={false}
                  initialOpacity={0.2}
                  animateOpacity
                  scale={1.1}
                  threshold={0.2}
                >
                  <h1 className="text-2xl font-bold text-white">
                    Im Ready For Job
                  </h1>
                  <RotatingText
                    texts={[
                      "Web Development",
                      "Web Design",
                      "System Analyst",
                      "Front End Developer",
                    ]}
                    mainClassName="px-2 sm:px-2 md:px-3 bg-[#C6F10E] text-black overflow-hidden py-0.5 sm:py-1 justify-center rounded-lg text-2xl font-bold inline-flex transition-all"
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={2000}
                  />
                </AnimatedContent>

                <div className="flex flex-col items-start">
                  <SplitText
                    text="I'm Alam"
                    className="text-6xl font-semibold text-start"
                    delay={150}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />

                  <SplitText
                    text="Web Developer"
                    className="text-6xl font-semibold text-start text-[#C6F10E]"
                    delay={75}
                    duration={0.6}
                    ease="power3.out"
                    splitType="chars"
                    from={{ opacity: 0, y: 40 }}
                    to={{ opacity: 1, y: 0 }}
                    threshold={0.2}
                    rootMargin="-50px"
                  />
                </div>

                <BlurText
                  text="A fresh graduate with a Bachelor’s degree in Informatics Engineering from Islamic University of Riau, equipped with relevant skills and hands-on experience in the IT field. These competencies were developed through a hands-on internship and participation in various campus programs. I am passionate about pursuing a career in IT, particularly in web development, web design, and system analysis. I am highly motivated to continuously learn and adapt to the latest advancements in the information technology industry. With a determined mindset, a strong eagerness to explore new knowledge, and a proactive approach, I am committed to contributing to the creation of innovative technological solutions. I am eager to join a dynamic and innovative technology team where I can leverage my expertise and drive continuous professional growth."
                  delay={50}
                  animateBy="words"
                  direction="top"
                  className="text-xl mb-8"
                />

                <div className="flex flex-col items-start">
                  <GradientText
                    colors={[
                      "#40ffaa",
                      "#C6F10E",
                      "#40ffaa",
                      "#C6F10E",
                      "#40ffaa",
                    ]}
                    animationSpeed={3}
                    showBorder={false}
                    className="px-8 py-4 rounded-lg  border"
                  >
                    Contact Me Now
                  </GradientText>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-6 relative">
            <Lanyard position={[0, 0, 12]} gravity={[0, -40, 0]} />
            <CircularText
              text="WHYE*ME*PROJECT*"
              onHover="speedUp"
              spinDuration={20}
              className="absolute top-10 right-20 "
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto">
        <ScrollVelocity
          texts={["Programming Web Dev", "Design"]}
          // velocity={velocity}
          className="custom-scroll-text"
        />
      </div>
    </div>
  );
}
