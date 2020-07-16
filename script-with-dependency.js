const missingModule = require( 'node-fetch' );

module.exports = ( ...args ) => {
	console.log( args );
	console.log( missingModule );
};