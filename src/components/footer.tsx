import { Typography, Button, Input } from "@material-tailwind/react";

const LINKS = [
  {
    title: "Pages",
    items: ["Home", "About Us", "Our Services", "Contact Us"],
  },
];

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="px-8 pt-24 pb-8">
      <div className="container max-w-6xl flex flex-col mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 !w-full ">
          <div className="flex col-span-2 items-center gap-10 mb-10 lg:mb-0 md:gap-36">
            {LINKS.map(({ title, items }) => (
              <ul key={title}>
                <Typography variant="h6" color="blue-gray" className="mb-4">
                  {title}
                </Typography>
                {items.map((link) => (
                  <li key={link}>
                    <Typography
                      as="a"
                      href="#"
                      className="py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900"
                    >
                      {link}
                    </Typography>
                  </li>
                ))}
              </ul>
            ))}
          </div>
          <div className="">
            <Typography variant="h6" className="mb-3 text-left">
              Contact Details
            </Typography>
            <Typography className="!text-gray-500 font-normal mb-4 text-base">
              Phone/WhatsApp: +91 82705 94195
            </Typography>
            <Typography variant="small" className="!text-gray-500 font-medium mb-2 text-left">
              Email: yazhfabricsandsolutions@gmail.com
            </Typography>
            <Typography variant="small" className="!text-gray-500 font-medium mb-2 text-left">
              Address: 28/2, Taj Complex, Bypass Road, 
              Udumalpet-642126, TN.
            </Typography>
          </div>
        </div>
        <Typography
          color="blue-gray"
          className="md:text-center mt-16 font-normal !text-gray-700"
        >
          &copy; {CURRENT_YEAR}{' '}
          <a href="https://www.creative-tim.com" target="_blank">
            by Yazharasu
          </a>
        </Typography>
      </div>
    </footer>
  );
}

export default Footer;
