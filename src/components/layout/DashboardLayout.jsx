import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogOverlay,
} from "@/components/ui/dialog";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    navigate("/");
  };

  // Logic for dark mode and light mode for local storage
  const [darkMode, setDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("darkMode");
    return savedTheme ? JSON.parse(savedTheme) : false;
  });
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
  }, [darkMode]);

  const getInitialActiveState = () => {
    if (location.pathname === "/userdashboard") {
      return "userdashboard";
    }
    return "dashboard";
  };

  const [active, setActive] = useState(getInitialActiveState());

  useEffect(() => {
    if (location.pathname === "/dashboard") {
      setActive("dashboard");
    } else if (location.pathname === "/userdashboard") {
      setActive("userdashboard");
    }
  }, [location.pathname]);

  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  const navigateUserDashboard = () => {
    navigate("/userdashboard");
  };

  const changeUsername = () => {
    // Logic to change username
    alert("Change Username clicked");
  };

  const changePassword = () => {
    // Logic to change password
    alert("Change Password clicked");
  };

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-62 bg-gray-900 text-white flex flex-col p-4 gap-6">
        <h1 className="text-xl font-bold mb-5">Admin</h1>

        <Button
          variant="ghost"
          className={`justify-start ${
            active === "dashboard" ? "bg-gray-700" : ""
          }`}
          onClick={navigateDashboard}
        >
          Driver Data
        </Button>
        <Button
          variant="ghost"
          className={`justify-start ${
            active === "userdashboard" ? "bg-gray-700" : ""
          }`}
          onClick={navigateUserDashboard}
        >
          Users
        </Button>

        <Dialog>
          <DialogTrigger asChild>
            <Button variant="ghost" className="justify-start">
              Profile
            </Button>
          </DialogTrigger>

          <DialogOverlay className="fixed inset-0 backdrop-blur-md bg-black/0" />

          <DialogContent className="bg-white p-6 rounded-xl w-90 h-80 flex flex-col items-center justify-center">
            <DialogHeader>
              <DialogTitle className="text-center">Profile</DialogTitle>
              <DialogDescription className="text-center">
                Customize your profile hereeee!
              </DialogDescription>
            </DialogHeader>

            <div className="flex flex-col gap-3 mt-4 w-full">
              <div className="flex items-center justify-between">
                <h2>Change Username :</h2>
                <Button variant="outline">Change</Button>
              </div>

              <div className="flex items-center justify-between">
                <h2>Change Password :</h2>
                <Button variant="outline">Change</Button>
              </div>

              <Button
                className="bg-red-500 text-white hover:bg-red-600 w-full"
                onClick={handleLogout}
              >
                Logout
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold m-2">Dashboard</h2>

          <div className="flex items-center gap-2">
            <Button variant="outline" onClick={() => setDarkMode(!darkMode)}>
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </Button>

            <Button onClick={handleLogout}>Logout</Button>
          </div>
        </header>

        <main className="p-4 overflow-y-auto">{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;
