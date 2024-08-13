import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

declare const Typed: any;

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-portfolio';

  ngAfterViewInit (){
    const typed = new Typed ('.multiple-text', {
      strings: ["Frontend Developer", "Graphic Designer", "Video Editor"],
      typeSpeed: 70,
      backSpeed: 70,
      backDelay: 1000,
      loop: true,
    });
  }

}
