import { Leaf } from "lucide-react";

export default function AuthLayout({ eyebrow, title, subtitle, children }) {
  return (
    <div className="min-h-screen flex bg-background">
      <div className="hidden lg:flex w-1/2 relative overflow-hidden bg-primary text-primary-foreground p-16">
        <div className="absolute -top-32 -left-32 h-[500px] w-[500px] rounded-full bg-accent/20 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-sage/20 blur-3xl" />
        <div className="relative z-10 flex flex-col justify-between w-full">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-white/10 flex items-center justify-center">
              <Leaf size={17} strokeWidth={1.75} />
            </div>
            <span className="text-xs uppercase tracking-[0.25em] text-primary-foreground/60">
              CampusWell
            </span>
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-primary-foreground/50 mb-6">
              {eyebrow}
            </p>
            <h1 className="font-display text-6xl leading-[1.05] text-balance">
              Care for your mind,
              <br />
              <em className="text-accent not-italic font-normal">one gentle day</em>
              <br />
              at a time.
            </h1>
            <p className="mt-8 max-w-md text-[15px] leading-8 text-primary-foreground/70">
              A digital mental wellness companion built for students. Reflect,
              measure, and grow with support that meets you where you are.
            </p>
          </div>
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} CampusWell. A quieter kind of care.
          </p>
        </div>
      </div>

      <div className="flex flex-1 items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="mb-10">
            <h2 className="font-display text-4xl text-ink">{title}</h2>
            {subtitle && <p className="mt-3 text-sm text-ink-soft">{subtitle}</p>}
          </div>
          {children}
        </div>
      </div>
    </div>
  );
}
