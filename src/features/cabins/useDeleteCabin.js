import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteCabin as deleteCabinApi } from "../../services/apiCabines";
import toast from 'react-hot-toast';

export function useDeleteCabin () {
const queryClient  = useQueryClient();
const { isLoading: isDeleting, mutate: deleteCabin } = useMutation({
mutationFn: deleteCabinApi,
onSuccess: () => {
 toast.success('Cabin Succssefuly deleted');
 
 queryClient.invalidateQueries({
queryKey: ['cabins'],
});
},
onError: (err) => toast.error(err.message),
});

return { isDeleting, deleteCabin };
}