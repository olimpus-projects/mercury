import { type RouteConfig, index } from "@react-router/dev/routes";

/**
 * Application routes configuration
 * 
 * This centralized route definition makes it easier to:
 * - Maintain and organize routes as the application grows
 * - Add new routes with consistent patterns
 * - Ensure type safety with the RouteConfig interface
 */
export default [
  // Main routes
  index("routes/home.tsx"),  // Home page (index route)
  { path: "about", file: "routes/about.tsx" },  // About page
  
  // Add additional routes here following the same pattern
  // Examples:
  // { path: "dashboard", component: "routes/dashboard.tsx" },
  // { path: "profile", component: "routes/profile.tsx" },
  // { path: "settings", component: "routes/settings.tsx" },
  
  // For nested routes, use the children property
  // Example:
  // {
  //   path: "products",
  //   component: "routes/products.tsx",
  //   children: [
  //     { index: true, component: "routes/products/index.tsx" },
  //     { path: ":id", component: "routes/products/detail.tsx" }
  //   ]
  // }
] satisfies RouteConfig;
