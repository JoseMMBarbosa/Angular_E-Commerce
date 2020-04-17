import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-produtor-vendas',
  templateUrl: './produtor-vendas.component.html',
  styleUrls: ['./produtor-vendas.component.css']
})
export class ProdutorVendasComponent implements OnInit {

  LineChart = [];

  constructor() { }

  ngOnInit() {

    this.LineChart = new Chart('lineChart', {
      type: 'bar',
      data: {
        // tslint:disable-next-line: max-line-length
        labels: ['January', 'february', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [
          {
            label: 'Sold Items',
            // tslint:disable-next-line: max-line-length
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850', '#3e95cd', '#8e5ea2'],
            data: [10, 5, 20, 30, 40, 30, 15, 60, 25, 45, 32, 43]
          }
        ]
      },
      options: {
        legend: { display: false },
        title: {
          display: true,
          text: 'Sold Items on 2020'
        }
      }
  });

  }

}
