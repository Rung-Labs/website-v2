export default function Footer() {
  return (
    <footer className="w-full border-t border-black/10 ">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-6 text-xs text-gray-600 sm:flex-row sm:items-center sm:justify-between sm:text-sm">
        <div className="space-y-1">
          <p className="font-semibold text-gray-900">Rung Labs</p>
          <p className="text-gray-500">
            Message-first assistant for field service teams.
          </p>
        </div>
        <div className="flex flex-wrap gap-4 sm:items-center sm:justify-end">
          <span>© {new Date().getFullYear()} Rung. All rights reserved.</span>
          <span className="hidden h-4 w-px bg-gray-300 sm:inline-block" />
          <a href="mailto:hello@rung.app" className="hover:text-gray-900">
            zreed@runglabs.com
          </a>
        </div>
      </div>
    </footer>
  );
}
