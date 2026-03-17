const STRAPI_BASE_URL =
  process.env.NEXT_PUBLIC_STRAPI_URL ?? 'http://localhost:1337';

const defaultSiteConfig = {
  heroTitle: 'Welcome to Appoint.It',
  heroSubtitle:
    'The easiest way to manage bookings, clients, and schedules, all in one place.',
  authenticatedGreeting: 'This is your home screen.',
  navItems: ['navItem1', 'navItem2', 'navItem3'],
  featureLinks: ['Features', 'Projects', 'Pricing', 'Contact'],
  features: [
    {
      title: 'Find more clients',
      description:
        'Get discovered online and let clients book your services anytime, anywhere without friction.',
    },
    {
      title: 'Smart Booking',
      description:
        'Seamlessly sync with Google Calendar and avoid double bookings automatically.',
    },
    {
      title: 'Find nearest services',
      description:
        'Discover trusted services near you and book instantly based on your location.',
    },
  ],
};

const defaultProjects = [
  {
    id: 'project-1',
    title: 'Client Booking Portal',
    summary:
      'A polished booking experience with service discovery, calendar selection, and confirmation flow.',
    stack: ['Next.js', 'MUI', 'Auth.js'],
    projectUrl: '#',
    repositoryUrl: '#',
    featured: true,
  },
  {
    id: 'project-2',
    title: 'Business Dashboard',
    summary:
      'A clean internal dashboard for appointments, customer notes, and service analytics.',
    stack: ['Strapi', 'SQLite', 'REST API'],
    projectUrl: '#',
    repositoryUrl: '#',
    featured: true,
  },
];

function normalizeSiteConfig(payload) {
  const root = payload?.data ?? payload ?? {};
  const attributes = root.attributes ?? root;

  return {
    heroTitle: attributes.heroTitle || defaultSiteConfig.heroTitle,
    heroSubtitle: attributes.heroSubtitle || defaultSiteConfig.heroSubtitle,
    authenticatedGreeting:
      attributes.authenticatedGreeting || defaultSiteConfig.authenticatedGreeting,
    navItems: Array.isArray(attributes.navItems)
      ? attributes.navItems
      : defaultSiteConfig.navItems,
    featureLinks: Array.isArray(attributes.featureLinks)
      ? attributes.featureLinks
      : defaultSiteConfig.featureLinks,
    features: Array.isArray(attributes.features)
      ? attributes.features
      : defaultSiteConfig.features,
  };
}

function normalizeProject(project, index) {
  const root = project?.attributes ?? project ?? {};

  return {
    id: project?.id ?? root.documentId ?? `project-${index + 1}`,
    title: root.title || 'Untitled project',
    summary: root.summary || '',
    stack: Array.isArray(root.stack) ? root.stack : [],
    projectUrl: root.projectUrl || '',
    repositoryUrl: root.repositoryUrl || '',
    featured: Boolean(root.featured),
  };
}

export async function getSiteConfig() {
  try {
    const response = await fetch(`${STRAPI_BASE_URL}/api/site-config`, {
      next: { revalidate: 30 },
    });

    if (!response.ok) {
      return defaultSiteConfig;
    }

    const payload = await response.json();
    return normalizeSiteConfig(payload);
  } catch {
    return defaultSiteConfig;
  }
}

export async function getProjects() {
  try {
    const response = await fetch(
      `${STRAPI_BASE_URL}/api/projects?sort[0]=featured:desc&sort[1]=title:asc`,
      {
        next: { revalidate: 30 },
      }
    );

    if (!response.ok) {
      return defaultProjects;
    }

    const payload = await response.json();
    const projects = Array.isArray(payload?.data)
      ? payload.data.map(normalizeProject)
      : [];

    return projects.length ? projects : defaultProjects;
  } catch {
    return defaultProjects;
  }
}

export { defaultProjects, defaultSiteConfig };
