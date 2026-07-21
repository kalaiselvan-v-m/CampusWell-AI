export default function Card({ children, className = "" }) {

    return (

        <div

            cclassName={`
            rounded-2xl
            bg-white
            p-8
            border
            border-[#E3AFBC]
            shadow-sm
            transition-all
            duration-300
            hover:shadow-md
            ${className}
        `}

        >

            {children}

        </div>

    );

}