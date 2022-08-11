function Profile() {
  return (
    <div className="mx-6 pt-20 lg:pt-32">
      <div
        className="text-6xl lg:text-8xl font-bold bg-gradient-to-r bg-clip-text animate-text
      text-transparent from-gray-800 via-indigo-800 to-gray-900 
      dark:from-gray-200 dark:via-indigo-500 dark:to-indigo-200"
      >
        Hi,
        <br />
        it's me Griselda.
      </div>

      <div className="mt-5 mb-5 lg:mb-10 lg:text-xl tracking-wide text-justify text-gray-900 dark:text-indigo-200">
        Indonesia based junior web developer. I am passionate about building
        excellent website that improves the lives of those around me.
      </div>

      <a
        href={"/resume.pdf"}
        download
        target="_blank"
        className="p-2 lg:p-3 text-sm rounded-md font-semibold dark:bg-indigo-200 bg-gray-900 
      dark:text-gray-900 text-indigo-200 hover:bg-gray-600 dark:hover:bg-indigo-400"
      >
        Download CV
      </a>
    </div>
  );
}

export default Profile;
