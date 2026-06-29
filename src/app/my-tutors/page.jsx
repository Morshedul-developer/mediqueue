"use client";
import { Button } from "@heroui/react";
import { useEffect, useState } from "react";
import { authClient } from "@/lib/auth-client";
import MyTutorEditModal from "@/components/MyTutorEditModal";
import { toast } from "react-toastify";
import { MyTutorAlert } from "@/components/MyTutorAlert";

const MyTutorsPage = () => {
  const { data } = authClient.useSession();
const user = data?.user;

const [tutors, setTutors] = useState([]);

const fetchTutors = async () => {
  const {data:tokenData} = await authClient.token();
  const res = await fetch(
    `http://localhost:5000/myAddedTutors?email=${user?.email}`, {
      headers: {
        authorization: `Bearer ${tokenData?.token}`
      }
    }
  );

  const data = await res.json();
  setTutors(data);
};

useEffect(() => {
  if (user?.email) {
    fetchTutors();
  }
}, [user?.email]);


  return (
    <section className="max-w-7xl mx-auto px-5 py-14">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900">My Tutors</h1>

        <p className="mt-2 text-gray-500">Manage all your published tutors.</p>
      </div>

      <div className="overflow-x-auto rounded-3xl border bg-white shadow-lg">
        <table className="w-full">
          <thead className="bg-slate-50">
            <tr className="text-left">
              <th className="px-6 py-5">Tutor Name</th>

              <th className="px-6 py-5">Subject</th>

              <th className="px-6 py-5">Available</th>

              <th className="px-6 py-5">Hourly Fee</th>

              <th className="px-6 py-5">Slot</th>

              <th className="px-6 py-5">Registration Date</th>

              <th className="px-6 py-5 text-center">Action</th>
            </tr>
          </thead>

          <tbody>
            {tutors.map((tutor) => (
              <tr
                key={tutor._id}
                className="border-t hover:bg-slate-50 transition"
              >
                {/* Tutor */}

                <td className="px-6 py-5">
                  <h2 className="font-semibold">{tutor.tutorName}</h2>
                </td>

                {/* Subject */}

                <td className="px-6 py-5">{tutor.subject}</td>

                {/* Available */}

                <td className="px-6 py-5">
                  <div>
                    <p>{tutor.availableDays}</p>

                    <p className="text-sm text-gray-500">
                      {tutor.availableTime}
                    </p>
                  </div>
                </td>

                {/* Fee */}

                <td className="px-6 py-5 font-semibold text-primary">
                  ${tutor.hourlyFee}
                </td>

                {/* Slot */}

                <td className="px-6 py-5">
                  <span className="rounded-full bg-green-100 px-3 py-1 text-sm font-medium text-green-700">
                    {tutor.totalSlot}
                  </span>
                </td>

                {/* Date */}

                <td className="px-6 py-5">{tutor.sessionStartDate}</td>

                {/* Action */}

                <td className="px-6 py-5">
                  <div className="flex items-center justify-center gap-3">
                    
                        <MyTutorEditModal tutor={tutor} fetchTutors={fetchTutors}/>
                      
                    
                      <MyTutorAlert tutor={tutor} fetchTutors={fetchTutors} />
                    
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {tutors.length === 0 && (
          <div className="py-20 text-center">
            <h2 className="text-2xl font-bold">No Tutors Found</h2>

            <p className="mt-2 text-gray-500">
              Publish your first tutor to see it here.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default MyTutorsPage;
