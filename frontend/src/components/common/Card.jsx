export default function Card({ children, className = "" }) {
    return (
        <div
            className={`
                rounded-2xl
                bg-surface
                border
                border-line
                p-8
                shadow-[0_1px_2px_rgba(32,43,36,0.04),0_8px_24px_-12px_rgba(32,43,36,0.10)]
                transition-shadow
                duration-300
                hover:shadow-[0_4px_8px_rgba(32,43,36,0.05),0_20px_40px_-16px_rgba(32,43,36,0.16)]
                ${className}
            `}
        >
            {children}
        </div>
    );
}
