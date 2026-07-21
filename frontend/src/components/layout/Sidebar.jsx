import {
  LayoutDashboard,
  HeartPulse,
  ClipboardCheck,
  User,
  MessageCircle
} from "lucide-react";

import {NavLink} from "react-router-dom";


const menu=[
{
name:"Dashboard",
path:"/dashboard",
icon:LayoutDashboard
},
{
name:"Wellness",
path:"/wellness",
icon:HeartPulse
},
{
name:"Assessment",
path:"/assessment",
icon:ClipboardCheck
},
{
name:"AI Assistant",
path:"/assistant",
icon:MessageCircle
},
{
name:"Profile",
path:"/profile",
icon:User
}
];


export default function Sidebar(){


return(

<aside
className="
w-72
min-h-screen
bg-white
border-r
border-[#e3ded2]
p-6
"
>


<h1
className="
text-2xl
font-bold
text-[#202b24]
"
>
CampusWell AI
</h1>


<p
className="
text-sm
text-[#5c6b60]
mt-1
"
>
Student Wellness
</p>



<nav
className="
mt-10
space-y-2
"
>


{
menu.map((item)=>{

const Icon=item.icon;


return(

<NavLink
key={item.path}
to={item.path}
className={({isActive})=>

`
flex
items-center
gap-3
px-4
py-3
rounded-xl
transition

${
isActive
?
"bg-[#4b6455] text-white"
:
"text-[#5c6b60] hover:bg-[#efece2]"
}

`

}
>


<Icon size={20}/>


<span>
{item.name}
</span>


</NavLink>

)

})

}


</nav>



</aside>


)

}