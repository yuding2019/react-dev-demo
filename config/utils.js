const os = require('os');
const path = require('path');

const resolve = (url) => path.resolve(process.cwd(), url);

const resolveIp = () => {
  const net = os.networkInterfaces();
  const loacl = net['以太网'];
  const ipv4 = loacl.find(v => v.family === 'IPv4');
  return ipv4.address;
}

module.exports = {
  resolve,
  resolveIp
}
