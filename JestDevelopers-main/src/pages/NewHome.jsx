import { Link } from "react-router-dom";

const NewHome = () => {
  return (
    <>
      <div className="relative">
        {/* Background image with opacity */}
        <div
          className="absolute inset-0 bg-center bg-cover"
          style={{
            backgroundImage: `url("src/assets/home.png")`,
            opacity: "0.4", // Adjust the opacity value as needed
          }}
        ></div>
        {/* Content on top of the background image */}
        <div className="relative z-10 max-w-7xl p-8 sm:p-20">
          <div className="flex flex-col mt-6 lg:mt-20">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl tracking-wide font-semibold">
              Digitalizing Local{" "}
              <span className="bg-gradient-to-r from-red-600 to-red-800 text-transparent bg-clip-text">
                Bharat
              </span>
            </h1>
            <p className=" mt-4 lg:mt-8 text-xs sm:text-base font-extralight md:text-lg text-neutral-100 max-w-4xl">
              Building a community of developers to build digital India
            </p>
            <p className="mt-4 lg:mt-8 text-xs sm:text-base font-extralight lg:text-lg text-neutral-100 max-w-4xl">
              Empowering Developers, Transforming India Digitally! Join us as we
              unite talents, foster collaboration, and innovate towards a
              digitally empowered nation. Together, let&apos;s code the future
              of India, one breakthrough at a time!
            </p>
            <div className="flex flex-wrap my-8 gap-4">
              <Link
                to="/about"
                className="w-full sm:w-40 py-3 px-4 text-sm text-center transition duration-500 ease-in-out bg-red-600 hover:bg-red-700 active:bg-red-700 focus:outline-none focus:ring focus:ring-red-300 "
              >
                Explore more
              </Link>

              <Link
                to="/blog"
                className="w-full sm:w-40 text-sm text-center py-3 px-4 border hover:text-red-700 hover:bg-neutral-50 transition-all duration-700 ease-in-out"
              >
                Visit our blogs
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewHome;
