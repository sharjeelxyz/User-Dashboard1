import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import UserModal from "../components/modals/User-Modals/UserModal";

const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://loadgo.in/loadgo/getUser")
      .then((res) => res.json())
      .then((data) => {
        const drivers = Array.isArray(data) ? data : data.data;
        const formatted = drivers.map((user) => ({
          ID: user.id,
          Name: user.name,
          Email: user.email,
          LoginPin: user.loginPin,
          PhoneNo: user.phone,
          CreatedOn: user.createdOn,
          // for the modal
          aadharFront: user.aadharFront,
          dlFront: user.licenseFront,
          accountHolderName: user.accountHolderName || "N/A",
          bankName: user.bankName || "N/A",
          accountNumber: user.accountNumber || "N/A",
          IFSCCode: user.IFSCCode || "N/A",
        }));
        setUsers(formatted);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, []);

  const filteredUsers = users.filter((user) =>
    [user.Name, user.Email, user.PhoneNo].some((words) =>
      words.toLowerCase().includes(search.toLowerCase())
    )
  );

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">User Table</h1>
      <Input
        placeholder="Search by Name, Email or Phone No"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-2 w-1/4"
      />

      {loading ? (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Login Pin</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Created On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(20)].map((_, i) => (
              <TableRow key={i}>
                <TableCell>
                  <Skeleton className="h-4 w-8" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-32" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-40" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-28" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-18" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-22" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-15" />
                </TableCell>
                <TableCell>
                  <Skeleton className="h-4 w-10" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Login Pin</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Created On</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.ID}>
                <TableCell>{user.ID}</TableCell>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.LoginPin}</TableCell>
                <TableCell>{user.PhoneNo}</TableCell>
                <TableCell>{user.CreatedOn}</TableCell>
                <TableCell>
                  <UserModal user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </DashboardLayout>
  );
};

export default UserDashboard;
