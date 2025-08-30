import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations/translations';

const Projects = () => {
  const { language } = useLanguage();
  const t = translations[language];

  const projects = [
    {
      id: 1,
      image: "/images/CodeRunner.jpg",
      alt: "Code_Runner",
      title: t.itHackathons,
      subtitle: "Code-Runner",
      description: t.itHackathonsDesc,
      link: "https://vk.com/hackathon_urfu",
      buttonColor: "before:bg-violet-900"
    },
    {
      id: 2,
      image: "/images/ARTofARCH.jpg",
      alt: "АОА",
      title: t.archEvents,
      subtitle: "Art of Arch",
      description: t.archEventsDesc,
      link: "https://vk.com/art_of_arch_urfu",
      buttonColor: "before:bg-lime-600"
    },
    {
      id: 3,
      image: "/images/MARKHACK.jpg",
      alt: "ЮРАЛ",
      title: t.marketingHackathons,
      subtitle: "Марк Хак & Юрал",
      description: t.marketingHackathonsDesc,
      link: "https://t.me/markhack_URAL",
      buttonColor: "before:bg-orange-600"
    },
    {
      id: 4,
      image: "/images/Course.jpg",
      alt: "курс 2020",
      title: t.bestCourses,
      subtitle: "BEST Course 2020",
      description: t.bestCoursesDesc,
      link: "https://vk.com/best_urfu",
      buttonColor: "before:bg-violet-900"
    },
    {
      id: 5,
      image: "/images/Chatzilla.jpg",
      alt: "speaking club",
      title: t.speakingClub,
      subtitle: "Chatzilla",
      description: t.speakingClubDesc,
      link: "https://vk.com/chatzilla",
      buttonColor: "before:bg-lime-600"
    },
    {
      id: 6,
      image: "/images/Eco_Hack.jpg",
      alt: "secret event",
      title: t.businessIntensive,
      subtitle: "Ural Create",
      description: t.businessIntensiveDesc,
      link: "https://vk.com/moneyhackaton",
      buttonColor: "before:bg-orange-600"
    }
  ];

  return (
    <section className="bg_our" id="OUR_MEROS">
      <div className="mb-14 xl:container justify-center mx-auto sm:px-6 md:px-12 lg:px-18">
        <div className="mx-auto max-w-2xl lg:mx-0 px-6">
          <h2 className="text-5xl md:text-7xl font-extralight tracking-wider dark:text-zinc-300 py-10 md:py-20 relative text-transparent bg-clip-text bg-gradient-to-r from-violet-900 to-secondary dark:from-primaryLight dark:to-secondaryLight">
            {t.projectsTitle}
          </h2>
        </div>

        <div className="grid gap-6 px-4 sm:px-0 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div key={project.id} className="group relative rounded-3xl space-y-6 overflow-hidden">
              <img
                className="mx-auto h-[26rem] w-full object-cover object-top transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                src={project.image}
                alt={project.alt}
                loading="lazy"
                width="640"
                height="805"
              />
              <div className="absolute bottom-0 rounded-3xl inset-x-0 h-[18rem] mt-auto px-8 py-6 bg-zinc-800 dark:bg-white translate-y-[11rem] transition duration-300 ease-in-out group-hover:translate-y-0">
                <div>
                  <h4 className="text-xl font-semibold dark:text-zinc-700 text-white">{project.title}</h4>
                  <span className="block text-sm text-zinc-500">{project.subtitle}</span>
                </div>
                <div className="mt-5 mb-5">
                  <p className="text-zinc-800 group-hover:text-zinc-300 dark:text-zinc-300 dark:group-hover:text-zinc-600 transition duration-300 ease-in-out">
                    {project.description}
                  </p>
                </div>
                <div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`relative flex h-12 w-full mx-auto items-center justify-center px-5 ${project.buttonColor} before:absolute before:inset-0 before:rounded-full before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max`}
                  >
                    <span className="relative text-base font-semibold text-white">{t.subscribe}</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
