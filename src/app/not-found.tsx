import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[var(--bg)] flex items-center justify-center">
      <div className="text-center px-6 max-w-lg">
        <div className="w-20 h-20 rounded-[2rem] bg-[var(--orange-light)] text-[var(--orange)] flex items-center justify-center mx-auto mb-8">
          <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z" />
          </svg>
        </div>
        <h1 className="text-6xl font-black text-[var(--foreground)] mb-2">404</h1>
        <p className="text-xl text-[var(--body)] mb-2 font-medium">Page not found</p>
        <p className="text-[var(--muted)] mb-8 leading-relaxed">
          The page you are looking for does not exist or has been moved.
          Let us get you back on track.
        </p>
        <Link href="/" className="btn btn-primary btn-lg inline-flex">
          Back to Home
        </Link>
      </div>
    </main>
  );
}
