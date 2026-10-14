const items = [
  {
    name: "AirPods Pro 2 Protective Case for Apple",
    description: "New Generation for AirPods Pro 2 Protective Case for Apple Mobile Phone Holder with Elastic Cover and Earpiece Case Accessory.",
    price: 15000,
    image: "https://s.alicdn.com/@sc04/kf/H4119eaf23b1e40cf9094cc99fa89800aj.png?avif=close&webp=close"
  },

  {
    name: "Protective Case Cover For Apple Airpods",
    description: "WOWCASE Best Quality for Airpodes Pro Leather Case for Airpod Pro 1 2 3 Anti-fall Crazy Horse Texture PC Leather Protective Case",
    price: 15000,
    image: "https://s.alicdn.com/@sc04/kf/Hf9c16df9a7ce43f1bc0779d8c90caab0d.jpg_300x300.jpg"
  },

  {
    name: "Shockproof Earphone Case for Airpods 1/2",
    description: "Best Selling Beauty IMD Designer Printing Case for airpods 1 /2 Pro TPU airpods Cover for Sublimation airpod case",
    price: 15500,
    image: "https://s.alicdn.com/@sc04/kf/Hb0df4bd2eabc479da487ac30dce8f4f0W.jpg_300x300.jpg"
  },

  {
    name: "iPhone 16 Pro Max ",
    description: "Genuine iPhone 16 Pro Max Chinese Version",
    price: 400000,
    image: "https://s.alicdn.com/@sc04/kf/H2db9e02982cf492281277f1bfd66cc78C.jpg_300x300.jpg"
  },

  {
    name: "Apple IPhone",
    description: "Used iphone 15 Plus Used 5G Mobile Phone 128GB Unlocked 6G RAM A16 CPU 4383mAh Battery Wholesale",
    price: 370000,
    image: "https://s.alicdn.com/@sc04/kf/H0b0abe37e5c54b09a4cb7fd4bae3f35f7.jpg_300x300.jpg"
  },

  {
    name: "iPhone 13 Pro",
    description: "High Grade Used for 13 Pro 6 128GB Black Dual SIM Nano International Model Super Retina XDR OLED 5G 6G RAM Fast Shipping",
    price: 350000,
    image: "https://s.alicdn.com/@sc04/kf/Hada8dd47fcd947d59e50a03a0181b647P.jpg?avif=close&webp=close"
  },

  {
    name: "BT 5.5 ENC Noise Cancelling Headphones ",
    description: "BT 5.5 ENC Noise Cancelling Headphones Over Ear Headset with Mic Type-C 10H for Office Call Center Meeting Training",
    price: 15000,
    image: "https://s.alicdn.com/@sc04/kf/Hf7832f6294264464ad0659d2552946e2Y.png_300x300.png"
  },

  {
    name: "Dual Port USB+DC3.5mm 2-in-1 Headset",
    description: "Dual Port USB+DC3.5mm 2-in-1 Headset, Over Ear Wired Noise Cancelling Mic Headphone, Volume Mute Control for Telephone Office",
    price: 15000,
    image: "https://s.alicdn.com/@sc04/kf/H8243bffafe3b4f399d0ef4d1f83cc326r.png_220x220.png"
  },

  {
    name: "Wholesale Noise Cancelling Headphones",
    description: "Wholesale Noise Cancelling Headphones, Detachable Battery Design, 40H Continuous Playback, Dual Pairing for Work & Gaming",
    price: 18000,
    image: "https://s.alicdn.com/@sc04/kf/Ha123b1c6c96b44febb4e967d8a0812a37.jpg_300x300.jpg"
  }
];


// Products

const products = document.querySelector('.products');
  
items.map(item => {
    
  products.innerHTML +=
    
    `
      <div>
        <img src="${item.image}" alt="${item.name} image" loading="lazy">
        <p>${item.description}</p>
        <p>Price: ${item.price} XAF</p>
        <button class="add-to-cart" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}" data-description="${item.description}">Add to Cart</button>
    </div>

    `
  }).join('');

