const fs = require('fs');

 fs.readdir('./', (error, files) =>{
    if(error) console.log(error);
    else console.log(files);
});

// output
[
    'FSModule.js',
    'OSModule.js',
    'app.js',
    'logger.js',
    'pathModule.js'
  ]

  // sync method

  const files = fs.readdirSync("./");
  console.log(files);