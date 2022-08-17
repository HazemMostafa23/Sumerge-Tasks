import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./auth/auth/auth.component";
import { AuthGuard } from "./auth/auth/auth.guard";
import { CataloglistComponent } from "./catalog/cataloglist/cataloglist.component";

const routes : Routes=[
    {path:'login',component:AuthComponent},
    
        {path:'catalog',component:CataloglistComponent,canActivate:[AuthGuard]}
        

];
@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
    
      })
export class AppRoutingModule{



}