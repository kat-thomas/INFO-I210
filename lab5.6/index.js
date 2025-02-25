function isStrongPassword(password) {
   // TODO: Write your solution here 
   if (password.length < 8) {
      return(false);
   }
   if (password.includes("password")) {
      return (false);
   }
   if (password == password.toLowerCase()) {
      return (false);
   }
   else {
      return(true)
   }
} 
 
 console.log("Testing isStrongPassword()...");
 
 console.log("Qwerty - " + isStrongPassword("Qwerty"));                  // false - Too short
 console.log("passwordQwerty - " + isStrongPassword("passwordQwerty"));  // false - Contains "password"
 console.log("qwerty123 - " + isStrongPassword("qwerty123"));            // false - No uppercase chars
 console.log("Qwerty123 - " + isStrongPassword("Qwerty123"));            // true
 
 
 // Do NOT remove the following line:
 export default isStrongPassword;
 