import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app",
    template: "<main><router-outlet></router-outlet></main>"
})
export class AppComponent implements OnInit {
    
    public constructor() {}
    public ngOnInit(): void {}
    
}