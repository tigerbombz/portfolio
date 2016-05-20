var Data = {
  about: {
    backgroundImage: 'img/tree-from-hand-large.jpg',
    hello: 'The only way to do great work is to love what you do',
    image: 'img/Matthew.jpg',
    name: 'Matthew Nguyen',
    subtitle: 'Full Stack Developer & Entreprenuer',
    text: 'A full stack engineer with experience in Python, Ruby on Rails, and MEAN technologies to build an exceptional online presence. Eager to learn new languages, frameworks, and to take on challenges in constant desire of a results-oriented atmosphere. Astute ability in JavaScript for client and server side scripting (AngularJS/React/NodeJS) and always researching and studying new languages that are effective in modern culture. Works extremely well in team oriented settings and has copious amounts of enthusiasm to code'
  },
  contact: {
    items: []
  },
  images: {
    empty:[]
  },
  layout: {
    footer: {
      copyright: 'Quantum Ventures'
    },
    title: 'Tigerbombz'
  },
  portfolio: {
    items: []
  }
};

module.exports = Data;

Data.contact.items['facebook'] = {
  href:     'https://www.facebook.com/tigerbombz',
  imageUrl: 'img/facebook.png',
  name:     'Facebook'
}
Data.contact.items['twitter'] = {
  href:     'https://twitter.com',
  imageUrl: 'img/twitter.png',
  name:     'Twitter'
}
Data.contact.items['linkedin'] = {
  href:     'https://www.linkedin.com/in/matthew-nguyen-75259a57',
  imageUrl: 'img/linkedin.png',
  name:     'LinkedIn'
}
Data.contact.items['github'] = {
  href:     'https://github.com/tigerbombz',
  imageUrl: 'img/github.png',
  name:     'GitHub'
}
Data.contact.items['angellist'] = {
  href:     'https://angel.co/',
  imageUrl: 'img/angellist.png',
  name:     'AngelList'
}
Data.contact.items['email'] = {
  href:     'mailto:matthewaknguyen@gmail.com',
  imageUrl: 'img/email.png',
  name:     'Email'
}

Data.portfolio.items['homie'] = {
  description: 'Find friends, create moments, & make everlasting friendships.',
  count:    0,
  id:       'homie',
  imageUrl: 'img/logo_white.png',
  name:     'Homie',
  style: {
    backgroundColor: 'rgb(41, 184, 229)'
  },
  subtitle: 'Python',
  websiteUrl: 'homie.tigerbombz.com',
};
Data.portfolio.items['spot_me'] = {
  description: 'Come share your experience and knowledge with these workout articles.',
  count:    0,
  id:       'spot_me',
  imageUrl: 'img/spotme-11.png',
  name:     'Spot Me',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  websiteUrl: 'spot-me.tigerbombz.com',
};
Data.portfolio.items['impressions'] = {
  description: 'Check out your favorite salon and book an appointment for all your hair-care needs.',
  count:    0,
  id:       'impressions',
  imageUrl: 'img/impressions.png',
  name:     'Impressions',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'React / Redux / Webpack',
  websiteUrl: 'impressions.tigerbombz.com',
};
// Data.portfolio.items['bite'] = {
//   appStoreUrl: 'https://itunes.apple.com/us/app/bite-app/id661010278?mt=8',
//   description: 'Know where and when your friends are eating and ' +
//     'share with them your plans.',
//   count:    0,
//   id:       'bite',
//   imageUrl: 'img/bite.png',
//   name:     'Bite',
//   style: {
//     backgroundColor: 'rgb(207, 4, 4)'
//   },
//   subtitle: 'Ruby on Rails / iOS',
//   websiteUrl: 'abiteapp.com',
// };
// Data.portfolio.items['skimreads'] = {
//   appStoreUrl: null,
//   description: 'Save snippets of content from the web and ' +
//     'discover what other people are reading.',
//   count:    0,
//   id:       'skimreads',
//   imageUrl: 'img/skimreads.png',
//   name:     'Skimreads',
//   style: {
//     backgroundColor: 'rgb(40, 40, 40)'
//   },
//   subtitle: 'Python / Django',
//   websiteUrl: 'skimreads.com',
// };
// Data.portfolio.items['flashingdeals'] = {
//   appStoreUrl: null,
//   description: 'Curated daily deals using an algorithm that finds ' +
//     'the most popular deals around the web.',
//   count:    0,
//   id:       'flashingdeals',
//   imageUrl: 'img/flashingdeals.png',
//   name:     'FlashingDeals',
//   style: {
//     backgroundColor: 'rgb(214, 249, 255)'
//   },
//   subtitle: 'Ruby on Rails',
//   websiteUrl: 'flashingdeals.com',
// };

