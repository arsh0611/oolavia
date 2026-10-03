/* ==========================================================
   EDIT THIS FILE to manage your products.

   - amazonStore : link to your Amazon brand store (used in nav/footer)
   - image       : path to a photo, e.g. "images/rose-tote.jpg".
                   Leave "" to show an elegant illustration instead.
   - url         : the Amazon product link ("Buy on Amazon" button)
   - price       : optional. Set to "" to hide it.
   - category    : one of "handbags", "wallets", "sling", "tote"
   ========================================================== */

const AMAZON_STORE = "https://www.amazon.in/"; // TODO: replace with your Oolavia brand store link

const CATEGORIES = [
  { id: "handbags", label: "Ladies Handbags", blurb: "Polished everyday elegance" },
  { id: "sling",    label: "Sling Bags",      blurb: "Hands-free, effortlessly chic" },
  { id: "tote",     label: "Tote Bags",       blurb: "Roomy, refined, ready for anything" },
  { id: "wallets",  label: "Men's Wallets",   blurb: "Slim, sharp, built to last" },
];

const PRODUCTS = [
  { 
    name: "Heritage Checkered Top-Handle", 
    category: "handbags", 
    color: "#8b5a3c", 
    tag: "New Arrival",
    desc: "Structured checkered silhouette featuring a signature gold-tone clasp and versatile top handle.",
    price: "", // Add a price here like "₹1,499" or leave empty to hide
    image: "images/brownSling.PNG", // This tells the site to use your photo instead of the SVG illustration
    url: "https://www.amazon.in/" // Replace with the actual Amazon link for this specific bag
  },
  { 
    name: "Dusty Rose Signature Satchel", 
    category: "handbags", 
    color: "#ab6b76", 
    tag: "Trending",
    desc: "An elegant dual-tone satchel featuring a smooth pink flap, textured canvas body, and our signature gold bird emblem.",
    price: "", 
    image: "images/pink-satchel.jpg", 
    url: "https://www.amazon.in/" 
  },
  { 
    name: "Ivory Signature Satchel", 
    category: "handbags", 
    color: "#dcd3c6", 
    tag: "New Arrival",
    desc: "A timeless dual-tone satchel featuring a smooth ivory flap, textured canvas body, and our signature gold bird emblem.",
    price: "", 
    image: "images/cream-satchel.jpg", 
    url: "https://www.amazon.in/" 
  },
{ 
    name: "Beige Ribbed Elegance Satchel", 
    category: "sling", // Changed from "handbags" to "sling"
    color: "#d8c3b3", 
    tag: "Best Seller",
    desc: "A sophisticated structured satchel featuring a tactile vertically ribbed flap, smooth beige body, and our signature gold emblem.",
    price: "", 
    image: "images/beige-ribbed-satchel.png", 
    url: "https://www.amazon.in/" 
  },
  { 
    name: "Botanical Canvas Everyday Tote", 
    category: "tote", 
    color: "#e6e4df", 
    tag: "New Arrival",
    desc: "Spacious everyday canvas tote featuring vibrant botanical patterned straps, an exterior pocket, and a detachable crossbody strap.",
    price: "", 
    image: "images/floral-canvas-tote.png", 
    url: "https://www.amazon.in/" 
  },
  { 
    name: "Signature Embossed Leather Wallet", 
    category: "wallets", 
    color: "#8b5a2b", 
    tag: "Classic",
    desc: "A refined bifold wallet crafted from textured brown leather, featuring our elegantly embossed signature bird emblem.",
    price: "", 
    image: "images/brown-leather-wallet.png", 
    url: "https://www.amazon.in/" 
  },
  { 
    name: "Midnight Black Embossed Wallet", 
    category: "wallets", 
    color: "#1a1a1a", 
    tag: "New Arrival",
    desc: "A sleek bifold wallet crafted from textured black leather, featuring our elegantly embossed signature bird emblem.",
    price: "", 
    image: "images/black-leather-wallet.png", 
    url: "https://www.amazon.in/" 
  },
  { 
    name: "Cognac Classic Embossed Wallet", 
    category: "wallets", 
    color: "#b06d3b", 
    tag: "Bestseller",
    desc: "A classic bifold wallet in a warm cognac brown textured leather, finished with our signature embossed bird emblem.",
    price: "", 
    image: "images/tan-leather-wallet.png", 
    url: "https://www.amazon.in/" 
  },
  // { name: "Aurelia Structured Handbag", category: "handbags", color: "#b8745a", tag: "Bestseller",
  //   desc: "Structured silhouette with a gold-tone clasp and soft suede lining.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Celeste Top-Handle Bag", category: "handbags", color: "#2f3b3a",
  //   desc: "A timeless top-handle with detachable strap and room for essentials.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Blush Everyday Satchel", category: "handbags", color: "#d9a6a0", tag: "New",
  //   desc: "Soft vegan leather in a blush tone that pairs with everything.",
  //   price: "", image: "", url: "https://www.amazon.in/" },

  // { name: "Luna Crossbody Sling", category: "sling", color: "#8a5a44", tag: "Bestseller",
  //   desc: "Compact crossbody with an adjustable strap and secure zip closure.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Mira Mini Sling", category: "sling", color: "#c9b79c",
  //   desc: "Pocket-sized charm for phone, cards and lipstick.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Noor Chain Sling", category: "sling", color: "#1f1f24", tag: "New",
  //   desc: "Evening-ready sling with a delicate metal chain strap.",
  //   price: "", image: "", url: "https://www.amazon.in/" },

  // { name: "Soleil Classic Tote", category: "tote", color: "#a4693f",
  //   desc: "Generously sized tote with an inner pocket and magnetic closure.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Marais Work Tote", category: "tote", color: "#3b4a5a", tag: "Bestseller",
  //   desc: "Fits a 14\" laptop, a notebook and your whole day.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Sage Weekend Tote", category: "tote", color: "#8c9a82",
  //   desc: "Lightweight, spacious and made for long weekends.",
  //   price: "", image: "", url: "https://www.amazon.in/" },

  // { name: "Atlas Bifold Wallet", category: "wallets", color: "#3a2a22", tag: "Bestseller",
  //   desc: "Slim bifold with RFID protection and multiple card slots.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Cove Card Holder", category: "wallets", color: "#6b4a34",
  //   desc: "Minimal card holder that disappears into any pocket.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  // { name: "Onyx Trifold Wallet", category: "wallets", color: "#17171a", tag: "New",
  //   desc: "Classic trifold with a coin pocket and ID window.",
  //   price: "", image: "", url: "https://www.amazon.in/" },
  
];
