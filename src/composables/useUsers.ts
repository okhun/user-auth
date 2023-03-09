import { onMounted, onUnmounted } from "vue";
import { useUserStore } from "@/store/users";
import { storeToRefs } from "pinia";

export const useUsers = () => {
  const store = useUserStore();
  const { getAllUsers } = store;
  const { users, isLoading } = storeToRefs(store);

  onMounted(() => {
    getAllUsers("users");
  });
  onUnmounted(() => store.$reset());

  return { users, isLoading };
};
