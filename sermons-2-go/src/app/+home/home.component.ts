import { Component, OnInit } from "@angular/core";
import { WpEndpoint, WpService, CollectionResponse, WpUser } from 'ng2-wp-api';

@Component({
    selector: "s2g-home",
    templateUrl: "home.template.html"
})
export class HomeComponent implements OnInit { 
//    endpoint:any = WpEndpoint.posts;
//   args:any;

//   posts:any;
//   pagination:any;

//   collection:any;

  constructor(private wpService: WpService) {
     
  }

  ngOnInit() {
      debugger;
       this.wpService.auth().cookies().subscribe(
  (loggedInUser: WpUser)=> {
    console.log(loggedInUser);
  });
   // this.get();
  }

  

  
}