import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { FormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './shared/user.service';
import { ToastrModule } from 'ngx-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent },
  { path: 'home', component: HomeComponent },
  { path:'', redirectTo:'user', pathMatch:'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
