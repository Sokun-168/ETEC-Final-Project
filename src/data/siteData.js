export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/menu', label: 'Menu' },
  // { to: '/gallery', label: 'Gallery' },
  // { to: '/reviews', label: 'Reviews' },
  // { to: '/reservation', label: 'Reservation' },
  // { to: '/contact', label: 'Contact' },
  { to: '/order', label: 'Order' },
  { to: '/about', label: 'About Us' },
  
]

export const signatureItems = [
  {
    image: `${import.meta.env.BASE_URL}images/coffee/signature-latte.png`,
    badge: 'Bestseller',
    badgeIcon: 'star',
    title: 'Sea Salt Caramel Latte',
    description:
      'Our award-winning rich espresso with smooth micro-foam and a savory-sweet caramel drizzle.',
    price: '$5.50',
  },
  {
    image: `${import.meta.env.BASE_URL}images/bakery/signature-croissant.png`,
    badge: 'Fresh Baked',
    badgeIcon: 'flame',
    dark: true,
    title: 'Almond Praline Croissant',
    description:
      'Flaky, buttery layers filled with sweet house-made almond paste and topped with toasted flakes.',
    price: '$4.25',
  },
  {
    image: `${import.meta.env.BASE_URL}images/coffee/coldbrew.png`,
    badge: 'Premium',
    badgeIcon: 'crown',
    title: 'Nitro Vanilla Cold Brew',
    description:
      'Slow-steeped for 24 hours and infused with nitrogen for an ultra-creamy, cascading velvet finish.',
    price: '$5.75',
  },
]

export const whyChooseUs = [
  {
    icon: 'sprout',
    title: 'Premium Beans',
    description: 'Sourced from the finest coffee farms.',
  },
  {
    icon: 'coffee',
    title: 'Freshly Brewed',
    description: 'Every cup is prepared fresh for our customers.',
  },
  {
    icon: 'users',
    title: 'Friendly Environment',
    description: 'Comfortable place to work and relax.',
  },
]

export const homeReviews = [
  { name: 'Hen Sopheap', text: 'Best coffee shop in town.', stars: 5 },
  { name: 'Loy Lyza', text: 'Amazing atmosphere and delicious drinks.', stars: 5 },
  { name: 'Lor MengHuy', text: 'Highly recommended for coffee lovers.', stars: 4.5 },
]

export const stats = [
  { label: 'Years Experience', value: '10+' },
  { label: 'Happy Customers', value: '500+' },
  { label: 'Coffee Varieties', value: '20+' },
  { label: 'Average Rating', value: '4.9★' },
]

export const menuStats = [
  { label: 'Coffee Drinks', value: '20+' },
  { label: 'Desserts', value: '15+' },
  { label: 'Happy Customers', value: '500+' },
  { label: 'Average Rating', value: '4.9★' },
]

export const menuItems = [
  {
    id: 'espresso',
    name: 'Espresso',
    image: `${import.meta.env.BASE_URL}images/coffee/espresso.png`,
    description: 'Strong and rich coffee shot made from premium roasted beans.',
    price: '$3.50',
    categories: ['coffee'],
  },
  {
    id: 'latte',
    name: 'Caramel Latte',
    image: `${import.meta.env.BASE_URL}images/coffee/latte.png`,
    description: 'Smooth espresso blended with steamed milk and caramel.',
    price: '$4.50',
    categories: ['coffee'],
  },
  {
    id: 'cappuccino',
    name: 'Cappuccino',
    image: `${import.meta.env.BASE_URL}images/coffee/cappuccino.png`,
    description: 'Classic Italian coffee topped with creamy milk foam.',
    price: '$4.75',
    categories: ['coffee'],
  },
  {
    id: 'mocha',
    name: 'Mocha',
    image: `${import.meta.env.BASE_URL}images/coffee/mocha.png`,
    description: 'Espresso mixed with chocolate and steamed milk.',
    price: '$5.00',
    categories: ['coffee'],
  },
  {
    id: 'americano',
    name: 'Americano',
    image: `${import.meta.env.BASE_URL}images/coffee/americano.png`,
    description: 'Espresso diluted with hot water for a smooth flavor.',
    price: '$3.75',
    categories: ['coffee'],
  },
  {
    id: 'coldbrew',
    name: 'Cold Brew',
    image: `${import.meta.env.BASE_URL}images/coffee/coldbrew.png`,
    description: 'Slow-steeped coffee served chilled and refreshing.',
    price: '$4.25',
    categories: ['coffee'],
  },
  {
    id: 'green-tea',
    name: 'Green Tea',
    image: `${import.meta.env.BASE_URL}images/tea/green-tea.png`,
    description: 'Fresh organic green tea with natural antioxidants.',
    price: '$3.50',
    categories: ['tea'],
  },
  {
    id: 'signature-latte',
    name: 'Sea Salt Caramel Latte',
    image: `${import.meta.env.BASE_URL}images/coffee/signature-latte.png`,
    description: 'Rich espresso with smooth micro-foam and a savory-sweet caramel drizzle.',
    price: '$5.50',
    categories: ['coffee'],
  },
  {
    id: 'essiac-tea',
    name: 'Essiac Tea',
    image: `${import.meta.env.BASE_URL}images/tea/tea.png`,
    description: 'A traditional herbal tea blend, caffeine-free.',
    price: '$1.50',
    categories: ['tea'],
  },
  {
    id: 'signature-croissant',
    name: 'Almond Praline Croissant',
    image: `${import.meta.env.BASE_URL}images/bakery/signature-croissant.png`,
    description:
      'Flaky, buttery layers filled with sweet almond paste and topped with toasted flakes.',
    price: '$4.25',
    categories: ['bakery'],
  },
  {
    id: 'croissant',
    name: 'Butter Croissant',
    image: `${import.meta.env.BASE_URL}images/bakery/croissant.png`,
    description: 'Freshly baked every morning.',
    price: '$2.50',
    categories: ['bakery'],
  },
  {
    id: 'burger',
    name: 'Beef Burger',
    image: `${import.meta.env.BASE_URL}images/desserts/burger.png`,
    description: 'Piled high with all your favorite toppings.',
    price: '$2.50',
    categories: ['desserts'],
  },
  {
     id: 'couplebread',
    name: 'Breakfast Set for Couple',
    image: `${import.meta.env.BASE_URL}images/bakery/couplebread.png`,
    description: 'Best set for couple if you pair with latte ',
    price: '$7.50',
    categories: ['bakery'],
  },
  {
     id: 'strawberrydessert',
    name: 'Strawberry bavarois fruit dessert',
    image: `${import.meta.env.BASE_URL}images/desserts/strawberrydessert.png`,
    description: ' The macaroon has a delicious almond taste and is a nice combination with the fresh fruit and the chocolate ganache. ',
    price: '$5.50',
    categories: ['desserts'],
  },
  {
     id: 'chocolateMousse',
    name: 'Chocolate Mousse Cake',
    image: `${import.meta.env.BASE_URL}images/desserts/chocolate_mousse.png`,
    description: 'This cake doesn’t just look like a showstopper; it tastes like a slice of pure bliss, making it perfect for any occasion. ',
    price: '$4.50',
    categories: ['desserts'],
  },
  {
     id: 'taroMilktea',
    name: 'Taro Milk Tea',
    image: `${import.meta.env.BASE_URL}images/tea/taromilktea.png`,
    description: 'This taro bubble tea is a creamy, sweet treat that’s beautifully purple and can be enjoyed either warm or cold.',
    price: '$3.50',
    categories: ['tea'],
  },
  {
     id: 'strawberryMilktea',
    name: 'Strawberry Banana Smoothie',
    image: `${import.meta.env.BASE_URL}images/drinks/strawberry_smoothie.png`,
    description: 'The ripe banana provides a natural sweetness and creamy texture, while the Greek yogurt adds a tangy flavor and a boost of protein.',
    price: '$2.75',
    categories: ['smoothie'],
  },
  {
     id: 'mangoSmoothie',
    name: 'Mango Smoothie',
    image: `${import.meta.env.BASE_URL}images/drinks/mango_smoothie.png`,
    description: 'It’s cool and creamy, with a sweet, tangy tropical flavor and the cheeriest color around. It tastes so good that it could pass as dessert.',
    price: '$3.75',
    categories: ['smoothie'],
  },
  {
     id: 'kiwiSmoothie',
    name: 'Kiwi Smoothie',
    image: `${import.meta.env.BASE_URL}images/drinks/kiwi_smoothie.png`,
    description: ' Kiwi brings a bright, tangy punch, but it’s nicely balanced by sweet banana and pineapple, so the flavor stays fresh and approachable.',
    price: '$4.75',
    categories: ['smoothie'],
  },
  {
     id: 'freshcoconut',
    name: 'Fresh Coconut',
    image: `${import.meta.env.BASE_URL}images/drinks/freshcoconut.png`,
    description: 'fresh green coconut is nature’s delicious gift, packed with electrolytes, vitamins, and minerals. They are not only refreshing but also offer numerous health benefits.',
    price: '$2.50',
    categories: ['fresh'],
  },
  {
     id: 'coconutcoffee',
    name: 'Coconut Coffee',
    image: `${import.meta.env.BASE_URL}images/coffee/coconutcoffee.png`,
    description: 'Some folks are surprised to find just how incredibly tasty your cup can be when you combine coffee and coconut, so we’re here to examine this pairing, looking at the best ways to add this tropical fruit to your brew. ',
    price: '$5.50',
    categories: ['coffee'],
  },
  {
     id: 'matcha',
    name: 'Matcha Lette',
    image: `${import.meta.env.BASE_URL}images/tea/matcha.png`,
    description: 'Iced matcha tea isn’t just a trendy green drink it’s a delicious ritual I’ve grown to love, especially during warm afternoons.',
    price: '$3.50',
    categories: ['tea'],
  },
  {
     id: 'chocolatefrappe',
    name: 'Chocolate Frappe',
    image: `${import.meta.env.BASE_URL}images/coffee/chocolatefrappe.png`,
    description: 'A rich, creamy, iced beverage made by blending milk, chocolate, ice, and optional coffee, topped with whipped cream or chocolate shavings for indulgence.',
    price: '$4.50',
    categories: ['desserts'],
  },
  {
     id: 'orangejuice',
    name: 'Orange Juice',
    image: `${import.meta.env.BASE_URL}images/drinks/orangejuice.png`,
    description: ' Fresh and ripe oranges are essential for this recipe. They provide the natural sweetness and tanginess that make the juice so refreshing.',
    price: '$2.50',
    categories: ['fresh'],
  },
  {
     id: 'freshwater',
    name: 'Fresh Evian Water 750ml',
    image: `${import.meta.env.BASE_URL}images/drinks/freshwater.png`,
    description: 'It’s the most expensive water and best water ever. Drink this to make you stay healthy and make you more beautiful.',
    price: '$20.99',
    categories: ['fresh'],
  },
]

export const menuCategories = [
  { id: 'all', label: 'All' },
  { id: 'coffee', label: 'Coffee' },
  { id: 'tea', label: 'Tea' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'bakery', label: 'Bakery' },
  { id: 'smoothie', label: 'Smoothie' },
  { id: 'fresh', label: 'Fresh' },
]

export const beanOrigins = [
  {
    flag: '🇧🇷',
    country: 'Brazil',
    image: `${import.meta.env.BASE_URL}images/beans/brazil-beans.png`,
    description: 'Rich and nutty flavor profile.',
  },
  {
    flag: '🇨🇴',
    country: 'Colombia',
    image: `${import.meta.env.BASE_URL}images/beans/colombia-beans.png`,
    description: 'Balanced sweetness and aroma.',
  },
  {
    flag: '🇪🇹',
    country: 'Ethiopia',
    image: `${import.meta.env.BASE_URL}images/beans/ethiopia-beans.png`,
    description: 'Fruity and floral tasting notes.',
  },
]

export const openingHours = [
  { day: 'Monday - Friday', hours: '7:00 AM - 9:00 PM' },
  { day: 'Saturday', hours: '8:00 AM - 10:00 PM' },
  { day: 'Sunday', hours: '8:00 AM - 8:00 PM' },
]

export const galleryItems = [
  {
    image: `${import.meta.env.BASE_URL}images/gallery/Espresso_extraction.png`,
    alt: 'Espresso extraction',
    icon: 'coffee',
    title: 'The Perfect Pour',
    caption: 'Precision micro-extracted shots',
    tags: ['coffee'],
  },
  {
    image: `${import.meta.env.BASE_URL}images/gallery/Cozy_seating.png`,
    alt: 'Cozy seating area',
    icon: 'sofa',
    title: 'Cozy Nooks',
    caption: 'Your home away from home',
    tags: ['space'],
  },
  {
    image: `${import.meta.env.BASE_URL}images/gallery/Barista_creating.png`,
    alt: 'Barista pouring latte art',
    icon: 'heart',
    title: 'Barista Craft',
    caption: 'Hand-poured with passion',
    tags: ['coffee'],
  },
  {
    image: `${import.meta.env.BASE_URL}images/bakery/Fresh_croissants.png`,
    alt: 'Fresh croissants on trays',
    icon: 'wheat',
    title: 'Morning Bake',
    caption: 'Oven-fresh artisan treats',
    tags: ['treats'],
  },
  {
    image: `${import.meta.env.BASE_URL}images/gallery/V60_Pour.png`,
    alt: 'V60 pour-over process',
    icon: 'droplet',
    title: 'Slow Drip Brew',
    caption: 'Highlighting single-origin profiles',
    tags: ['coffee'],
  },
  {
    image: `${import.meta.env.BASE_URL}images/gallery/People_gathering.png`,
    alt: 'People gathering over coffee',
    icon: 'users',
    title: 'Artisan Community',
    caption: 'Where good conversations spark',
    tags: ['space'],
  },
]

export const galleryFilters = [
  { id: 'all', label: 'All Photos' },
  { id: 'coffee', label: 'Coffee Craft' },
  { id: 'space', label: 'Our Space' },
  { id: 'treats', label: 'Sweet Treats' },
]

export const fullReviews = [
  {
    name: 'Heang Sokun',
    stars: 5,
    text: 'The Caramel Latte here is unmatched! Incredible atmosphere and super friendly staff.',
  },
  {
    name: 'Vuth Vathnak Vornt',
    stars: 4.5,
    text: 'Great place to get some work done. The croissants are baked perfectly fresh every single morning.',
  },
  {
    name: 'Heng Liden',
    stars: 5,
    text: 'Love the origin selection. You can truly taste the fruity and floral profile of their Ethiopian roast.',
  },
]

export const contactInfo = {
  address: 'Siem Reap, Cambodia',
  mapUrl: 'https://maps.app.goo.gl/x3NzJwaqXaHZfoUg8',
  email: 'gkun9996@gmail.com',
  phone: '+855 12 345 678',
  facebook: 'https://www.facebook.com/share/18wjtXSMhh/',
  telegram: 'https://t.me/mrkun629',
  instagram: 'https://www.instagram.com/kkun783?igsh=MTY3a2cyZnFwZHlxdw==',
}
