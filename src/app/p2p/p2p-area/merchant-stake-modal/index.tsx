// react
import { FC } from "react";
// import
import { formatEther } from "viem";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, SubmitHandler } from "react-hook-form";

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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// form schema
import { formSchema, FormValues } from "./form-schema";

// types
type MerchantStakeModalProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  onStake: (data: FormValues) => void;
};

const MerchantStakeModal: FC<MerchantStakeModalProps> = ({
  open,
  setOpen,
  onStake,
}) => {
  // handlers
  const {
    setValue,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    defaultValues: {
      amount: formatEther(BigInt(1500e18)),
      currency: "GHS",
    },
    resolver: zodResolver(formSchema),
  });

  const onSubmit: SubmitHandler<FormValues> = (data, event) => {
    event?.preventDefault();
    onStake(data);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="sm:max-w-[460px]">
        <DialogHeader>
          <DialogTitle>Merchant Stake</DialogTitle>
          <DialogDescription>
            Stake any currency up to <b>10 USDT</b> to Continue the Process of
            becoming a Merchant
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-6 py-4">
            <div className="flex flex-col flex-1 justify-center gap-4">
              <Label htmlFor="amount">Stake Amount</Label>
              <div className="flex flex-row">
                <Input
                  id="amount"
                  readOnly={true}
                  {...register("amount")}
                  type="text"
                  className="w-9/12"
                />
                <Select
                  defaultValue="GHS"
                  {...register("currency")}
                  onValueChange={(value) => {
                    setValue("currency", value);
                  }}
                >
                  <SelectTrigger className="w-3/12">
                    <SelectValue placeholder="Currency" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GHS">GHS</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            {/* space */}
            <div className="py-3" />
          </div>
          <DialogFooter className="flex !flex-row items-center justify-center">
            <Button type="submit" className="!px-8">
              Proceed
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default MerchantStakeModal;
