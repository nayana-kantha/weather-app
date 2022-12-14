import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-air-quality',
  templateUrl: './air-quality.component.html',
  styleUrls: ['./air-quality.component.scss']
})
export class AirQualityComponent implements OnInit, OnChanges {

  @Input() data: any;
  chartData: any;
  options:any;
  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (this.data) {
      this.loadChart();
    }
  }

  loadChart() {
    this.options = {
      title: {
          display: true,
          text: 'My Title',
          fontSize: 16
      },
      legend: {
        position: 'bottom'
      },
      grid : {
        background: '#FFF',
        boarderWidth: 0
      }
      
    }
    this.chartData = {
      datasets: [
        {
          data: [this.data.list[0].main.aqi, (5 - this.data.list[0].main.aqi)],
          backgroundColor: [
            "#4d4d4d",
            "#101014",
          ],
          hoverBackgroundColor: [
            "#4d4d4d",
            "#101014"
          ]
        }]
    };
  }

}
