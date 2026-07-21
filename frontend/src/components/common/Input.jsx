export default function Input({
    label,
    type = "text",
    name,
    value,
    onChange,
    placeholder
}) {
    return (
        <div>
            <label className="block mb-2 text-sm font-medium text-ink-soft">
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                className="
                    w-full
                    rounded-xl
                    border
                    border-line
                    bg-surface
                    px-4
                    py-3
                    text-ink
                    placeholder:text-ink-faint
                    outline-none
                    transition-all
                    duration-200
                    focus:border-primary
                    focus:ring-4
                    focus:ring-primary-soft
                "
            />
        </div>
    );
}
