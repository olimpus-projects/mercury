import type { Route } from "./+types/home";
import Homepage from "../pages/home";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "Homepage" },
    { name: "description", content: "Welcome to Router App!" },
  ];
}

export default function Home() {
  return <Homepage />;
}
