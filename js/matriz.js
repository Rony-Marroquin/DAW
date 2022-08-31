let m = parseInt(prompt("digite el numero de filas"))
let n = parseInt(prompt("digite el numero de columnas"))


let t = m * n
const array = new Array(m).fill(new Array(n))



document.write("<table border >");
for(let i = 0; i < array.length; i++){

 

  
    document.write("<tr>");
  for(let j = 0; j < array[i].length; j++){



  
   
    array[i][j] = Math.floor (Math.random()*100);
    
    document.write("<td>");
    
    document.write(array[i][j] + " ");

  }
  
  document.write("<br>");

  document.write("</tr>")
  document.write("</td>")
  document.write("</table border>");


  
}


  
  

