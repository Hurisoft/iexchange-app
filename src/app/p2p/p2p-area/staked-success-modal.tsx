// react
import { FC } from "react";
// next
import Image from "next/image";
// import
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

// components
import { Button } from "@/app/components";
// ui components
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";

// types
type StakedSucessModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const StakedSuccessModal: FC<StakedSucessModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[377px]">
        <div className="py-10 flex flex-col gap-10">
          {/* icon */}
          <div className="flex items-center justify-center">
            <Image src="/images/icons/success.png" alt="success" width={85} height={85} />
          </div>
          {/* content */}
          <div className="flex flex-col gap-3 text-center">
            <h3 className="text-xl font-medium">Successfully Staked</h3>
            <p>You have Secured a Merchant Placement</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
};

export default StakedSuccessModal;