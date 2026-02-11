import { Component } from '@angular/core';
import { LoaderComponent } from './components/loader/loader.component';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet,LoaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'new-portfolio';
  showLoader = true;
  loading = true;

  ngOnInit() {
    setTimeout(() => {
      this.loading = false;
      console.log('Loader finished');
    }, 2500); // mock 3s loader, remove later
  }
}
