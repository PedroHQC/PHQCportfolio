import type { Metadata } from "next";
import { ProjectGrid } from "../../components/project-grid";
import { Contact } from "../../components/site-footer";
export const metadata: Metadata = { title: "Game projects", description: "Explore Pedro Coelho’s Unity and C# projects, gameplay demos, and technical contributions." };
export default function Projects() { return <main id="main-content"><ProjectGrid full /><Contact /></main>; }
