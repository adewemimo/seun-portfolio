const Faq = () => {
  //const Faq = ({ data }) => {
  //const { title, faq_cards } = data;
  const faq_cards = [
    {
      question: "What is your hourly rate?",
      answer: "My hourly rate is 50 cad/hour.",
    },
    {
      question: "What is your availability?",
      answer: "I am available to work on your project full-time.",
    },
    {
      question: "What is your preferred method of communication?",
      answer:
        "My preferred method of communication is email. I am also available for calls and video calls.",
    },
    {
      question: "What is your preferred method of payment?",
      answer:
        "My preferred method of payment is PayPal. I am also open to other methods of payment.",
    },
    {
      question: "What is your preferred technology stack?",
      answer:
        "My preferred technology stack are React, Next.js, Node.js, Express.js, MongoDB, MySQL, PostgreSQL, Firebase, AWS, Heroku, Netlify, Vercel, Tailwind CSS, Bootstrap, Material UI, HTML, CSS, JavaScript, TypeScript, Python, WordPress, Wix, GraphQL, Storyblok, Prismic, and more.",
    },
  ];

  return (
    <section className="px-52 bg-zinc-950 pt-20 pb-36">
      <h2 className="text-4xl font-bold text-center mb-20">
        {/* {title} */}
        FAQ
      </h2>
      <div className="grid gap-10 lg:grid-cols-2 xl:grid-cols-2">
        {faq_cards.map((f) => (
          <FaqCard data={f} key={f.question} />
        ))}
      </div>
    </section>
  );
};

export default Faq;

type FaqCardProps = {
  data: {
    question: string;
    answer: string;
  };
};

const FaqCard = ({ data }: FaqCardProps) => {
  const { question, answer } = data;
  return (
    <div className="lg:col-span-2 xl:col-auto">
      <div className="flex flex-col justify-between w-full h-full px-5 rounded-2xl py-5 bg-neutral-800">
        <h3 className="text-2xl text-gray-400 pb-2">{question}</h3>
        <p className="text-xl leading-normal">{answer}</p>
      </div>
    </div>
  );
};
