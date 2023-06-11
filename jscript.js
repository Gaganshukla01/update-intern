// for accessing the element

let lists=document.getElementsByClassName("list");
let rightbox=document.getElementById("right");
let leftbox=document.getElementById("left");
let button=document.getElementById("btn");

// for selecting the item in list and use drag property
for(list of lists)
{
    list.addEventListener('dragstart',function(e) {
        let selected =e.target;

        rightbox.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        rightbox.addEventListener('drop',function(e){
            rightbox.appendChild(selected);
            selected=null;
            
                alert("Sucessfuly Item droped")
                
           

        })
        leftbox.addEventListener('dragover',function(e){
            e.preventDefault();
        })
        leftbox.addEventListener('drop',function(e){
            leftbox.appendChild(selected);
            selected=null;
        
                alert("Sucessfuly Item droped")
                
                  

        })
    })
}

button.addEventListener('click',()=>{
    if(confirm("Are you sure you want to reset"))
    {
        location.reload();
    }
})