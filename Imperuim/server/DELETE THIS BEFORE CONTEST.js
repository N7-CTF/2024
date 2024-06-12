// Simple XOR encryption function
function xorEncrypt(password, key) {
  let encrypted = "";
  for (let i = 0; i < password.length; i++) {
    encrypted += String.fromCharCode(
      password.charCodeAt(i) ^ key.charCodeAt(i % key.length)
    );
  }
  return encrypted;
}

// Example usage
// const password = "N7-CTF{it's dangerous to go alone! take this cat with you.}";
const password = "N7-CTF{17'5_d4n63r0u5_70_90_4l0n3!_74k3_7h15_c47_w17h_y0u}";
// const key = "VTue2x2WfypeVFmJpVKQYxG2f2nHRbc3";

// // // Step 1: Decode hashed password from base64
// const encryptedPassword = xorEncrypt(password, key);
// const hashedPassword = btoa(encryptedPassword);
// console.log("Base64 Password:", hashedPassword);

// Step 2: Encrypt the decoded password using XOR encryption with the key
// console.log("Encrypted Password:", encryptedPassword);

console.log("=====================================");

const hashedPassword =
  "PyBSFhIcUzkBHAIKIzVNPh92LD55GStdCFdPaCYDCFZ2IB0MQVhRNhJZBwwiLk0zHyNl";
const decryptedPassword = atob(hashedPassword);
console.log(
  "Decoded Password:",
  xorEncrypt(decryptedPassword, "VTue2x2WfypeVFmJpVKQYxG2f2nHRbc3")
);
