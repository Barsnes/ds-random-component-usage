import { Heading, SkipLink } from "@digdir/designsystemet-react";
import "./header.css";
import { Link } from "@digdir/designsystemet-react";
import { Link as RouterLink } from "react-router";

export function Header() {
  return (
    <>
    <SkipLink href="#main-content" data-color="info">Hopp til hovedinnhold</SkipLink>
    <header className="header" data-color="neutral">
      <Heading level={1}>
        Tobias Test
      </Heading>
      <ul>
        <li>
          <Link asChild>
            <RouterLink to="/">Home</RouterLink>
          </Link>
        </li>
        <li>
          <Link asChild>
            <RouterLink to="/about">About</RouterLink>
          </Link>
        </li>
      </ul>
    </header>
    </>
  );
}
