import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

function SettingBox() {
  return (
    <Dialog>
      {/* Button to open dialog */}
      <DialogTrigger>
        <button className="px-4 py-2 bg-gray-200 rounded">Setting</button>
      </DialogTrigger>

      {/* Dialog Box */}
      <DialogContent className="backdrop-blur-md p-6 rounded-xl w-80 h-80 flex items-center justify-center">
        <DialogHeader>
          <DialogTitle className="text-center">Settings</DialogTitle>
          <DialogDescription className="text-center">
            Your settings go here.
          </DialogDescription>
        </DialogHeader>

        {/* Put your content inside here */}
        <div className="flex flex-col items-center gap-3">
          <button className="px-4 py-2 bg-gray-100 rounded">Option 1</button>
          <button className="px-4 py-2 bg-gray-100 rounded">Option 2</button>
          <button className="px-4 py-2 bg-red-500 text-white rounded">
            Option 3
          </button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default SettingBox;
