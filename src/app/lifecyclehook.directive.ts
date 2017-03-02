import { Directive, Input, HostBinding, OnChanges, OnInit, DoCheck, OnDestroy, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[lifecycle-dir]'
})
export class LifeCycleHookDirective implements OnChanges, OnInit, DoCheck, OnDestroy {
    @Input("lifecycle-dir") backgroundColor: string;
    @HostBinding("style.backgroundColor") backgroundColorStyle: string;

    ngOnChanges(changes: SimpleChanges) {
        this.backgroundColorStyle = this.backgroundColor;
        console.log("LifeCycleHookDirective ngOnChanges called.");
    }

    ngOnInit() {
        console.log("LifeCycleHookDirective ngOnInit called.");
    }

    ngDoCheck() {
        console.log("LifeCycleHookDirective ngDoCheck called.");
    }

    ngOnDestroy() {
        console.log("LifeCycleHookDirective ngOnDestroy called.");
    }
}