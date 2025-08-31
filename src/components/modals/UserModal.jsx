import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Eye } from "lucide-react";

function UserModal({ user }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Eye className="w-4 h-4 text-gray-400" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>User Documents</DialogTitle>
          <DialogDescription>
            Detailed information about the user.
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <p>
            <strong>Name:</strong> {user.Name} <br />
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
  );
}

export default UserModal;
