let baked1 = "Donut";
let baked2 = "Muffin";
let baked3 = "Crossiant";
let baked4 = "Cake";
let baked5 = "Cookie";
//stores baked goods list
let arrBaked = ["Donut", "Muffin", "Crossiant", "Cake", "Cookie"]
//add bakery item
function addBaked(){
    let newBaked = document.getElementById("txtNewBaked").value;

    arrBaked.push(newBaked)
//update list
    showBaked();
}


//loop
//ul - unorderd list    li - list item
function showBaked(){
    let ulBaked = document.getElementById("ulBaked");
    ulBaked.innerHTML = "";

    arrBaked.forEach(function(baked, index){
        let li = document.createElement("li");
        li.textContent = baked;

        li.onclick = function(){
            if(confirm('Remove ' + baked + "?")){
                arrBaked.splice(index,1);
                showBaked();
            }
        };
        ulBaked.appendChild(li);
    });
}
showBaked();