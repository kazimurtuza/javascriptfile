// Global namespace pollution create it 
//   come from fileB
// let filA,c;
//  filA=function(ev)
// {
//     let gettarget=ev.currentTarget;
//     gettarget.style.backgroundColor='yellow';

// }

// c=document.getElementById("myid");

// c.addEventListener('mouseout',filA)


// Global namespace pollution  solve by [namespace]

 let fil2,c;

file2={

    filA:function(ev)
    {
        let gettarget=ev.currentTarget;
        gettarget.style.backgroundColor="blue";
        gettarget.style.color="yellow";

    },
    callme:function()
    {
        c=document.getElementById("myid");
        c.addEventListener('mouseover',this.filA)

    }

}

file2.callme();