/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation
//import { resume } from "react-dom/server";

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Siddharth",
  title: "Hi all, I'm Siddharth",
  subTitle: emoji(
    "A dedicated Electronics Engineer ⚡ specializing in RTL design, functional verification, and digital logic synthesis. Experienced in architecting efficient hardware solutions using Verilog/SystemVerilog and bridging the gap between high-level algorithms and optimized silicon implementation."
  ),
  resumeLink:"https://drive.google.com/file/d/10NKCzExAPAXqLq6gBIE6wuoEwdNPOwa5/view?usp=drive_link",
    //"https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Sidd-harth011",
  linkedin: "https://www.linkedin.com/in/siddharth-gautam-8456a2352/",
  gmail: "siddharthgautam573@gmail.com",
  /* gitlab: "https://gitlab.com/saadpasta",
  facebook: "https://www.facebook.com/saad.pasta7",
  medium: "https://medium.com/@saadpasta",
  stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta", */
  instagram: "https://www.instagram.com/siddhart_zyy/",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "ADAPTIVE  ELECTRONICS  ENGINEER &  HARDWARE  ARCHITECT  DRIVEN  BY  SILICON  INNOVATION",
  skills: [
    emoji("⚡ Design and implement high-performance RTL logic using Verilog and SystemVerilog for digital integrated circuits"), 
    emoji("⚡ Developing comprehensive constrained-random testbenches and functional coverage models to ensure robust verification of complex hardware designs"),
    emoji("⚡ Proficient in using industry-standard EDA tools such as Cadence Virtuoso for custom IC design and Xilinx Vivado for FPGA prototyping, enabling efficient hardware development and validation"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      "skillName": "Verilog / SystemVerilog",
      "fontAwesomeClassname": "fas fa-microchip"
    },
    {
      "skillName": "Cadence Virtuoso",
      "fontAwesomeClassname": "fas fa-drafting-compass"
    },
    {
      "skillName": "Xilinx Vivado",
      "fontAwesomeClassname": "fas fa-memory"
    },
    {
      "skillName": "Digital Logic Design",
      "fontAwesomeClassname": "fas fa-wave-square"
    },
    {
      "skillName": "Embedded C / C++",
      "fontAwesomeClassname": "fas fa-code"
    },
    {
      "skillName": "Python (Automation)",
      "fontAwesomeClassname": "fab fa-python"
    },
    {
      "skillName": "I2C / SPI / UART",
      "fontAwesomeClassname": "fas fa-network-wired"
    },
    {
      "skillName": "FPGA Prototyping",
      "fontAwesomeClassname": "fas fa-pills"
    },
    {
      "skillName": "Linux / Shell",
      "fontAwesomeClassname": "fab fa-linux"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Netaji Subhas University of Technology, New Delhi",
      logo: require("./assets/images/NSUT logo.png"),
      subHeader: "Bachelor of Technology in Electronics and Communication Engineering",
      duration: "August 2023 - Present",
      desc: "Conducted advanced computational research on Cs3Bi2I9 perovskite as a sustainable, non-toxic alternative to lead-based solar cells.",
      descBullets: [
        "Simulated and optimized device architectures using SCAPS-1D to enhance photovoltaic efficiency parameters.",
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      "Stack": "RTL Design & Logic Synthesis", 
      "progressPercentage": "90%" 
    },
    {
      "Stack": "Functional Verification (Verilog)",
      "progressPercentage": "80%"
    },
    {
      "Stack": "Hardware Scripting & EDA Automation",
      "progressPercentage": "75%"
    },
    {
      "Stack": "Physical Design & FPGA Prototyping",
      "progressPercentage": "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Intern",
      company: "Netaji Subhas University of Technology",
      companylogo: require("./assets/images/NSUT logo.png"),
      date: "may 2025 - july 2025",
      desc: "Conducted advanced computational research on Cs3Bi2I9 perovskite as a sustainable, non-toxic alternative to lead-based solar cells.",
      descBullets: [
        "Simulated and optimized device architectures using SCAPS-1D to enhance photovoltaic efficiency parameters.",
        "Performed First-Principles Density Functional Theory (DFT) analysis to characterize material properties and electronic band structures.",
        "Developed complex data visualization models and performed statistical analysis using Origin software to interpret simulation results."
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "CONTRIBUTING TECHNICAL EXPERTISE TO INNOVATIVE ENGINEERING TEAMS & PROJECTS",
  projects: [
  
  {
    image: require("./assets/images/riscv.png"),
    projectName: "RISC-V 5-Stage Pipelined Processor",
    projectDesc: "Designed and implemented a 32-bit RISC-V CPU in Verilog featuring a 5-stage pipeline with hazard detection and forwarding units. Optimized the RTL for maximum clock frequency.",
    footerLink: [
      { "name": "View RTL Source", "url": "https://github.com/Sidd-harth011/pipelined-riscv-processor" },
    ]
  },
  {
    image: require("./assets/images/spi.png"),
    projectName: "SPI Protocol Controller",
    projectDesc: "Developed a full-duplex SPI Master-Slave interface in Verilog. Focused on configurable clock polarity (CPOL) and phase (CPHA) settings, achieving 100% functional coverage through constrained-random verification.",
    footerLink: [
      { "name": "View RTL Source", "url": "https://github.com/Sidd-harth011/-Parameterized-SPI-Master-Controller" }
    ]
  },
  {
    image: require("./assets/images/fifo.png"),
    projectName: "Asynchronous FIFO Memory Controller",
    projectDesc: "(In Progress) Implementing an Asynchronous FIFO to handle data transfer. Using Gray code pointers to minimize metastability and ensure robust synchronization.",
    footerLink: [
      { "name": "View RTL Source", "url": "https://github.com/Sidd-harth011/asynchronous-fifo-memory-controller" }
    ]
  },
  {
    image: require("./assets/images/UART.webp"),
    projectName: "UART Transmitter & Receiver",
    projectDesc: "Synthesizable UART core implementation with programmable baud rate generation and parity check. Verified robust data transmission across varying clock frequencies using ModelSim.",
    footerLink: [
      { "name": "View RTL Source", "url": "https://github.com/Sidd-harth011/UART-Transceiver-with-FWFT-FIFO-Buffering" }
    ]
  },
  {
    image: require("./assets/images/photo_6296248367914798703_y.jpg"),
    projectName: "DIY Prosthetic Hand",
    projectDesc: "Designed a prosthetic control system using Bio-Amp sensors and Arduino. Implemented signal processing algorithms to translate muscle electrical activity into precise servo-motor movements.",
    footerLink: [
      { "name": "Hardware Demo", "url": "https://github.com/Sidd-harth011/DIY-prosthetic-hand" },
      { "name": "presentation", "url": "https://www.linkedin.com/feed/update/urn:li:activity:7339983808479305728/" }
    ]
  },
  {
    image: require("./assets/images/photo_2024-08-06_19-31-04.jpg"),
    projectName: "Arduino-Powered Autonomous Robotic Car",
    projectDesc: "Developed a real-time embedded system for autonomous navigation using an Arduino microcontroller. integrated ultrasonic sensors for obstacle avoidance and path planning.",
    footerLink: [
      { "name": "Hardware Demo", "url": "https://github.com/Sidd-harth011/CheapCuriosityRover" }
    ]
  },
],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Open To Collaborate On Next-Generation Silicon Design",
  number: "+91-9310208562, +91-8587966352",
  email_address: "siddharthgautam573@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
