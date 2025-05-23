const products = [
  {
    id: "1",
    name: "Apple iPhone 15 Pro",
    image: "/images/iphone15pro.png",
    description: "Flagship Apple smartphone with A17 Pro chip and ProMotion display.",
    price: 5999,
    technical: {
      display: "6.1'' OLED 120Hz",
      processor: "Apple A17 Pro",
      ram: "8GB",
      storage: "256GB",
      camera: "48MP + 12MP",
      battery: "3274mAh",
      os: "iOS 17"
    }
  },
  {
    id: "2",
    name: "Samsung Galaxy S24 Ultra",
    image: "/images/galaxy-s24ultra.png",
    description: "Samsung’s top phone with Dynamic AMOLED and Snapdragon 8 Gen 3.",
    price: 5299,
    technical: {
      display: "6.8'' AMOLED 120Hz",
      processor: "Snapdragon 8 Gen 3",
      ram: "12GB",
      storage: "512GB",
      camera: "200MP + 50MP + 12MP",
      battery: "5000mAh",
      os: "Android 14"
    }
  },
  {
    id: "3",
    name: "Sony PlayStation 5",
    image: "/images/ps5.png",
    description: "Next-gen gaming console with ray tracing and ultra-fast SSD.",
    price: 2999,
    technical: {
      cpu: "AMD Ryzen Zen 2 8-core",
      gpu: "AMD RDNA 2",
      ram: "16GB GDDR6",
      storage: "825GB SSD",
      features: "Ray Tracing, 3D Audio"
    }
  },
  {
    id: "4",
    name: "Microsoft Xbox Series X",
    image: "/images/xbox-series-x.png",
    description: "The fastest, most powerful Xbox ever.",
    price: 2899,
    technical: {
      cpu: "AMD Zen 2 8-core",
      gpu: "AMD RDNA 2",
      ram: "16GB GDDR6",
      storage: "1TB SSD",
      features: "Ray Tracing, Quick Resume"
    }
  },
  {
    id: "5",
    name: "Apple MacBook Pro 14” M3",
    image: "/images/macbookpro-14-m3.png",
    description: "Professional laptop with Apple M3 chip and Liquid Retina XDR.",
    price: 9999,
    technical: {
      display: "14'' Liquid Retina XDR",
      processor: "Apple M3",
      ram: "16GB",
      storage: "512GB SSD",
      battery: "18h",
      os: "macOS Sonoma"
    }
  },
  {
    id: "6",
    name: "Dell XPS 13 Plus",
    image: "/images/dell-xps13plus.png",
    description: "Premium ultrabook with InfinityEdge display and Intel Core i7.",
    price: 7499,
    technical: {
      display: "13.4'' FHD+",
      processor: "Intel Core i7 13th Gen",
      ram: "16GB",
      storage: "1TB SSD",
      battery: "52Wh",
      os: "Windows 11"
    }
  },
  {
    id: "7",
    name: "Google Pixel 8 Pro",
    image: "/images/pixel8pro.png",
    description: "Google’s best phone with Tensor G3 and powerful camera AI.",
    price: 4899,
    technical: {
      display: "6.7'' LTPO OLED 120Hz",
      processor: "Google Tensor G3",
      ram: "12GB",
      storage: "256GB",
      camera: "50MP + 48MP + 48MP",
      battery: "5050mAh",
      os: "Android 14"
    }
  },
  {
    id: "8",
    name: "Lenovo ThinkPad X1 Carbon Gen 11",
    image: "/images/thinkpad-x1-carbon.png",
    description: "Legendary business ultrabook with military-grade durability.",
    price: 8599,
    technical: {
      display: "14'' WUXGA",
      processor: "Intel Core i7 13th Gen",
      ram: "16GB",
      storage: "1TB SSD",
      battery: "57Wh",
      os: "Windows 11 Pro"
    }
  },
  {
    id: "9",
    name: "Apple iPad Pro 12.9'' M2",
    image: "/images/ipadpro12-m2.png",
    description: "The most advanced iPad ever, powered by the M2 chip.",
    price: 7299,
    technical: {
      display: "12.9'' Liquid Retina XDR",
      processor: "Apple M2",
      ram: "8GB",
      storage: "256GB",
      battery: "10758mAh",
      os: "iPadOS 17"
    }
  },
  {
    id: "10",
    name: "Samsung Galaxy Tab S9 Ultra",
    image: "/images/galaxy-tabs9-ultra.png",
    description: "Huge AMOLED display and S Pen for professionals.",
    price: 5799,
    technical: {
      display: "14.6'' Super AMOLED",
      processor: "Snapdragon 8 Gen 2",
      ram: "12GB",
      storage: "512GB",
      battery: "11200mAh",
      os: "Android 14"
    }
  },
  {
    id: "11",
    name: "Sony WH-1000XM5",
    image: "/images/sony-wh1000xm5.png",
    description: "Premium noise-cancelling wireless headphones.",
    price: 1699,
    technical: {
      type: "Over-ear",
      battery: "30h",
      features: "ANC, Bluetooth 5.2, LDAC"
    }
  },
  {
    id: "12",
    name: "Apple Watch Ultra 2",
    image: "/images/apple-watch-ultra2.png",
    description: "Rugged smartwatch with advanced tracking for extreme sports.",
    price: 4499,
    technical: {
      display: "1.92'' OLED",
      battery: "36h",
      features: "S9 SiP, Dual-frequency GPS, WR100"
    }
  },
  {
    id: "13",
    name: "DJI Mini 4 Pro",
    image: "/images/dji-mini4pro.png",
    description: "Compact drone with 4K video and omnidirectional obstacle sensing.",
    price: 3899,
    technical: {
      camera: "48MP 4K60",
      flightTime: "34min",
      weight: "249g",
      range: "20km"
    }
  },
  {
    id: "14",
    name: "Kindle Scribe",
    image: "/images/kindle-scribe.png",
    description: "E-ink e-reader with pen support and large display.",
    price: 1999,
    technical: {
      display: "10.2'' E-Ink",
      storage: "32GB",
      battery: "up to 12 weeks",
      features: "Pen input, adjustable light"
    }
  },
  {
    id: "15",
    name: "Raspberry Pi 5 8GB",
    image: "/images/rpi5-8gb.png",
    description: "Mini computer for makers and coders, 4K and USB 3.0.",
    price: 499,
    technical: {
      cpu: "Quad-core Cortex-A76",
      ram: "8GB",
      storage: "microSD",
      ports: "2x HDMI, 2x USB 3.0, 2x USB 2.0"
    }
  },
  {
    id: "16",
    name: "Apple AirPods Pro 2",
    image: "/images/airpodspro2.png",
    description: "True wireless ANC earbuds with Adaptive Audio.",
    price: 1449,
    technical: {
      battery: "6h (earbuds), 30h (case)",
      features: "ANC, Transparency, MagSafe"
    }
  },
  {
    id: "17",
    name: "ASUS ROG Strix RTX 4090 OC",
    image: "/images/asus-rtx4090.png",
    description: "Top-tier Nvidia GPU for extreme gaming and creative work.",
    price: 9999,
    technical: {
      gpu: "Nvidia RTX 4090 24GB",
      cooling: "Triple-fan",
      ports: "HDMI, 3x DP",
      features: "Ray Tracing, DLSS 3"
    }
  },
  {
    id: "18",
    name: "GoPro HERO12 Black",
    image: "/images/gopro-hero12.png",
    description: "Action camera with 5.3K60 video and HyperSmooth 6.0 stabilization.",
    price: 2499,
    technical: {
      camera: "27MP, 5.3K60/4K120",
      battery: "1720mAh",
      waterproof: "10m",
      features: "HyperSmooth 6.0"
    }
  },
  {
    id: "19",
    name: "Samsung Odyssey OLED G9",
    image: "/images/odyssey-oled-g9.png",
    description: "49” ultrawide QD-OLED gaming monitor, 240Hz.",
    price: 8999,
    technical: {
      display: "49'' 5120x1440 QD-OLED",
      refreshRate: "240Hz",
      ports: "HDMI 2.1, DP 1.4, USB-C"
    }
  },
  {
    id: "20",
    name: "Apple Vision Pro",
    image: "/images/visionpro.png",
    description: "Revolutionary spatial computer for mixed reality.",
    price: 17999,
    technical: {
      display: "dual 4K micro‑OLED",
      processor: "Apple M2 + R1",
      battery: "2h (external)",
      features: "Eye tracking, Hand tracking"
    }
  }
];

export default products;
