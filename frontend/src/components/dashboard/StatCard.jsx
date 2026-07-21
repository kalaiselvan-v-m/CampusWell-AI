import { motion } from "framer-motion";


export default function StatCard({
  icon: Icon,
  title,
  value,
  description,
}) {

  return (

    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="
        dashboard-surface
        p-6
      "
    >

      <div className="
        flex
        items-start
        justify-between
      ">


        <div className="
          dashboard-icon
        ">

          <Icon className="h-5 w-5" />

        </div>


      </div>



      <p className="
        mt-6
        text-sm
        font-medium
        text-[#5c6b60]
      ">
        {title}
      </p>



      <h3 className="
        mt-2
        text-4xl
        font-bold
        text-[#202b24]
      ">
        {value}
      </h3>



      <p className="
        mt-2
        text-sm
        text-[#94a196]
      ">
        {description}
      </p>



    </motion.div>

  );
}