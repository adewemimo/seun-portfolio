import Link from "next/link";

type NavbarProps = {
  data: {
    title: string;
    cta_button_text: string;
  };
};

const Navbar = ({ data }: NavbarProps) => {
  const { title, cta_button_text } = data;
  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        <div className="flex flex-wrap items-center justify-between w-full lg:w-auto">
          <Link href="/">
            <span className="flex items-center space-x-2 text-2xl font-medium text-gray-100">
              <span>{title}</span>
            </span>
          </Link>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/fr">French</Link>
          <Link href="/en">English</Link>
          <Link
            href="#contact"
            className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5"
          >
            {cta_button_text}
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
