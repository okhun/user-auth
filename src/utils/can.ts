import { getItem, isObject } from "@/utils/functions";

export const Can = (scope?: string): boolean => {
  if (!scope) return false;
  const user = getItem("user") ? JSON.parse(getItem("user")) : {};
  if (!user || (isObject(user) && Object.keys(user).length === 0)) return false;
  const permissions: string[] = user.role.permissions;
  return permissions.includes(scope);
};
