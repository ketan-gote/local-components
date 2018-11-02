import { Component, ChangeDetectionStrategy, Input, HostListener, Renderer2 } from "@angular/core";

@Component({
    selector : 'cd-demo',
    templateUrl :'./cd.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CDDemoComponent {

  @Input('title') title : string;

  show : boolean = false;

  documentClickListener: any;
  
  constructor(private renderer: Renderer2){

  }
  // getStyle(){
  //   console.log('In get Style on '+new Date());
  //   return {'background-color': 'red'};
  // }

  @HostListener('document:click')
  documentClick(){
      console.log("In CDDemo Component "+new Date());
  }


//   private bindDocumentClickListener() {
//     if (!this.documentClickListener) {
//         this.documentClickListener = this.renderer.listen('document', 'click', () => {
//             debugger;
//             if (this.show) {
//                 this.show  = false;
//                 this.unbindDocumentClickListener();
//             }
//         });
//     }
//   }

//   private unbindDocumentClickListener(){
//     if (this.documentClickListener) {
//         this.documentClickListener();
//         this.documentClickListener = null;
//     }
//   }
}