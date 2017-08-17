import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { ROUTING } from "./app.routing";

import { HomeComponent } from "./+home/home.component";
import { WordPressModule } from 'ng2-wp-api';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        ROUTING,
        WordPressModule.forRoot('http://www.sermons-2-go.co.uk')  
    ],
    declarations: [
        AppComponent,
        HomeComponent
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {}