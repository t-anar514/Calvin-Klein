import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdOutlinePerson2 } from "react-icons/md";
import { GrShop } from "react-icons/gr";

export default function Header(){
    return(<>
    <div className="w-screen h-12 bg-black items-center flex justify-center">
        <p className="text-sm">The Spring Event:  Up to 40% off SitewideWomen's Men's | Free shipping on $75+ Details </p>
    </div>
    <div className="w-screen h-20 sticky flex  bg-slate-200">
<div className="text-black w-full h-full flex items-center bg-slate-500 justify-evenly">
    <button>New</button>
    <button>Woman</button>
    <button>Men</button>
    <button>Underwear</button>
    <button>Kids</button>
    <button>Home</button>
    <button>Essantials</button>
    <button>Sale</button>
</div>

<div className="flex h-full items-center justify-start w-full">
<img className="w-24" src="https://www.calvinklein.us/on/demandware.static/-/Sites-PVHCKUS-Library/default/dwa55a036f/logo/Logo.svg"/>
</div>
 <div className="flex justify-evenly h-full w-48 items-center bg-slate-500">
 <IoMdSearch size={25}  color="black"/>
 <MdOutlinePerson2 size={25} color="black"/>
 <GrShop  size={25} color="black" />
 </div>
    </div>
    </>);
}