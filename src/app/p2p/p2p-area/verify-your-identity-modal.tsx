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

// types
type VerifyIdentityModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const VerifyIdentityModal: FC<VerifyIdentityModalProps> = ({
  open,
  setOpen,
}) => {
  // handlers
  const handleProceed = () => {
    // redirect to kyc page
    window.open("https://ikyc.vercel.app", "_blank");
    // close modal
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle>Let's Verify Your Identity</DialogTitle>
          <DialogDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
            quo explicabo cupiditate recusandae, pariatur voluptates. Fugit
            beatae veniam tempora mollitia dicta placeat architecto nostrum,
            obcaecati autem, nihil dignissimos et! Neque.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex !flex-row items-center justify-center">
          <Button onClick={handleProceed} className="!px-8">Proceed To KYC</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default VerifyIdentityModal;
