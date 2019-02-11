const initialState = {
  programs: [
    {
      src: require('../assets/img/Aboutteamsnip.png'),
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
    },
    {
      src: require('../assets/img/Aboutteamsnip.png'),
      alt: 'team snip',
      title: 'Title',
      text:
        'Sunt consectetur ipsum irure in sint minim tempor elit consequat ut esse eu fugiat. Deserunt Lorem labore in veniam qui laboris. Nostrud non ipsum enim consequat ipsum deserunt reprehenderit. Aute ex duis tempor occaecat qui aliqua.'
    }
  ],
  homePrograms: [
    {
      img: require('../assets/img/YouthVoicesLogo.jpg'),
      alt: 'Youth Voices',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
    },
    {
      img: require('../assets/img/VoicesWithoutBorders.png'),
      alt: 'Youth Voices',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit.Pellentesque egestas, turpis a feugiat dictum, augue maurisiaculis felis, eget ultrices magna nibh ut lectus.'
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
  homeVideos: [
    {
      title: 'Video Title',
      src: 'https://www.youtube.com/channel/UCZLV4ZUg89Sgz7Zxm_p7PRA'
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
  ]
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;
