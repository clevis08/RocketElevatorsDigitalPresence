//////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////// 
////////////////////////////////////////////////////////////////////////////////////
/////////////////////                JAVASCRIPT                /////////////////////
/////////////////////              JEREMY LEFEBVRE             /////////////////////
/////////////////////                UNIVERSITY                /////////////////////
/////////////////////            TECHNOLOGY CODEBOXX           /////////////////////
/////////////////////              PROJET GENESSIS             /////////////////////
/////////////////////             TO NICOLAS GENEST            /////////////////////
/////////////////////                2019-01-26                /////////////////////
//////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////// 
//////////////////////////////////////////////////////////////////////////////////// 



// FUNCTION RES-COM-HYB-COR //

// RESIDENTIAL //

function residential() {
   
	var resnumapt = parseInt($('#resnumapt').val());
	   
	var resnumf = parseInt($('#resnumf').val());
	  
	var resST = document.getElementById("resST").checked
	   
	var resPRM = document.getElementById("resPRM").checked
	   
	var resEXC = document.getElementById("resEXC").checked
	   
	var floors20 = Math.ceil(resnumf / 20);
	   
	var cages101 = Math.ceil((resnumapt / resnumf) / 6);
	 var cages = floors20 * cages101;  
	document.getElementById("cages").value = cages;
	console.log (floors20)
	
	   if (resST ) {
		 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
	   } else if (resPRM ) {
		 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
	   } else if (resEXC ) {
		document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
	   } else {
		
	   }
	};

// COMERCIAL //

	function commercial() {
		var cagedeploy = parseInt($('#cagedeploy').val());

		var comST = document.getElementById("comST").checked;
	   
		var comPRM = document.getElementById("comPRM").checked;
	   
		var comEXC = document.getElementById("comEXC").checked;
	
		
		console.log (cagedeploy);

			if (comST ) {
			 document.getElementById("total").value =  ( 7565 * 10 / 100) * cagedeploy;
		   } else if (comPRM ) {
			 document.getElementById("total").value =  ( 12345 * 13 / 100) * cagedeploy;
		   } else if (comEXC ) {
			document.getElementById("total").value =   (15400 *  16 / 100)*  cagedeploy;
		   } else {
			
		   }
		};

// CORPORATE //

		function corporate() {
   
			var maxfrpeople = parseInt($('#maxfrpeople').val());
			   
			var howmanyfloor = parseInt($('#howmanyfloor').val());

			var howmanybase  = parseInt($('#howmanybase').val());

			var tot = (howmanybase + howmanyfloor);

			var col = Math.ceil(tot /20);

			var cages = tot * Math.ceil(maxfrpeople / 1000);
			
			var total = col * cages;
			
			var corST = document.getElementById("corST").checked;
			   
			var corPRM = document.getElementById("corPRM").checked;
			   
			var corEXC = document.getElementById("corEXC").checked;
			   
			if (corST ) {
				 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
			   } else if (corPRM ) {
				 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
			   } else if (corEXC ) {
				document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
			   } else {
				
			   }
			};

// HYBRID //

			function hybrid() {
   
				var howmanyfloor = parseInt($('#howmanyfloor').val());
				   
				var howmmanybase = parseInt($('#howmanybase').val());

				var maxfrpeople = parseInt($('#maxfrpeople').val());

				var tot = howmanyfloor + howmanybase;

				var cages = Math.ceil(tot * maxfrpeople);
				  
				var hybST = document.getElementById("hybST").checked
				   
				var hybPRM = document.getElementById("hybPRM").checked
				   
				var hybEXC = document.getElementById("hybEXC").checked
				
				
				   if (hybST ) {
					 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
				   } else if (hybPRM ) {
					 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
				   } else if (hybEXC ) {
					document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
				   } else {
					
				   }
				};
				function residential() {
   
	var resnumapt = parseInt($('#resnumapt').val());
	   
	var resnumf = parseInt($('#resnumf').val());
	  
	var resST = document.getElementById("resST").checked
	   
	var resPRM = document.getElementById("resPRM").checked
	   
	var resEXC = document.getElementById("resEXC").checked
	   
	var floors20 = Math.ceil(resnumf / 20);
	   
	var cages101 = Math.ceil((resnumapt / resnumf) / 6);
	 var cages = floors20 * cages101;  
	document.getElementById("cages").value = cages;
	console.log (floors20)
	
	   if (resST ) {
		 document.getElementById("total").value =  ( 7565 * 10 / 100) * cages;
	   } else if (resPRM ) {
		 document.getElementById("total").value =  ( 12345 * 13 / 100) * cages;
	   } else if (resEXC ) {
		document.getElementById("total").value =   (15400 *  16 / 100)*  cages;
	   } else {
		
	   }
	};

// MADE BY JEREMY LEFEBVRE - CODEBOXX GENESSIS -
// COPYRIGHT RESTRICTION
// 