import { storeToRefs } from "pinia";
import { onMounted, onUnmounted, ref, watch } from "vue";
import { useCatalogstore } from "@/store/catalog";

export const useCatalogs = () => {
  const store = useCatalogstore();
  const { catalogs, total, isLoading } = storeToRefs(store);
  const { getAllCatalogs } = store;

  const activePage = ref(1);
  const filter = ref(false);

  watch(filter, () => {
    fetchCatalogs(`products?limit=12&skip=${(activePage.value - 1) * 12}`);
  });

  onMounted(() => {
    fetchCatalogs(`products?limit=12`);
  });

  function fetchCatalogs(url: string) {
    let urlParams = url;

    if (filter.value) {
      urlParams += `&select=brand`;
    }

    getAllCatalogs(urlParams);
  }

  const handlePagination = (page: number) => {
    activePage.value = page;
    fetchCatalogs(`products?limit=12&skip=${(page - 1) * 12}`);
  };

  onUnmounted(() => store.$reset());

  return { catalogs, isLoading, total, activePage, filter, handlePagination };
};
