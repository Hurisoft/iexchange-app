// react
import { FC } from "react";

// ui components
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

// types
type ExpandedRowModalProps = {
  open: boolean;
  setOpen: (value: boolean) => void;
};

const ExpandedRowModal: FC<ExpandedRowModalProps> = ({ open, setOpen }) => {
  return (
    <Dialog>
      <DialogContent className="max-w-3xl">
        <DialogHeader>
          <DialogTitle>Transaction Convertion</DialogTitle>
        </DialogHeader>
        <div className="grid lg:grid-cols-2">
          <div className="w-full flex gap-2">
            <div className="bg-gray-400">
              <h3>30mins</h3>
              <p>Payment Time Frame</p>
            </div>
            <div className="bg-gray-400">
              <h3>3.5 mins</h3>
              <p>Average Pay Time</p>
            </div>
            <div className="bg-gray-400">
              <h3>1200.00 USDT</h3>
              <p>Available</p>
            </div>
          </div>
          <div className="w-full flex flex-col gap-2">
            <div className="w-full grid grid-cols-12">
              <Input
                id="sell"
                name="sell"
                type="text"
                className="col-span-9"
              />
              <div className="col-span-3">
                GHSC
              </div>
            </div>
            <div className="w-full grid grid-cols-12">
              <Input 
                id="receive"
                name="receive"
                type="text"
                className="col-span-9"
              />
              <div className="col-span-3">
                GHSC
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ExpandedRowModal;
