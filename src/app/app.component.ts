import { Component,OnInit,DoCheck,AfterContentChecked,AfterViewChecked,OnDestroy } from '@angular/core';

// tslint:disable-next-line: no-conflicting-lifecycle
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit,DoCheck,AfterContentChecked,  AfterViewChecked,OnDestroy {
  ngOnChanges(){
    console.log("on change");
  }
  
  ngOnInit() {
    console.log("oninit");
  }
  ngDoCheck() {
    console.log("do check");
  }
  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }
  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }
  ngOnDestroy() {
    console.log("ngOnDestroy ");
  }
  
}

