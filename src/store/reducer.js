const initialState = {
  programs: [
    {
      src: require('../assets/img/YouthVoicesLogo.jpg'),
      alt: 'Youth Voices',
      title: 'Youth Voices',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/VoicesWithoutBorders.png'),
      alt: 'Voices Without Borders',
      title: 'Voices Without Borders',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/norwood-logo.png'),
      alt: 'Norwood',
      title: 'Norwood',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/fuel-logo.png'),
      alt: 'Fuel',
      title: 'Fuel',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/fcm-logo.png'),
      alt: 'FCM',
      title: 'FCM',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    }
  ],
  news: [
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    }
  ],
  supporters: [
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'img'
    }
  ],
  stories: [
    {
      header: 'Story 1',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 2',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'bob 3',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 4',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 5',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 6',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 7',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit bob, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 8',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 9',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 10',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 11',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing joe. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 12',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 13',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 14',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 15',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 16',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 17',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 18',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 19',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 20',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 21',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 22',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 23',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, bob adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 24',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 25',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    },
    {
      header: 'Story 26',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA',
      text:
        'Lorem ipsum dolor sit amet, story adipiscing elit. Pellentesque egestas, turpis a feugiat dictum'
    }
  ],
  members: [
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info: 'test info'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info: 'test info'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit Pellentesque egestas, turpis a feugiat dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info: 'test info'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info: 'test info'
    },
    {
      img: require('../assets/img/Aboutteamsnip.png'),
      alt: 'Aboutteamsnip',
      info:
        ' dictum, augue mauris iaculis felis, eget ultrices magna nibh ut lectus.'
    }
  ],
  pictures: [
    {
      src: require('../assets/img/Dragonfly.jpg')
    },
    {
      src: require('../assets/img/Dragonfly.jpg')
    },
    {
      src: require('../assets/img/Dragonfly.jpg')
    }
  ],
  contactFormProps: [
    {
      type: 'name',
      title: 'Your Name (required)',
      inputType: 'text'
    },
    {
      type: 'email',
      title: 'Email Address (required)',
      inputType: 'email'
    },
    {
      type: 'subject',
      title: 'Subject (required)',
      inputType: 'text'
    },
    {
      type: 'message',
      title: 'Message (required)',
      inputType: 'textarea'
    }
  ],
  adultFormProps: [
    {
      type: 'name',
      title: 'What is your name?',
      inputType: 'text'
    },
    {
      type: 'homeArea',
      title: 'Where are you from?',
      inputType: 'text'
    },
    {
      type: 'expertise',
      title: 'What is your expertise?',
      inputType: 'text'
    },
    {
      type: 'availability',
      title: 'What dates are you available for? You may list more than one.',
      inputType: 'textarea'
    },
    {
      type: 'topics',
      title:
        'What topic(s) are you interested in being interviewed about?le for? You may list more than one.',
      inputType: 'textarea'
    },
    {
      type: 'email',
      title: 'What is your email?',
      inputType: 'email'
    },
    {
      type: 'phoneNumber',
      title: 'What is your phone number? Please include the area code.',
      inputType: 'text'
    },
    {
      type: 'comments',
      title: 'Do you have any comments or questions?',
      inputType: 'textarea'
    }
  ],
  card: {
    email: 'youthvoicesofgreatercincinnati@gmail.com',
    address: 'Norwood Middle School, 2060 Sherman Avenue, Norwood, Ohio 45212',
    parking: 'you may park anywhere on our lot',
    arrivalTime:
      'Our school ends at 2:55. To avoid the end of school crowding by the stairs, try to come at 2:50.',
    directions:
      'The sign that indicates the building is a High School happens to be a historical marker.You will come to large gray stairs that lead to beige columns and a set of glass doors. Ring the bell to request entry. You will ring the bell again to gain access to the main office. At 2:55 your talk show hosts will meet you at the front office and accompany you to the television studio located past an indoor bridge.'
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
