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
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                px-4
                py-3
                outline-none
                transition
                focus:border-[#669BBC]
                focus:ring-4
                focus:ring-[#669BBC]/20
                "

            />

        </div>

    );

}