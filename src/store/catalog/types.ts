export type State = {
  catalogs: Catalog[];
  isLoading: boolean;
  total: number;
};

export type Catalog = {
  brand: string;
  category?: string;
  description?: string;
  discountedPrice?: number;
  id?: number;
  images?: string[];
  price?: number;
  rating?: number;
  stock?: number;
  thumbnail?: string;
  title?: string;
};
