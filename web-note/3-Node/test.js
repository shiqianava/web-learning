const fs = require('fs');

setTimeout(() => { 
  for(let i = 0; i < 10; i++) {
    fs.mkdirSync('' + i);
  }

  setTimeout(() => {
    for(let i = 0; i < 10; i++) {
      fs.rmdirSync('./' + i);
    }
  }, 10000);

}, 3000);

