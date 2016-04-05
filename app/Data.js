var Data = {
  about: {
    backgroundImage: 'img/tree-from-hand-large.jpg',
    hello: 'Design is not just what it looks like and feels like. Design is how it works.',
    image: 'img/PhotoGrid_1446769581428.jpg',
    name: 'Matthew Nguyen',
    subtitle: 'Full Stack Developer & Entreprenuer',
    text: 'Whatever good things we build ends up building us.'
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
  // imageUrl: 'img/onmyblock.png',
  name:     'Homie',
  style: {
    backgroundColor: 'rgb(41, 184, 229)'
  },
  subtitle: 'Python',
  websiteUrl: null,
};
Data.portfolio.items['spot_me'] = {
  description: 'Come share your experience and knowledge with these workout articles.',
  count:    0,
  id:       'spot_me',
  // imageUrl: 'img/dunzo.png',
  name:     'Spot Me',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Ruby on Rails',
  websiteUrl: null,
};
Data.portfolio.items['spadetree'] = {
  description: 'Find or become a tutor for kids K-12, teaching skills ' +
    'that are not typically taught in school.',
  count:    0,
  id:       'spadetree',
  // imageUrl: 'img/spadetree.png',
  name:     'SpadeTree',
  style: {
    backgroundColor: 'rgb(0, 0, 0)'
  },
  subtitle: 'Python / Django / iOS',
  websiteUrl: 'spadetree.com',
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

