import { BaseInput } from "./base.input.component";
import { Renderer2, ChangeDetectorRef } from "@angular/core";

export class  ListBaseComponent<T> extends BaseInput<T>{

    self : boolean  = false; 
    itemClick : boolean  = false;
    dropdownstyle : any;
    documentClickListener : any;

    constructor(private renderer : Renderer2, private cd: ChangeDetectorRef){
        super();
        this.hide();
    }
   
    focus(event : any){
        this.self = true; 
        this.dropdownstyle = {'visibility': 'visible'};
        this.bindDocumentClickListener();
    }

    blur(event: any){
        this.clearClicks();
        this.hide();
    }
    
    itemClicked(){
        this.itemClick = true;
        this.hide();
        this.unbindDocumentClickListener();
        this.clearClicks();
    }

    bindDocumentClickListener() {
        if (!this.documentClickListener) {
            this.documentClickListener = this.renderer
                                             .listen('document', 'click', (event:any) => this.handleDocumentListener(event));
        }
    }

    handleDocumentListener(event : any){
        if (!this.self && !this.itemClick) {
            this.hide();
            this.unbindDocumentClickListener();
        }
        
        this.clearClicks();
        this.cd.markForCheck();
    }

    clearClicks(){
        this.self = false;
        this.itemClick = false;
    }

    unbindDocumentClickListener() {
        if (this.documentClickListener) {
            this.documentClickListener();
            this.documentClickListener = null;
        }
    }

    hide() {
        this.dropdownstyle = {'visibility': 'hidden'};
    }
}