import type { Route } from "./+types/home";
import Aboutpage from "../pages/about";
export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Route" },
    { name: "description", content: "Will show the about page" },
  ];
}

export default function About() {
  return <Aboutpage />;
}
