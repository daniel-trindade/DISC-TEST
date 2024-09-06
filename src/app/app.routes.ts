import { Routes } from "@angular/router";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { StartingTestComponent } from "./pages/starting-test/starting-test.component";
import { TestComponent } from "./pages/test/test.component";
import { ResultPageComponent } from "./pages/result-page/result-page.component";

export const routes: Routes = [
  { path: "", component: HomePageComponent },
  { path: "inicio", component: StartingTestComponent },
  { path: "teste", component: TestComponent },
  { path: "resultado", component: ResultPageComponent },
];
