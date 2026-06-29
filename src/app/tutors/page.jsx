"use client";

import { useEffect, useState } from "react";
import TutorCard from "@/components/ui/TutorCard";
import { Spinner } from "@heroui/react";

export default function TutorsPage() {
  const [tutors, setTutors] = useState([]);
  const [search, setSearch] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchTutors = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_URL}/tutors?search=${search}&startDate=${startDate}&endDate=${endDate}`,
    );

    const data = await res.json();

    setTutors(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchTutors();
  }, [search, startDate, endDate]);

  return (
    <section className="max-w-7xl mx-auto my-20 px-4">
      <h1 className="mb-10 text-center text-5xl font-bold">All Tutors</h1>

      {/* Search & Filter */}

      <div className="mb-10 grid gap-4 md:grid-cols-4">
        <input
          type="text"
          placeholder="Search Tutor..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="rounded-lg border p-3"
        />

        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          className="rounded-lg border p-3"
        />

        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          className="rounded-lg border p-3"
        />

        <button
          onClick={() => {
            setSearch("");
            setStartDate("");
            setEndDate("");
          }}
          className="rounded-lg bg-primary text-white"
        >
          Reset
        </button>
      </div>

      {loading ? (
        <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted">Loading</span>
      </div>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {tutors.map((tutor) => (
            <TutorCard key={tutor._id} tutor={tutor} />
          ))}
        </div>
      )}
    </section>
  );
}
