const localConnection = new RTCPeerConnection();

const dc = localConnection.createDataChannel("channel");

dc.onmessage = (e) => console.log("just got a message" + e.data);

dc.onopen = (e) => console.log("connection open");

//before offer i want to print every time we get ice candidate we print SDP
localConnection.onicecandidate = (e) =>
  console.log(
    "new ice candidate print sdp" + JSON.stringify(localConnection.loca)
  );

//create offer and set it local desription
localConnection
  .createOffer()
  .then((o) => localConnection.setLocalDescription(o))
  .then((a) => console.log("set successfully"));

//console of this
// VM989:1 new ice candidate print sdp{"type":"offer","sdp":"v=0\r\no=- 8124772780203827850 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:183502750 1 udp 2113937151 82e51aaf-54c8-49bf-9d89-82701566f34f.local 60487 typ host generation 0 network-cost 999\r\na=ice-ufrag:5TE1\r\na=ice-pwd:8JdHVTiDhFSNA64Da8lMLwtl\r\na=ice-options:trickle\r\na=fingerprint:sha-256 47:17:C2:71:94:57:D4:74:1C:6B:C1:A2:FD:81:97:5F:53:21:6F:29:97:53:93:56:30:0A:4B:3F:E6:9E:1C:0E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n"}
// copy this guy and signal it

//from the other file
const answer = {
  type: "answer",
  sdp: "v=0\r\no=- 8124772780203827850 2 IN IP4 127.0.0.1\r\ns=-\r\nt=0 0\r\na=group:BUNDLE 0\r\na=extmap-allow-mixed\r\na=msid-semantic: WMS\r\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\r\nc=IN IP4 0.0.0.0\r\na=candidate:183502750 1 udp 2113937151 82e51aaf-54c8-49bf-9d89-82701566f34f.local 60487 typ host generation 0 network-cost 999\r\na=ice-ufrag:5TE1\r\na=ice-pwd:8JdHVTiDhFSNA64Da8lMLwtl\r\na=ice-options:trickle\r\na=fingerprint:sha-256 47:17:C2:71:94:57:D4:74:1C:6B:C1:A2:FD:81:97:5F:53:21:6F:29:97:53:93:56:30:0A:4B:3F:E6:9E:1C:0E\r\na=setup:actpass\r\na=mid:0\r\na=sctp-port:5000\r\na=max-message-size:262144\r\n",
};

localConnection.setRemoteDescription(answer);

// ---------------------
dc.send("Yo peer B what up");
