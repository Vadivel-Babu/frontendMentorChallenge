import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const UserProfile = () => {
  return (
    <Dialog>
      <DialogTrigger>
        {" "}
        <Avatar size="lg" className="ml-2 cursor-pointer">
          <AvatarImage src="https://github.com/shadcn.pn" />
          <AvatarFallback className="bg-primary-blue text-md text-white">
            u
          </AvatarFallback>
        </Avatar>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Share link</DialogTitle>
          <DialogDescription>
            Anyone who has this link will be able to view this.
          </DialogDescription>
        </DialogHeader>
        <div className="flex items-center gap-2">
          <h1>this is modal</h1>
        </div>
        <DialogFooter className="sm:justify-start">
          <DialogClose>
            <Button type="button">Close</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UserProfile;
