"use client";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { verifyEVMMessageSignature } from "./helper";
import { Result } from "./types";
import { ZKPASS_APP_ID, ZKPASS_SCHEMA_ID } from "./constants";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import { Dialog } from "@/components/ui/dialog";
import { DialogContent } from "@radix-ui/react-dialog";
import { Button } from "../components";

export default function Home() {
  const [result, setResult] = useState<any>();
  const [showPopup, setShowPopup] = useState<boolean>(false);
  const [newSchemaId, setNewSchemaId] = useState<string>("");
  const [newAppId, setNewAppId] = useState<string>("");

  const start = async (schemas = [ZKPASS_SCHEMA_ID], appid = ZKPASS_APP_ID) => {
    if (newSchemaId) {
      schemas = [newSchemaId];
    }
    if (newAppId) {
      appid = newAppId;
    }
    console.log("appId ", appid, " schemasID", schemas[0]);
    try {
      const connector = new TransgateConnect(appid);

      const isAvailable = await connector.isTransgateAvailable();
      if (!isAvailable) {
        setShowPopup(true);
        return;
      }

      const resultList: any[] = [];
      while (schemas.length > 0) {
        const schemaId = schemas.shift() as string;

        const res = (await connector.launch(schemaId)) as Result;
        resultList.push(res);

        const verifyResult = verifyEVMMessageSignature(
          res.taskId,
          schemaId,
          res.uHash,
          res.publicFieldsHash,
          res.validatorSignature,
          res.validatorAddress
        );
        console.log("verifyResult", verifyResult);
      }
      if (resultList.length === 1) {
        setResult(resultList);
      }
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }
  };

  return (
    <main className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="max-w-md mx-auto p-6 bg-gray-800 rounded-lg shadow-lg">
        <h2 className="text-2xl text-white text-center mb-6">
          zkPass Transgate JS-SDK Demo
        </h2>
        <div className="grid grid-cols-1 gap-6">
          <div className="flex justify-center">
            <input
              type="text"
              placeholder={ZKPASS_SCHEMA_ID}
              className="px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium"
              value={newSchemaId}
              onChange={(e) => setNewSchemaId(e.target.value)}
            />
            <input
              type="text"
              placeholder={ZKPASS_APP_ID}
              className="px-4 py-2 bg-gray-700 text-white rounded-md text-sm font-medium"
              value={newAppId}
              onChange={(e) => setNewAppId(e.target.value)}
            />

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
