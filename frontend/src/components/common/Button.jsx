export default function Button({
    children,
    type = "button",
    onClick,
    variant = "primary",
    className = ""
}) {
    const variants = {
        primary: `
            bg-primary text-white
            hover:bg-primary-dark
            shadow-[0_1px_2px_rgba(32,43,36,0.08)]
        `,
        ghost: `
            bg-transparent text-ink
            border border-line
            hover:border-primary hover:text-primary-dark
        `,
    };

    return (
        <button
            type={type}
            onClick={onClick}
            className={`
                w-full
                rounded-xl
                py-3.5
                px-6
                font-medium
                tracking-tight
                transition-all
                duration-200
                ease-out
                hover:-translate-y-[1px]
                active:translate-y-0
                active:scale-[0.99]
                disabled:opacity-50
                disabled:pointer-events-none
                ${variants[variant]}
                ${className}
            `}
        >
            {children}
        </button>
    );
}
