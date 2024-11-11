import { Component, OnInit } from '@angular/core';
import { HousingService } from '../housing.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data: any[] = [];

  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.housingService.getData().subscribe((data) => {
      this.data = data;
    });
  }
}
