export interface Applicant {
  id: string;
  createdAt: string;
  key: string;
  clientId: string;
  inspectionId: string;
  externalUserId: string;
  info: {
    firstName: string;
    firstNameEn: string;
    dob: string;
    gender: string;
    country: string;
    idDocs: {
      idDocType: "ID_CARD";
      country: string;
      firstName: string;
      firstNameEn: string;
      number: string;
      dob: string;
      gender: string;
      bgCheckViolations: Object[] | null;
    }[];
    fixedInfo: {
      residenceCountry: string;
    };
    applicantPlatform: string;
    ipCountry: string;
    authCode: string;
    agreement: {
      createdAt: string;
      acceptedAt: string;
      source: string;
      recordIds: string[];
    };
    requiredIdDocs: {
      docSets: object[];
    };
    review: {
      reviewId: string;
      attemptId: string;
      attemptCnt: number;
      elapsedSincePendingMs: number;
      elapsedSinceQueuedMs: number;
      reprocessing: boolean;
      levelName: string;
      levelAutoCheckMode: null;
      createDate: string;
      reviewDate: string;
      reviewResult: {
        reviewAnswer: string;
      };
      reviewStatus: string;
      priority: number;
    };
    lang: string;
    type: string;
  };
}

export interface VerificationStepsResult {
  IDENTITY: {
    reviewResult: {
      reviewAnswer: string;
    };
    country: string;
    idDocType: string;
    imageIds: number[];
    imageReviewResults: {
      [key: number]: {
        reviewAnswer: string;
      };
    };
    forbidden: boolean;
    partialCompletion: null;
    stepStatuses: null;
    imageStatuses: any[];
  };
  SELFIE: {
    reviewResult: {
      reviewAnswer: string;
    };
    country: string;
    idDocType: string;
    imageIds: number[];
    imageReviewResults: {
      [key: number]: {
        reviewAnswer: string;
      };
    };
    forbidden: boolean;
    partialCompletion: null;
    stepStatuses: null;
    imageStatuses: any[];
  };
}

export interface User {
  id: string;
  email: string;
  evmAddress: string;
}