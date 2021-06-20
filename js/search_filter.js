const d = document;

function serchfilter(input, selector){
  d.addEventListener("keyup", (e) => {
   if(e.target.matches(input)){
     d.querySelectorAll(selector.firstChild).forEach(el =>
       el.textContent.toLowerCase().includes(e.target.value)? el.classList.remove("filter") : el.classList.add("filter")
     );
   }
  })
}

serchfilter(".card-filter", ".all-cards")

  