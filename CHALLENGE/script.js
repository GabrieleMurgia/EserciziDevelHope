async function fetchTable(){
    try{
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    const content = await response.json()
    return content
    }catch (error) {
        console.log("Error: " + error);
      }
  }

  /**ISTRUZIONI SORTING */
 /*  setTimeout(()=>{
    document.querySelector("#istruzioni-sorting").style.display ="none";
  }, 9000) */

  /****************************************************************VARIABILI************************************************************** */
  const cerca = document.querySelector("#cerca");
  cerca.addEventListener("click",async () => {localStorage.setItem("tabellaDinamica",JSON.stringify( await fetchTable()))})
  const tabellaTodo = document.querySelector("#tabella-todo")
  const tbodyTabella = document.querySelector("tbody")
  const previous = document.querySelector("#previous-page");
  const next = document.querySelector("#next-page");
  const cercaTitolo = document.querySelector("#search-title");
  const sortingTitolo = document.querySelector("#sorting-titolo");
  const sortingStatus = document.querySelector("#sorting-status");
  const tHead = document.querySelector("thead");
  const nPage = document.querySelector("#counter-pagina")
  const removePagination = document.querySelector("#remove-pagination");
  let buttonFalse = document.querySelector("#filtra-false");
  let buttonVere = document.querySelector("#filtra-vere");
  let tdTitoli;
  let inizio=0;
  let fine=10;
  const ths= document.querySelectorAll("th");
  nPage.innerHTML=1;
  let paginazione = 0;
  window.addEventListener("DOMloaded",storaLaChiamata());
  window.addEventListener('storage', () => {storaLaChiamata();});
  caricaTabellaButton = document.querySelector(".carica-tabella");

  caricaTabellaButton.addEventListener("click",()=>{
    caricaTabellaButton.setAttribute("id","nascosto")
    showButtons();
  })
 
  /*********************************************************************Funzioni***************************************************************/
               

  /**Nasconde i bottoni navigazione*/
    const hideButtons = ()=>{
    const buttons =  document.querySelector(".buttons")
    buttons.setAttribute("id","nascosto")
  }
  /**Mostra bottoni navigazione */
  const showButtons = ()=>{
    const buttons =  document.querySelector(".buttons")
    buttons.removeAttribute("id")
  }
  
    /*Rimuove la paginazione */
    removePagination.addEventListener("click",()=>{
    hideButtons();
    const rows = document.querySelectorAll("tr");
    rows.forEach(row=>{
        row.removeAttribute("id")
    })
    if(paginazione <1){
       paginazione++;}
     })

        /*Crea tutti gli elementi della tabella */

        const creaTabella =

         ()=>{
            try{
        const nuovaTabella = JSON.parse(localStorage.getItem("tabellaDinamica"));
        nuovaTabella.forEach(obj => {
        const tr = document.createElement("tr");
        const tdId = document.createElement("td");
        const tdTitle = document.createElement("td");
        const tdStatus = document.createElement("td");
        tdId.innerHTML = obj.id
        tdTitle.innerHTML = obj.title
        tdStatus.innerHTML = obj.completed
        tdId.setAttribute("class","td-id");
        tdTitle.setAttribute("class","td-title");
        tdStatus.setAttribute("class","td-status");
        tr.setAttribute("id","nascosto")
        tr.appendChild(tdId)
        tr.appendChild(tdTitle)
        tr.appendChild(tdStatus)
        tbodyTabella.appendChild(tr)
        tHead.parentNode.insertBefore(tbodyTabella, tHead.nextSibling);
        }
        )
        rows = document.querySelectorAll("#nascosto");
        for(i=0;i<10;i++){
            rows[i].removeAttribute("id");    
        }
    }catch(err){
        console.log("spiacente :",err)
        caricaTabellaButton.removeAttribute("id");
        console.log(paginazione)
        hideButtons();
    }}
   
    creaTabella();
    
    
    
    
        /*Carica la tabella */
        async function storaLaChiamata() {
        localStorage.setItem("tabellaDinamica",JSON.stringify( await fetchTable()));
        }

        /*Gira pagina Avanti*/
        const giraAvanti =()=>{
        if(nPage.innerHTML >= 20){
        nPage.innerHTML--;
         }
        nPage.innerHTML++;
        if(fine===200){
        return;
         }
        rows.forEach(element=> element.setAttribute("id","nascosto"))
        fine +=10;
        inizio+=10;
        for(z=inizio;z<fine;z++){
        rows[z].removeAttribute("id")}
        }
        
        /*Gira pagina Indietro*/
        const giraIndietro =()=>{
        if(nPage.innerHTML <= 1){
            nPage.innerHTML ++;
        }
        nPage.innerHTML --;
        if(fine===10){
        return;
         }
        fine -=10;
        inizio-=10;
         rows.forEach(element=> element.setAttribute("id","nascosto"))
        for(z=fine-1;z>=inizio;z--){
        rows[z].removeAttribute("id");}}

        /*Resetta L'impaginazione*/
        const resettaPagina = ()=>{
        giraAvanti();
        giraIndietro()
        }
         /**FILTRA STATO VERE */
         let allTr = document.querySelectorAll("tr");
         const filtraStatoVere = ()=>{
             
         if(paginazione === 0){
          resettaPagina()
         }else{
          allTr.forEach(tr=>{
          tr.removeAttribute("id")
          hideButtons();
         })}
         allTr.forEach(tr => {
         if(tr.childNodes[2].textContent==="false"){
             tr.setAttribute("id","filtro-status")
         }})}
 
         /**FILTRA STATO FALSE */
         const filtraStatoFalse = ()=>{
             console.log(paginazione)
         if(paginazione === 0){
         resettaPagina() 
         }else{
         allTr.forEach(tr=>{
         tr.removeAttribute("id")
         hideButtons();
        })}
         allTr.forEach(tr => {
         if(tr.childNodes[2].textContent==="true"){
             tr.setAttribute("id","filtro-status")
         }})}

        /*Ricerca titolo*/
        function searchUser(event){
        const text = event.target.value.toLowerCase();
        rows.forEach(function(user){
        const userName = user.querySelector(".td-title").innerText
        if(userName.toLowerCase().indexOf(text) != -1) {
           user.removeAttribute("id")
        }else{
          user.setAttribute("id","nascosto")
        }})}

    

         /*sorting per parametro*/ 
         function sortTableByColumn(table, column, asc = true) {
            const dirModifier = asc ? 1 : -1;
            const tBody = table.tBodies[0];
            const rows = Array.from(tBody.querySelectorAll("tr"));
        
            // Sorta le righe
                const sortedRows = rows.sort((a, b) => {
                    
                let aColText = a.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
                if(column === 0){
                aColText = Number(aColText)+1
                }

                let bColText = b.querySelector(`td:nth-child(${ column + 1 })`).textContent.trim();
                return aColText > bColText ? (1 * dirModifier) : (-1 * dirModifier);
            });
            //Rimuove tutti i tr dalla tabella
            
            while (tBody.firstChild) {
                tBody.removeChild(tBody.firstChild);
            }
        
            //Re inserisce le nuove righe ordinate
            tBody.append(...sortedRows);
        
            // Sistema per ricordarsi come sono attualmente ordinate le colonne
            table.querySelectorAll("th").forEach(th => th.classList.remove("th-sort-asc", "th-sort-desc"));
            table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-asc", asc);
            table.querySelector(`th:nth-child(${ column + 1})`).classList.toggle("th-sort-desc", !asc);
            }

                /**EVENT LISTENER SULLE COLONNE */
                document.querySelectorAll(".table-sortable th").forEach(headerCell => {
                headerCell.addEventListener("click", () => {
                const tableElement = headerCell.parentElement.parentElement.parentElement;
                const headerIndex = Array.prototype.indexOf.call(headerCell.parentElement.children, headerCell);
                const currentIsAscending = headerCell.classList.contains("th-sort-asc");
              
                sortTableByColumn(tableElement, headerIndex, !currentIsAscending);
                });
                });
    
      

/**************************************************************************EVENT LISTENER*****************************************************************/
    
  
  
    
    next.addEventListener("click",giraAvanti)
    previous.addEventListener("click",giraIndietro)
    cercaTitolo.addEventListener("keyup",searchUser)
    cercaTitolo.addEventListener("focus",hideButtons)
    cercaTitolo.addEventListener("blur",showButtons)
    buttonFalse.addEventListener("click",filtraStatoFalse)
    buttonVere.addEventListener("click",filtraStatoVere);
    cerca.addEventListener("click",resettaPagina);
    cerca.addEventListener("click",()=>{
    showButtons();
    if(paginazione>0){
     paginazione--;}
    });

        

    