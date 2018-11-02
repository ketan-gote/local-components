import { Component, Input, ViewChild, Renderer2, ChangeDetectorRef, ElementRef} from '@angular/core';

import {
    NgModel,
    NG_VALUE_ACCESSOR
  } from '@angular/forms';
import { of } from 'rxjs';
import { ListBaseComponent } from '../base/list.base.component';

@Component({
    selector : 'amexio-typeahead',
    templateUrl : './typeahead.component.html',
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: AmexioTypeAheadComponent,
        multi: true,
      }]
})
export class AmexioTypeAheadComponent extends ListBaseComponent<string>{

    private _fieldlabel : string;
    private _haslabel   : boolean;
    private _data       : any;
    private _key           : any;
    private viewdata   : any;
    private displayValue : string = "";

    @Input('field-label')
    set fieldlabel(v:string){
        if(v !=null && v.length>0){
            this._fieldlabel = v;
            this.initComponent();
        }
    }
    get fieldlabel(){
        return this._fieldlabel;
    }

    @Input('has-label')
    set haslabel(v:boolean){
        this._haslabel = v;
    }
    get haslabel() : boolean{
        return this._haslabel;
    }

    @Input('data')
    set data(v:any){
        this._data = v;
        this.viewdata  = of(this._data);
    }
    get data() : any{
        return this._data;
    }

    @Input('key')
    set key(v:any){
        this._key = v;
        this.displayfield = this._key;
    }
    get key() : any{
        return this._key;
    }

    @Input('display-field') displayfield : string;

    @Input('value-field') valuefield : string;

    @Input('data-reader') datareader : string;

    @Input('http-url') httpurl : string;

    @Input('http-method') httpmethod : string;

    @Input('place-holder') placeholder : string = "";

    @Input('allow-blank') allowblank : boolean;

    @Input('error-msg') errormsg: string;   
    
    @Input('icon-feedback') iconfeedback : boolean;

    @Input('enable-popover') enablepopover : boolean;

    @Input('font-style') fontstyle: string;

    @Input('font-family') fontfamily: string;

    @Input('font-size') fontsize: string;    

    @Input('trigger-char') triggerchartcount: number;    

    @ViewChild(NgModel) model: NgModel;

    constructor(renderer: Renderer2, element: ElementRef,cd: ChangeDetectorRef){
        super(renderer,element,cd);
    }
    
    initComponent(){
        if(this.fieldlabel !=null && this.fieldlabel.length>0){
            this.haslabel = true;
        }
    }

    input(event:any){
        this.displayValue = event.target.value;
    }

    onDropDownListItemClick(data:any){
        debugger;
        this.writeValue(data[this.valuefield]);
        this.displayValue = data[this.displayfield];
    }


    writeValue(v:any){
        super.writeValue(v);
        if(v && this.viewdata){
            this.showValue();
        }
    }

   
    private showValue(){
        const listitems : any[] = this.viewdata.value;
        listitems.forEach((item) =>{
            if(item[this.valuefield] === this.value){
                this.displayValue = item[this.displayfield];
            }
        });
    }
}