import { Link } from "react-router-dom";
import { Compass } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-bg flex flex-col items-center justify-center gap-5 px-6 text-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-soft">
                <Compass size={24} className="text-primary-dark" strokeWidth={1.75} />
            </div>
            <h1 className="font-display text-3xl font-medium text-ink">
                Page not found
            </h1>
            <p className="max-w-sm text-sm text-ink-soft">
                The page you're looking for doesn't exist or may have moved.
            </p>
            <Link
                to="/dashboard"
                className="mt-2 inline-flex items-center rounded-xl bg-primary px-5 py-3 text-sm font-medium text-white transition-transform duration-200 hover:-translate-y-[1px]"
            >
                Back to dashboard
            </Link>
        </div>
    );
}
