const NodeMediaServer = require("node-media-server");

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60,
  },
  http: {
    port: 8000,
    allow_origin: "*",
  },
};

const nms = new NodeMediaServer(config);
nms.run();

nms.on("preConnect", (id, args) => {
  console.log(`[RTMP] preConnect: id=${id}, args=${JSON.stringify(args)}`);
});
nms.on("postConnect", (id, args) => {
  console.log(`[RTMP] postConnect: id=${id}, args=${JSON.stringify(args)}`);
});
nms.on("doneConnect", (id, args) => {
  console.log(`[RTMP] doneConnect: id=${id}, args=${JSON.stringify(args)}`);
});
nms.on("prePublish", (id, StreamPath, args) => {
  console.log(
    `[RTMP] prePublish: id=${id}, StreamPath=${StreamPath}, args=${JSON.stringify(args)}`,
  );
});
nms.on("postPublish", (id, StreamPath, args) => {
  console.log(
    `[RTMP] postPublish: id=${id}, StreamPath=${StreamPath}, args=${JSON.stringify(args)}`,
  );
});
nms.on("donePublish", (id, StreamPath, args) => {
  console.log(
    `[RTMP] donePublish: id=${id}, StreamPath=${StreamPath}, args=${JSON.stringify(args)}`,
  );
});
