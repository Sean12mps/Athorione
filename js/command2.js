	


	jQuery( document ).ready( function( $ ){

		var Blitzkrieg_Download 	= 	function(){

			var blitz 	= 	this;

			this.info 	= 	{


								elementI 	: 	''
							, 	elementC 	: 	''
							, 	elementD 	: 	''
							, 	downWait 	: 	''
							, 	downText 	: 	''
			}


			this.init 	= 	function(){

				var that = this;
				var a 	= 	$('[blitzUI="download-button"]');
				var b 	= 	$(a).attr('class');
				var c 	= 	$('[blitzUI="download-button-2"]');
				var d 	= 	parseInt( $(a).attr('blitzUIWait') );
				var e 	= 	$(a).attr('blitzUIText');

				blitz.info.elementI = a;
				blitz.info.elementC = b;
				blitz.info.elementD = c;
				blitz.info.downWait = d;
				blitz.info.downText = e;

				$(c).hide();

				blitz.countDown();
			}


			this.countDown 	= 	function(){

				$(blitz.info.elementI).on('click', function( e ){


					e.preventDefault;
					var that = this;


					var countStart 	= 	setInterval( function(){
						
						$(that).text(blitz.info.downText+' '+blitz.info.downWait);
						var thatC = $(that).text();
							thatC = thatC.replace(''+blitz.info.downText+'', '');
						var thatC = parseInt(thatC);
						console.log(thatC)

						if( thatC <= 0 ){

							blitz.switch();
							clearInterval(countStart);
						} else {

							var d =	blitz.info.downWait;
							d--;
							blitz.info.downWait = d;
						}
					}, 1000 );

				});
			};


			this.switch 	= 	function(){


				var a 	= 	blitz.info.elementI;
				var c 	= 	blitz.info.elementD;
				$(a).hide();
				$(c).show('slow');
			};


			this.re 	= 	function(){

				console.log(blitz.info.elementI);
			}
		}


		window.activateB 		=  	new Blitzkrieg_Download;
		window.activateB.init();	
		window.activateB.re();	

	} );