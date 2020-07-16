const missingModule = require( 'a-module-which-does-not-exit' );

module.exports = ( ...args ) => {
	console.log( args );
	console.log( missingModule );
};