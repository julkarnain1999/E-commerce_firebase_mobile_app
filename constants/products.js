const products = [
  {
    id: 1,
    name: "Apple iPhone 14 Pro Max",
    price: 1299,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_6601110058A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch Super Retina XDR",
      processor: "A16 Bionic chip",
      camera: "48MP + 12MP + 12MP",
      battery: "4323mAh",
      storage: "128GB / 256GB / 512GB / 1TB",
      os: "iOS 16",
    },
    highlights: [
      "Dynamic Island",
      "Always-On display",
      "ProMotion technology",
      "Crash Detection feature",
    ],
    reviews: [
      {
        user: "John Doe",
        rating: 5,
        comment: "Fantastic camera and performance!",
      },
      {
        user: "Jane Smith",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
  {
    id: 2,
    name: "Samsung Galaxy S23 Ultra",
    price: 1199,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660128859A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.8-inch Dynamic AMOLED 2X",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Alex Brown",
        rating: 5,
        comment: "Best Android phone available!",
      },
      {
        user: "Emily White",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 3,
    name: "Google Pixel 7 Pro",
    price: 1099,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660160393A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch OLED",
      processor: "Google Tensor",
      camera: "48MP + 12MP + 12MP",
      battery: "4323mAh",
      storage: "128GB / 256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "Dynamic Island",
      "Always-On display",
      "ProMotion technology",
      "Crash Detection feature",
    ],
    reviews: [
      {
        user: "Sarah Green",
        rating: 5,
        comment: "Great camera and performance!",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
  {
    id: 4,
    name: "OnePlus 10 Pro",
    price: 1299,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_104003274B-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Emily White",
        rating: 5,
        comment: "Best Android phone available!",
      },
      {
        user: "Alex Brown",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 5,
    name: "Xiaomi Mi 11T Pro",
    price: 999,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660103170A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.99-inch OLED",
      processor: "Snapdragon 865",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "4000mAh",
      storage: "128GB / 256GB / 512GB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Sarah Green",
        rating: 5,
        comment: "Great camera and performance!",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
  {
    id: 6,
    name: "iPhone 14 Pro",
    price: 1299,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660129742A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.1-inch OLED",
      processor: "Apple A16 Bionic",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "iOS 16",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Emily White",
        rating: 5,
        comment: "Best Android phone available!",
      },
      {
        user: "Alex Brown",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 7,
    name: "Google Pixel 7 Pro",
    price: 1099,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660160393A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch OLED",
      processor: "Google Tensor",
      camera: "48MP + 12MP + 12MP",
      battery: "4323mAh",
      storage: "128GB / 256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "Dynamic Island",
      "Always-On display",
      "ProMotion technology",
      "Crash Detection feature",
    ],
    reviews: [
      {
        user: "Sarah Green",
        rating: 5,
        comment: "Great camera and performance!",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
  {
    id: 8,
    name: "Samsung Galaxy S22 Ultra",
    price: 1199,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_101239477A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.8-inch OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Emily White",
        rating: 5,
        comment: "Best Android phone available!",
      },
      {
        user: "Alex Brown",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 9,
    name: "OnePlus 10 Pro",
    price: 1299,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660168765A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Sarah Green",
        rating: 5,
        comment: "Great camera and performance!",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
  {
    id: 10,
    name: "Google Pixel 7 Pro",
    price: 1099,
    image:
      "https://img.tvcmall.com/dynamic/uploads/details/800x800_660147477B-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.7-inch OLED",
      processor: "Google Tensor",
      camera: "48MP + 12MP + 12MP",
      battery: "4323mAh",
      storage: "128GB / 256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "Dynamic Island",
      "Always-On display",
      "ProMotion technology",
      "Crash Detection feature",
    ],
    reviews: [
      {
        user: "Emily White",
        rating: 5,
        comment: "Best Android phone available!",
      },
      {
        user: "Alex Brown",
        rating: 4,
        comment: "A bit expensive but worth it.",
      },
    ],
  },
  {
    id: 11,
    name: "Samsung Galaxy S22 Ultra",
    price: 1199,
    image: 
    "https://img.tvcmall.com/dynamic/uploads/details/800x800_660132487A-1.webp",
    category: "Smartphones",
    specifications: {
      display: "6.8-inch OLED",
      processor: "Snapdragon 8 Gen 2",
      camera: "200MP + 12MP + 10MP + 10MP",
      battery: "5000mAh",
      storage: "256GB / 512GB / 1TB",
      os: "Android 13",
    },
    highlights: [
      "S Pen support",
      "200MP ultra-high-resolution camera",
      "Adaptive refresh rate 1-120Hz",
    ],
    reviews: [
      {
        user: "Sarah Green",
        rating: 5,
        comment: "Great camera and performance!",
      },
      {
        user: "Michael Brown",
        rating: 4,
        comment: "Battery life could be better.",
      },
    ],
  },
];

export default products;
