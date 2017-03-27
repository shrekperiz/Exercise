/**
* Constants file. It will have all the application specific constant variables.
* Constant variables can refer  in controllers, factory and directive by injecting into them using DI
**/
var app = angular.module("app");

app.constant('CONSTANTS', {
	FIXER_API_URL : 'http://api.fixer.io/latest?',
	GET_CURRENCY_URL : 'assets/template/currency-list.json',
	DEFAULT_BASE_CURRENCY : 'CAD',
	DEFAULT_CONVERT_CURRENCY : 'USD'
});