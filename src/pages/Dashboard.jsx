// import { useEffect, useState } from "react";
// import DashboardLayout from "@/components/layout/DashboardLayout";
// import { Skeleton } from "@/components/ui/skeleton";
// import { Input } from "@/components/ui/input";
// import { useNavigate } from "react-router-dom";
// import { Button } from "../components/ui/button";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import React from "react";

// import {
//   Table,
//   TableBody,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table";
// import DriverModal from "../components/modals/Driver-Modals/DriverModal";

// const Dashboard = () => {
//   const [users, setUsers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [search, setSearch] = useState("");
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     fetch(`https://loadgo.in/loadgo/getDriver?page=${page}`)
//       .then((res) => res.json())
//       .then((data) => {
//         const drivers = Array.isArray(data) ? data : data.data;
//         const formatted = drivers.map((user) => ({
//           ID: user.id,
//           Name: user.driverName,
//           Email: user.email,
//           VehicleNo: user.vehicleNo,
//           VehicleType: user.vehicletype,
//           PhoneNo: user.phone,
//           status: user.id % 2 === 0 ? "Active" : "Inactive",
//           joined: "2024-08-21",
//           // for the modal
//           aadharFront: user.aadharFront,
//           dlFront: user.licenseFront,
//           accountHolderName: user.accountHolderName || "N/A",
//           bankName: user.bankName || "N/A",
//           accountNumber: user.accountNumber || "N/A",
//           IFSCCode: user.IFSCCode || "N/A",
//         }));
//         setUsers(formatted);

//         // calculate total pages from totalCount
//         if (data.metaData?.totalCount) {
//           const perPage = 20; // API gives 20 records per page
//           setTotalPages(Math.ceil(data.metaData.totalCount / perPage));
//         }

//         setLoading(false);
//       })
//       .catch((err) => {
//         console.error("Error fetching users:", err);
//         setLoading(false);
//       });
//   }, [page]);

//   const filteredUsers = users.filter((user) =>
//     [user.Name, user.Email, user.PhoneNo].some((words) =>
//       words.toLowerCase().includes(search.toLowerCase())
//     )
//   );

//   return (
//     <DashboardLayout>
//       <h1 className="text-2xl font-bold mb-4">Driver Table</h1>
//       <Input
//         placeholder="Search by Name, Email or Phone No"
//         value={search}
//         onChange={(e) => setSearch(e.target.value)}
//         className="mb-2 w-1/4"
//       />

//       {loading ? (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Vehicle No</TableHead>
//               <TableHead>Vehicle Type</TableHead>
//               <TableHead>Phone No</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Joined</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {[...Array(20)].map((_, i) => (
//               <TableRow key={i}>
//                 <TableCell>
//                   <Skeleton className="h-4 w-8" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-32" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-40" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-28" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-18" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-22" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-15" />
//                 </TableCell>
//                 <TableCell>
//                   <Skeleton className="h-4 w-10" />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       ) : (
//         <Table>
//           <TableHeader>
//             <TableRow>
//               <TableHead>ID</TableHead>
//               <TableHead>Name</TableHead>
//               <TableHead>Email</TableHead>
//               <TableHead>Vehicle No</TableHead>
//               <TableHead>Vehicle Type</TableHead>
//               <TableHead>Phone No</TableHead>
//               <TableHead>Status</TableHead>
//               <TableHead>Joined</TableHead>
//             </TableRow>
//           </TableHeader>
//           <TableBody>
//             {filteredUsers.map((user) => (
//               <TableRow key={user.ID}>
//                 <TableCell>{user.ID}</TableCell>
//                 <TableCell>{user.Name}</TableCell>
//                 <TableCell>{user.Email}</TableCell>
//                 <TableCell>{user.VehicleNo}</TableCell>
//                 <TableCell>{user.VehicleType}</TableCell>
//                 <TableCell>{user.PhoneNo}</TableCell>
//                 <TableCell>{user.status}</TableCell>
//                 <TableCell>{user.joined}</TableCell>
//                 <TableCell>
//                   <DriverModal user={user} />
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       )}
//       {/* Pagination Buttons */}
//       <div className="flex justify-center mt-4 gap-2">
//         <Button
//           disabled={page === 1}
//           onClick={() => setPage((prev) => prev - 1)}
//         >
//           <ChevronLeft className="h-5 w-5" />
//         </Button>

//         <span className="px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700">
//           Page {page} of {totalPages}
//         </span>

//         <Button
//           disabled={page === totalPages}
//           onClick={() => setPage((prev) => prev + 1)}
//         >
//           <ChevronRight />
//         </Button>
//       </div>
//     </DashboardLayout>
//   );
// };

// export default Dashboard;

import { useEffect, useState } from "react";
import DashboardLayout from "@/components/layout/DashboardLayout";
import { Skeleton } from "@/components/ui/skeleton";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { ChevronLeft, ChevronRight, ArrowUpDown } from "lucide-react";
import React from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import DriverModal from "../components/modals/Driver-Modals/DriverModal";

const Dashboard = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: null,
    direction: "ascending",
  });
  const [filteredAndSortedUsers, setFilteredAndSortedUsers] = useState([]);

  useEffect(() => {
    fetch(`https://loadgo.in/loadgo/getDriver?page=${page}`)
      .then((res) => res.json())
      .then((data) => {
        const drivers = Array.isArray(data) ? data : data.data;
        const formatted = drivers.map((user) => ({
          ID: user.id,
          Name: user.driverName,
          Email: user.email,
          VehicleNo: user.vehicleNo,
          VehicleType: user.vehicletype,
          PhoneNo: user.phone,
          status: user.id % 2 === 0 ? "Active" : "Inactive",
          joined: "2024-08-21",
          aadharFront: user.aadharFront,
          dlFront: user.licenseFront,
          accountHolderName: user.accountHolderName || "N/A",
          bankName: user.bankName || "N/A",
          accountNumber: user.accountNumber || "N/A",
          IFSCCode: user.IFSCCode || "N/A",
        }));
        setUsers(formatted);
        setFilteredAndSortedUsers(formatted);

        if (data.metaData?.totalCount) {
          const perPage = 20;
          setTotalPages(Math.ceil(data.metaData.totalCount / perPage));
        }

        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching users:", err);
        setLoading(false);
      });
  }, [page]);

  // Function to handle sorting
  const requestSort = (key) => {
    let direction = "ascending";
    if (sortConfig.key === key && sortConfig.direction === "ascending") {
      direction = "descending";
    }
    setSortConfig({ key, direction });
  };

  useEffect(() => {
    let filtered = users.filter((user) =>
      [user.Name, user.Email, user.PhoneNo].some((words) =>
        words.toLowerCase().includes(search.toLowerCase())
      )
    );

    if (sortConfig.key) {
      const sorted = [...filtered].sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === "ascending" ? 1 : -1;
        }
        return 0;
      });
      setFilteredAndSortedUsers(sorted);
    } else {
      setFilteredAndSortedUsers(filtered);
    }
  }, [users, search, sortConfig]);

  return (
    <DashboardLayout>
      <h1 className="text-2xl font-bold mb-4">Driver Table</h1>
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
              <TableHead>Vehicle No</TableHead>
              <TableHead>Vehicle Type</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
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
              <TableHead>
                <div className="flex items-center">
                  ID
                  <ArrowUpDown
                    className="ml-1 h-4 w-4 cursor-pointer hover:text-gray-600"
                    onClick={() => requestSort("ID")}
                  />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Name
                  <ArrowUpDown
                    className="ml-1 h-4 w-4 cursor-pointer hover:text-gray-600"
                    onClick={() => requestSort("Name")}
                  />
                </div>
              </TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Vehicle No</TableHead>
              <TableHead>Vehicle Type</TableHead>
              <TableHead>Phone No</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAndSortedUsers.map((user) => (
              <TableRow key={user.ID}>
                <TableCell>{user.ID}</TableCell>
                <TableCell>{user.Name}</TableCell>
                <TableCell>{user.Email}</TableCell>
                <TableCell>{user.VehicleNo}</TableCell>
                <TableCell>{user.VehicleType}</TableCell>
                <TableCell>{user.PhoneNo}</TableCell>
                <TableCell>{user.status}</TableCell>
                <TableCell>{user.joined}</TableCell>
                <TableCell>
                  <DriverModal user={user} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
      <div className="flex justify-center mt-4 gap-2">
        <Button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <span className="px-3 py-1.5 rounded-md bg-gray-200 dark:bg-gray-700">
          Page {page} of {totalPages}
        </span>

        <Button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          <ChevronRight />
        </Button>
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;
