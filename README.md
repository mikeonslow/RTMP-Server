# RTMP Node.js Server

This project runs a simple RTMP server using [node-media-server](https://github.com/illuspas/node-media-server). It is ready for deployment on EasyPanel, GCP, or any VPS.

## Files
- `index.js`: Main server code
- `package.json`: Node.js dependencies and start script

## Usage

1. **Upload the zipped folder to your server (EasyPanel, VPS, etc).**
2. **Set the start command:**
   ```
   npm install && npm start
   ```
3. **Open firewall ports:**
   - TCP 1935 (RTMP)
   - TCP 8000 (HTTP API, optional)
4. **RTMP URL for streaming:**
   ```
   rtmp://<YOUR_SERVER_IP>:1935/live
   ```
   Use any stream key you like (e.g., `test`).

## Logs
The server logs all RTMP connection and publishing events to the console. 