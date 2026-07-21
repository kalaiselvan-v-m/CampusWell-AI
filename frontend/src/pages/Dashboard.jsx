export default function Dashboard(){

return(

<div className="space-y-8">


<div>

<p className="
text-sm
text-[#4b6455]
">
CampusWell AI
</p>


<h1
className="
text-4xl
font-bold
mt-2
text-[#202b24]
"
>
Welcome back 👋
</h1>


<p
className="
mt-3
text-[#5c6b60]
"
>
Monitor your emotional wellness and productivity.
</p>


</div>



<div
className="
grid
md:grid-cols-2
xl:grid-cols-4
gap-6
"
>

<div className="dashboard-surface">
<h3>Wellness Score</h3>
<p className="text-3xl font-bold mt-3">
82%
</p>
</div>


<div className="dashboard-surface">
<h3>Mood</h3>
<p className="text-3xl font-bold mt-3">
Positive
</p>
</div>


<div className="dashboard-surface">
<h3>Study Hours</h3>
<p className="text-3xl font-bold mt-3">
5.4h
</p>
</div>


<div className="dashboard-surface">
<h3>Consistency</h3>
<p className="text-3xl font-bold mt-3">
91%
</p>
</div>


</div>



<div className="
grid
lg:grid-cols-3
gap-6
">


<div
className="
dashboard-primary
lg:col-span-2
"
>

<h2 className="text-2xl font-bold">
Your Wellness Today
</h2>


<p className="mt-3 opacity-80">
AI analysis of your emotional state will appear here.
</p>


</div>



<div
className="
dashboard-surface
"
>

<h2 className="font-bold">
Quick Actions
</h2>


<button className="
dashboard-button
mt-5
w-full
">
Start Check-in
</button>


</div>


</div>


</div>

)

}