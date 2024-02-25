import axiosInstance from "@/shared/api/api-instance";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";


const threadskey = ["threads"];
const threadkey = ["thread"];

export type PostThread = {
  content: string;
  pictures: File[];
};

export function getThreadsQuery(desk: string) {
  return useQuery({
    queryKey: threadskey.concat(desk),
    queryFn: () => axiosInstance.get(`/${desk}/thread`),
  });
}

export function PostThreadMutation(desk: string) {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (data: FormData) =>
      axiosInstance.post(`/${desk}/thread`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
    onSuccess() {
      queryClient.refetchQueries();
    },
  });
}

export function getCurrentThread(thread: string) {
  return useQuery({
    queryKey: threadkey.concat(thread),
    queryFn: () => axiosInstance.get(`/thread/${thread}`),
  });
}
