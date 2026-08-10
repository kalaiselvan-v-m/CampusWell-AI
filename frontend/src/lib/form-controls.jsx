export function Field({ label, name, type = "text", value, onChange, placeholder, required }) {
  return (
    <label className="block">
      <span className="text-xs font-medium uppercase tracking-wider text-ink-soft">
        {label}
      </span>
      <input
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="mt-2 w-full rounded-lg border border-border bg-card px-4 py-3 text-[15px] text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition"
      />
    </label>
  );
}

export function PrimaryButton({ children, ...props }) {
  return (
    <button
      {...props}
      className="w-full rounded-lg bg-primary text-primary-foreground py-3.5 text-sm font-medium tracking-wide hover:bg-primary/90 active:scale-[0.99] transition disabled:opacity-60"
    >
      {children}
    </button>
  );
}
