export type ProjectImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export type StripImage = ProjectImage & {
  orientation: "vertical" | "horizontal";
  label: string;
};

export type Project = {
  slug: string;
  title: string;
  location: string;
  year: string;
  scope: string;
  description: string;
  cover: ProjectImage;
  images: ProjectImage[];
};

const img = (
  src: string,
  alt: string,
  width: number,
  height: number
): ProjectImage => ({ src, alt, width, height });

export const heroImages: ProjectImage[] = [
  img(
    "/rzav/projects/private-residential-development/cover.webp",
    "Residential development courtyard render at golden hour",
    2200,
    1238
  ),
  img(
    "/rzav/atmosphere/01.webp",
    "Dusk render of a contemporary residential building by the water",
    2200,
    1375
  ),
  img(
    "/rzav/projects/urban-living-collection/04.webp",
    "Aerial waterfront context render for residential marketing",
    2200,
    1647
  ),
  img(
    "/rzav/atmosphere/02.webp",
    "Quiet lounge terrace with panoramic water views",
    2200,
    1238
  )
];

export const projects: Project[] = [
  {
    slug: "private-residential-development",
    title: "Private Residential Development",
    location: "Confidential Site",
    year: "2026",
    scope: "Residential marketing visuals",
    description:
      "A calm courtyard-led housing campaign shaped around approachable scale, warm facade materials, and clear sales imagery for a residential launch.",
    cover: img(
      "/rzav/projects/private-residential-development/cover.webp",
      "Golden-hour courtyard render for a private residential development",
      2200,
      1238
    ),
    images: [
      img(
        "/rzav/projects/private-residential-development/01.webp",
        "Courtyard overview with modern residential buildings",
        2200,
        1238
      ),
      img(
        "/rzav/projects/private-residential-development/02.webp",
        "Aerial context view of a residential neighborhood",
        2200,
        1466
      ),
      img(
        "/rzav/projects/private-residential-development/03.webp",
        "Ground-level residential facade and shared landscape",
        2200,
        1238
      ),
      img(
        "/rzav/projects/private-residential-development/04.webp",
        "Street-facing exterior render with balconies and planting",
        2200,
        1238
      )
    ]
  },
  {
    slug: "waterfront-residential-study",
    title: "Waterfront Residential Study",
    location: "Confidential Waterfront",
    year: "2026",
    scope: "Development launch package",
    description:
      "A residential sales sequence balancing panoramic context, terrace lifestyle details, and bright exterior views for a compact urban waterfront site.",
    cover: img(
      "/rzav/projects/waterfront-residential-study/cover.webp",
      "Modern residential development with garden terrace and balconies",
      2200,
      1650
    ),
    images: [
      img(
        "/rzav/projects/waterfront-residential-study/01.webp",
        "Private terrace with mountain and water views",
        2200,
        1571
      ),
      img(
        "/rzav/projects/waterfront-residential-study/02.webp",
        "Aerial city and mountain context for a residential development",
        2200,
        1649
      ),
      img(
        "/rzav/projects/waterfront-residential-study/03.webp",
        "Residential tower exterior in an urban hillside setting",
        2200,
        1238
      ),
      img(
        "/rzav/projects/waterfront-residential-study/04.webp",
        "Street-level residential facade with warm balcony materials",
        2200,
        2200
      )
    ]
  },
  {
    slug: "urban-living-collection",
    title: "Urban Living Collection",
    location: "NDA Residential Concept",
    year: "2025",
    scope: "Lifestyle render suite",
    description:
      "A more intimate residential study focused on balcony atmosphere, waterfront outlooks, and human-scale moments that make apartment living feel tangible.",
    cover: img(
      "/rzav/projects/urban-living-collection/cover.webp",
      "Balcony view overlooking a waterfront landscape",
      2200,
      1238
    ),
    images: [
      img(
        "/rzav/projects/urban-living-collection/01.webp",
        "Terrace lounge render with expansive water view",
        2200,
        1238
      ),
      img(
        "/rzav/projects/urban-living-collection/02.webp",
        "Close residential balcony detail with chair and warm light",
        1760,
        2200
      ),
      img(
        "/rzav/projects/urban-living-collection/03.webp",
        "Balcony table detail with laptop and morning light",
        1760,
        2200
      ),
      img(
        "/rzav/projects/urban-living-collection/04.webp",
        "Aerial waterfront context render for residential marketing",
        2200,
        1647
      )
    ]
  },
  {
    slug: "northern-courtyard-residences",
    title: "Northern Courtyard Residences",
    location: "Confidential Harbor Site",
    year: "2026",
    scope: "Exterior campaign imagery",
    description:
      "A larger waterfront residential concept expressed through harbor context, mixed facade rhythm, communal courtyards, and cinematic evening approach views.",
    cover: img(
      "/rzav/projects/northern-courtyard-residences/cover.webp",
      "Evening residential waterfront render with warm facade lighting",
      2200,
      1650
    ),
    images: [
      img(
        "/rzav/projects/northern-courtyard-residences/01.webp",
        "Residential courtyard facade with balconies and play space",
        2200,
        2200
      ),
      img(
        "/rzav/projects/northern-courtyard-residences/02.webp",
        "Waterfront context render with residential blocks",
        2200,
        1483
      ),
      img(
        "/rzav/projects/northern-courtyard-residences/03.webp",
        "Street-level residential exterior with balconies and greenery",
        2200,
        2200
      ),
      img(
        "/rzav/projects/northern-courtyard-residences/04.webp",
        "Harbor-facing residential elevation with warm facade accents",
        2200,
        1375
      ),
      img(
        "/rzav/projects/northern-courtyard-residences/05.webp",
        "Residential block with waterfront promenade and public realm",
        2200,
        2200
      )
    ]
  }
];

export const visualMoments: ProjectImage[] = [
  img(
    "/rzav/atmosphere/01.webp",
    "Dusk render of a contemporary residential building by the water",
    2200,
    1375
  ),
  img(
    "/rzav/atmosphere/02.webp",
    "Quiet lounge terrace with panoramic water views",
    2200,
    1238
  ),
  img(
    "/rzav/atmosphere/03.webp",
    "Rooftop garden and terrace render for residential marketing",
    2200,
    1650
  ),
  img(
    "/rzav/atmosphere/04.webp",
    "Warm evening apartment building render with illuminated interiors",
    1925,
    2200
  )
];

export const processSteps = [
  {
    number: "01",
    title: "Brief & Direction",
    body:
      "We define the launch goals, target buyers, mood, camera direction, and visual strategy before production begins."
  },
  {
    number: "02",
    title: "Scene Development",
    body:
      "We shape the architecture, lighting, materials, landscape, atmosphere, and composition into a believable sales world."
  },
  {
    number: "03",
    title: "Cinematic Rendering",
    body:
      "We create polished stills and motion-ready imagery designed for residential campaigns and property marketing."
  },
  {
    number: "04",
    title: "Refinement & Delivery",
    body:
      "We refine mood, detail, color, and final presentation until the images feel ready to sell the development."
  }
];

const verticalStripSources = new Set([
  "/rzav/atmosphere/04.webp",
  "/rzav/projects/urban-living-collection/02.webp",
  "/rzav/projects/urban-living-collection/03.webp"
]);

const stripImage = (image: ProjectImage, label: string): StripImage => ({
  ...image,
  label,
  orientation: verticalStripSources.has(image.src) ? "vertical" : "horizontal"
});

const allPortfolioImages: StripImage[] = [
  ...projects.flatMap((project) => [
    stripImage(project.cover, project.title),
    ...project.images.map((image) => stripImage(image, project.title))
  ]),
  ...visualMoments.map((image, index) =>
    stripImage(image, `Atmosphere Study ${String(index + 1).padStart(2, "0")}`)
  )
];

const horizontalStripImages = allPortfolioImages.filter(
  (image) => image.orientation === "horizontal"
);

const verticalStripImages = allPortfolioImages.filter(
  (image) => image.orientation === "vertical"
);

export const movingStripImages: StripImage[] = (() => {
  if (!verticalStripImages.length) {
    return horizontalStripImages;
  }

  const arranged: StripImage[] = [];
  let horizontalIndex = 0;
  let verticalIndex = 0;

  while (horizontalIndex < horizontalStripImages.length) {
    arranged.push(
      verticalStripImages[verticalIndex % verticalStripImages.length]
    );
    verticalIndex += 1;

    arranged.push(
      ...horizontalStripImages.slice(horizontalIndex, horizontalIndex + 3)
    );
    horizontalIndex += 3;
  }

  return arranged;
})();
