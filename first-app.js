const fs = require('fs'); 
// we call 'fs' and restore the imported filesystem
// functionality in a simple constant here
fs.writeFileSync('hello.txt', 'Hello from Node.js'); 
// The above method will write a file to our hard drive and
// the argument that it wants is the path to the file, including
// the file name 
// Now our code is being written to a file by leveraging the file 
// system module offered by Node.js and if we now save this file 
// and then run Node we should find the hello text file
