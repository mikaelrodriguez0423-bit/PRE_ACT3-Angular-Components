import { Component } from '@angular/core';
import { Header } from './header/header';
import { ProfileCard } from './profile.card/profile.card';
import { Skills } from './skills/skills';
import { Footer } from './footer/footer';
import { Proficiency } from './proficiency';

@Component({
  selector: 'app-root',
  imports: [Header, ProfileCard, Skills, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  // The parent (App) owns all CV data and passes it down to the children.
  fullName = 'Mikael Sheeray Rodriguez';
  location = 'Porac, Pampanga';
  email = 'mikaelrodriguez0423@example.com';
  phone = '0962 786 2721';

  profile = 'I am a 3rd-year Information Technology student specializing in front-end development. I have a strong passion for creating clean, responsive user interfaces and enjoy turning complex problems into simple, beautiful designs. I am currently expanding my knowledge in Angular and modern JavaScript frameworks.';

  skills = [
    'HTML and CSS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'Vue','Python','Java','Dart','Php','MongoDB','MySql'
  ];

  proficiencies: Proficiency[] = [
    { tool: 'Visual Studio Code', level: 'Advanced' },
    { tool: 'Git and GitHub', level: 'Intermediate' },
    { tool: 'Node.js and npm', level: 'Intermediate' },
    { tool: 'Angular CLI', level: 'Beginner' }
  ];

  message = 'Click any skill above to select it.';

  // Runs when the Skills component emits a skillSelected event.
  onSkillSelected(skill: string) {
    this.message = `You selected: ${skill}`;
  }
}
