const Search =document.getElementById('Search');
const Send = document.getElementById('text');
const btnSend = document.getElementById('btnSend');
const btnClear = document.getElementById('btnClear');
var par = document.getElementById('pp');
var text = '';
var text1 = '';
var val = '';

btnSend.addEventListener('click', yaz);
Search.addEventListener('input', arama);
btnClear.addEventListener('click', clean)


function yaz() {
   if (!Send.value) {
      alert("Lütfen boş bırakmayınız")
   } else {
       text = Send.value;
       text1 = Send.value;
     document.getElementById('pp').innerText = Send.value;
     Send.value = "";
    }
}

function arama() {
   val = document.getElementById('Search').value;
   var flags = 'gi';
   var regex = new RegExp(val, flags );
   var result = text.match(regex);
   document.getElementById('pp').innerText;
   if (result != null ) {
      
      result.forEach((element)=>{
        
         document.getElementById('pp').innerHTML = text1.replace(regex,'<mark>'+element+'</mark>')
      });
   }
};
   
 
function clean() {
   par.innerText = "";
   Search.value = "";
}
//
   

  

