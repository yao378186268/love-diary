import AES from './AES';

let str = '姚成成';
let encryptData = AES.encrypt(JSON.stringify(str));
let decryptData = AES.decrypt(encryptData);

console.log(encryptData, '，encryptData');
console.log(decryptData, '，decryptData');

// import AES from './AES';
// console.log(AES);
// let str = '姚成成';
// let encryptData = AES.Encrypt(str);
// let decryptData = AES.Decrypt(encryptData);

// console.log(encryptData, '，encryptData');
// console.log(decryptData, '，decryptData');
