import about from "../assets/about.jpg";
const About = () => {
  return (
    <div className="max-w-7xl mx-auto pt-10 px-6">
      <div className="flex flex-col justify-center items-center mt-2 lg:mt-4">
        <div className="text-center">
          <span className="bg-neutral-900 text-red-600 rounded-full h-10 text-lg font-medium px-2 py-1 uppercase">
            About Us
          </span>
        </div>

        <div className="flex flex-col mt-10 items-center bg-neutral-950 border border-neutral-800 rounded-lg shadow lg:flex-row md:w-full  cursor-default">
          <img
            className="object-cover w-full rounded-t-lg lg:rounded-r-none h-80 lg:h-auto lg:w-[440px]    "
            src={about}
            alt="About Image"
          />
          <div className="flex flex-col justify-between px-8 leading-normal">
            <h5 className="mb-4 mt-4 md:mt-4 text-2xl lg:text-3xl font-bold tracking-tight bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
              Our Mission
            </h5>
            <p className="mb-3 font-normal text-justify ">
              &ldquo;In the digital era a website or an application has become
              an essential tool for the business growth and maintainance. But
              clearly there is a gap between developers and small scale business
              people. We, the{" "}
              <span className="text-red-600 font-medium">JEST DEVELOPERS</span>{" "}
              are trying to be the bridge between the Developers and
              Entrprenures. For Entrprenures, we are bringing web developement
              and app development services to your door step. For Students, we
              are bringing an apportunity to explore the real world requiremnts
              to your books and creating a scope to learn with flexible working
              hours&rdquo;
            </p>
          </div>
        </div>
        <p className="text-center mt-10">
          Come and join us. Lets build digital Bharat together.
        </p>
      </div>
    </div>
  );
};

export default About;
