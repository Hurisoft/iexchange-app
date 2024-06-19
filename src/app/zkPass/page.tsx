"use client";
import { useState } from "react";
import JSONPretty from "react-json-pretty";
import { verifyEVMMessageSignature } from "./helper";
import { Result } from "./types";
import { ZKPASS_APP_ID, ZKPASS_SCHEMA_ID } from "./constants";
import TransgateConnect from "@zkpass/transgate-js-sdk";

export default function Home() {
  const [result, setResult] = useState<any>();

  const start = async (schemas = [ZKPASS_SCHEMA_ID], appid = ZKPASS_APP_ID) => {
    console.log("appId ", appid, " schemasID", schemas[0]);
    try {
      const connector = new TransgateConnect(appid);

      const isAvailable = await connector.isTransgateAvailable();
      if (!isAvailable) {
        return alert(
          `Please install zkPass TransGate
https://chromewebstore.google.com/detail/zkpass-transgate/afkoofjocpbclhnldmmaphappihehpma
`
        );
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
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-md text-sm font-medium"
              onClick={() => start()}>
              Start KYC Process
            </button>
          </div>
          <div>
            {result && (
              <JSONPretty
                themeClassName="custom-json-pretty"
                id="json-pretty"
                data={result}></JSONPretty>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
