import type { Route } from "../../+types/root";
import { useNavigate } from "react-router";

export default function About() {
    const navigate = useNavigate();

    return (
        <main className="flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col items-center gap-8 max-w-md w-full">
                <h1>About</h1>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                    This is the about page of our application.
                </p>
                <button onClick={() => navigate("/")}>Back to Home</button>
            </div>
        </main>
    );
}

/**
 * Meta function for the About route
 * 
 * Defines metadata for the page:
 * - Sets the page title to "About" which appears in the browser tab
 */
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "About" },
    ];
}

/**
 * Loader function for the About route
 * 
 * Handles data loading before rendering the component:
 * - Returns a message that can be accessed by the component
 * - This data is available to the component via useLoaderData hook
 */
export function loader({ }: Route.LoaderArgs) {
    return {
        message: "About page content",
    };
}

/**
 * Action function for the About route
 * 
 * Handles form submissions and other actions:
 * - Processes data sent from the client
 * - Returns a response that can be accessed after form submission
 */
export function action({ }: Route.ActionArgs) {
    return {
        message: "Action completed",
    };
}
