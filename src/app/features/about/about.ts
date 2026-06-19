import { ChangeDetectionStrategy, Component, signal } from '@angular/core';


interface SkillCategory {
  title: string;
  icon: string;
  colorClass: string;     // fuchsia, purple, violet
  glowShadow: string;     // Clase personalizada para el hover glow
  skills: string[];
}
@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.html',
  styles: `
    :host {
      display: block;
    }

    .hover-glow-fuchsia:hover {
      box-shadow: 0 0 30px rgba(217, 70, 239, 0.15);
    }
    .hover-glow-purple:hover {
      box-shadow: 0 0 30px rgba(168, 85, 247, 0.15);
    }
    .hover-glow-violet:hover {
      box-shadow: 0 0 30px rgba(139, 92, 246, 0.15);
    }

    /* Animación de pulso lento para las esferas de fondo */
    @keyframes pulseSlow {
      0%, 100% { opacity: 0.4; transform: scale(1); }
      50% { opacity: 0.8; transform: scale(1.05); }
    }
    .animate-pulse-slow {
      animation: pulseSlow 10s ease-in-out infinite;
    }

  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  skillCategories = signal<SkillCategory[]>([
    {
      title: 'Frontend Core (Dominio & Especialización)',
      colorClass: 'fuchsia',
      glowShadow: 'hover-glow-fuchsia',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      `,
      skills: ['AngularJS (3.5+ Years)', 'Angular 21 (Modern Study)', 'TypeScript', 'Signals (State)', 'Tailwind CSS v4', 'SASS / CSS3', 'JavaScript (ES6+)', 'HTML5 / DOM']
    },
    {
      title: 'Testing & Quality Assurance',
      colorClass: 'purple',
      glowShadow: 'hover-glow-purple',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `,
      skills: ['Karma / Jasmine (Production)', 'Vitest (Modern Concepts)', 'SOLID Principles', 'Clean Code Guidelines', 'Chrome DevTools']
    },
    {
      title: 'Herramientas & Despliegues',
      colorClass: 'violet',
      glowShadow: 'hover-glow-violet',
      icon: `
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      `,
      skills: ['Git / GitHub', 'GitLab / Bitbucket', 'Docker (Local Env)', 'Netlify (Deploy)', 'REST APIs Integration']
    }
  ]);
}

