import type { Route } from "../../+types/root";
import { useNavigate } from "react-router";
export default function Home() {
    const navigate = useNavigate();

    return (
        <main className="flex items-center justify-center min-h-screen p-4">
            <div className="flex flex-col items-center gap-8 max-w-md w-full">
                <h1>Home</h1>
                <button onClick={() => navigate("/about")}>About</button>
            </div>
        </main>
    );
}

/**
 * Meta function for the Home route
 * 
 * Defines metadata for the page:
 * - Sets the page title to "Home" which appears in the browser tab
 */
export function meta({ }: Route.MetaArgs) {
    return [
        { title: "Home" },
    ];
}

/**
 * Loader function for the Home route
 * 
 * Handles data loading before rendering the component:
 * - Returns a message that can be accessed by the component
 * - This data is available to the component via useLoaderData hook
 */
export function loader({ }: Route.LoaderArgs) {
    return {
        message: "Hello, world!",
    };
}

/**
 * Action function for the Home route
 * 
 * Handles form submissions and other actions:
 * - Processes data sent from the client
 * - Returns a response that can be accessed after form submission
 * - This is typically used with the Form component from React Router
 */
export function action({ }: Route.ActionArgs) {
    return {
        message: "Hello, world!",
    };
}
