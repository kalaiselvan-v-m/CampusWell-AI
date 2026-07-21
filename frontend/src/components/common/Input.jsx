export default function Input({

    label,

    type = "text",

    name,

    value,

    onChange,

    placeholder

}){

    return(

        <div>

            <label className="block mb-2 font-medium">

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
                rounded-lg
                border
                border-[#E3AFBC]
                bg-white
                px-4
                py-3
                text-[#5D001E]
                placeholder:text-gray-400
                outline-none
                transition-all
                duration-300
                focus:border-[#9A1750]
                focus:ring-2
                focus:ring-[#EE4C7C]/20
            "

            />

        </div>

    );

}