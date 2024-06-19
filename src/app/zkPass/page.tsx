"use client";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { verifyEVMMessageSignature } from "./helper";
import { Result } from "./types";
import { ZKPASS_APP_ID, ZKPASS_SCHEMA_ID } from "./constants";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button, HorizontalNav } from "../components";
import { ethers } from "ethers";
import AttestationABI from "./AttestationABI.json";

export default function Home() {
  const [result, setResult] = useState<any>();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newSchemaId, setNewSchemaId] = useState<string>("");
  const [newAppId, setNewAppId] = useState<string>("");
  const start = async (
    schemaId: string = ZKPASS_SCHEMA_ID,
    appid: string = ZKPASS_APP_ID
  ) => {
    if (newSchemaId) {
      schemaId = newSchemaId;
    }
    if (newAppId) {
      appid = newAppId;
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

      //Sepolia contract address
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
      alert("Transaction sent successfully!");
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }
  };

  return (
    <main className="bg-gradient-to-b from-[#000000] to-[#3384D9] min-h-screen flex items-center justify-center">
      <HorizontalNav />
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white text-center mb-6">
          zkPass Transgate JS-SDK Demo
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-center">
            <div className="flex flex-col space-y-4">
              <p className="text-white text-sm font-medium">Schema ID</p>
              <input
                type="text"
                placeholder={ZKPASS_SCHEMA_ID}
                className="px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium"
                value={newSchemaId}
                onChange={(e) => setNewSchemaId(e.target.value)}
              />
            </div>
            <div className="flex flex-col space-y-4">
              <p className="text-white text-sm font-medium">App ID</p>
              <input
                type="text"
                placeholder={ZKPASS_APP_ID}
                className="px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium"
                value={newAppId}
                onChange={(e) => setNewAppId(e.target.value)}
              />
            </div>

            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium"
              onClick={() => start()}>
              Start KYC Process
            </button>
          </div>
          <div className="flex justify-center">
            {result && (
              <JSONPretty
                themeClassName="custom-json-pretty"
                id="json-pretty"
                data={result}></JSONPretty>
            )}
          </div>
        </div>
      </div>

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
    </main>
  );
}
