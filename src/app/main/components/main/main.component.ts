import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(public authService: AuthService) { }
  array: any[];
  ngOnInit(): void {
    this.array = [];
    for (let index = 0; index < 100; index++) {
      this.array.push(index);
    }
    // this.array = [...this.array];
  }

}
