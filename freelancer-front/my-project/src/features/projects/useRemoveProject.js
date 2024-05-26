import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeProjectApi } from "../../services/procetService";
import toast from "react-hot-toast";

export default function useRemoveProject() {
  const queryClinet = useQueryClient();
  const { mutate: removeProject, isPending: isDeleting } = useMutation({
    mutationFn: removeProjectApi,
    onSuccess: (data) => {
      console.log(data);
      toast.success("پروژه با موفقینت حذف شد");
      queryClinet.invalidateQueries({
        queryKey: ["owner-projects"],
      });
    },
    onError: (err) => toast.error(err?.response?.data?.message),
  });
  return { removeProject, isDeleting };
}
