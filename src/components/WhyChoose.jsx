import { BookOpen, BadgeCheck, Clock3, Users } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: <BadgeCheck size={36} className="text-primary" />,
      title: "Verified Tutors",
      desc: "Every tutor is carefully verified to ensure quality education.",
    },
    {
      icon: <BookOpen size={36} className="text-primary" />,
      title: "Expert Subjects",
      desc: "Find experienced tutors for school, college and professional skills.",
    },
    {
      icon: <Clock3 size={36} className="text-primary" />,
      title: "Flexible Schedule",
      desc: "Choose your preferred day and time according to your availability.",
    },
    {
      icon: <Users size={36} className="text-primary" />,
      title: "1-to-1 Learning",
      desc: "Personalized tutoring sessions to maximize learning outcomes.",
    },
  ];

  return (
    <section className="bg-slate-50 py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Why Choose <span className="text-primary">Our Tutors?</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Learn from experienced educators with flexible schedules,
            affordable pricing and personalized learning support.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((item, index) => (
            <div
              key={index}
              className="rounded-3xl bg-white p-8 text-center shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="mb-5 flex justify-center">{item.icon}</div>

              <h3 className="text-xl font-bold">{item.title}</h3>

              <p className="mt-3 text-gray-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;