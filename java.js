function func(){
    let testvar=document.getElementsByClassName("listnav")
    console.log(testvar)
    for (th in testvar){
        // let th= this.th

        let q=testvar[th]
        if(q.style.display=="none"){
            q.style.display="initial"
        }
        else{
            q.style.display="none"
        }
    }}
    // testva[1].style.display="none"
    function ok(){

        fetch('for.json',{
        method:"POST",
        body:JSON.stringify(
            {
                name:"Qasim",
                email:"qasim@123",
                semester:"N/A"
            }

        ),
        header:{
            'Content-type' :'application/json'
        }
    
    
    }).then((resp)=>{resp.json})
    .then((ok)=>console.log(ok))
    .catch(console.log("errorhaooening"))
    }
    function gettingdata(){
        fetch('data3.json')
        .then((rep)=>rep.json())
        .then((ufff)=>{
            console.table(ufff);
            let oi=document.querySelector("#somecontainer");
            for(let x=0 ; x<ufff.length;x++){
                let yy=ufff[x].company;
                let para=document.createElement("div")
                para.append("SR: "+ufff[x].id+" Name: "+ufff[x].name+" Email: "+ufff[x].email)
                oi.appendChild(para)
   

            }
            
        })
        .catch((erroro)=>console.log("yes i got beautiful error"))
    }
    function clearing(){
        let oii=document.querySelector("#somecontainer");
        let x=oii.childNodes

        for(let c=x.length-1; c>0;c--){
            // console.log(x[c]); 
            x[c].remove()
        }
        // for(let c=0; c<x.length;c++){
        //     // console.log(x[c]); 
        //     x[c].remove()
        // }
        
        
        console.log(x)
       
        
    }
