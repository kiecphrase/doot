let doots = ["test1", "test2", "test3"];

function actualmake(theitem){
    let newnew = document.createElement("p");
    y.setAttribute("class", "nameitem");
    y.setAttribute("id", arbid());
    y.setAttribute("ondblclick", "deldel(this.id)");
    y.textContent = theitem;
    document.getElementById("itemsholder").appendChild(y);
}

function getcurrentitems(){
    let cur = document.getElementById("itemsholder");
    let allcur = [];

    //TODO get all current items
    for(c in cur){
        allcur.push(c.textContent);
    }

    // Local Storage
    doots = allcur.toString();
    localStorage.setItem("doots", doots);
}

function initializin(){
    
    //determine if doots or not doots
    if (localStorage.getItem("doots")){
        let ttttt = localStorage.getItem("doots");
    }
    else {
        let thisistemp = ["test1", "test2", "test3"];
        localStorage.setItem("doots", thisistemp.toString())
        let ttttt = localStorage.getItem("doots");
    }

    //take all things from doots, convert it to an array, make the items
    let arrarar = ttttt.split(",");
    for (o = 0; o < arrarar.length; o++){
        actualmake(arrarar[o]);
    }

    return null;
}

function deldel(the_id){
    document.getElementById(the_id).remove();
    getcurrentitems();
}

function arbid(){
    let vals = "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm";
    let newid = "";

    for(j=0; j<7; j++){
        newid += vals[Math.floor(Math.random() * vals.length)]
    }
    return newid
}

function testadd(doots){
    // let doots = ["test1", "test2", "test3"];
    console.log(doots);
    for(i = 0; i < doots.length; i++){
        let x = document.createElement("p");
        x.setAttribute("class", "nameitem");
        x.setAttribute("id", arbid());
        x.setAttribute("ondblclick", "deldel(this.id)");
        x.textContent = doots[i];
        document.getElementById("itemsholder").appendChild(x);
    }
}

function viewtoggle(that_id){
    document.getElementById(that_id).classList.toggle("no_c");
}

function cancan(ggg){
    let temptemp = document.getElementById("thenewtodo");
    temptemp.setAttribute("value", "enter your todo");
    viewtoggle(ggg);
}

function gofish(idid, doots){
    let currenttemp = document.getElementById(idid);
    let currentvalue = currenttemp.getAttribute("value");

    actualmake(currentvalue);

}