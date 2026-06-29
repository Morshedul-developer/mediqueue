"use client";

import { AlertDialog, Button } from "@heroui/react";
import { Trash2 } from "lucide-react";
import { toast } from "react-toastify";

export function MyTutorAlert({ tutor, fetchTutors }) {
  const handleDelete = async (id) => {
    const res = await fetch(`http://localhost:5000/myAddedTutors/${id}`, {
      method: "DELETE",
    });

    const data = await res.json();

    if (data.deletedCount > 0) {
      toast("Tutor Deleted Successfully");
      fetchTutors();
    }
  };

  return (
    <AlertDialog>
      <Button
        className="rounded-full bg-red-100 text-red-600 h-10 w-10 transition hover:bg-red-600 hover:text-white"
      >
        <Trash2 size={18} />
      </Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>
                Delete tutor permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{tutor.tutorName}</strong>{" "}
                and all of its data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button onClick={() => handleDelete(tutor._id)} slot="close" variant="danger">
                Delete Tutor
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
  );
}
