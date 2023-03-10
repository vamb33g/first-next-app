import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'admin',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: true,
    },
    {
      name: 'John',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456', 8),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'L7 9.05',
      slug: 'l7-905',
      category: 'Asics',
      image: '/images/L7.png',
      manufaturer: 'Bitmain',
      price: 10710,
      hashrate: 9050,
      power: 3425,
      countInStock: 10,
      algorithm: 'scrypt',
      description:
        "Antminer L7 (9.05Gh) de Bitmain minant l'algorithme Scrypt avec un hashrate maximum de 9.05Gh/s pour une consommation de 3425W.",
    },
    {
      name: 'S19XP',
      slug: 's19xp',
      category: 'Asics',
      image: '/images/S19XP.png',
      manufaturer: 'Bitmain',
      price: 6615,
      hashrate: 141,
      power: 3010,
      countInStock: 10,
      algorithm: 'SHA-256',
      description:
        "Antminer S19 XP (141Th) de Bitmain minant l'algorithme SHA-256 avec un hashrate maximum de 141Th/s pour une consommation de 3010W.",
    },
    {
      name: 'Whatsminer M50',
      slug: 'whatsminer-m50',
      category: 'Asics',
      image: '/images/m50.png',
      manufaturer: 'MicroBT',
      price: 3385,
      hashrate: 118,
      power: 3306,
      countInStock: 10,
      algorithm: 'SHA-256',
      description:
        "Whatsminer M50 de MicroBT minant l'algorithme SHA-256 avec un hashrate maximum de 118Th/s pour une consommation de 3306W.",
    },
    {
      name: 'KA3',
      slug: 'ka3',
      category: 'Asics',
      image: '/images/KA3.png',
      manufaturer: 'Bitmain',
      price: 12110,
      hashrate: 166,
      power: 3154,
      countInStock: 10,
      algorithm: 'Kadena',
      description:
        "Antminer KA3 (166Th) de Bitmain minant l'algorithme Kadena avec un hashrate maximum de 166Th/s pour une consommation de 3154W.",
    },
    {
      name: 'Z15',
      slug: 'z15',
      category: 'Asics',
      image: '/images/Z15.png',
      manufaturer: 'Bitmain',
      price: 3710,
      hashrate: 420,
      power: 1510,
      countInStock: 10,
      algorithm: 'Equihash',
      description:
        "Antminer Z15 de Bitmain minant l'algorithme Equihash avec un hashrate maximum de 420ksol/s pour une consommation de 1510W.",
    },
    {
      name: 'S19J Pro',
      slug: 's19j-pro',
      category: 'Asics',
      image: '/images/s19jpro.png',
      manufaturer: 'Bitmain',
      price: 2170,
      hashrate: 100,
      power: 3050,
      countInStock: 10,
      algorithm: 'SHA-256',
      description:
        "Antminer S19j Pro (100Th) de Bitmain minant l'algorithme SHA-256 avec un hashrate maximum de 100Th/s pour une consommation de 3050W.",
    },
  ],
};

export default data;
