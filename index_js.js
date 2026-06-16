var body = document.querySelector("body");
var ajouter = document.getElementById("add")
var ajout = document.querySelector(".add");
var donnee = "";


ajout.addEventListener("input", (e) => {
  donnee = e.target.value;
});
ajouter.addEventListener("click", () => {
   var elt =document.createElement("div")
   elt.innerHTML = `
     <input type="text" class="list" value=" ${donnee}"/>
          <b class="done">✅ </b>
      <span id="delete">➕ </span>
    `;
    elt.style.cssText=`margin-top:12px`
     var  done= elt.querySelector(".done")
var tache= elt.querySelector(".list")
done.addEventListener("click",()=>{
  tache.style.textDecoration="line-through"
  
})
var suprimer = elt.querySelector("#delete");
suprimer.addEventListener("click",()=>{
  elt.remove()
})
    document.body.appendChild(elt)
    ajout.value=""
    donnee=""

});




 