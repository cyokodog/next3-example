import { FetchOptions, SearchParams } from "ohmyfetch";
import { User } from "~~/server/api/users";

export default defineComponent({
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  async setup(props) {
    const userFilter = ref<string>("");
    const selectedUserId = ref<number>(null);

    const searchParams: SearchParams = { error: props.hasError };
    console.log("searchParams", searchParams);
    const fetchOptions = {
      params: searchParams,
      initialCache: false,
    };
    // const { data: users, refresh, pending, error } = await useFetch('/api/users', fetchOptions);
    const {
      data: users,
      pending,
      refresh,
      error,
    } = await useAsyncData("users", () => {
      if (searchParams.error) {
        throw createError({
          statusCode: 500,
          statusMessage: "Internal Server Error",
        });
      }
      return $fetch("https://jsonplaceholder.typicode.com/users", fetchOptions);
    });

    const filteredUsers = computed(() => {
      if (!(users.value instanceof Array)) {
        return [];
      }
      return users.value.filter((item) => {
        return (
          userFilter.value === "" ||
          item.name.toUpperCase().includes(userFilter.value.toUpperCase())
        );
      });
    });

    const retry = async (params?: { hasError: boolean }) => {
      if (params) {
        searchParams.error = params.hasError;
      }
      refresh();
    };

    return {
      pending,
      selectedUserId,
      filteredUsers,
      userFilter,
      error,
      retry,
    };
  },
});
