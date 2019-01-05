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
    summary: 'I\'m a software engineer based in Kerala, \
              India focused on crafting exceptional, high-quality applications and has a deep passion \
              for transforming data into information using algorithms.',
    stories: [
      'I\'m a software engineer who enjoys building things to run across devices using the latest technologies available.\
              I develop exceptional applications that provide intuitive, \
              pixel-perfect user interfaces while being clean and efficient behind the scenes.',
      'I graduated from \
              Calicut University \
              with my bachelor\'s in 2015, and for the \
              past 3+ years, I\'ve been honing my skills as a full-stack developer. \
              I enjoy constantly learning and improving my skills with the \
              technologies that keep evolving in this ever-changing field!',
      'Here\'s a few things I\'m experienced with:'
    ],
    skills: ['Python', 'Javascript', 'Typescript', 'Mongodb', 'Elasticsearch', 'Angular', 'React', 'HTML & CSS', 'D3.js',
      'Apache Spark', 'Node.js', 'Flask', 'PyTorch', 'Tensorflow'],
    jobs: [{
      company: 'Infosys',
      role: 'Senior Software Engineer',
      startdate: 'Nov 2015',
      enddate: 'Dec 2018',
      descriptions: [
        'Write modern, performant, maintainable code for a diverse array of client and internal projects',
        'Work with a variety of different languages, platforms, and frameworks, and \
        web servers such as JavaScript, Python, Angular, D3.js, Node.js, Flask, PyTorch, and Tensorflow',
        'Communicate with multi-disciplinary teams of engineers, designers, clients on a daily basis',
        'Architected and developed defect resolution strategy recommendation system and saved 30% of  \
          time required for analyzing and resolving defects',
        'Built and shipped DevOps utilities that helps engineers for regression testing and impact analysis',
        'Engineered and maintained log analyzer web app that identifies \
          critical anomalies and customer behavior from transaction logs',
        'Transitioned to distributed computing programming models for processing production \
          logs in parallel using Apache Spark to raise speed by 45%',
        'Used machine learning methodologies to cut processing time by 70% for analyzing the semantic \
          relatedness of unstructured data provided by the customer',
        'Engineered and maintained major features of Infosys\'s customer-facing web app using MEAN stack',
        'Interfaced with user experience designers and other developers to ensure thoughtful and coherent user experiences'
      ]
    }, {
      company: 'TCS',
      role: 'Intern',
      startdate: 'July 2014',
      enddate: 'Oct 2014',
      descriptions: [
        'Worked closely with engineers and management team to maintain and manage the TCS\'s digital assessment \
          web app',
        'Monitored network performance and resolved problems that occurred during live assessment'
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
    contact: {
      available: 'So are you looking for a professional, communicative & punctual software engineer \
              with extensive full-stack web development skills for <br\> your next project? <br\>\
              If you have an application you are interested in developing with web technology, \
              think you need my help \
              with something or just fancy saying hey, then get in touch.',
      unavailable: 'Although I\'m not currently looking for any freelance opportunities, \
                    my inbox is always open. Whether for a potential project or just to say hi, \
                    I\'ll try my best to answer your email!'
    }
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

  getCurrentState(): string {
    if (this.profile.jobs[0].enddate !== 'present') {
      return this.profile.contact.available;
    }
    return this.profile.contact.unavailable;
  }
}
