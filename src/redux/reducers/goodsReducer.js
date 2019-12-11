const initialState = {
  goods: [
    {
      img: [
        'https://content2.onliner.by/catalog/device/main/1f18a8f6f97717dc3c6cacaa0fad7334.jpeg',
        'https://content2.onliner.by/catalog/device/main/467b0d8f6e956f65072fc47f47df576d.jpeg',
      ],
      price: 259,
      name: 'Xiaomi Redmi Note 8 4GB/64GB',
      description:
        'Android, экран 6.3" IPS (1080x2340), Qualcomm Snapdragon 665, ОЗУ 4 ГБ, флэш-память 64 ГБ',
      tags: '#Xiaomi',
      button: 'btn',
    },
    {
      img: [
        'https://content2.onliner.by/catalog/device/main/c93a1df6be27222912d27530201d7d7a.jpeg',
        'https://content2.onliner.by/catalog/device/main/e357a730a2df81795820535a855830cb.jpeg',
      ],
      price: 239,
      name: 'Samsung Galaxy A50',
      description:
        'Android, экран 6.4" AMOLED (1080x2340), Exynos 9610, ОЗУ 4 ГБ, флэш-память 64 ГБ',
      tags: '#Samsung',
      button: 'btn',
    },
    {
      img: [
        'https://content2.onliner.by/catalog/device/main/e2189f90f9088975c553ec33431fc186.jpeg',
        'https://content2.onliner.by/catalog/device/main/0c875f5256364427b295041067c503a0.jpeg',
      ],
      price: 899,
      name: 'Apple iPhone 11 64GB',
      description:
        'Apple iOS, экран 6.1" IPS (828x1792), Apple A13 Bionic, ОЗУ 4 ГБ, флэш-память 64 ГБ',
      tags: '#Iphone',
      button: 'btn',
    },
    {
      img: [
        'https://content2.onliner.by/catalog/device/main/e98cb07ad9bc97fc000a6c41b49474cc.jpeg',
        'https://content2.onliner.by/catalog/device/main/95c86335fa5bf5209dbe4748a4dbff27.jpeg',
      ],
      price: 379,
      name: 'HONOR 20',
      description:
        'Android, экран 6.26" IPS (1080x2340), HiSilicon Kirin 980, ОЗУ 6 ГБ, флэш-память 128 ГБ',
      tags: '#Honor',
      button: 'btn',
    },
  ],
};

const goodsReducer = (state = initialState, action) => {
  return state;
};

export default goodsReducer;
