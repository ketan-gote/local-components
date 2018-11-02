import { Input, Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector : 'dropdown-list-item',
    templateUrl : './dropdownlist.component.html'
})
export class DropDownListComponent {

    @Input('data') viewdata : any;

    @Input('display-field') displayfield : any;

    @Input('display-value') displayValue : any;
    

    @Output() itemclick: any = new EventEmitter<any>();

    onDropDownListClick(event: any){
        debugger;
        this.itemclick.emit(event);
    }

}