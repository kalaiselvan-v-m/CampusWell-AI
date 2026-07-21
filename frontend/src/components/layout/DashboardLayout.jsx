import Sidebar from "./Sidebar";


export default function DashboardLayout({children}){


return(

<div
className="
min-h-screen
flex
bg-[#f6f4ee]
"
>


<Sidebar/>


<main
className="
flex-1
p-10
"
>


{children}


</main>


</div>

)

}