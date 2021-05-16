import Head from 'next/head';
import ProjectCard from '../lib/components/ProjectCard';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kassim's Portfolio</title>
      </Head>
      <div className="h-screen w-screen">
        <div className="py-12 bg-white ">
          <div className="max-w-7xl mx-auto px-10 sm:px-6 lg:px-8">
            <div className="md:text-center">
              <h2 className="text-2xl text-indigo-600 font-semibold uppercase lg:text-3xl mb-6">
                Portfolio
              </h2>
              <p className="mt-2 text-3xl leading-8 font-extrabold text-gray-900 sm:text-4xl lg:text-5xl">
                Al-Kassim's Portfolio
              </p>
              <p className="mt-4 max-w-2xl text-xl text-gray-500 md:mx-auto">
                I'm a recent computer science graduate, skilled in MongoDB,
                Node, Express. Enthusiastic about startups and venture capital
                and solving problems for the base of the pyramid
              </p>
            </div>
          </div>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row">
            <ProjectCard
              variant="normal"
              image="/images/yelp.png"
              link="https://github.com/kassim99/yelp-camp"
              title="YelpCamp is a Full-Stack RESTful web application"
              date="27th August 2020"
            >
              User authorization/authentication using Passport.js Create a new
              campground Edit an existing campground Review a campground and see
              reviews RESTful routing using express Cloudinary for image upload
              and much more.
            </ProjectCard>

            <div className="flex-1  mx-6 mt-5 md:mt-0 border border-solid border-gray-400 rounded-md">
              <a
                href="https://github.com/kassim99/rate-repo/tree/master/rate-repository-app"
                target="_blank"
              >
                <div className="mx-auto lg:flex lg:flex-row ">
                  <img
                    className="rounded-tr-md rounded-tl-md h-auto w-full lg:h-80 lg:w-2/5 lg:rounded-bl-md lg:rounded-tr-none"
                    src="/images/repo.png"
                    alt=""
                  />
                  <div className="bg-white p-8 rounded-bl-md rounded-br-md lg:rounded-bl-none lg:rounded-tr-md  hover:bg-blue-100">
                    <h2 className="text-gray-700 font-semibold">
                      Rate Github Repositoires App is a React-Native Application
                    </h2>
                    <p className="text-sm text-gray-600 mt-4">
                      Rate Repository is a react-native application that allows
                      you to rate Github repositories, the backend for this
                      project was provided by fullstackopen, uses graphql,
                      asyncstorage and much more
                    </p>
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
                          <p className="text-gray-600 text-sm">
                            27th August 2020
                          </p>
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
                </div>
              </a>
            </div>
          </div>
          <div className="flex-1 mx-6 mt-8 border border-solid border-gray-400 rounded-md mb-32">
            <ProjectCard
              image="/images/drawers.jpg"
              title="iSight: An Object Detection System For The Visually Impaired"
              date="27th August 200"
              link="https://portal.bazeuniversity.edu.ng/student/assets/thesis/202011131817071362722731.pdf"
              variant="long"
            >
              iSight provides an intuitive user experience, using TensorFlow
              Lite object recognition, where users can simply scan their
              surroundings and click anywhere on the screen to receive verbal
              feedback of the objects in their environment.
            </ProjectCard>
          </div>
        </div>
      </div>
    </div>
  );
}
