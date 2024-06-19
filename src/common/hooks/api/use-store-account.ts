// imports
import axios from "axios";
import { useQueryClient, useMutation } from "@tanstack/react-query";

// types
type Variables = {
  name: string;
  number: string;
  address: `0x${string}`;
};

type Response = {
  accountHash: string;
};

const fetchFunction = async (variables: Variables) => {
  const response = await axios.post(
    "https://us-central1-iexchange-finance.cloudfunctions.net/api/account",
    variables
  );
  
  return response.data as Response;
};

const useStoreAccount = () => {
  // hooks
  const queryClient = useQueryClient();
  const { data, isPending, error, mutate, mutateAsync } = useMutation({
    mutationFn: fetchFunction,
    mutationKey: ["store-account"],
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({
        queryKey: ["account-with-address", "account-with-hash"],
      });
    },
  });

  return {
    data,
    isPending,
    error,
    mutate,
    mutateAsync
  };
};

export default useStoreAccount;
