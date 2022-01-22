import JSEncrypt from 'jsencrypt';

//RAS加密
const getRsaCode = function (str) {
  // 注册方法
  let encryptStr = new JSEncrypt();
  const publicKey = '-----BEGIN PUBLIC KEY-----MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEArwQ76ZoldPgemsdC+S56w6l1TfsYpvbRz01W7c/w4pGBSiFjelE+Gr+ey76NBO/jjT6RB6By9esG9l2SPoRFlnEhIaDFewyoXBS+Xt9S5xGRy6hrCY9Gc/AFksR8Dzzc4o3tAmB1n1Hypla/zfx/0cPhT3ik3s4IHCJ0K9KUggNerdmgzkOIhQlysLBouCXZvX7MM2vGDlfWLQsU+MME3K+XopE+NbYF73uFLr7vnyfJDBUrmLJMgBtfrOF2JII2Y+Pn2/ijd7YtWItI3neLXs7wqXdXGD/Q7WrFJW0GILE2gVPRKOEDHBxtoq1aaugwgfaXd9CptIpYgyBAB/YMpQIDAQAB-----END PUBLIC KEY-----';
  encryptStr.setPublicKey(publicKey); // 设置 加密公钥
  let data = encryptStr.encrypt(str.toString()); // 进行加密
  return data;
};
const getRsaDeCode = function (str) {
  // 解密
  var decrypt = new JSEncrypt();
  const privateKey =
    '-----BEGIN PRIVATE KEY-----MIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCvBDvpmiV0+B6ax0L5LnrDqXVN+xim9tHPTVbtz/DikYFKIWN6UT4av57Lvo0E7+ONPpEHoHL16wb2XZI+hEWWcSEhoMV7DKhcFL5e31LnEZHLqGsJj0Zz8AWSxHwPPNzije0CYHWfUfKmVr/N/H/Rw+FPeKTezggcInQr0pSCA16t2aDOQ4iFCXKwsGi4Jdm9fswza8YOV9YtCxT4wwTcr5eikT41tgXve4Uuvu+fJ8kMFSuYskyAG1+s4XYkgjZj4+fb+KN3ti1Yi0jed4tezvCpd1cYP9DtasUlbQYgsTaBU9Eo4QMcHG2irVpq6DCB9pd30Km0iliDIEAH9gylAgMBAAECggEANnRDy+gpNV6p7xCGlw9OJSjJlczFm9V57F0s6etkEKqjJpSC5iD3CM2MM+qC6AFXtK+94jia7EcHMIpmoUr4d9mVLGhgaWvDynqtzMkBe2GtEkfBngTVL+eDZGn8C6WtOFReZPnsPvj5XaXqIcYpYvPmW5q2+ZfzUAWsTaJEkLrFbBkft4ZMvoFyuy/59ZVYt7Td9rTOgCttY5HCFyJUKNSOD1oM9X9Ie13tNuQJjqOF4OrZtdnJJIRu5R0k4f1KNADTLZKV6ZHSpwpIPgp+iKLGTjZxieJWiU4IamaOAo/T8byetB6zlj9vywl01fBxmivx1WoPosyEynddrqlfYQKBgQDn0duXyDpnica06GuuUEEMYC9NqmEBXd+Ws2eHdnR4M689bE2Oa1i+C9omMd53Lys94v3nyrM+62WEuESu9cJpbeKPRumO7ovgxVQMgxsSKEpz09agsU+hXVDdTuc9jJdjt+bMAeGh+ZAmIqMmrGv9++yjtyWtJgL6dTlekFUSjQKBgQDBRZgrfYEvSJgo2iZbWSafOc+7DbvsT9NcpuilEA4abJrgEeFBSnsJDtm/C4ZcW2Iqj2n3ZsECLXRXJqEYzFG+tTX48v69myjDwdgeb3B0AE2WWHMOAPJQlfttOYc43XJW11RIONhWo9Wik9kKQkRPapzkATMdcFu1Mhg+TtNoeQKBgQCw2Pu40tsbWZPpNtXO6RJ2qnnrueq+7CpCASMdyFQZzvQE27Zey62rbcdCFBEuwyEt2Rjx10Te3x1XHmvnPTzOyTFpNCPBEmJLWr4/vVTNiUcjDZxSgnHJHDMwYZ0u6y4iuIytXVIQCx7YuNvWCPtpiuKAEpv/d1wWTY8ygNElkQKBgA4U6wRoLYxrZqK7WkYXlcfOJ4OCeam7GzRJ+PNl2xEzzoj65IWkTpiXW2gfB9gc1Gczcc4Tz4ZAF5Tt/JjY8i/J9jfARK0969dvfTaiefgJuZ11rlRb30vd0abgpSiQge8v2zUz5xdQ8pTY3txvfZintOyr5bSEZjoqfzey+JZJAoGAfAv+PLL0dQQq9SlVFxoWh4kM+ku4G6FR1thZC5aCRuM7jL1l14LrdXdjlQydt5qeXzUqJ51qH51oz1TDFKXvyMRRus/7CuRgJAmN2TYUCzqcO6SlMgcMCVUYhzRvNvRANyubtlF3AZEPMQYUJUIt10F7+Q2AtqcBWnE1Ps6a16E=-----END PRIVATE KEY-----';
  decrypt.setPrivateKey(privateKey); //解密公钥
  var decryptMsg = decrypt.decrypt(str.toString()); //解密
  return decryptMsg;
};

let a = getRsaCode('姚成成');
let b = getRsaDeCode(a);

console.log(a, b);
