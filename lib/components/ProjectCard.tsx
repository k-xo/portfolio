import React from 'react';

interface ProjectCardProps {
  image: string;
  title: string;
  date: string;
  link: string;
  variant: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  image,
  title,
  date,
  children,
  link,
  variant = 'normal',
}) => {
  if (variant === 'long')
    return (
      <div className="mx-auto md:flex md:flex-row border border-solid border-gray-400">
        <img
          className="rounded-tr-md rounded-tl-md h-auto w-full lg:h-auto md:w-1/5 md:rounded-bl-md md:rounded-tr-none"
          src={image}
          alt=""
        />
        <a href={link} target="_blank">
          <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md hover:bg-blue-100">
            <h2 className="text-gray-700 font-semibold">{title}</h2>
            <p className="text-sm text-gray-600 mt-4">{children}</p>
            <div className="flex items-center mt-8">
              <div className="flex items-center">
                <img
                  className="h-10 w-10 rounded-full"
                  src="/images/profile.jpg"
                  alt=""
                />
              </div>
              <div className="ml-4">
                <p className="text-gray-800 text-sm font-semibold">
                  Al-Kassim Kassim
                </p>
                <p className="text-gray-600 text-sm">{date}</p>
              </div>
            </div>
            <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="15" height="13">
                <path
                  fill="#6E8098"
                  d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                />
              </svg>
            </div>
          </div>
        </a>
      </div>
    );
  else if (variant === 'normal') {
    return (
      <div className="flex-1 mx-6 border border-solid border-gray-400 rounded-md">
        <div className="mx-auto lg:flex lg:flex-row ">
          <img
            className="rounded-tr-md rounded-tl-md h-auto w-full md:h-auto lg:w-1/2 lg:rounded-bl-md lg:rounded-tr-none"
            src={image}
            alt=""
          />
          <a href={link} target="_blank">
            <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md hover:bg-blue-100">
              <h2 className="text-gray-700 font-semibold">{title}</h2>
              <p className="text-sm text-gray-600 mt-4">{children}</p>
              <div className="flex items-center mt-8">
                <div className="flex items-center">
                  <img
                    className="h-10 w-10 rounded-full"
                    src="/images/profile.jpg"
                    alt=""
                  />
                  <div className="ml-4">
                    <p className="text-gray-800 text-sm font-semibold">
                      Al-Kassim Kassim
                    </p>
                    <p className="text-gray-600 text-sm">{date}</p>
                  </div>
                </div>
                <div className="w-8 h-8 ml-auto bg-gray-200 rounded-full flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="15"
                    height="13"
                  >
                    <path
                      fill="#6E8098"
                      d="M15 6.495L8.766.014V3.88H7.441C3.33 3.88 0 7.039 0 10.936v2.049l.589-.612C2.59 10.294 5.422 9.11 8.39 9.11h.375v3.867L15 6.495z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    );
  }
};

export default ProjectCard;
