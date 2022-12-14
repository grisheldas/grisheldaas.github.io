import Head from "next/head";
import useDarkMode from "../helpers/useDarkMode";
import Navbar from "../components/Navbar";
import Profile from "../components/Profile";
import Breakline from "../components/Breakline";
import Projects from "../components/Projects";
import Contacts from "../components/Contacts";
import AboutMe from "../components/AboutMe";

export default function Home() {
  const [colorTheme, setTheme] = useDarkMode();

  return (
    <div className="w-full h-full dark:bg-gray-900 bg-indigo-200">
      <Head>
        <title>Shelda</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      <div className="sm:w-[475px] lg:w-[800px] mx-auto">
        <Profile />

        <Breakline />
        <AboutMe />

        <Breakline />
        <Projects />

        <Breakline />
        <Contacts />
      </div>
    </div>
  );
}
