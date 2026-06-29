"use client";

import Image from "next/image";
import {
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPin,
  Monitor,
  Wallet,
  Users,
} from "lucide-react";
import BookingSessionModal from "@/components/BookingSessionModal";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { useParams } from "next/navigation";
import { Alert } from "@heroui/react";

const TutorDetailsPage = () => {
  const { id } = useParams();
  const { data } = authClient.useSession();
  const user = data?.user;

  const [tutor, setTutor] = useState([]);

  const fetchTutors = async () => {
    const res = await fetch(`http://localhost:5000/tutors/${id}`);
    const data = await res.json();
    setTutor(data);
  };

  useEffect(() => {
    if (user?.email) {
      fetchTutors();
    }
  }, [user?.email]);

  return (
    <section className="bg-linear-to-b from-slate-50 to-white py-14">
      <div className="mx-auto max-w-7xl px-5">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Image */}
          <div className="relative overflow-hidden rounded-3xl">
            <Image
              src={tutor.photo}
              alt={tutor.tutorName}
              width={700}
              height={850}
              className="h-full w-full object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/10 to-transparent" />

            {/* Subject Badge */}
            <div className="absolute left-6 top-6">
              <span className="rounded-full bg-white/90 px-5 py-2 text-sm font-semibold text-primary shadow-lg backdrop-blur-md">
                {tutor.subject}
              </span>
            </div>

            {/* Hourly Fee Card */}
            <div className="absolute bottom-6 right-6 rounded-2xl border border-white/30 bg-white/90 px-6 py-4 shadow-2xl backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Hourly Fee
              </p>

              <h2 className="mt-1 text-4xl font-extrabold text-primary">
                ${tutor.hourlyFee}
                <span className="ml-1 text-base font-medium text-gray-500">
                  /hr
                </span>
              </h2>
            </div>
          </div>

          {/* Details */}

          <div>
            <p className="font-medium uppercase tracking-[4px] text-primary">
              Professional Tutor
            </p>

            <h1 className="mt-3 text-5xl font-extrabold text-gray-900">
              {tutor.tutorName}
            </h1>

            <div className="mt-4 flex items-center gap-3 text-lg text-gray-500">
              <GraduationCap className="text-primary" />

              <span>{tutor.institution}</span>
            </div>

            <p className="mt-8 leading-8 text-gray-600">
              Passionate and experienced tutor dedicated to helping students
              build confidence, master difficult concepts, and achieve
              outstanding academic performance through personalized one-to-one
              learning sessions.
            </p>

            {/* Info */}

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <MapPin className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Location</p>
                <h4 className="mt-1 font-semibold">{tutor.location}</h4>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <Monitor className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Teaching Mode</p>
                <h4 className="mt-1 font-semibold">{tutor.teachingMode}</h4>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <CalendarDays className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Available Days</p>
                <h4 className="mt-1 font-semibold">{tutor.availableDays}</h4>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <Clock3 className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Time Slot</p>
                <h4 className="mt-1 font-semibold">{tutor.availableTime}</h4>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <Users className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Available Slots</p>
                <h4 className="mt-1 text-xl font-bold text-primary">
                  {tutor.totalSlot}
                </h4>
              </div>

              <div className="rounded-2xl border bg-white p-5 shadow-sm">
                <Wallet className="mb-3 text-primary" />
                <p className="text-sm text-gray-500">Experience</p>
                <h4 className="mt-1 font-semibold">{tutor.experience}</h4>
              </div>
            </div>

            {/* Session */}

            <div className="mt-8 rounded-3xl border bg-primary/5 p-6">
              <p className="text-sm text-gray-500">Session Starts</p>

              <h3 className="mt-2 text-2xl font-bold">
                {tutor.sessionStartDate}
              </h3>
            </div>

            {tutor.totalSlot === 0 && (
              <Alert className="mt-6" status="danger">
                <Alert.Indicator />
                <Alert.Content >
                  <Alert.Title >Booking is not available yet for this tutor.</Alert.Title>
                </Alert.Content>
              </Alert>
            )}

            {/* Button */}

            <BookingSessionModal tutor={tutor} fetchTutors={fetchTutors} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TutorDetailsPage;
