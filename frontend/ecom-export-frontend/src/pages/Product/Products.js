import img1 from '../../assets/sample-product.png';

const products = [
  {
    id: 1,
    name: "Premium Cashew Nuts",
    images: [
      img1,img1,img1
    ],
    mrp: 1200,
    discountedPrice: 950,
    category: "Foods",
    exportMOQ: "500 kg",
    sampleOrder: "Available",
    countryAvailability: ["India", "UAE", "USA", "UK"],
    tags: ["Dry Fruits", "Healthy", "Premium Quality"],
    material: "Organic Cashew",
    sizeWeight: "1 kg pack"
  },
  {
    id: 2,
    name: "Handcrafted Wooden Bowl",
    images: [
      img1,img1,img1
    ],
    mrp: 1500,
    category: "Wooden Handicrafts",
    discountedPrice: 1100,
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Handicraft", "Eco-friendly", "Kitchenware"],
    material: "Teak Wood",
    sizeWeight: "Diameter: 20 cm"
  },
  {
    id: 3,
    name: "Ayurvedic Herbal Oil",
    images: [
     img1,img1,img1
    ],
    mrp: 1500,
    discountedPrice: 800,
    category: "Medical",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Ayurveda", "Pain Relief", "Organic"],
    material: "Natural Herbs",
    sizeWeight: "Diameter: 20 cm"
  },
  {
    id: 4,
    name: "Wooden Handicrafts",
    images: [
      img1,img1,img1
    ],
    mrp: 1500,
    discountedPrice: 100,
    category: "Fabrics",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Handicraft", "Eco-friendly", "Kitchenware"],
    material: "Teak Wood",
    sizeWeight: "Diameter: 20 cm"
  },
  {
    id: 5,
    name: "Handcrafted Wooden Bowl",
    images: [
      img1,img1,img1
    ],
    mrp: 1500,
    discountedPrice: 1000,
    category: "Handwoven Cotton Saree",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Handicraft", "Eco-friendly", "Kitchenware"],
    material: "100% Cotton",
    sizeWeight: "Diameter: 20 cm"
  },
  {
    id: 6,
    name: " Handicrafts",
    images: [
      img1,img1,img1
    ],
    mrp: 1500,
    discountedPrice: 100,
    category: "Fabrics",
    exportMOQ: "200 pieces",
    sampleOrder: "Available",
    countryAvailability: ["India", "Germany", "Australia"],
    tags: ["Handicraft", "Eco-friendly", "Kitchenware"],
    material: "Teak Wood",
    sizeWeight: "Diameter: 20 cm"
  }
];

export default products;
