const fs = require('fs');


const content = 'Hello Node';
fs.writeFile('welcome.txt', content, (err) => {
  if (err) throw err;
  console.log('Le fichier welcome.txt a été créé avec succès avec le contenu : "Hello Node"');


  fs.readFile('hello.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log('Contenu du fichier hello.txt :');
    console.log(data);
  });
});
