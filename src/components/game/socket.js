export  default function startConnection() {
  const wss = new WebSocket('ws://localhost:12345');
  return wss;
}