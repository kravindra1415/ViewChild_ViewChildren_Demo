import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  QueryList,
  ViewChild,
  ViewChildren,
} from '@angular/core';
import { CounterComponent } from './counter/counter.component';

@Component({
  selector: 'hello',
  templateUrl: './hello.component.html',
  styles: [`h1 { font-family: Lato; }`],
})
export class HelloComponent implements AfterViewInit {
  @Input() name: string;

  //here 'highlight' is the id of the html element of paragraph.
  //@ViewChild('highlight') marker: ElementRef;

  @ViewChildren('highlight') marker: QueryList<any>;

  @ViewChild('childView') child: CounterComponent;
  //here the child is like a component.

  constructor() {
    console.log(this.marker);
    //here we get the output as undefined, bcoz in the constructor the execution is not completes. so for that we have to use the angular hooks, we use here the 'AfterViewInit'
  }

  inc() {
    this.child.increment();
  }

  dec() {
    this.child.decrement();
  }

  ngAfterViewInit(): void {
    console.log(this.marker);
    //this.marker.nativeElement.style.color = 'red';
    this.marker.first.nativeElement.style.color = 'red';
    this.marker.last.nativeElement.style.color = 'blue';
  }
}

//viewChild => always returns the first matching element from the DOM.
//viewChlidren => point to the multiple elements.
