// import
import { useQuery } from "@apollo/client";

// graphql query
import { Offers } from "@/graphql/queries/offers.graphql";

// types
import { OffersQuery, OffersQueryVariables } from "@/graphql/generated/graphql";

const useOffers = (args?: OffersQueryVariables) => {
  let preparedVariables = undefined

  if (args) {
    const {
      first,
      skip,
      where,
    } = args

    preparedVariables = {
      first: first ?? null,
      skip: skip ?? null,
      where: where && Object.keys(where).length > 0 ? where : null,
    }
  }

  const { loading, error, data } = useQuery<OffersQuery, OffersQueryVariables>(
    Offers
  );

  return {
    loading,
    error,
    data: data?.offers,
  };
};

export default useOffers;
