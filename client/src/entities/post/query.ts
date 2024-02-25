import axiosInstance from "@/shared/api/api-instance";
import { useMutation, useQueryClient } from "@tanstack/react-query";



export function PostMutation(desk: string, thread: string) {
    const queryClient = useQueryClient();
    return useMutation({
      mutationFn: (data: FormData) =>
        axiosInstance.post(`/${desk}/${thread}`, data, {
          headers: { "Content-Type": "multipart/form-data" },
        }),
      onSuccess() {
        queryClient.refetchQueries();
      },
    });
  }
