import { defineStore } from "pinia";
import { useGet } from "@/shared/fetch";
import { State } from "./types";

export const useCatalogstore = defineStore("catalog", {
  state: (): State => ({
    catalogs: [],
    isLoading: true,
    total: 0,
  }),
  actions: {
    getAllCatalogs(url: string) {
      this.isLoading = true;
      useGet(url)
        .then((data) => {
          this.catalogs = data.products;
          this.total = data.total;
        })
        .finally(() => (this.isLoading = false));
    },
  },
});
