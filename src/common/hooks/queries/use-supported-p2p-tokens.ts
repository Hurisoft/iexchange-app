// imports
import { useQuery } from "@apollo/client";

// graphql query
import { SupportedP2PTokens } from "@/graphql/queries/supported-p2p-tokens.graphql";

// types
import {
  SupportedP2PTokensQuery,
  SupportedP2PTokensQueryVariables,
} from "@/graphql/generated/graphql";

const useSupportedP2PTokens = () => {
  const { loading, error, data } = useQuery<
    SupportedP2PTokensQuery,
    SupportedP2PTokensQueryVariables
  >(SupportedP2PTokens, {
  });

  return {
    loading,
    error,
    data: data?.p2Ptokens,
  };
};

export default useSupportedP2PTokens;
