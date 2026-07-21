export default function Card({ children, className = "" }) {

    return (

        <div

            className={`
                rounded-3xl
                bg-white
                p-10
                shadow-xl
                border border-white/40
                ${className}
            `}

        >

            {children}

        </div>

    );

}