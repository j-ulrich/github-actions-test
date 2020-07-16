const missingModule = require( 'foo' );

module.exports = () => {
	console.log( this.arguments );
};