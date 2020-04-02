// Global namespace pollution create it 
// let filA,a;
// filA=function(ev)
// {
//     let gettarget=ev.currentTarget;
//     gettarget.style.backgroundColor='red';

// }
//  a=document.getElementById("myid");

// a.addEventListener('mouseover',filA)



// Global namespace pollution  solve by [namespace]
let fil1,a;

file1={

    filA:function(ev)
    {
        let gettarget=ev.currentTarget;
        gettarget.style.backgroundColor="black";
        gettarget.style.color="red";

    },
    callme:function()
    {
        a=document.getElementById("myid");
        a.addEventListener('mouseout',this.filA)

    }

}

file1.callme();