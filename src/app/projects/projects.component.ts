import { AfterViewInit, Component, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements AfterViewInit {

  constructor(private renderer: Renderer2) { }

  ngAfterViewInit(): void {
    this.setupFilterButtons();
  }

  private setupFilterButtons(): void {
    const filterButtons = document.querySelectorAll<HTMLElement>('.filter-btn');
    const projectCards = document.querySelectorAll<HTMLElement>('.project-card');

    filterButtons.forEach((button: HTMLElement) => {
      this.renderer.listen(button, 'click', () => {
        filterButtons.forEach((btn: HTMLElement) => {
          this.renderer.removeClass(btn, 'active');
        });

        this.renderer.addClass(button, 'active');


        const filter = button.getAttribute('data-filter') || 'all';

        projectCards.forEach((card: HTMLElement) => {
          const cardTech = card.getAttribute('data-tech') || '';

          if (filter === 'all' || cardTech.includes(filter)) {
            this.renderer.setStyle(card, 'display', 'block');
          } else {
            this.renderer.setStyle(card, 'display', 'none');
          }
        });
      });
    });
  }
}
