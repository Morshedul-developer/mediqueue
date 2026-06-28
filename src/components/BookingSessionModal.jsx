"use client";

import { authClient } from "@/lib/auth-client";
import {
  Button,
  Form,
  Input,
  Label,
  Modal,
  Surface,
  TextField,
} from "@heroui/react";
import { ArrowRight } from "lucide-react";

export default function BookingSessionModal({ tutor }) {
  const { data } = authClient.useSession();
  const user = data?.user;

  const handleBookSession = async (e) => {
    e.preventDefault();

    const form = e.currentTarget;

    const bookingData = {
      tutorId: tutor._id,
      tutorName: tutor.tutorName,
      tutorEmail: tutor.email,
      phone: form.phone.value,

      studentName: user?.name,
      studentEmail: user?.email,
      studentPhoto: user?.image,
    };

    const res = await fetch("http://localhost:5000/bookSession", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(bookingData),
    });

    const data = await res.json();

    if (data.insertedId) {
      alert("Session Booked Successfully");
      form.reset();
    }
  };

  return (
    <Modal>
      {/* Trigger */}
      <Button className="mt-10 flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-primary py-5 text-lg font-semibold transition hover:scale-[1.02] hover:shadow-xl">
        Book Session
        <ArrowRight size={20} />
      </Button>

      <Modal.Backdrop>
        <Modal.Container placement="center">
          <Modal.Dialog className="w-full max-w-lg rounded-3xl">
            <Modal.CloseTrigger />

            {/* Header */}
            <Modal.Header className="text-center">
              <div className="w-full">
                <Modal.Heading className="text-3xl font-bold">
                  Book Session
                </Modal.Heading>

                <p className="mt-2 text-gray-500">
                  Confirm your booking information.
                </p>
              </div>
            </Modal.Header>

            {/* Body */}
            <Modal.Body className="p-6">
              <Surface className="rounded-2xl p-5">
                <Form
                  onSubmit={handleBookSession}
                  className="flex flex-col gap-5"
                >
                  {/* Student Name */}
                  <TextField
                    name="studentName"
                    defaultValue={user?.name}
                    isReadOnly
                  >
                    <Label>Your Name</Label>
                    <Input />
                  </TextField>

                  {/* Student Email */}
                  <TextField
                    name="studentEmail"
                    defaultValue={user?.email}
                    isReadOnly
                  >
                    <Label>Your Email</Label>
                    <Input />
                  </TextField>

                  {/* Tutor Name */}
                  <TextField
                    name="tutorName"
                    defaultValue={tutor.tutorName}
                    isReadOnly
                  >
                    <Label>Tutor Name</Label>
                    <Input />
                  </TextField>

                  {/* Phone */}
                  <TextField name="phone">
                    <Label>Phone Number</Label>
                    <Input placeholder="Enter your phone number" required />
                  </TextField>

                  {/* Footer */}
                  <Modal.Footer className="px-0">
                    <Button slot="close" variant="secondary">
                      Cancel
                    </Button>

                    <Button
                      type="submit"
                      slot="close"
                      className="bg-primary text-white"
                    >
                      Book Session
                    </Button>
                  </Modal.Footer>
                </Form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
