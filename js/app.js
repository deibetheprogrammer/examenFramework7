// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'auto',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'AppBase',
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/bestsellers/',
    	url: 'bestsellers.html',
    	name: 'bestsellers',
  		},
		{
		path: '/metalgear/',
    	url: 'metalgear.html',
    	name: 'metalgear',
  		},
		{
		path: '/account/',
    	url: 'account.html',
    	name: 'account',
  		},
	],
	dialog: {
		title: 'Seven Burger',
		buttonOk: 'Aceptar',
		buttonCancel: 'Cancelar'
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('!Welcome to AppBase !');
    }
	
});



$$(document).on('click', '#btnComprar_', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea comprar este producto?', function () {
		app.dialog.alert('Gracias por tu compra !');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Carrito de Compras',
		  titleRightText: '',
		  subtitle: '',
		  text: "Producto agregado correctamente.",
		  closeTimeout: 3000,
		});
		notification.open();

	});
	
	
	
});





