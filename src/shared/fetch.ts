export const useGet = () => {
  return fetch("https://dummyjson.com/users", {
    method: "GET",
  }).then((res) => res.json());
};
