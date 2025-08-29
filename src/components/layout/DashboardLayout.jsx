import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { Sun, Moon } from "lucide-react";

const DashboardLayout = ({ children }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/");
  };

  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`flex h-screen ${
        darkMode ? "dark bg-gray-900 text-white" : "bg-white text-black"
      }`}
    >
      <div className="w-62 bg-gray-900 text-white flex flex-col p-4 gap-6">
        <h1 className="text-xl font-bold mb-5">Admin</h1>

        <Button variant="ghost" className="justify-start">
          Driver Data
        </Button>
        <Button variant="ghost" className="justify-start">
          Users
        </Button>
        <Button variant="ghost" className="justify-start">
          Toggle Theme
        </Button>
      </div>

      <div className="flex-1 flex flex-col">
        <header className="h-14 border-b flex items-center justify-between px-4">
          <h2 className="text-lg font-semibold m-2">Driver Data</h2>

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
