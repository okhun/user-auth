export const getItem: any = (name: string) => localStorage.getItem(name);
export const removeItem: any = (name: string) => localStorage.removeItem(name);
export const setItem: any = (name: string, data: any) =>
  localStorage.setItem(name, data);

export const isObject = (value: unknown) => {
  return (
    value != null && typeof value === "object" && Array.isArray(value) === false
  );
};
