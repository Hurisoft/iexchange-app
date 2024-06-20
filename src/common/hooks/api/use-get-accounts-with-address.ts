// imports
import axios from "axios";
import { useQueryClient, useQuery } from "@tanstack/react-query";
import { types } from "util";

// types
type Variables = {
  address: `0x${string}`;
};

type Response = {
  accounts: {
    number: string;
    adress: string;
    name: string;
    hash: string;
  }[];
};

type useGetAccountsWithAddress = {
  address: `0x${string}`;
};

const fetchFunction = async (variables: Variables) => {
  const response = await axios.get(
    `https://us-central1-iexchange-finance.cloudfunctions.net/api/account/${variables.address}`
  );

  return response.data as Response;
};

const useGetAccountsWithAddress = ({ address }: useGetAccountsWithAddress) => {
  // hooks
  const { data, isPending, error } = useQuery({
    queryKey: ["get-account-with-address"],
    queryFn: () => fetchFunction({ address }),
  });

  return {
    data,
    isPending,
    error,
  };
};

export default useGetAccountsWithAddress;
