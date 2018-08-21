//Definindo a variavel nome
//var nome = "Mauricio de Oliveira Amarante";
//var x = prompt("Digite um número");

		function adicionarMais(){

			var produto   = document.getElementById('produto').value;
			var listahtml = document.getElementById('lista').innerHTML;
				listahtml = listahtml + "<li>"+produto+"</li>";
			document.getElementById('lista').innerHTML = listahtml;
		

	}	
		
		
function removeMais(){

			var produto   = document.getElementById('produto').value;
			var listahtml = document.getElementById('lista').innerHTML;
				listahtml = listahtml; 
			document.getElementById('lista').innerHTML = listahtml;
		

	}			
	
	var x = 10 
	var y = x + 40;
	alert(y);
	