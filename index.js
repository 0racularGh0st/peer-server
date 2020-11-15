var PeerServer = require('peer').PeerServer;
var server = new PeerServer({
	port: process.env.PORT || 3001,
	key: 'peerjs'
});