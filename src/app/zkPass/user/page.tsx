"use client";
import React from "react";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchApplicantData, fetchIdImage } from "../kyc/sumsub";
import { useUser } from "@/app/hooks/useUser";
import Image from "next/image";

export default function Kyc() {
  const user = useUser();

  console.log("User: ", user);

  const { data: applicant } = useQuery({
    queryKey: ["applicant"],
    queryFn: () => fetchApplicantData(user!.id),
    enabled: !!user?.id,
  });

  const { data: idImages } = useQuery({
    queryKey: ["idImage"],
    queryFn: () => fetchIdImage(applicant!.id, applicant!.inspectionId),
    enabled: !!applicant?.id,
  });

  if (!applicant) {
    return <div>Loading applicant data...</div>;
  }
  console.log("Applicant: ", applicant);

  return (
    <div className="bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">KYC Details</h1>
      <h1 className="text-xl font-bold mb-2">Applicant Information</h1>
      {idImages?.map((image, i) => (
        <img
          key={i}
          src={"data:" + image.contentType + ";base64," + image.data}
          className="w-32 h-32 object-cover rounded"
          alt="ID Image"
        />
      ))}
      <p className="mb-2">
        <strong>First Name:</strong> {applicant.info.firstName}
      </p>
      <p className="mb-2">
        <strong>Last Name:</strong> {applicant.info.firstNameEn}
      </p>
      <p className="mb-2">
        <strong>ID Number:</strong> {applicant.info.idDocs[1].number}
      </p>
      <p className="mb-2">
        <strong>Date of Birth:</strong> {applicant.info.dob}
      </p>
      <p className="mb-2">
        <strong>Nationality:</strong> {applicant.info.country}
      </p>
    </div>
  );
}
