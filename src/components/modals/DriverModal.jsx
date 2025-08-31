import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

function DriverModal({ user }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Eye className="w-4 h-4 text-gray-400" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Driver Documents</DialogTitle>
          <DialogDescription>
            View Aadhar Card and Driving License here.
          </DialogDescription>
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
          <div className="flex gap-5 justify-center">
            <img
              src={user.aadharFront}
              alt="Aadhar"
              className="w-50 h-32 rounded border "
            />
            <img
              src={user.dlFront}
              alt="Driving License"
              className="w-50 h-32 rounded border"
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DriverModal;
