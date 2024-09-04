import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { StartingTestComponent } from "./pages/starting-test/starting-test.component";
import { TestComponent } from "./pages/test/test.component";


@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    RouterOutlet,
    HomePageComponent,
    NavBarComponent,
    FooterComponent,
    StartingTestComponent,
    TestComponent,
  ],
  templateUrl: "./app.component.html",
  styleUrl: "./app.component.scss",
})
export class AppComponent {
  title = "test_disc";
}
