import {
  HeartPulse,
  Sparkles
} from "lucide-react";


export default function WellnessScore(){

  return (

    <div className="dashboard-primary">


      <div className="
        flex
        flex-col
        gap-8
        md:flex-row
        md:items-center
        md:justify-between
      ">



        <div>


          <div className="
            flex
            items-center
            gap-2
            text-white/70
          ">

            <HeartPulse className="h-5 w-5" />

            <span className="text-sm font-medium">
              Wellness Score
            </span>

          </div>



          <h2 className="
            mt-5
            text-6xl
            font-bold
          ">
            82%
          </h2>



          <p className="
            mt-4
            max-w-md
            text-sm
            leading-6
            text-white/70
          ">
            Your current wellness level is looking healthy.
            Keep maintaining your study routine and daily habits.
          </p>



        </div>





        <div className="
          flex
          h-40
          w-40
          items-center
          justify-center
          rounded-full
          border-8
          border-white/20
          bg-white/10
        ">


          <div className="text-center">


            <Sparkles className="
              mx-auto
              h-6
              w-6
              text-white/80
            "/>


            <p className="
              mt-2
              text-xs
              text-white/60
            ">
              Good
            </p>


          </div>


        </div>



      </div>


    </div>

  );

}