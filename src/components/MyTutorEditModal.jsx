"use client";

import { Pencil } from "lucide-react";
import { Button, Form, Label, Modal, Surface } from "@heroui/react";
import { toast } from "react-toastify";
import { authClient } from "@/lib/auth-client";

export default function MyTutorEditModal({ tutor, fetchTutors }) {
  const handleUpdateTutor = async (e, id) => {
    e.preventDefault();

    const form = e.currentTarget;

    const updatedTutor = {
      tutorName: form.tutorName.value,
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
    };

    const {data:tokenData} = await authClient.token();
    const res = await fetch(`${NEXT_PUBLIC_SERVER_URL}/myAddedTutors/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${tokenData.token}`
      },
      body: JSON.stringify(updatedTutor),
    });

    const data = await res.json();

    if (data.modifiedCount > 0) {
      toast.success("Tutor Updated Successfully");
      fetchTutors();
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button className="h-10 w-10 rounded-full bg-blue-100 text-blue-600 transition hover:bg-blue-600 hover:text-white">
        <Pencil size={18} />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-5xl rounded-3xl">
            {/* Header */}
            <Modal.Header className="border-b pb-5">
              <div className="w-full text-center">
                <Modal.Heading className="text-3xl font-bold">
                  Edit Tutor
                </Modal.Heading>

                <p className="mt-2 text-sm text-gray-500">
                  Update your tutor information.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-8">
              <Surface className="rounded-2xl p-6">
                <Form
                  onSubmit={(e) => handleUpdateTutor(e, tutor._id)}
                  className="grid grid-cols-1 gap-5 md:grid-cols-2"
                >
                  {/* Tutor Name */}
                  <div>
                    <Label>Tutor Name</Label>
                    <input
                      name="tutorName"
                      type="text"
                      defaultValue={tutor.tutorName}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Photo */}
                  <div>
                    <Label>Photo URL</Label>
                    <input
                      name="photo"
                      type="text"
                      defaultValue={tutor.photo}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Subject */}
                  <div>
                    <Label>Subject</Label>
                    <select
                      name="subject"
                      defaultValue={tutor.subject}
                      className="mt-2 h-12 w-full rounded-xl border px-3 outline-none focus:border-primary"
                    >
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
                    <Label>Hourly Fee</Label>
                    <input
                      name="hourlyFee"
                      type="number"
                      defaultValue={tutor.hourlyFee}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Available Days */}
                  <div>
                    <Label>Available Days</Label>
                    <input
                      name="availableDays"
                      type="text"
                      defaultValue={tutor.availableDays}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Available Time */}
                  <div>
                    <Label>Available Time</Label>
                    <input
                      name="availableTime"
                      type="text"
                      defaultValue={tutor.availableTime}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Total Slot */}
                  <div>
                    <Label>Total Slot</Label>
                    <input
                      name="totalSlot"
                      type="number"
                      defaultValue={tutor.totalSlot}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Session Date */}
                  <div>
                    <Label>Session Start Date</Label>
                    <input
                      name="sessionStartDate"
                      type="date"
                      defaultValue={tutor.sessionStartDate}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Institution */}
                  <div>
                    <Label>Institution</Label>
                    <input
                      name="institution"
                      type="text"
                      defaultValue={tutor.institution}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Location */}
                  <div>
                    <Label>Location</Label>
                    <input
                      name="location"
                      type="text"
                      defaultValue={tutor.location}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Teaching Mode */}
                  <div>
                    <Label>Teaching Mode</Label>
                    <select
                      name="teachingMode"
                      defaultValue={tutor.teachingMode}
                      className="mt-2 h-12 w-full rounded-xl border px-3 outline-none focus:border-primary"
                    >
                      <option value="Online">Online</option>
                      <option value="Offline">Offline</option>
                      <option value="Both">Both</option>
                    </select>
                  </div>

                  {/* Experience */}
                  <div className="md:col-span-2">
                    <Label>Experience</Label>
                    <textarea
                      name="experience"
                      defaultValue={tutor.experience}
                      rows={4}
                      className="mt-2 w-full rounded-xl border p-3 outline-none focus:border-primary"
                    />
                  </div>

                  {/* Buttons */}
                  <div className="md:col-span-2 flex justify-end gap-3">
                    <Button
                      slot="close"
                      variant="secondary"
                      className="rounded-xl"
                    >
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="rounded-xl bg-primary px-8 text-white"
                    >
                      Update Tutor
                    </Button>
                  </div>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
