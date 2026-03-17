export default function handler(req, res) {
  // Simple redirect to the APK stored in the static root.
  res.writeHead(302, { Location: "/Fedders%20Rastreio.apk" });
  res.end();
}
