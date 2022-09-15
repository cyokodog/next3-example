import { FetchOptions, SearchParams } from "ohmyfetch";

export default defineComponent({
  props: {
    userId: {
      type: Number,
      required: true,
    },
  },
  async setup(props) {
    const searchParams: SearchParams = { id: props.userId };
    const fetchOptions = {
      params: searchParams,
      initialCache: false,
    };
    // const {
    //   data: user,
    //   pending,
    //   refresh,
    // } = await useFetch("/api/users", fetchOptions);

    const {
      data: user,
      pending,
      refresh,
    } = await useAsyncData("user", () =>
      $fetch(
        `https://jsonplaceholder.typicode.com/users/${props.userId}`,
        fetchOptions
      )
    );

    watch(
      () => props.userId,
      () => {
        searchParams.id = props.userId;
        refresh();
      }
    );
    return {
      user,
      pending,
    };
  },
});
