import { Github } from "lucide-react"

import { Logo } from "./Logo"

export function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-5 px-5 py-8 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <div>
          <Logo />
          <p className="mt-3">Real-time code rooms for focused student teams.</p>
        </div>
        <div className="flex flex-col gap-3 sm:items-end">
          <a
            href="https://github.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 text-zinc-300 transition hover:text-emerald-300"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <p>© {new Date().getFullYear()} Syncode. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
