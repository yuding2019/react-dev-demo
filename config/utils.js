const os = require('os');
const path = require('path');

const resolve = (url) => path.resolve(process.cwd(), url);

const resolveIp = () => {
  const net = os.networkInterfaces();
  const nets = Object.keys(net).map(key => net[key]).reduce((arr, cur) => [...arr, ...cur], []);
  const ipv4 = nets.find(v => !v.internal && v.family === 'IPv4');
  return ipv4.address;
}

module.exports = {
  resolve,
  resolveIp
}
