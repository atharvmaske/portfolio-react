const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'JS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'John Smith',
  role: 'Front End Engineer',
  description:
    'Adipisicing sit fugit ullam unde aliquid sequi Facilis soluta facilis perspiciatis corporis nulla aspernatur. Autem eligendi rerum delectus modi quisquam? Illo ut quasi nemo ipsa cumque perspiciatis! Maiores minima consectetur.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'TripPlanner',
    description:
      'TripPlanner is an AI-driven website that generates personalized travel itineraries based on your budget and group size, using Gemini AI for smart, tailored recommendations.',
    stack: ['CSS', 'React', 'Firebase'],
    sourceCode: 'https://github.com/atharvmaske/tripPlanner',
    livePreview: 'https://github.com/atharvmaske/tripPlanner',
  },
  {
    name: 'sheRide',
    description:
      'sheRide is a women’s safety-focused ride-sharing app, similar to Uber and Ola, with female drivers to ensure a secure and comfortable experience for female passengers.',
    stack: ['CSS', 'Firebase', 'React'],
    sourceCode: 'https://github.com/atharvmaske/sheride',
    livePreview: 'https://github.com/atharvmaske/sheride',
  },
  {
    name: 'News',
    description:
      'This news app lets users choose from various categories to customize their news feed, ensuring they stay updated on topics that matter most to them.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/atharvmaske/news',
    livePreview: 'https://github.com/atharvmaske/news',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'HTML',
  'CSS',
  'JavaScript',
  'TypeScript',
  'React',
  'Redux',
  'SASS',
  'Material UI',
  'Git',
  'CI/CD',
  'Jest',
  'Enzyme',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'johnsmith@mail.com',
}

export { header, about, projects, skills, contact }
