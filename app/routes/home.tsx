import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import RandomComponent from "../_components/random-layout/random-layout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
    {
      rel: "stylesheet",
      href: "https://altinncdn.no/fonts/inter/v4/inter.css",
    },
  ];
}

export default function Home() {
  return (
    <div className='wrapper'>
      <RandomComponent />
    </div>
  );
}
