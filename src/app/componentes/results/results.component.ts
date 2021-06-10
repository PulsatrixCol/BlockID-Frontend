// tslint:disable: no-string-literal
import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {BlockchainService} from '../../services/blockchain.service';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from 'ng-apexcharts';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
};

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.scss'],
})
export class ResultsComponent implements OnInit {
  @ViewChild('chart', { static: false }) chart: ChartComponent;
  public chartOptions: any;
  @Input() EleccioneId: string;
  @Input() electionName: string;
  constructor(
    private blockchainService: BlockchainService,
    private loader: LoadingController) {
  }
  ngOnInit() {
    this.loader.create({message: 'Cargando', mode: 'ios', spinner: 'crescent'}).then((loading) => {
      loading.present();
      this.blockchainService.getElectionStatistics(this.EleccioneId).then((res: any[])  => {
        let qty = [];
        let labels = [];
        let total = 0;
        res['data'].forEach(element => {
          total += element['votos'].qty;
        });
        res['data'].forEach(element => {
          qty.push((parseFloat(element['votos'].qty) * 100) / total);
          labels.push(element['nombre']);
          console.log(total);
        });
        this.chartOptions = {
          series: [
            {
              name: 'Votos',
              data: qty
            }
          ],
          chart: {
            height: 350,
            type: 'bar'
          },
          title: {
            text: this.electionName
          },
          xaxis: {
            categories: labels
          }
        };
      });
      loading.dismiss();
    });

  }

}
