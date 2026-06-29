import {
  Search,
  CalendarDays,
  BookMarked,
  GraduationCap,
} from "lucide-react";

const LearningJourney = () => {
  const steps = [
    {
      icon: <Search size={38} className="text-primary" />,
      title: "Find Tutor",
      desc: "Browse tutors by subject and choose the perfect mentor.",
    },
    {
      icon: <CalendarDays size={38} className="text-primary" />,
      title: "Book Session",
      desc: "Select an available slot and confirm your tutoring session.",
    },
    {
      icon: <BookMarked size={38} className="text-primary" />,
      title: "Start Learning",
      desc: "Attend engaging one-to-one sessions with your tutor.",
    },
    {
      icon: <GraduationCap size={38} className="text-primary" />,
      title: "Achieve Success",
      desc: "Improve your knowledge and reach your academic goals.",
    },
  ];

  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-5">
        <div className="text-center">
          <h2 className="text-4xl font-bold">
            Your Learning <span className="text-primary">Journey</span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-500">
            Get started in just a few simple steps and connect with the best
            tutors for your learning goals.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="relative rounded-3xl border bg-white p-8 shadow-lg transition hover:shadow-2xl"
            >
              <div className="mb-5">{step.icon}</div>

              <span className="absolute right-6 top-6 text-5xl font-extrabold text-gray-100">
                0{index + 1}
              </span>

              <h3 className="text-xl font-bold">{step.title}</h3>

              <p className="mt-3 text-gray-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningJourney;