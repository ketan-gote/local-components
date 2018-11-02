import { OnInit, Component, Input, ChangeDetectionStrategy, ChangeDetectorRef } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { filter, map, catchError } from 'rxjs/operators';
@Component({
    selector : 'grid-component',
    templateUrl : './grid.component.html'
})
export class GridComponent implements OnInit
{
    _data : any;

    @Input('http-url') httpUrl : string;

    @Input('data')
    set data(v:any){
        this._data = v;
        this.viewdata = of(this.data);
        debugger;
    }

    get data(){
        return this._data;
    }

    viewdata : Observable<any>;

    searchString : string;

    sortColumn : string;

    constructor(private httpClient : HttpClient,private cd: ChangeDetectorRef){

    }


    ngOnInit(){
        // setTimeout(()=>{
        //     this.data = this.httpClient.get(this.httpUrl).pipe(
        //         map(res => {
        //           return this.getData(res);
        //         }),
        //         catchError(err => of([]))
        //       );
    
        // },10);
        //this.viewdata = this.httpClient.get(this.httpUrl);    
        
    }

    getData(res: any){
        return res;//res.slice(2);
    }

    sort(col:string){
        this.sortColumn = col;
    }

}