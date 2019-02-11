const initialState = {
  programs: [
    {
      src: require('../assets/img/YouthVoicesLogo.jpg'),
      alt: 'team snip',
      title: 'Title',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/VoicesWithoutBorders.png'),
      alt: 'team snip',
      title: 'Title',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    },
    {
      src: require('../assets/img/Aboutteamsnip.png'),
      alt: 'team snip',
      title: 'Title',
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
  card: {
    email: 'Aliquip et incididunt et nostrud.',
    address:
      'Eu mollit pariatur aliquip amet mollit eiusmod qui. Ipsum eamagna occaecat culpa ullamco pariatur ut. Non commodo minim irure consequat. Consectetur deserunt enim qui esse. Mollitqui ut incididunt velit incididunt.'
  }
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
