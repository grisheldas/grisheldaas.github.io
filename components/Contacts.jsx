import {
  FaEnvelope,
  FaInstagram,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const contacts = require("../data/contacts.json");

function Contacts({ children }) {
  const SocialMediaIcon = ({ link, ariaLabel, children }) => {
    return (
      <a
        className="p-2 dark:bg-indigo-200 bg-gray-900 rounded-full mr-2"
        href={link}
        aria-label={ariaLabel}
      >
        {children}
      </a>
    );
  };

  return (
    <div className="mx-5 mt-5 dark:text-indigo-200 text-gray-900 pb-5 lg:pb-10 lg:text-center">
      <div className="font-bold text-xl tracking-wide lg:text-3xl">
        Let's meet
      </div>

      <div className="font-semibold mt-5 lg:text-lg">Griselda Athallah</div>
      <div>{contacts.location}</div>

      <div className="flex text-indigo-200 dark:text-gray-900 mt-5 lg:justify-center">
        <SocialMediaIcon
          link={contacts.socialMedias.linkedin}
          ariaLabel={contacts.socialMedias.linkedinAriaLabel}
        >
          <FaLinkedinIn />
        </SocialMediaIcon>

        <SocialMediaIcon
          link={contacts.socialMedias.github}
          ariaLabel={contacts.socialMedias.githubAriaLabel}
        >
          <FaGithub />
        </SocialMediaIcon>

        <SocialMediaIcon
          link={contacts.socialMedias.instagram}
          ariaLabel={contacts.socialMedias.instagramAriaLabel}
        >
          <FaInstagram />
        </SocialMediaIcon>

        <SocialMediaIcon
          link={contacts.socialMedias.email}
          ariaLabel={contacts.socialMedias.emailAriaLabel}
        >
          <FaEnvelope />
        </SocialMediaIcon>
      </div>
    </div>
  );
}

export default Contacts;
