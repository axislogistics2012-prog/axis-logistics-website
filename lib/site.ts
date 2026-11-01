export const company = {
  name: 'Axis Logistics India',
  tagline: 'Moving your goods. Connecting your business.',
  established: 2008,
  contactPerson: 'Mr. Sohanlal Pikhan',
  phones: [
    { display: '+91 98196 95284', tel: '+919819695284' },
    { display: '+91 93206 54322', tel: '+919320654322' },
  ],
  whatsapp: '919819695284',
  email: 'axislogistics2012@gmail.com',
  gstin: '27ABWPH6203K1ZA',
  address:
    'Shop No. 4, Ramchandra Nagar-1, near Shiv Sena Shakha, Kamgar Hospital Road, Thane (West), Maharashtra – 400604',
  mapQuery:
    'Ramchandra Nagar 1, Kamgar Hospital Road, Thane West, Maharashtra 400604',
}

export const yearsInBusiness = new Date().getFullYear() - company.established

export const services = [
  {
    title: 'Full Truck Load (FTL)',
    description:
      'Dedicated truck capacity for consignments that need a full vehicle, planned around your route and schedule.',
    icon: 'truck',
  },
  {
    title: 'Part Truck Load (PTL)',
    description:
      'Flexible part-load options so smaller consignments move economically without waiting for a full vehicle.',
    icon: 'boxes',
  },
  {
    title: 'ODC & Trailer Transport',
    description:
      'Over-dimensional cargo moved on suitable ODC trailers, subject to dimensions, permits and route feasibility.',
    icon: 'construction',
  },
  {
    title: 'Container Transportation',
    description:
      'Containerised goods handled by a dedicated team focused on protecting consignments while in transit.',
    icon: 'container',
  },
  {
    title: 'Industrial & Project Cargo',
    description:
      'Project materials, plant, machinery and equipment for steel, cement, textile and engineering industries.',
    icon: 'factory',
  },
  {
    title: 'Truck, Tempo & LCV',
    description:
      'Light commercial vehicles, tempos and trucks matched to the size and nature of your shipment.',
    icon: 'package',
  },
  {
    title: 'Door-to-Door Delivery',
    description:
      'Pickup and delivery coordination for commercial, non-commercial and personal consignments.',
    icon: 'door',
  },
  {
    title: 'Pan-India Transportation',
    description:
      'Shipments coordinated to destinations across India, with freight and transit confirmed for every load.',
    icon: 'map',
  },
] as const

export const vehicleSizes = [14, 17, 19, 20, 22, 24, 32] as const

export const originHubs = ['Mumbai', 'Bhiwandi', 'Navi Mumbai', 'Thane']

export const destinations = [
  { region: 'North India', places: ['Delhi', 'Gurugram', 'Faridabad', 'Noida'] },
  { region: 'Hill States', places: ['Chandigarh', 'Himachal Pradesh'] },
  { region: 'Central & West', places: ['Madhya Pradesh', 'Gujarat'] },
  { region: 'Coastal & Home', places: ['Goa', 'Maharashtra'] },
  { region: 'South India', places: ['Hyderabad', 'Andhra Pradesh'] },
]

export const cargoTypes = [
  {
    title: 'Industrial & Project Cargo',
    description: 'Project materials, plant and machinery, and equipment',
  },
  {
    title: 'Construction Materials',
    description: 'Construction-related goods, tools and materials',
  },
  {
    title: 'Textiles & Fabrics',
    description: 'Textile, fabric and related commercial consignments',
  },
  {
    title: 'Steel & Industrial Goods',
    description: 'Steel products and other heavy industrial cargo',
  },
  {
    title: 'Chemicals',
    description: 'Handled according to applicable transport requirements',
  },
  {
    title: 'Containers & ODC',
    description: 'Container movement and over-dimensional cargo',
  },
]

export const clients = [
  'Anmol Knitters Pvt. Ltd.',
  'Arhaa Tex Feb',
  'Appl Inds Ltd.',
  'Bitzer India Pvt. Ltd.',
  'Chiripal Textile Mills Pvt. Ltd.',
  'Gimatex Industries Pvt. Ltd.',
  'Bew Engineering Pvt. Ltd.',
  'C S Performance Chemicals Pvt. Ltd.',
  'Dharmesh Fabrics Pvt. Ltd.',
  'Drishya Polyfills Pvt. Ltd.',
  'Electrosoft Automation Pvt. Ltd.',
  'Eagle Silk Mills Pvt. Ltd.',
  'Energysyne Automation',
  'Japro Engineering Pvt. Ltd.',
  'Gayatritex Engineers Pvt. Ltd.',
  'G M Syntex Pvt. Ltd.',
  "Jost's Engg. Co. Ltd.",
  'Heranba Industries Ltd.',
  'Heubach Colour Pvt. Ltd.',
  'Jainam Engineering Services',
  'Kherani Paper Mills Pvt. Ltd.',
  'Mc Clelland Engineers Pvt. Ltd.',
  'MHE Rental India Pvt. Ltd.',
  'MRS Equipment Company',
  'Lucky Weaves India Pvt. Ltd.',
  'Nishita Import Export',
  'Netal India Ltd.',
  'Parmar Brothers',
  'Orient Fashion Export (I) Pvt. Ltd.',
  'Quality Engineering Products',
  'Rotomotive Power Drives (I) Ltd.',
  'Ravi Exports Ltd.',
  'SMEC Automation Pvt. Ltd.',
  'Vishal Fabrics Ltd.',
  'Prithvi Machiners India Pvt. Ltd.',
  'Techno Search Process & Systems',
  'TVS Logistics Services Ltd.',
  'Steelcons Engineers Pvt. Ltd.',
  'Wooltex Exim Pvt. Ltd.',
  'Zahi Tyres India Pvt. Ltd.',
]

export const navLinks = [
  { href: '#services', label: 'Services' },
  { href: '#fleet', label: 'Fleet' },
  { href: '#routes', label: 'Routes' },
  { href: '#why-us', label: 'Why Us' },
  { href: '#contact', label: 'Contact' },
]
