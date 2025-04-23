import logoDark from "./logo-dark.svg";
import logoLight from "./logo-light.svg";

export function Welcome() {
  return (
    <main className="flex items-center justify-center min-h-screen p-4">
      <div className="flex flex-col items-center gap-8 max-w-md w-full">
        <header className="w-full max-w-[300px]">
          <img
            src={logoLight}
            alt="React Router"
            className="block w-full dark:hidden"
          />
          <img
            src={logoDark}
            alt="React Router"
            className="hidden w-full dark:block"
          />
        </header>
        
        <div className="w-full rounded-lg border border-gray-200 dark:border-gray-700 p-6">
          <h1 className="text-xl font-bold mb-4 text-center">Welcome to React Router</h1>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            This is a clean boilerplate to help you get started with your project.
          </p>
          <div className="flex justify-center">
            <a
              href="https://reactrouter.com/docs"
              target="_blank"
              rel="noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Read the Docs
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
