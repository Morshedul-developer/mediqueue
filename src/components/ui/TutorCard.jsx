"use client";

import Image from "next/image";
import Link from "next/link";
import { CalendarDays, Clock3, GraduationCap, MapPin } from "lucide-react";
import { Button } from "@heroui/react";

export default function TutorCard({ tutor }) {
  return (
      <div className="group overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-500 hover:-translate-y-2 hover:border-primary/30 hover:shadow-2xl">
        {/* Image */}
        <div className="relative h-72 overflow-hidden">
          <Image
            src={tutor.photo}
            alt={tutor.tutorName}
            fill
            className="object-cover transition duration-700 group-hover:scale-110"
          />

          {/* Overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />

          {/* Subject */}
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-4 py-1 text-xs font-semibold text-primary backdrop-blur">
            {tutor.subject}
          </span>

          {/* Price */}
          <div className="absolute bottom-5 right-5 rounded-xl bg-primary px-4 py-2 text-white shadow-lg">
            <p className="text-xs">Hourly Fee</p>
            <h3 className="text-xl font-bold">${tutor.hourlyFee}</h3>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-5 p-6">
          {/* Tutor Name */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 transition group-hover:text-primary">
              {tutor.tutorName}
            </h2>

            <p className="mt-1 flex items-center gap-2 text-sm text-gray-500">
              <GraduationCap size={16} />
              {tutor.institution}
            </p>
          </div>

          {/* Info */}
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-sm text-gray-600">
              <MapPin size={17} className="text-primary" />
              {tutor.location}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <CalendarDays size={17} className="text-primary" />
              {tutor.availableDays}
            </div>

            <div className="flex items-center gap-3 text-sm text-gray-600">
              <Clock3 size={17} className="text-primary" />
              {tutor.availableTime}
            </div>
          </div>

          {/* Bottom */}
          <div className="flex items-center justify-between border-t pt-5">
            <div>
              <p className="text-xs text-gray-500">Available Slots</p>

              <h3 className="text-xl font-bold text-primary">
                {tutor.totalSlot}
              </h3>
            </div>

            <Link href={`/tutors/${tutor._id}`}>
              <Button className="rounded-xl bg-primary px-6 py-3 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-primary/90 cursor-pointer">
                Book Session
              </Button>
            </Link>
          </div>
        </div>
      </div>
  );
}
