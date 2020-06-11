const validaIP = /\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b/

console.log(validaIP.test("192.168.0.1"))
console.log(validaIP.test("10.1.1.0"))
console.log(validaIP.test("192.168.0.0"))
console.log(validaIP.test("192.168.172.145"))

