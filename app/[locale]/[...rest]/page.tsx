import { notFound } from "next/navigation";

// Catch-all: any path that no real route matched renders the branded
// not-found boundary (with a 404 status) instead of Next's default page.
export default function CatchAll(): never {
  notFound();
}
