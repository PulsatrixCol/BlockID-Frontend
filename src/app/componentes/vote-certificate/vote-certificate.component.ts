import { Component, OnInit, Input, Inject} from '@angular/core';
import {ModalController} from '@ionic/angular';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;




@Component({
  selector: 'app-vote-certificate',
  templateUrl: './vote-certificate.component.html',
  styleUrls: ['./vote-certificate.component.scss'],
})
export class VoteCertificateComponent implements OnInit {
  @Input() txid: any
  constructor(private modalCtrl: ModalController) {

  }

  async close(){
    await this.modalCtrl.dismiss();
  }


  ngOnInit() {
   
  }

  exportarPDF() {
    var dd = {
      content: [
        {
          style: 'tableExample',
          table: {
            widths: ['*', 'auto'],
            body: [
              
            ]
          }
        }
      ],
      defaultStyle: {
        // alignment: 'justify'
      }
    }

    this.txid.forEach(item => {
      dd.content[0].table.body.push(['', {qr: item, fit:70}])
    })

    pdfMake.createPdf(dd).download()
  }

}
