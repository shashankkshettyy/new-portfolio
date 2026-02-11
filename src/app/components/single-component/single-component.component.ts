import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-single-component',
  imports: [CommonModule],
  templateUrl: './single-component.component.html',
  styleUrls: ['./single-component.component.css'], // <-- fixed typo
})
export class SingleComponentComponent {
  projects = [
    {
      title: 'Examination System',
      tech: 'Java, Spring, MySQL',
      link: 'https://github.com/shashankkshettyy/exam_system',
    },
    {
      title: 'Pneumonia Classifier',
      tech: 'Deep Learning, Python',
      link: 'https://github.com/shashankkshettyy/Pneumonia_classifier',
    },
    {
      title: 'Tours & Travels',
      tech: 'Full Stack',
      link: 'https://github.com/shashankkshettyy/tours_travels_management',
    },
    
  ];

  email = 'shashankshetty0013@gmail.com';

texts: string[] = [
  'Angular Development',
  'React PWA Applications',
  'Node.js & Express APIs',
  'PostgreSQL Databases',
  'Azure Cloud Solutions',
  'Scalable Backend Systems'
];

  index = 0;
  currentText = '';

 
 ngAfterViewInit() {
  this.typeEffect();
  this.scrollFromUrl();
  this.observeScroll();
 
}


  typeEffect() {
    const text = this.texts[this.index];
    let i = 0;

    const interval = setInterval(() => {
      this.currentText = text.substring(0, i++);
      if (i > text.length) {
        clearInterval(interval);
        setTimeout(() => this.eraseEffect(), 1500);
      }
    }, 100);
  }
  constructor(private router: Router) {}


  navigate(section: string) {
    this.router.navigate([section === 'home' ? '' : section], {
      replaceUrl: true,
    });
    this.scrollTo(section);
  }

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
    });
  }

  scrollFromUrl() {
    const path = this.router.url.replace('/', '') || 'home';
    setTimeout(() => this.scrollTo(path), 100);
  }

  observeScroll() {
    const sections = ['home', 'about', 'projects', 'contact'];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.router.navigate(
              [entry.target.id === 'home' ? '' : entry.target.id],
              { replaceUrl: true },
            );
          }
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }
  eraseEffect() {
    let i = this.currentText.length;

    const interval = setInterval(() => {
      this.currentText = this.currentText.substring(0, i--);
      if (i < 0) {
        clearInterval(interval);
        this.index = (this.index + 1) % this.texts.length;
        this.typeEffect();
      }
    }, 50);
  }
}
