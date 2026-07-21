export default function Input({label, type="text", placeholder}){

    return (

        <div className="flex flex-col gap-2">

            <label className="text-sm font-semibold text-[#202b24]">
                {label}
            </label>

            <input

                type={type}

                placeholder={placeholder}

                className="
                h-12
                w-full
                rounded-xl
                border
                border-[#e3ded2]
                px-4
                text-[#202b24]
                outline-none
                transition
                focus:border-[#4b6455]
                focus:ring-4
                focus:ring-[#4b6455]/10
                "

            />

        </div>

    )

}