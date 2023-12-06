import Link from "next/link";
import Image from "next/image";
import Container from "./Container";
import heroImage from "../../../public/img/seun.png";

const Hero = () => {
  //const Hero = ({ data }) => {
  //const { title, description, cta_button_text, picture } = data;
  return (
    <>
      <Container className="flex flex-wrap pt-28 pb-18">
        <div className="flex items-center w-full lg:w-1/2 lg:px-10">
          <div className="max-w-2xl mb-8 pr-3">
            <h1 className="text-4xl font-bold leading-snug tracking-tight lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight text-white">
              {/* {title} */}
              Software Developer &amp; Entrepreneur Seun Soetan
            </h1>
            <p className="py-5 text-xl leading-normal lg:text-xl xl:text-2xl text-gray-300">
              {/* {description} */}
              Hi! My name is Seun Soetan and I am a software developer and
              entrepreneur. I am passionate about building software that solves
              problems and makes life easier for people. I am also passionate
              about building businesses that solve problems and make life easier
              for people. I am currently working on a few projects that I hope
              will make life easier for people. I am also available for hire as
              a software developer. If you have a project that you would like to
              discuss with me, please feel free to contact me.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="#contact"
                className="px-7 py-3 text-white text-xl bg-indigo-600 rounded-md"
              >
                {/* {cta_button_text} */}
                Book Me!
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <Image
            src={heroImage}
            width="529"
            height="529"
            className={"object-cover rounded-full hidden lg:inline"}
            alt="Seun Soetan"
            loading="eager"
          />
        </div>
      </Container>
    </>
  );
};

export default Hero;
