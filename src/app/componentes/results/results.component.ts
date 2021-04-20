import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import {BlockchainService} from '../../services/blockchain.service'

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexTitleSubtitle
} from "ng-apexcharts";

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
  @ViewChild("chart", { static: false }) chart: ChartComponent;
  public chartOptions: any
  @Input() EleccioneId: string
  
  constructor(private blockchainService: BlockchainService, private loader: LoadingController) {
  }
  
  ngOnInit() {
    this.loader.create({message: "Cargando", mode: "ios", spinner: "crescent"}).then((loading) =>{
      loading.present()
      this.blockchainService.getElectionStatistics(this.EleccioneId).then((res:any[])  => {
        var qty =[]
        var labels = []
        //console.log(res['data'][0]['votos'].qty)
        res['data'].forEach(element => {
         // this.qty.push(element['votos'].qty)
          //console.log(element)
          qty.push(element['votos'].qty)
          labels.push(element['nombre'])

        })
        console.log(res['data'])
        this.chartOptions = {
          series: [
            {
              name: "Votos",
              data: qty
            }
          ],
          chart: {
            height: 350,
            type: "bar"
          },
          title: {
            text: "Resultados de la votación"
          },
          xaxis: {
            categories: labels
          }
        };
      })
      loading.dismiss()
    })

  }

}
