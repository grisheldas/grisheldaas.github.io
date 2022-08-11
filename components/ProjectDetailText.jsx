function ProjectDetailText() {
  return (
    <div className="mt-5 dark:text-indigo-200 text-gray-900">
      {/* Title  */}
      <div className="text-3xl font-bold tracking-wide lg:mt-10">
        Teatalk, <span className="text-gray-400">2022.</span>
      </div>

      {/* Text */}
      <div className="mt-10 lg:text-xl">
        Teatalk is a social media where everyone can interact with each other.
        Made with simple CRUD where users can create and delete statuses, upload
        photos, edit profiles, etc.
        <br /> <br /> This is my first project using Next.js, and made as one of
        the requirements to complete my bootcamp at Purwadhika Technology
        School.
      </div>
    </div>
  );
}

export default ProjectDetailText;
