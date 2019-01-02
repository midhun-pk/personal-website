import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private profile = {
    name: 'Midhun',
    email: 'pkr.midhun@gmail.com',
    tagLine: 'Innovation is my passion.',
    image: 'assets/images/me.jpg',
    summary: 'I\'m a software engineer, logically minded and creative at heart. I\'m based in Kerala, \
              India focused on crafting exceptional, high-quality websites and applications.',
    stories: ['I\'m a front end software engineer who enjoys building things that live on the internet.\
              I develop exceptional websites and web apps that provide intuitive, \
              pixel-perfect user interfaces while being clean and efficient behind the scenes.',
      'I graduated from \
              <a href="https://www.uoc.ac.in/" class="text-link" target="_blank" rel="nofollow noopener noreferrer">Calicut University</a> \
              with my bachelor\'s in 2018, and for the \
              past 5+ years, I\'ve been honing my skills in web development. I enjoy constantly learning and improving my skills with the \
              technologies that keep evolving in this ever-changing field!'
    ],
    skills: ['Python', 'Javascript', 'Typescript', 'Mongodb', 'Elasticsearch', 'Angular', 'React', 'HTML & CSS', 'D3.js',
      'Apache Spark', 'Node.js', 'Flask', 'PyTorch', 'Tensorflow'],
    jobs: [{
      company: 'Infosys',
      role: 'Engineer',
      duration: 'Nov 2015 - Dec 2018',
      descriptions: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, frameworks, and content management systems \
          such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
      ]
    }, {
      company: 'TCS',
      role: 'Intern',
      duration: 'July 2014 - Oct 2014',
      descriptions: [
        'Work with a variety of different languages, platforms, frameworks, and content management systems \
          such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify',
        'Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis'
      ]
    }],
    projects: [{
      name: 'Spotify Profile',
      description: 'A web app for visualizing personalized Spotify data. View your top artists,\
        top tracks, recently played tracks, and detailed audio information about each track. Create and save new \
        playlists of recommended tracks based on your existing playlists and more.',
      technologies: ['React', 'Express', 'Reach Router', 'Styled Components'],
      links: [{
        icon: 'github',
        url: '#'
      }],
      image: 'assets/images/demo.png',
    }, {
      name: 'Halcyon Theme',
      description: 'A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. \
      Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.',
      technologies: ['VS Code', 'Sublime Text', 'Atom', 'iTerm2', 'Hyper'],
      links: [{
        icon: 'github',
        url: '#'
      }],
      image: 'assets/images/demo.png',
    }, {
      name: 'Blistabloc',
      description: 'Custom wordpress theme built with Timber and WooCommerce for blistabloc, \
      a start-up selling the only reactive shoe insert that prevents blisters from forming..',
      technologies: ['Wordpress', 'Timber', 'SCSS', 'JS', 'PHP'],
      links: [],
      image: 'assets/images/demo.png',
    }],
    social: {
      github: 'https://github.com/midhun-pk/',
      linkedin: 'https://www.linkedin.com/in/midhun-pkr/',
    },
    current: 'Although I\'m not currently looking for any freelance opportunities, \
              my inbox is always open. Whether for a potential project or just to say hi, \
              I\'ll try my best to answer your email!'
  };

  constructor() { }

  getName(): string {
    return this.profile.name;
  }

  getSummary(): string {
    return this.profile.summary;
  }

  getSkills(): string[] {
    return this.profile.skills;
  }

  getJobs(): any[] {
    return this.profile.jobs;
  }

  getProjects(): any[] {
    return this.profile.projects;
  }

  getImage(): string {
    return this.profile.image;
  }

  getStory(): string[] {
    return this.profile.stories;
  }

  getEmail(): string {
    return this.profile.email;
  }

  getGithubURL(): string {
    return this.profile.social.github;
  }

  getLinkedinURL(): string {
    return this.profile.social.linkedin;
  }

  getTagLine(): string {
    return this.profile.tagLine;
  }
}
