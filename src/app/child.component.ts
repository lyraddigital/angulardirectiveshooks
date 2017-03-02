import { 
    Component, 
    Input, 
    OnChanges, 
    OnInit, 
    DoCheck, 
    AfterContentInit, 
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked, 
    OnDestroy, 
    SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent 
    implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, 
    AfterViewInit, AfterViewChecked, OnDestroy {
    
    @Input("backgroundColor") backgroundColor: string;
    
    ngOnChanges(changes: SimpleChanges) {
        console.log('ChildComponent ngOnChanges called.');
    }

    ngOnInit() {
        console.log('ChildComponent ngOnInit called.');
    }

    ngDoCheck() {
        console.log('ChildComponent ngDoCheck called.');
    }

    ngAfterContentInit() {
        console.log('ChildComponent ngAfterContentInit called.');
    }

    ngAfterContentChecked() {
        console.log('ChildComponent ngAfterContentChecked called.');
    }

    ngAfterViewInit() {
        console.log('ChildComponent ngAfterViewInit called.');
    }

    ngAfterViewChecked() {
        console.log('ChildComponent ngAfterViewChecked called.');
    }

    ngOnDestroy() {
        console.log('ChildComponent ngOnDestroy called.');
    }
}