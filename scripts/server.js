const socketURL = import.meta.env.GASS_SOCKET_SERVER;

export const socket = io(socketURL);
const socket = io(socketURL);
