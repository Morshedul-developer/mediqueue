"use client";

import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import { Button } from "@heroui/react";
import { X } from "lucide-react";

const MyBookedSessionsPage = () => {
  const { data } = authClient.useSession();
  const user = data?.user;

  const [bookings, setBookings] = useState([]);

  const fetchBookings = async () => {
    if (!user?.email) return;

    const res = await fetch(
      `http://localhost:5000/myBookedSessions?email=${user.email}`
    );

    const data = await res.json();
    setBookings(data);
  };

  useEffect(() => {
    fetchBookings();
  }, [user?.email]);

  const handleCancelBooking = async (id) => {
    const res = await fetch(
      `http://localhost:5000/myBookedSessions/${id}`,
      {
        method: "PATCH",
      }
    );

    const data = await res.json();

    if (data.modifiedCount > 0) {
      fetchBookings();
    }
  };

  return (
    <section className="mx-auto max-w-7xl px-5 py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">
          My Booked Sessions
        </h1>

        <p className="mt-2 text-gray-500">
          Manage all your booked tutoring sessions.
        </p>
      </div>

      <div className="overflow-x-auto rounded-3xl border border-gray-200 bg-white shadow-sm">
        <table className="w-full min-w-[900px]">
          <thead className="border-b bg-gray-50">
            <tr className="text-left text-gray-700">
              <th className="px-6 py-5 font-semibold">Name</th>

              <th className="px-6 py-5 font-semibold">Phone</th>

              <th className="px-6 py-5 font-semibold">Tutor Name</th>

              <th className="px-6 py-5 font-semibold">Email</th>

              <th className="px-6 py-5 font-semibold">Status</th>

              <th className="px-6 py-5 text-center font-semibold">
                Cancel
              </th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((booking) => (
              <tr
                key={booking._id}
                className="border-b transition hover:bg-gray-50"
              >
                {/* Student Name */}

                <td className="px-6 py-5">
                  {booking.studentName}
                </td>

                {/* Phone */}

                <td className="px-6 py-5">
                  {booking.phone}
                </td>

                {/* Tutor */}

                <td className="px-6 py-5">
                  {booking.tutorName}
                </td>

                {/* Email */}

                <td className="px-6 py-5">
                  {booking.studentEmail}
                </td>

                {/* Status */}

                <td className="px-6 py-5">
                  <span
                    className={`rounded-md px-3 py-1 text-sm font-medium ${
                      booking.status === "cancelled"
                        ? "bg-red-100 text-red-600"
                        : "bg-green-100 text-green-600"
                    }`}
                  >
                    {booking.status === "cancelled" ? "Cancelled": "Confirmed"}
                  </span>
                </td>

                {/* Cancel */}

                <td className="px-6 py-5 text-center">
                  <Button
                    isIconOnly
                    size="sm"
                    variant="light"
                    className="rounded-xl border hover:bg-red-50"
                    isDisabled={booking.status === "cancelled"}
                    onClick={() =>
                      handleCancelBooking(booking._id)
                    }
                  >
                    <X
                      className={
                        booking.status === "cancelled"
                          ? "text-gray-400"
                          : "text-red-500"
                      }
                      size={18}
                    />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {bookings.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold">
              No Booked Sessions
            </h2>

            <p className="mt-2 text-gray-500">
              You haven't booked any tutoring sessions yet.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyBookedSessionsPage;