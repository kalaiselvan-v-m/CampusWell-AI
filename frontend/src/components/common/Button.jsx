export default function Button({

    children,

    type = "button",

    onClick,

    className = ""

}) {

    return (

        <button

            type={type}

            onClick={onClick}

            className={`
            w-full
            rounded-lg
            bg-[#9A1750]
            py-3
            text-white
            font-semibold
            tracking-wide
            transition-all
            duration-300
            hover:bg-[#5D001E]
            hover:-translate-y-0.5
            active:scale-95
            shadow-md
            ${className}
        `}
        >

            {children}

        </button>

    );

}