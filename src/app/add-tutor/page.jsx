"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Form } from "@heroui/react";
import {
  BookOpen,
  CalendarDays,
  Clock3,
  DollarSign,
  GraduationCap,
  MapPin,
  School,
  User,
  Users,
} from "lucide-react";

const AddTutorPage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;
  const handleAddTutor = async (e) => {
    e.preventDefault();

    const form = e.target;

    const tutorData = {
      tutorName: form.name.value,
      photo: form.photo.value,
      subject: form.subject.value,
      hourlyFee: Number(form.hourlyFee.value),
      availableDays: form.availableDays.value,
      availableTime: form.availableTime.value,
      totalSlot: Number(form.totalSlot.value),
      sessionStartDate: form.sessionStartDate.value,
      institution: form.institution.value,
      experience: form.experience.value,
      location: form.location.value,
      teachingMode: form.teachingMode.value,
      email: user?.email,
      createdBy: user?.name,
      createdAt: new Date(),
    };

    const res = await fetch(`http://localhost:5000/addMyTutor`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(tutorData),
    });
    const data = await res.json();
    console.log(data);
    if (data.insertedId) {
      alert("Tutor added successfully!");
      form.reset();
    }
  };
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-5">
        {/* Heading */}

        <div className="mb-12 text-center">
          <h1 className="mt-4 text-2xl md:text-5xl font-bold text-gray-900">
            Add New Tutor
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Fill in the tutor information below. Students will be able to
            discover and book your teaching sessions after publishing.
          </p>
        </div>

        <div className="">
          {/* Form */}

          <div className="rounded-[32px] border bg-white p-8 shadow-xl">
            <Form onSubmit={handleAddTutor} className="space-y-8 mx-auto">
              <div className="grid gap-6 md:grid-cols-2">
                {/* Tutor Name */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <User size={18} />
                    Tutor Name
                  </label>

                  <input
                    name="name"
                    type="text"
                    placeholder="Enter Tutor Name"
                    className="w-full rounded-xl border p-4 outline-none transition focus:border-primary"
                  />
                </div>

                {/* Photo */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <User size={18} />
                    Photo URL
                  </label>

                  <input
                    name="photo"
                    type="url"
                    placeholder="Image URL"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Subject */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <BookOpen size={18} />
                    Subject
                  </label>

                  <select
                    name="subject"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  >
                    <option value="">Select Subject</option>
                    <option value="Mathematics">Mathematics</option>
                    <option value="Physics">Physics</option>
                    <option value="Chemistry">Chemistry</option>
                    <option value="Biology">Biology</option>
                    <option value="English">English</option>
                    <option value="Programming">Programming</option>
                    <option value="Economics">Economics</option>
                    <option value="IELTS">IELTS</option>
                  </select>
                </div>

                {/* Hourly Fee */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <DollarSign size={18} />
                    Hourly Fee
                  </label>

                  <input
                    name="hourlyFee"
                    type="number"
                    placeholder="30"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Available Days */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <CalendarDays size={18} />
                    Available Days
                  </label>

                  <input
                    name="availableDays"
                    type="text"
                    placeholder="Sun - Thu"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Available Time */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <Clock3 size={18} />
                    Available Time
                  </label>

                  <input
                    name="availableTime"
                    type="text"
                    placeholder="5 PM - 8 PM"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Total Slot */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <Users size={18} />
                    Total Slot
                  </label>

                  <input
                    name="totalSlot"
                    type="number"
                    placeholder="10"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Session Start Date */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <CalendarDays size={18} />
                    Session Start Date
                  </label>

                  <input
                    name="sessionStartDate"
                    type="date"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Institution */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <School size={18} />
                    Institution
                  </label>

                  <input
                    name="institution"
                    type="text"
                    placeholder="University Name"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Experience */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <GraduationCap size={18} />
                    Experience
                  </label>

                  <input
                    name="experience"
                    type="text"
                    placeholder="5 Years"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Location */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <MapPin size={18} />
                    Location
                  </label>

                  <input
                    name="location"
                    type="text"
                    placeholder="City"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  />
                </div>

                {/* Teaching Mode */}
                <div>
                  <label className="mb-2 flex items-center gap-2 font-semibold">
                    <BookOpen size={18} />
                    Teaching Mode
                  </label>

                  <select
                    name="teachingMode"
                    className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                  >
                    <option value="">Select Mode</option>
                    <option value="Online">Online</option>
                    <option value="Offline">Offline</option>
                    <option value="Both">Both</option>
                  </select>
                </div>
              </div>

              {/* Submit */}

              <Button
                type="submit"
                className="mt-6 w-full rounded-2xl bg-primary py-5 text-lg font-bold text-white transition hover:scale-[1.02] hover:shadow-xl"
              >
                Submit Tutor
              </Button>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddTutorPage;
