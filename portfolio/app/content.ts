// Replace these values with Hamza's confirmed information. Empty values stay hidden.
export const profile = {
  bio: '',
  location: '',
  yearsExperience: '',
  email: '',
  whatsapp: '',
  instagram: '',
  socials: [] as { name: string; url: string }[],
  toolkit: [] as { name: string; value: string }[],
};
const photo = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=85`;
export const projects = [
  {
    id: 'earth-sky',
    title: 'Between Earth & Sky',
    category: 'ASTROPHOTOGRAPHY / VISUAL STORYTELLING',
    tags: ['Astrophotography', 'Landscapes'],
    image: photo('photo-1464822759023-fed622ff2c3b'),
    alt: 'Mountain landscape used as a concept moodboard',
    description:
      'A visual journey between the places we live and the universe above us.',
    approach:
      'A proposed series of mountain silhouettes, moonlit horizons, and long exposures. The landscape anchors each frame; the sky opens it to something larger.',
    frames: ['The last light', 'A quiet horizon', 'Under the stars'],
  },
  {
    id: 'moment',
    title: 'Frames of a Moment',
    category: 'PHOTOGRAPHY / PORTRAITS',
    tags: ['Photography', 'Portraits', 'Events'],
    image: photo('photo-1472396961693-142e6e269027'),
    alt: 'Deer in a sunlit forest, a temporary natural-light moodboard',
    description: 'Everyday moments, seen in a different light.',
    approach:
      'An intimate photographic concept exploring emotion, natural light, and human stories. These temporary moodboard images establish atmosphere; Hamza’s original portraits will replace them.',
    frames: ['Observe', 'Find the light', 'Hold the moment'],
  },
  {
    id: 'silence',
    title: 'Motion in Silence',
    category: 'VIDEOGRAPHY / CINEMATOGRAPHY',
    tags: ['Videography', 'Editing'],
    image: photo('photo-1470071459604-3b5ec3a7fe05'),
    alt: 'Misty hills used as a cinematic concept moodboard',
    description: 'A film imagined through movement, atmosphere, and light.',
    approach:
      'A proposed dialogue-free short film, moving from a wide establishing shot to small details and a lingering final frame. Film footage, sound design, and behind-the-scenes material are still to come.',
    frames: [
      '01 / Establishing — dawn',
      '02 / Detail — movement',
      '03 / Closing — stillness',
    ],
  },
  {
    id: 'cosmic',
    title: 'Cosmic Frames',
    category: 'ASTRONOMY / PHOTOGRAPHY / DIGITAL ART',
    tags: ['Astrophotography', 'Editing'],
    image: photo('photo-1462331940025-496dfbfc7564'),
    alt: 'Nebula imagery used as an astronomy concept reference',
    description: 'An experiment at the edge of science and imagination.',
    approach:
      'A proposed exploration of lunar textures, distant light, and abstract cosmic compositions. Astronomy becomes the starting point for a visual language shaped by photography and digital editing.',
    frames: ['Lunar texture', 'Distant light', 'Cosmic abstraction'],
  },
];
export const certificates = [
  {
    title: 'African Astronomical Society',
    organization: 'African Astronomical Society (AfAS)',
    date: '2024',
    description:
      'Attendance at the fourth annual conference of the African Astronomical Society, AfAS–2024.',
    image: '/images/afas-2024.jpg',
  },
  {
    title: 'Le Phare de l’Entrepreneuriat',
    organization: 'MCISE × ACCEDE Internationale',
    date: '26 April 2023',
    description:
      'Participation in the hackathon at Technopark Casablanca. Certificate issued on 27 April 2023.',
    image: '/images/entrepreneurship.jpg',
  },
  {
    title: 'Festival d’Astronomie de Marrakech',
    organization: 'Association d’Astronomie Amateur de Marrakech / OUCA',
    date: '3 December 2022',
    description:
      'Participation in the 22nd edition (28 November–3 December 2022), contributing a conference entitled “Les exoplanètes”.',
    image: '/images/marrakech-astronomy.jpg',
  },
  {
    title: 'OISA — Local Organizing Committee',
    organization: 'Oukaimeden International School for Astrophysics',
    date: '2–7 July 2022',
    description:
      'Active contribution to the organization of OISA 2022 as a member of the local organizing committee.',
    image: '/images/oisa-organization.jpg',
  },
  {
    title: 'Spectroscopy in Astrophysics',
    organization: 'Oukaimeden International School for Astrophysics',
    date: '2–7 July 2022',
    description:
      'Attendance at the sixth edition of OISA, held in Oukaimeden, Morocco.',
    image: '/images/oisa-attendance.jpg',
  },
];
export const observatory = [
  {
    name: 'Moon',
    label: 'OUR NEAREST NIGHTTIME COMPANION',
    title: 'A study in light & shadow.',
    text: 'Across its phases, the Moon offers a changing landscape of contrast. A visual invitation to slow down and look closer.',
    image: photo('photo-1446776811953-b23d57bd21aa'),
  },
  {
    name: 'Stars',
    label: 'DISTANT LIGHT',
    title: 'Every point, a possibility.',
    text: 'An exploration of starlight, patterns, and the quiet scale of the universe.',
    image: photo('photo-1462331940025-496dfbfc7564'),
  },
  {
    name: 'Planets',
    label: 'WORLDS BEYOND OUR OWN',
    title: 'Another world to imagine.',
    text: 'The planets invite a different perspective on our place in space. This visual study is a moodboard; planetary photographs are still to come.',
    image: photo('photo-1446776811953-b23d57bd21aa'),
  },
  {
    name: 'Night sky',
    label: 'AFTER THE LAST LIGHT',
    title: 'Let the darkness speak.',
    text: 'A horizon, a little patience, and an open sky. Discover the atmosphere behind a future night-sky series.',
    image: photo('photo-1470071459604-3b5ec3a7fe05'),
  },
  {
    name: 'Astrophotography',
    label: 'LIGHT, COLLECTED OVER TIME',
    title: 'Beyond what the eye can see.',
    text: 'A creative meeting of observation and image-making. Long exposures turn faint light into a new way of seeing.',
    image: photo('photo-1462331940025-496dfbfc7564'),
  },
];
