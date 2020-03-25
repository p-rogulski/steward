import { Component, OnInit } from '@angular/core';
import { faGithub, faTwitter, faDocker, faNode, faAngular } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  git = faGithub;
  twitter = faTwitter;
  docker = faDocker;
  currentYear= new Date().getFullYear();
  constructor() { }

  ngOnInit(): void {
  }

}
