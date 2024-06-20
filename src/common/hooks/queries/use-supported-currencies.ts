// imports
import { useQuery } from "@apollo/client";

// graphql query
import { SupportedCurrencies } from "@/graphql/queries/supported-currencies.graphql";

// types
import {
  SupportedCurrenciesQuery,
  SupportedCurrenciesQueryVariables,
} from "@/graphql/generated/graphql";

const useSupportedCurrencies = () => {
  const { loading, error, data } = useQuery<
    SupportedCurrenciesQuery,
    SupportedCurrenciesQueryVariables
  >(SupportedCurrencies, {
    variables: {
      where: {
        isAccepted: true,
      },
    },
  });

  return {
    loading,
    error,
    data: data?.currencies,
  };
};

export default useSupportedCurrencies;
