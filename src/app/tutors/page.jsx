import TutorCard from "@/components/ui/TutorCard";

const TutorsPage = async () => {
  const res = await fetch(`http://localhost:5000/tutors`);
  const tutors = await res.json();
  return (
    <section className="max-w-7xl mx-auto space-y-10 px-4 md:px-0 my-20">
      <div className="animate__animated animate__fadeInDown">
        <h3 className="text-2xl md:text-5xl font-bold text-center">
          All Tutors
        </h3>
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tutors.map((tutor) => (
          <TutorCard key={tutor._id} tutor={tutor} />
        ))}
      </div>
    </section>
  );
};

export default TutorsPage;
