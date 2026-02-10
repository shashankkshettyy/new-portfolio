import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  imports: [CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Examination System',
      tech: 'Java, Spring, MySQL',
      link: 'https://github.com/shashankkshettyy/exam_system'
    },
    {
      title: 'Pneumonia Classifier',
      tech: 'Deep Learning, Python',
      link: 'https://github.com/shashankkshettyy/Pneumonia_classifier'
    },
    {
      title: 'Tours & Travels',
      tech: 'Full Stack',
      link: 'https://github.com/shashankkshettyy/tours_travels_management'
    }
  ];
}

