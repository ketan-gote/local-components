import { Component, OnInit, Input, Renderer2, ChangeDetectorRef } from "@angular/core";

@Component({
    selector : 'drop-down',
    templateUrl : './dropdown.component.html'
})
export class DropDownComponent implements OnInit{

    self : boolean  = false; 
    itemClick : boolean  = false;

    dropdownstyle : any;

    @Input('data') data;
    
    documentClickListener : any;

    constructor(private renderer : Renderer2,private cd: ChangeDetectorRef){
        this.dropdownstyle = {'visibility': 'hidden'};
    }

    ngOnInit(){

    }

    displayDropDown(){
        console.log('onFocus '+this.self);
        this.self = true; 
        this.dropdownstyle = {'visibility': 'visible'};
        this.bindDocumentClickListener();
    }

    optionClick(data: any){
        console.log('optionClick '+this.self);
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
        console.log("handleDocumentListener "+new Date());
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