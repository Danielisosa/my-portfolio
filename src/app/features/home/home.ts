import { Component, computed, signal } from '@angular/core';
import { Projects } from "../projects/projects";
import { About } from "../about/about";
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-home',
  imports: [Projects, About, Contact],
  templateUrl: './home.html',
  styleUrls: [`./home.css`],
})
export class Home {
  activeTab = signal<'info' | 'stack' | 'tests'>('info');

  private roles = ['Frontend Developer', 'Angular Specialist', 'Clean Code Advocate'];
  private currentRoleIndex = 0;
  private charIndex = 0;
  private isDeleting = false;

  currentRoleText = signal<string>('Frontend Developer');
  private typingTimer: any;

  constructor() {
    this.startTypingEffect();
  }

  private startTypingEffect() {
    const handleTyping = () => {
      const currentFullText = this.roles[this.currentRoleIndex];

      if (this.isDeleting) {
        this.charIndex--;
      } else {
        this.charIndex++;
      }

      this.currentRoleText.set(currentFullText.substring(0, this.charIndex));

      let typingSpeed = this.isDeleting ? 50 : 100;

      if (!this.isDeleting && this.charIndex === currentFullText.length) {
        typingSpeed = 2000; 
        this.isDeleting = true;
      } else if (this.isDeleting && this.charIndex === 0) {
        this.isDeleting = false;
        this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
        typingSpeed = 500;
      }

      this.typingTimer = setTimeout(handleTyping, typingSpeed);
    };

    this.typingTimer = setTimeout(handleTyping, 500);
  }

  
  terminalOutput = computed(() => {
    switch (this.activeTab()) {
      case 'info':
        return `{
  "nombre": "Danieli",
  "rol": "Frontend Engineer",
  "experiencia": "+3 años",
  "foco_actual": "Angular 21 Standalone & SSR",
  "metodologia": "Clean Architecture & SOLID"
}`;
      case 'stack':
        return `[SYSTEM]: Cargando Stack de Tecnologías...
---------------------------------------------
- Framework:   Angular 21 (Signals, SSR)
- Lenguajes:   TypeScript, JavaScript (ES6+)
- Estilos:     Tailwind CSS v4, SASS/CSS3
- Testing:     Vitest, Jasmine
- Backend:     Node.js, Express, Docker
- Workflow:    Git, GitHub (CI/CD Concepts)`;
      case 'tests':
        return `✔ test/components/header.spec.ts (3)
✔ test/services/state.spec.ts (5)
✔ test/features/pokeapi.spec.ts (12)
✔ test/features/tesloshop.spec.ts (8)

Test Files  4 passed (4)
Tests       28 passed (28)
Time        1.42s (using Vitest)
Coverage    87.4% (SOLID Architecture verified)
---------------------------------------------
[STATUS]: ALL SYSTEMS OPERATIONAL (100% GREEN)`;
    }
  });

  setActiveTab(tab: 'info' | 'stack' | 'tests') {
    this.activeTab.set(tab);
  }

  ngOnDestroy() {
    if (this.typingTimer) {
      clearTimeout(this.typingTimer);
    }
  }
}
