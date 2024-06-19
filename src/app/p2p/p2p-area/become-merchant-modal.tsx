// react
import { FC } from "react";

// components
import { Button } from "@/app/components";
// ui components
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// types
type BecomeMerchantModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const BecomeMerchantModal: FC<BecomeMerchantModalProps> = ({
  open,
  setOpen,
}) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle>Basic Verification</DialogTitle>
          <DialogDescription className="capitalize">
            Please fill in the information to proceed to become a merchant
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-6 py-4">
          <div className="flex flex-col flex-1 justify-center gap-4">
            <Label htmlFor="fullName">Full name</Label>
            <Input id="fullName" type="text" className="w-full" />
          </div>
          <div className="flex flex-col flex-1 justify-center gap-4">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="w-full" />
          </div>
        </div>
        <DialogFooter className="flex !flex-row items-center justify-center">
          <Button type="submit" className="!px-8">Proceed</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default BecomeMerchantModal;
