import Link from 'next/link';

export default function NavBar() {
    return (
        <nav className="flex items-center justify-center gap-12 py-5 px-10 bg-[var(--background)] border-b border-gray-500/20 sticky top-0 z-50 shadow-[0_4px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_4px_20px_rgba(255,255,255,0.02)]">
            <Link href="/" className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-[var(--foreground)] hover:opacity-80 hover:-translate-y-[1px]">
                Home
                <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
            </Link>
            <Link href="/about" className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-[var(--foreground)] hover:opacity-80 hover:-translate-y-[1px]">
                About
                <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
            </Link>
            <Link href="/projects" className="group relative font-semibold text-[1.05rem] tracking-[0.5px] transition-all duration-300 py-1 capitalize text-[var(--foreground)] hover:opacity-80 hover:-translate-y-[1px]">
                Projects
                <span className="absolute w-0 h-[2px] -bottom-1 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 ease-out group-hover:w-full rounded-sm"></span>
            </Link>
        </nav>
    );
}
