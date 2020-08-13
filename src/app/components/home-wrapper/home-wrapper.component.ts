import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-wrapper',
  templateUrl: './home-wrapper.component.html',
  styleUrls: ['./home-wrapper.component.scss'],
})
export class HomeWrapperComponent implements OnInit {
  constructor(private router: Router) {}
  ngOnInit(): void {}
}
