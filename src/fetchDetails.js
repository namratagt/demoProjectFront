const products = [
  {
    id: 1,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/p/f/t/m-335-wt-moonlight-enterprise-original-imagu6zwmzzmzutg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/m/z/h/m-335-wt-moonlight-enterprise-original-imagu6zwkvmzmqc6.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/n/0/u/m-335-wt-moonlight-enterprise-original-imagu6zwzjsdgyc9.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/m/x/z/m-335-wt-moonlight-enterprise-original-imagu6zwqgmehzkt.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/q/d/k/m-335-wt-moonlight-enterprise-original-imagu6zwhv6rkn6h.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/y/1/e/m-335-wt-moonlight-enterprise-original-imagu6zw92rszjgh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/a/x/w/m-335-wt-moonlight-enterprise-original-imagu6zwwusygmty.jpeg?q=70",
    ],
    title: "biege kurta ",
    type: "shirt",
    price: [400, 200], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages.",
    color: [],
  },
  {
    id: 2,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/ku1k4280/ethnic-set/s/e/m/xs-21ggg3665-indo-era-original-imag795shhfffvge.jpeg?q=70",
      "",
      "",
      "",
    ],
    title: "lehengas",
    type: "abxc",
    price: [300, 300], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 3,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/l3lx8cw0/ethnic-set/t/3/o/xxl-33373o-libas-original-imagepy7zgwque3f.jpeg?q=70",
      "",
      "",
      "",
    ],
    title: "accessories",
    type: "abxc",
    price: [1300, 1000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 4,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/e/k/5/xxl-raji-begani-nkj-xxl-gosriki-original-imagssuwkyhgkxdd.jpeg?q=70",
      "",
      "",
      "",
    ],
    title: "amdhbd",
    type: "handbag",
    price: [1500, 2000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 5,
    image: [
      "https://www.libas.in/cdn/shop/files/maroon-yoke-design-silk-blend-anarkali-kurta-with-churidar-and-dupatta-libas-1_1800x1800.jpg?v=1695045452",
      "",
      "",
    ],
    title: "shirt",
    type: "shirt",
    price: [1400, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 6,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/b/k/e/m-bw601-blushwork-original-imagm74dvvf9urg4.jpeg?q=70",
      "",
      "",
    ],
    title: "shirt",
    type: "shirt",
    price: [1400, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 7,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/y/1/w/xl-vv-9373-vredevogel-original-imagmh8rhxmuuxgb.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/a/l/5/xl-vv-9373-vredevogel-original-imagmh8rrzf3uswp.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/j/z/e/xxl-vv-9373-vredevogel-original-imagmh8r3gk3seje.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/c/9/7/xl-vv-9373-vredevogel-original-imagmh8rskxpajvh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/5/y/g/xl-vv-9373-vredevogel-original-imagmh8rwgsngwsg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/d/v/x/xl-vv-9373-vredevogel-original-imagmh8rycuzyz3s.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/k/b/n/xl-vv-9373-vredevogel-original-imagmh8r3ypnk9hj.jpeg?q=70",
    ],
    title: "shirt",
    type: "shirt",
    price: [1500, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 8,
    image: [
      "https://m.media-amazon.com/images/I/51GIsO+dDnL._SY879_.jpg",
      "https://m.media-amazon.com/images/I/61YBcINizEL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61srZu40ftL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/610YLAHTlNL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61DxZ8ThNVL._SY741_.jpg",
      "https://m.media-amazon.com/images/I/61tZxcH5+kL._SY741_.jpg",
    ],
    title: "shirt",
    type: "shirt",
    price: [4000, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 9,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/t/8/u/m-new-106-arkv-tex-original-imagsgngyczkmrzt.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/h/w/8/m-new-106-arkv-tex-original-imagsgngw6jygxmg.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/c/c/a/m-new-106-arkv-tex-original-imagsgng8jbywtg3.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/c/c/a/m-new-106-arkv-tex-original-imagsgng8jbywtg3.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/8/k/o/m-new-106-arkv-tex-original-imagsgngvcbmfgdy.jpeg?q=70",
    ],
    title: "shirt",
    type: "shirt",
    price: [4000, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
  {
    id: 10,
    image: [
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/b/k/e/m-bw601-blushwork-original-imagm74dvvf9urg4.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/p/d/3/m-bw601-blushwork-original-imagm74dvxqyg59c.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/l/w/4/m-bw601-blushwork-original-imagm74dnxzqwfwq.jpeg?q=70",
      " https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/u/b/c/m-bw601-blushwork-original-imagm74dmcggaffh.jpeg?q=70",
      "https://rukminim2.flixcart.com/image/832/832/xif0q/ethnic-set/i/z/a/m-bw601-blushwork-original-imagm74dyshqqdrx.jpeg?q=70",
    ],
    title: "shirt",
    type: "shirt",
    price: [4000, 3000], // old & new
    xs: 1,
    s: 2,
    m: 3,
    l: 4,
    xl: 5,
    xxl: 6,
    desc: "asssssssss",
    color: [],
  },
];

// const fetchProductDetails = (keyword) => products;
const fetchProductDetails = (keyword) => {
  if (keyword === "all") {
    return products;
  }
  let res = [];
  products.map((item) => {
    if (item.type == keyword) res.push(item);
  });
  return res;
};
const getById = (id) => products.find((item) => item.id == id);

export { fetchProductDetails, getById };
