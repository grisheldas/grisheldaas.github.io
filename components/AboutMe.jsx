import Image from "next/image";

function AboutMe() {
  return (
    <div className="mx-5 dark:text-indigo-200 text-gray-900">
      <div className="font-bold text-xl lg:text-3xl lg:mb-3 tracking-wide text-center">
        About Me
      </div>
      <div className="lg:grid lg:grid-cols-3">
        <div className="lg:col-span-1 lg:mt-9 lg:w-60 lg:h-60 mt-5 w-32 h-32 rounded-md dark:bg-indigo-200 bg-gray-900 overflow-hidden relative mx-auto">
          <Image src={"/icon.png"} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="lg:col-span-2 lg:text-lg lg:mx-10 mx-2 mt-9 text-justify">
          Graduated with a Bachelor of Mechanical Engineering at Diponegoro
          University, before I switched careers to become a Web developer.
          <br /> <br />
          From a young age I have been interested in fiddling with computers and
          surfing the internet. Seeing many interesting and very helpful
          websites makes me wonder, how do I make this and that? Finally I
          bought some online programming classes and joined a web developer
          bootcamp, now here I am, found my true passion fiddling with coding
          and creating attractive websites. <br /> <br />
          Here are a few technologies I’ve been working with recently:
          <ul className="grid grid-cols-2 mt-3 ml-2">
            <li>• JavaScript</li>
            <li>• React</li>
            <li>• Next.js</li>
            <li>• Node.js</li>
            <li>• Figma</li>
            <li>• Adobe Illustrator</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
