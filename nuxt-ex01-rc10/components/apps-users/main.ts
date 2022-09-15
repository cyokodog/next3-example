import { FetchOptions, SearchParams } from 'ohmyfetch';

export default defineComponent({
  props: {
    hasError: {
      type: Boolean,
      default: false,
    },
  },
  async setup(props) {
    const userFilter = ref<string>('');
    const selectedUserId = ref<number>(null);

    const searchParams: SearchParams = { error: props.hasError };
    console.log('searchParams', searchParams);
    const fetchOptions = {
      params: searchParams,
      initialCache: false,
    };
    const { data: users, refresh, pending, error } = await useFetch('/api/users', fetchOptions);

    const filteredUsers = computed(() => {
      if (!(users.value instanceof Array)) {
        return [];
      }
      return users.value.filter(item => {
        return (
          userFilter.value === '' ||
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
