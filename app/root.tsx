/**
 * Root component for the React Router application
 * 
 * This file serves as the main entry point and defines the application's layout,
 * global styles, error handling, and core structure.
 */

import {
  isRouteErrorResponse,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css"; // Import global CSS styles

/**
 * Define global links for the application
 * 
 * This function sets up:
 * - Font preconnections to improve loading performance
 * - Google Fonts stylesheet for the Inter font family with various weights
 */
export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap",
  },
];

/**
 * Main Layout component
 * 
 * Defines the HTML structure for every page in the application:
 * - Sets up proper HTML5 document structure
 * - Includes meta tags for proper rendering and viewport settings
 * - Injects Meta and Links components from React Router
 * - Renders children (page content)
 * - Includes ScrollRestoration and Scripts for optimal UX
 */
export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration /> {/* Maintains scroll position during navigation */}
        <Scripts /> {/* Injects necessary React Router scripts */}
      </body>
    </html>
  );
}

/**
 * Root App component
 * 
 * Simply renders the Outlet component which acts as a placeholder
 * for the matched route's component. This allows child routes to be
 * rendered within the parent layout.
 */
export default function App() {
  return <Outlet />;
}

/**
 * Global Error Boundary
 * 
 * Handles and displays errors that occur during rendering:
 * - Customizes error messages based on error type
 * - Shows different messages for 404 vs other errors
 * - In development mode, displays detailed error stack traces
 * - Provides a clean, user-friendly error UI
 */
export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  // Handle different error types
  if (isRouteErrorResponse(error)) {
    // Handle route errors (like 404s)
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    // In development, show detailed error information
    details = error.message;
    stack = error.stack;
  }

  // Render error UI
  return (
    <main className="pt-16 p-4 container mx-auto">
      <h1>{message}</h1>
      <p>{details}</p>
      {stack && (
        <pre className="w-full p-4 overflow-x-auto">
          <code>{stack}</code>
        </pre>
      )}
    </main>
  );
}
