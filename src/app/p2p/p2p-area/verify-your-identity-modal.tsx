// react
import { FC, useState } from "react";
import { Result } from "@/app/zkPass/types";
import {
  ZKPASS_APP_ID,
  ZKPASS_APP_ID_LOCAL,
  ZKPASS_SCHEMA_ID,
  ZKPASS_SCHEMA_ID_LOCAL,
} from "@/app/zkPass/constants";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { ethers } from "ethers";
import AttestationABI from "@/app/zkPass/AttestationABI.json";

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
  onFinished: () => void;
};

const VerifyIdentityModal: FC<VerifyIdentityModalProps> = ({
  open,
  setOpen,
  onFinished,
}) => {
  const [result, setResult] = useState<any>();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newSchemaId, setNewSchemaId] = useState<string>("");
  const [newAppId, setNewAppId] = useState<string>("");

  const start = async (
    schemaId: string = ZKPASS_SCHEMA_ID,
    appid: string = ZKPASS_APP_ID
  ) => {
    if (window.location.hostname === "localhost") {
      schemaId = ZKPASS_SCHEMA_ID_LOCAL;
      appid = ZKPASS_APP_ID_LOCAL;
    }
    try {
      const connector = new TransgateConnect(appid);
      const isAvailable = await connector.isTransgateAvailable();
      if (!isAvailable) {
        return alert("Please install zkPass TransGate");
      }
      //@ts-ignore
      if (window.ethereum == null) {
        return alert("MetaMask not installed");
      }
      //@ts-ignore
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();
      //get your ethereum address
      const account = await signer.getAddress();

      const res: any = await connector.launch(schemaId, account);
      setResult(res);

      //Base Sepolia contract address
      //You can add from https://chainlist.org/?search=11155111&testnets=true
      const contractAddress = "0x8c18c0436A8d6ea44C87Bf5853F8D11B55CF0302";

      const taskId = ethers.hexlify(ethers.toUtf8Bytes(res.taskId)); // to hex
      schemaId = ethers.hexlify(ethers.toUtf8Bytes(schemaId)); // to hex

      const chainParams = {
        taskId,
        schemaId,
        uHash: res.uHash,
        recipient: account,
        publicFieldsHash: res.publicFieldsHash,
        validator: res.validatorAddress,
        allocatorSignature: res.allocatorSignature,
        validatorSignature: res.validatorSignature,
      };
      console.log("chainParams", chainParams);

      const contract = new ethers.Contract(
        contractAddress,
        AttestationABI,
        provider
      );
      const data = contract.interface.encodeFunctionData("attest", [
        chainParams,
      ]);

      let transaction = {
        to: contractAddress,
        from: account,
        value: 0,
        data,
      };
      console.log("transaction", transaction);
      let tx = await signer?.sendTransaction(transaction);
      console.log("transaction hash====>", tx.hash);
      onFinished();
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }
  };

  // handlers
  const handleProceed = () => {
    // redirect to kyc page
    // close modal
    start();
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-[460px]">
          <DialogHeader>
            <DialogTitle>{"Let's Verify Your Identity"}</DialogTitle>
            <DialogDescription>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quo explicabo cupiditate recusandae, pariatur
              voluptates. Fugit beatae veniam tempora mollitia dicta placeat
              architecto nostrum, obcaecati autem, nihil dignissimos et! Neque.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex !flex-row items-center justify-center">
            <Button onClick={handleProceed} className="!px-8">
              Proceed To KYC
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
      <Dialog modal open={showPopup} onOpenChange={() => setShowPopup(false)}>
        <DialogContent
          className="absolute bg-secondary
         p-40 rounded-sm">
          <h4 className="">
            Transgate is not installed. Please install zkPass TransGate
          </h4>
          <br />
          <Button
            href="https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline">
            TransGate Extension
          </Button>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default VerifyIdentityModal;
