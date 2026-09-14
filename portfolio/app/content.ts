export type WorkMedia = { src: string; type: 'image' | 'video'; alt?: string };
export type WorkGroup = { title: string; items: WorkMedia[] };
export type PortfolioProjectView = {
  id: string;
  title: string;
  category: string;
  tags: string[];
  image: string;
  alt: string;
  description: string;
  approach: string;
  groups: WorkGroup[];
  featured?: boolean;
  year?: string;
  location?: string;
};

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
export const projects: PortfolioProjectView[] = [
  {
    id: 'earth-sky',
    title: 'Between Earth & Sky',
    category: 'ASTROPHOTOGRAPHY / VISUAL STORYTELLING',
    tags: ['Astrophotography', 'Landscapes'],
    image: '/works/between-earth-sky-the-last-light-the-last-light.jpeg',
    alt: 'The Last Light — original work by Hamza El Bahi',
    description:
      'A visual journey between the places we live and the universe above us.',
    approach:
      'An original series moving from the final glow of day to quiet horizons and the stars above.',
    groups: [
      {
        title: 'The Last Light',
        items: [
          {
            src: '/works/between-earth-sky-the-last-light-the-last-light.jpeg',
            type: 'image' as const,
          },
        ],
      },
      {
        title: 'A Quiet Horizon',
        items: [
          {
            src: '/works/between-earth-sky-a-quiet-horison-a-quiet-horizon.jpg',
            type: 'image' as const,
          },
          {
            src: '/works/between-earth-sky-a-quiet-horison-a-quiet-horizon-2.jpeg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Under the Stars',
        items: [
          {
            src: '/works/between-earth-sky-under-the-stars-under-the-stars.jpg',
            type: 'image',
          },
        ],
      },
    ],
  },
  {
    id: 'moment',
    title: 'Frames of a Moment',
    category: 'PHOTOGRAPHY / PORTRAITS',
    tags: ['Photography', 'Portraits', 'Events'],
    image: '/works/frames-of-a-moment-observe-observe-1.jpeg',
    alt: 'Observe — original work by Hamza El Bahi',
    description: 'Everyday moments, seen in a different light.',
    approach:
      'An original photographic series exploring observation, light, and the moments that remain.',
    groups: [
      {
        title: 'Observe',
        items: [
          {
            src: '/works/frames-of-a-moment-observe-observe-1.jpeg',
            type: 'image',
          },
          {
            src: '/works/frames-of-a-moment-observe-observe-2.jpeg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Find the Light',
        items: [
          {
            src: '/works/frames-of-a-moment-find-the-light-find-the-light-1.jpg',
            type: 'image',
          },
          {
            src: '/works/frames-of-a-moment-find-the-light-find-the-light-2.jpg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Hold the Moment',
        items: [
          {
            src: '/works/frames-of-a-moment-hold-the-moment-hold-the-moment-1.jpg',
            type: 'image',
          },
          {
            src: '/works/frames-of-a-moment-hold-the-moment-hold-the-moment-2.jpg',
            type: 'image',
          },
        ],
      },
    ],
  },
  {
    id: 'silence',
    title: 'Motion in Silence',
    category: 'VISUAL STORYTELLING / CINEMATOGRAPHY',
    tags: ['Cinematography', 'Editing'],
    image: '/works/motion-in-silence-establishing-dawn-establishing-dawn.jpeg',
    alt: 'Establishing Dawn — original work by Hamza El Bahi',
    description: 'A film imagined through movement, atmosphere, and light.',
    approach:
      'An original sequence where atmosphere, movement, and stillness shape the visual rhythm.',
    groups: [
      {
        title: 'Establishing — Dawn',
        items: [
          {
            src: '/works/motion-in-silence-establishing-dawn-establishing-dawn.jpeg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Detail — Movement',
        items: [
          {
            src: '/works/motion-in-silence-detail-mouvement-detail-movement.jpg',
            type: 'image',
          },
          ...[1, 2, 3, 4, 5].map((n) => ({
            src: `/works/motion-in-silence-detail-mouvement-detail-movement-${n}.jpg`,
            type: 'image' as const,
          })),
        ],
      },
      {
        title: 'Closing — Stillness',
        items: [
          {
            src: '/works/motion-in-silence-closing-stillness-closing-stillness.jpg',
            type: 'image',
          },
          ...[1, 2, 3, 4, 5, 6, 7, 8].map((n) => ({
            src: `/works/motion-in-silence-closing-stillness-closing-stillness-${n}.jpg`,
            type: 'image' as const,
          })),
        ],
      },
    ],
  },
  {
    id: 'cosmic',
    title: 'Cosmic Frames',
    category: 'ASTRONOMER / PHOTOGRAPHY / DIGITAL ART',
    tags: ['Astrophotography', 'Editing'],
    image: '/works/cosmic-frames-lunar-texture-lunar-texture.jpeg',
    alt: 'Lunar Texture — original work by Hamza El Bahi',
    description: 'An experiment at the edge of science and imagination.',
    approach:
      'An original exploration of lunar textures, distant light, and cosmic abstraction.',
    groups: [
      {
        title: 'Lunar Texture',
        items: [
          {
            src: '/works/cosmic-frames-lunar-texture-lunar-texture.jpeg',
            type: 'image',
          },
          {
            src: '/works/cosmic-frames-lunar-texture-lunar-texture-1.jpeg',
            type: 'image',
          },
          {
            src: '/works/cosmic-frames-lunar-texture-lunar-texture-2.jpeg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Distant Light',
        items: [
          {
            src: '/works/cosmic-frames-distant-light-distant-light.jpeg',
            type: 'image',
          },
        ],
      },
      {
        title: 'Cosmic Abstraction',
        items: [
          {
            src: '/works/cosmic-frames-cosmic-abstraction-cosmic-abstraction.mp4',
            type: 'video',
          },
        ],
      },
    ],
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
    image: '/works/cosmic-frames-lunar-texture-lunar-texture.jpeg',
  },
  {
    name: 'Stars',
    label: 'DISTANT LIGHT',
    title: 'Every point, a possibility.',
    text: 'An exploration of starlight, patterns, and the quiet scale of the universe.',
    image: '/works/between-earth-sky-under-the-stars-under-the-stars.jpg',
  },
  {
    name: 'Night sky',
    label: 'AFTER THE LAST LIGHT',
    title: 'Let the darkness speak.',
    text: 'A horizon, a little patience, and an open sky. Discover the atmosphere behind a future night-sky series.',
    image: '/works/between-earth-sky-a-quiet-horison-a-quiet-horizon-2.jpeg',
  },
  {
    name: 'Astrophotography',
    label: 'LIGHT, COLLECTED OVER TIME',
    title: 'Beyond what the eye can see.',
    text: 'A creative meeting of observation and image-making. Long exposures turn faint light into a new way of seeing.',
    image: '/works/cosmic-frames-distant-light-distant-light.jpeg',
  },
];
