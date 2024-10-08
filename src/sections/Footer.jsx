import { copyrightSign } from "../Assets/icons";
import { footerLogo } from "../Assets/images";
import { footerLinks, socialMedia } from "../constants";

export default function Footer() {
  return (
    <footer className="max-container">
      <div className="flex justify-between items-start gap-20 max-lg:flex-col flex-wrap">
        <div className="flex flex-col items-start">
          <a href="/">
            <img src={footerLogo} width={150} height={46} />
          </a>
          <p className="sm:max-w-sm mt-6 text-base leading-7 font-montserrat text-white-400">
            {" "}
            test
            Your perfect Size In Store. Get Rewards
          </p>
          <div className="flex  items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <div className="bg-white flex justify-center items-center w-12 h-12 rounded-full">
                <img src={icon.src} alt={icon.alt} width={24} height={24} />
              </div>
                    ))}
          </div>
        </div>
        <div className="flex justify-between flex-1 lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section} className="">
              <h4 className="text-white font-montserrat text-2xl leading-normal mt-6">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                          <li
                            key={link.name}
                            className="mt-3 text-white-400 font-montserrat  text-base leading-normal hover:text-coral-red cursor-pointer"
                            >
                            <a>{link.name}</a>
                          </li>
                              ))}
              </ul>
            </div>
                ))}
        </div>
      </div>

      <div className="flex justify-between text-white-400 mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 items-center font-montserrat cursor-pointer gap-2">
          <img
            src={copyrightSign}
            alt="copyRight"
            width={20}
            height={20}
            className="rounded-full m-0"
            />
          <p className="">Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer ">Terms & Conditions</p>
      </div>
    </footer>
    );
}
