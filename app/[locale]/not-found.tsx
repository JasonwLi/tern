import Link from "next/link";
import { Logo } from "@/components/Logo";

// Next's not-found boundary doesn't receive route params, so this page is
// locale-agnostic: links go to "/" and the middleware re-routes the visitor
// to their language.
export default function NotFound() {
  return (
    <main className="grid min-h-[100svh] place-items-center bg-cream px-5">
      <div className="text-center">
        <div className="mx-auto mb-6 grid h-16 w-16 place-items-center">
          <Logo className="h-16 w-16" />
        </div>
        <p className="font-display text-7xl font-bold text-grape-500">404</p>
        <h1 className="mt-3 font-display text-2xl font-bold text-ink">
          This page flew somewhere else
        </h1>
        <p className="mx-auto mt-2 max-w-sm text-ink-soft">
          The page you&apos;re looking for doesn&apos;t exist or has moved.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-grape-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-grape-500/30 transition hover:-translate-y-0.5 hover:bg-grape-600"
          >
            Tern home
          </Link>
          <Link
            href="/en/guides"
            className="rounded-full border-2 border-ink/10 bg-white px-6 py-3 text-sm font-bold text-ink transition hover:border-grape-400"
          >
            Working holiday guides
          </Link>
        </div>
      </div>
    </main>
  );
}
