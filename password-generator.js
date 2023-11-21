const generatePassword = require('generate-password');

function generatePassword() {
  const password = generatePassword.generate({
    length: 12,
    numbers: true
  });

  console.log('Mot de passe généré :', password);
}


generatePassword();
