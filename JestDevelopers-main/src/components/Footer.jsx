import { platformLinks, communityLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="mt-10 bg-red-700">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="grid sm:grid-cols-2 gap-4 border-b border-neutral-100 py-6">
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold">Jest Developers</h1>
            <p className=" text-neutral-200 text-sm font-extralight leading-6">
              Jest Developers enhances everyday lives by providing software that
              digitalizes to improve business growth with latest tools and
              technologies.
            </p>
            <ul className="flex justify-evenly md:justify-normal gap-4 mt-6 ">
              {platformLinks.map((link, index) => (
                <li key={index} className="flex">
                  <a
                    className="text-neutral-200 border border-white rounded-full p-2 transition duration-1000 ease-in-out hover:bg-neutral-200 hover:text-red-600"
                    href={link.href}
                  >
                    {link.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {communityLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      className="text-neutral-200 text-sm hover:text-white font-extralight"
                      href={link.href}
                    >
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-4">Contact Info</h3>
              <p className="text-neutral-200 text-sm font-extralight py-1">
                Plot# __, Phase-3, Kavuri Hills, Guntur, Andhra Pradesh, India
              </p>
              <p className="text-neutral-200 text-sm font-extralight py-1">
                +91 xxx xxx xxxx
              </p>
              <p className="text-neutral-200 text-sm font-extralight py-1">
                jestdevelopers@gmail.com
              </p>
              <a
                href="http://jestdevelopers.in"
                className="text-neutral-200 text-sm font-extralight py-1"
              >
                https://jestdevelopers.in
              </a>
            </div>
          </div>
        </div>
        <div className="my-6">
          <h6 className="text-neutral-200 text-sm font-extralight">
            Copyright © 2024 JestDevelopers. All rights reserved.
          </h6>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
