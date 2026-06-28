"use client";

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
  return (
    <section className="min-h-screen bg-linear-to-br from-slate-50 via-white to-blue-50 pt-10 pb-20">
      <div className="mx-auto max-w-7xl px-5">

        {/* Heading */}

        <div className="mb-12 text-center">

          <h1 className="mt-4 text-2xl md:text-5xl font-bold text-gray-900">
            Add New Tutor
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-gray-500">
            Fill in the tutor information below. Students will be
            able to discover and book your teaching sessions after
            publishing.
          </p>
        </div>

        <div className="">

          {/* Form */}

            <div className="rounded-[32px] border bg-white p-8 shadow-xl">

              <Form className="space-y-8 mx-auto">

                <div className="grid gap-6 md:grid-cols-2">

                  {/* Tutor Name */}

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-semibold">
                      <User size={18} />
                      Tutor Name
                    </label>

                    <input
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
                      type="text"
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

                    <select className="w-full rounded-xl border p-4 outline-none focus:border-primary">

                      <option>Select Subject</option>

                      <option>Mathematics</option>
                      <option>Physics</option>
                      <option>Chemistry</option>
                      <option>Biology</option>
                      <option>English</option>
                      <option>Programming</option>
                      <option>Economics</option>
                      <option>IELTS</option>

                    </select>
                  </div>

                  {/* Hourly Fee */}

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-semibold">
                      <DollarSign size={18} />
                      Hourly Fee
                    </label>

                    <input
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
                      type="text"
                      placeholder="Sun - Thu"
                      className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Time */}

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-semibold">
                      <Clock3 size={18} />
                      Available Time
                    </label>

                    <input
                      type="text"
                      placeholder="5 PM - 8 PM"
                      className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Slot */}

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-semibold">
                      <Users size={18} />
                      Total Slot
                    </label>

                    <input
                      type="number"
                      placeholder="10"
                      className="w-full rounded-xl border p-4 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Session Date */}

                  <div>
                    <label className="mb-2 flex items-center gap-2 font-semibold">
                      <CalendarDays size={18} />
                      Session Start Date
                    </label>

                    <input
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

                    <select className="w-full rounded-xl border p-4 outline-none focus:border-primary">

                      <option>Select Mode</option>

                      <option>Online</option>
                      <option>Offline</option>
                      <option>Both</option>

                    </select>

                  </div>

                </div>

                {/* Submit */}

                <Button
                  type="submit"
                  className="mt-6 w-full rounded-2xl bg-primary py-5 text-lg font-bold text-white transition hover:scale-[1.02] hover:shadow-xl"
                >
                  Publish Tutor
                </Button>

              </Form>

            </div>

        </div>
      </div>
    </section>
  );
};

export default AddTutorPage;