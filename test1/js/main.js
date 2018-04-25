function abc(){

var emp = new Array("Ravi", "Karim", "Banty", "Amar", "Mohan");
    
    for (i=0; i<emp.length; i++)
    {
    	
       document.getElementById("aryList").innerHTML+=emp[i]+',';
       
       
    }
  
  


    // display Fibonacci less than 50

    var pre=0;  var curr=1; var next; var result;
   
 
   for(next=0; next<100; next++)
		{
		 // document.write(pre + ",");
document.getElementById("fibnum").innerHTML += pre +',';

		  next = pre + curr;
          pre = curr;
          curr = next;


     //document.getElementByID("fibnum").innerHTMl = pre;


//div.innerHTML = pre;

          
		}
    		
 }

