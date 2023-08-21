"use client";

import { BsArrowUpRight } from "react-icons/bs";
import { CustomButton } from ".";
import Image from "next/image";

import hero from "../assets/images/hero.png";
import tina from "../assets/images/tina.jpg";
import ella from "../assets/images/ella.jpg";
import DevCard from "./DevCard";
import { stats } from "./data/data";
import CountUp from "react-countup";

const Header = () => {
  return (
    <>
      <div className="container mx-auto flex py-8 2xl:pt-20 md:flex-row flex-col items-center">
        {/* left section */}
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col mb-16 md:mb-0">
          <h1 className="text-3xl md:text-4xl mb-4 font-bold text-slate-600 leading-[3rem] 2xl:leading-[4rem]">
            Nexus Solutions
            <br />
            <span>Building Your Digital Future</span>
          </h1>
          <p className="mb-8 leading-relaxed 2xl:mb-14 2xl:leading-[2rem]">
            At Nexus Solutions, we are passionate about transforming ideas into
            innovative software solutions. With our team of expert developers,
            we specialize in crafting cutting-edge applications tailored to meet
            your unique business needs.
          </p>

          <div className="flex">
            <CustomButton
              title="Get Started"
              containerStyle={`bg-[#7E22CE] text-white px-6 py-3 font-semibold text-lg rounded-md hover:bg-blue-800`}
              iconRight={<BsArrowUpRight size={22} />}
            />
          </div>
        </div>

        {/* right section */}
        <div className="relative lg:max-w-xl md:w-1/2 w-full h-[400px] md:h-[500px] items-center justify-center flex">
          <Image src={hero} width={500} height={500} alt="Nexus Solutions" />

          <DevCard
            imgURL={tina}
            devName="Tina B. Nolan"
            position="Senior Frontend Developer"
            classNames={"left-0 top-6"}
          />

          <DevCard
            imgURL={ella}
            devName="Ella M. Michael"
            position="Senior Backend Engineer"
            classNames={"right-0 bottom-6"}
          />
        </div>
      </div>

      {/* stat section */}
      <div className="w-full flex flex-col md:flex-row gap-16 items-center justify-between py-10 md:py-20">
        {stats.map(({ id, value, title, start, suffix }) => (
          <CountUp
            start={start}
            end={value}
            delay={0}
            separator=""
            suffix={suffix}
            enableScrollSpy={true}
            key={id}
          >
            {({ countUpRef }) => (
              <div className="flex flex-col items-center justify-center border border-slate-300 w-[250px] h-[250px] rounded-lg">
                <span
                  ref={countUpRef}
                  className="text-6xl text-teal-500 font-bold mb-3"
                />

                <span className="text-xl text-gray-600 font-semibold">
                  {title}
                </span>
              </div>
            )}
          </CountUp>
        ))}
      </div>
    </>
  );
};

export default Header;
