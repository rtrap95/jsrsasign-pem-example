var rs = require('jsrsasign');
var rsu = require('jsrsasign-util');
var pem = rsu.readFile('notworking.pem');

//notworking: 6vfqom82q6vfqom82q6vfqom82q6vfqom82q6vfqom82q
//working: 8oimpar2n8oimpar2n8oimpar2n8oimpar2n8oimpar2n
var prvKey = rs.KEYUTIL.getKey(pem, '6vfqom82q6vfqom82q6vfqom82q6vfqom82q6vfqom82q'); 
console.log(prvKey)