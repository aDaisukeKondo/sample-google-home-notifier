const ghome = require('google-home-notifier');

ghome.ip('192.168.0.4'); // set your IP Address
ghome.device('Google Home', 'ja'); // set your language

const phrases = [
  'くろーばあ',
  '音楽を流して',
  'バイバイ'
];

const asyncNotify = async (aPhrase, aWait) => {
  return new Promise((resolve) => {
    ghome.notify(aPhrase, (aRes) => {
      const wait = aWait || 2000 + phrase.length * 500;
      setTimeout(() => {
        resolve(aRes);
      }, wait);
    });
  });
};

const execNotifications = async (aPhrases) => {
  for (phrase of aPhrases) {
    await asyncNotify(phrase)
      .then((aRes) => {
        console.log(`"${phrase}" said: ${aRes}`);
      });
  }
};

execNotifications(phrases);

