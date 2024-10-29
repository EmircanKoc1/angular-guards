import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileMyinformationComponent } from './components/profile-myinformation/profile-myinformation.component';
import { isLoginGuard } from './guards/is-login.guard';
import { LoginComponent } from './components/login/login.component';

export const routes: Routes = [
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [isLoginGuard],
        children: [
            {
                path: "",
                redirectTo: "my-information",
                pathMatch: "full"
            },
            {
                path: "my-information",
                component: ProfileMyinformationComponent
            }
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }

];
