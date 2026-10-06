function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   const searchRef = document.getElementById("searchField");

   const tableRowRef = document.querySelectorAll("tbody tr")



   function onClick() {
      const searchText = searchRef.value;

      if(!searchText){

         return;

      }

      for(let i = 0; i< tableRowRef.length; i++){

         const tableDataReff = tableRowRef[i].querySelectorAll("td")

         console.log(tableRowRef[i]);

         for(let col = 0; col < tableDataReff.length; col++){

          const tableData = tableDataRef[col].textContent;

          console.log(tableData)

         }

      }

      

   }
}
