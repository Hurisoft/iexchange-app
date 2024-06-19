"use client";
import { useState } from "react";
import styles from "./page.module.css";
import TransgateConnect from "@zkpass/transgate-js-sdk";
import styled from "styled-components";
import JSONPretty from "react-json-pretty";
import { verifyEVMMessageSignature } from "./helper";
import { Result } from "./types";
import { ZKPASS_APP_ID, ZKPASS_SCHEMA_ID } from "./constants";

const FormGrid = styled.div`
  display: grid;
  grid-gap: 36px;
  grid-template-columns: 800px;
  margin: 3rem auto;
`;

const FromContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
`;

const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  margin-bottom: 1rem;
`;

const Label = styled.div`
  text-align: right;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  display: block;
  background-color: #ffffff;
  border-radius: 5px;
  height: 35px;
  line-height: 35px;
  width: 100%;
  padding: 0 18px;
  outline: none;
  color: #000000;
`;

const Button = styled.button<{ disabled?: boolean }>`
  position: relative;
  display: block;
  min-width: 120px;
  height: 35px;
  line-height: 35px;
  padding: 0 18px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-size: 14px;
  background: #c5ff4a;
  color: var(--color-black);
  cursor: ${(p) => (p.disabled ? "not-allowed" : "pointer")};
  &:active {
    border: 0.5px solid #898989;
    color: #0a0a0aab;
  }
`;

const RightContainer = styled.div`
  grid-column: 2 / 3;
`;

const Title = styled.h2`
  color: #ffffff;
  text-align: center;
`;

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
      if (resultList.length == 1) {
        setResult(resultList);
      }
    } catch (err) {
      alert(JSON.stringify(err));
      console.log("error", err);
    }
  };

  return (
    <main className={styles.main}>
      <Title>zkPass Transgate JS-SDK Demo</Title>
      <FormGrid>
        <FromContainer>
          <FormItem>
            <RightContainer>
              <Button onClick={() => start()}>Start KYC Process</Button>
            </RightContainer>
          </FormItem>
          <FormItem>
            {result && (
              <JSONPretty
                themeClassName="custom-json-pretty"
                id="json-pretty"
                data={result}></JSONPretty>
            )}
          </FormItem>
        </FromContainer>
      </FormGrid>
    </main>
  );
}
