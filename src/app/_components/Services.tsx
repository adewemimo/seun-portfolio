const Services = () => {
  //const Services = ({ data }) => {
  //const { title, service_cards } = data;
  const service_cards = [
    {
      title: "Web and App Development",
      subtitle: "Frontend & Backend",
      price: "50 cad/hour",
      description:
        "I am a full stack web developer. I can build your website from scratch or work on your existing website/software. Technology stack are React, Next.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Heroku, Netlify, Vercel, Tailwind CSS, Bootstrap, Material UI, HTML, CSS, JavaScript, TypeScript, Python, WordPress, Wix, GraphQL, Storyblok, Prismic, and more.",
    },
    {
      title: "Mobile Development",
      subtitle: "Android, iOS & Hybrid",
      price: "50 cad/hour",
      description:
        "I can build your mobile app from scratch or work on your existing mobile app. verstile in the use of React Native.",
    },
  ];
  return (
    <section className="pb-32 pt-24">
      <h2 className="text-4xl font-bold text-center mb-20">
        {/* {title} */}
        Services
      </h2>
      <div className="py-4 px-4 mx-auto max-w-screen-xl">
        <div className="space-y-8 lg:grid lg:grid-cols-2 sm:gap-6 xl:gap-10 lg:space-y-0 place-items-center items-stretch">
          {service_cards.map((s) => (
            <ServiceCard data={s} key={s.title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

type ServiceCardProps = {
  data: {
    title: string;
    subtitle: string;
    price: string;
    description: string;
  };
};

const ServiceCard = ({ data }: ServiceCardProps) => {
  const { title, subtitle, price, description } = data;
  return (
    <>
      <div className="flex flex-col p-6 lg:mx-1 sm:mx-auto max-w-lg text-center rounded-lg border shadow border-gray-600 xl:p-8 text-white bg-neutral-800">
        <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
        <p className="font-light text-xl text-gray-400">{subtitle}</p>
        <p className="text-xl mt-4">{description}</p>
        <div className="flex justify-center my-8">
          <span className="mr-2 text-5xl font-extrabold">{price}</span>
        </div>
      </div>
    </>
  );
};
