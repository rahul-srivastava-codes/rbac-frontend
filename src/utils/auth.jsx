export const getDashboardRoute = (role) => {
  if (role === "admin") return "/dashboard/admin";
  if (role === "seller") return "/dashboard/seller";
  return "/dashboard/buyer";
};
