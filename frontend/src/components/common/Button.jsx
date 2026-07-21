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
                rounded-xl
                bg-[#C1121F]
                py-3
                text-white
                font-semibold
                transition-all
                duration-300
                hover:bg-[#780000]
                hover:scale-[1.02]
                active:scale-95
                ${className}
            `}
        >

            {children}

        </button>

    );

}