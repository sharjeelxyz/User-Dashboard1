import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

import { EllipsisVertical } from "lucide-react";

function DriverModal({ user }) {
  const handleDelete = () => {
    alert(`Driver with ID ${user.ID} deleted.`);
  };

  return (
    <Dialog>
      <DialogTrigger>
        <EllipsisVertical className="cursor-pointer w-4 h-4" />
      </DialogTrigger>

      <DialogContent>
        <div className="grid grid-cols-3 gap-4 p-4">
          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-around mb-3 p-2 border bg-gray-200 cursor-pointer active:scale-95">
                <h2>Details</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Driver Details</DialogTitle>
                <DialogDescription>View Driver Details here.</DialogDescription>
              </DialogHeader>

              <div className="space-y-4">
                <p>
                  <strong>Driver Name:</strong> {user.Name} <br />
                  <strong>ID:</strong> {user.ID} <br />
                  <strong>Account Holder Name:</strong> {user.accountHolderName}
                  <br />
                  <strong>Bank Name:</strong> {user.bankName} <br />
                  <strong>Account Number:</strong> {user.accountNumber} <br />
                  <strong>IFSC Code:</strong> {user.IFSCCode} <br />
                </p>
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-around mb-3 p-2 border bg-gray-200 cursor-pointer active:scale-95">
                <h2>Documents</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Driver Documents</DialogTitle>
                <DialogDescription>
                  View Driver Documents here.
                </DialogDescription>
              </DialogHeader>

              <div className="flex gap-5 justify-center">
                <img
                  src={user.aadharFront}
                  alt="Aadhar"
                  className="w-50 h-32 rounded border"
                />
                <img
                  src={user.dlFront}
                  alt="Driving License"
                  className="w-50 h-32 rounded border"
                />
              </div>
            </DialogContent>
          </Dialog>

          <Dialog>
            <DialogTrigger asChild>
              <div className="flex justify-around mb-3 p-2 border bg-red-500 text-white cursor-pointer active:scale-95">
                <h2>Delete</h2>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Delete Driver</DialogTitle>
                <DialogDescription>
                  Are you sure you want to delete this driver?
                </DialogDescription>
              </DialogHeader>
              <div className="space-y-4">
                <p>This action cannot be undone.</p>
                <button
                  className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
                  onClick={() => {
                    handleDelete();
                  }}
                >
                  Confirm Delete
                </button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DriverModal;
