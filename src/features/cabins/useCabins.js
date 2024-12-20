import { useQuery } from "@tanstack/react-query";
import { getCabines } from "../../services/apiCabines";

export function useCabins () {
    const {
        isLoading, 
        data: cabins,
        error,
        } = useQuery({
        queryKey: ['cabins'],
        queryFn: getCabines,
      });
  
      return {isLoading, error, cabins};
}
