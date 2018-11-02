import { Component, OnChanges,Optional, Inject, Input, ViewChild, AfterViewInit, AfterViewChecked,} from '@angular/core';

import {
    NgModel,
    NG_VALUE_ACCESSOR
  } from '@angular/forms';
import { BaseInput } from '../base/base.input.component';

@Component({
    selector :"amexio-text-field",
    templateUrl: "./textfield.component.html",
    providers: [{
        provide: NG_VALUE_ACCESSOR,
        useExisting: AmexioTextField,
        multi: true,
      }],
    styleUrls:["./textfield.scss"],
    
})
export class AmexioTextField extends BaseInput<string> {


    private regEx: RegExp;
    private showerror : boolean;
    private _pattern: string;
    private _fieldlabel: string;
    private _haslabel : boolean;


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

    @Input('place-holder') placeholder : string = "";

    @Input('allow-blank') allowblank : boolean;

    @Input('min-length') minlength : number;

    @Input('max-length') maxlength : number;

    @Input('error-msg') errormsg: string;     

    @Input('min-error-msg') minmsg: string;    

    @Input('max-error-msg') maxmsg: string;       

    @Input('disabled') disabled : boolean;

    @Input('prefix-icon-class') prefixiconclass: string;

    @Input('suffix-icon-class') suffixiconclass: string;

    @Input('icon-feedback') iconfeedback : boolean;

    @Input('enable-popover') enablepopover : boolean;

    @Input('font-style') fontstyle: string;

    @Input('font-family') fontfamily: string;

    @Input('font-size') fontsize: string;    

    @Input('has-label')
    set haslabel(v:boolean){
        this._haslabel = v;
    }

    get haslabel(){
        return this._haslabel;
    }

    @ViewChild(NgModel) model: NgModel;


    @Input('pattern')
    set pattern(value: string) {
        if (value != null) {
            this._pattern = value;
            this.regEx = new RegExp(this._pattern);
        }
    }
    get pattern(): string {
        return this._pattern;
    }

    constructor(){
        super();
    }

    initComponent(){
        if(this.fieldlabel !=null && this.fieldlabel.length>0){
            this.haslabel = true;
        }
    }

    focus(event:any){
        super.focus(event);
        this.showerror = true;
    }
    blur(event:any){
        super.blur(event);
        this.showerror = false;
    }

    validateOnInit() : boolean {
        debugger;
       if(!this.allowblank && this.value && this.value.length<1){
           return false;
       }else if(this.minlength && !this.allowblank 
                                && this.value && (this.value.length<this.minlength)){
           return false;
       }else if(this.maxlength && !this.allowblank 
                                && this.value && (this.value.length>this.maxlength)){
           return false;
       }else{
           return true;
       }
    }

    writeValue(value:string){
        super.writeValue(value);
        debugger;
        if(this.value){
            this.valid = this.validateOnInit();
        }
    }

    checkValidity(){
        this.valid = this.isValid();
    }
    
    isValid(){
        return (this.model && this.model.valid); 
    }
  
}