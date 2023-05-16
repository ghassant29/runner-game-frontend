const socketURL = process.env.GASS_SOCKET_SERVER;

const socket = io(socketURL);
module.exports = { socket };
