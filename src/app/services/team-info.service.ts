import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class TeamInfoService {
  teamData = [
    {
      id: 1,
      selected: false,
      firstName: 'Sudharshan ',
      lastName: 'Kumar',
      profileImage: '../assets/img/pic0.jpg',
      contributions: [
        'Extensive experience with front-end tooling (Node js, NPM, Bower,Gulp, Grunt) and testingtools(Jasmine, Selenium, Jest, rotractor)',
        'Led development teams, colloborated with UX designers, and participated in Agile Scrum, contributing to sprint planning and execution',
        'Migrated HSBC banking application from Dojo to Angular, enhancing performance and user experience',
        'Utilized RsJS for reative programming and implemented an RxJS store for state management in Angular application, improving effiency and performance',
        'Developed automated tools and streamlined processes for Adidas,reducing manual efforts and improving product visualization',
        'Created responsive UI components using React and JavaScript, optimizing performance across devices and browsers',
        'Conducted thorough testing of Angular applications using Jasmine and Protractor, ensuring high-quality releases',
      ],
      client: 'ST Engineering, Addidas, HSBC, SPPS Syatem',
      skills:
        'Advance in Angular, React, HTML/CSS, OJET, Typescript, RxJS, and REST APIs, Spring, Spring Boot',
      experience: '10 Years',
      role: 'Lead',
    },
    {
      id: 2,
      firstName: 'Jeyan Bright',
      selected: false,
      lastName: 'Jeyakumar',
      profileImage: '../assets/img/pic1.jpg',
      contributions: [
        'Developed multibrowser compatible pages for CFS Loan Maager using Angular Material and Typescript',
        "Enhanced Simpliciti's application performance with Angular 12 and Bootstarp integration",
        'Designed a cross-brower compatible Learning Management System portal with Angular 6 and Bootstarp',
        'Gained extensive experience with CK Editor integration, PDF generation, and website hosting',
        'Lead a team of 4 to deliver user story features within target timelines',
      ],
      client: 'Conduent, Manipal, VLMS',
      skills:
        'Advance in Angular and HTML/CSS, Intermediate in Typescript and Rxjs, and REST APIs',
      experience: '9 Years',
      role: 'Angular Developer',
    },
    {
      id: 3,
      firstName: 'Prakash',
      selected: false,
      lastName: 'Pant',
      profileImage: '../assets/img/pic2.jpg',
      contributions: [
        'Demonstrated success delivering projects for Conduent, Reliance Jio, and United Airlines',
        'Proven ability to integrate APIs securely, enhancing application functionality',
        'Extensive 5-years expertise in Angular development ensuring top-tier solution',
        'Strong communication skills ensuring effective collaboration and understanding of client needs',
        'Commitment to continuous learning, currently expanding skills in ReactJS',
      ],
      client: 'Conduent, Reliance Jio, United Airlines',
      skills: 'Advance in Angular, Intermediate in Typescript and Rxjs',
      experience: '8 Years',
      role: 'Angular Developer',
    },
    {
      id: 4,
      firstName: 'Venu',
      lastName: 'Beenaveni',
      selected: false,
      profileImage: '../assets/img/pic3.jpg',
      contributions: [
        'Extensive knowledge of AG Grid for effective data display and manipulation',
        'Proficient in NgRx store and state management',
        'Developed complex front-end features like forms and validation, contributing to project robustness',
        "Integrated various API's and manipulated data for front-end display, ensuring seamless data flow",
        'Successfully led a UI development team for three members, delivering cohesive and efeective solutions',
      ],
      client: 'Arch Insurance Company, J&J',
      skills:
        ' Advance in Angular and HTML/CSS, Intermediate in Typescript and Rxjs',
      experience: '6 Years in web application development',
      role: 'Angular Developer',
    },
    {
      id: 5,
      firstName: 'Amol G',
      selected: false,
      lastName: 'Nasre',
      profileImage: '../assets/img/pic4.jpg',
      contributions: [
        'Worked on Microfrontend Appplication (MFE) in Angular for a supported project',
        'Developed the complex hybrid application for Shark Tank India Season 1 in Sony Live, integrating Angular and IOS code',
        'Successfully migrated POWER BI application functionality to Angular 12, delivering it directly to production without prior test or dev environment',
        'Acquired knowledge of Azure for deploying projects',
        'Utilized testing framework such as Jasmine and Karma for unit testing',
        'Implemented Tailwind CSS for styling and enhncing the user interface',
      ],
      client:
        'Sony Pictures Network India, NOV (National Oilwell Varco), Johnson & Johnson',
      skills: 'Strong in Angular,Typescript, RxJs and REST APIs',
      experience: '4.11 Years in Angular Dvelopment',
      role: 'Angular Developer',
    },
  ];
}
