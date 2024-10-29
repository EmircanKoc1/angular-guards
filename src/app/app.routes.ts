import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileMyinformationComponent } from './components/profile-myinformation/profile-myinformation.component';
import { isLoginGuard } from './guards/is-login.guard';
import { LoginComponent } from './components/login/login.component';
import { accountIsConfirmedGuard } from './guards/account-is-confirmed.guard';
import { confirmExitGuard } from './guards/confirm-exit.guard';
import { ProfileNotificationSettingsComponent } from './components/profile-notification-settings/profile-notification-settings.component';
import { userIsAdminGuard } from './guards/user-is-admin.guard';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';

export const routes: Routes = [
    {
        path: "profile",
        component: AdminProfileComponent,
        canMatch: [userIsAdminGuard]
    },
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [isLoginGuard],
        canActivateChild: [accountIsConfirmedGuard],
        children: [
            {
                path: "",
                redirectTo: "my-information",
                pathMatch: "full"
            },
            {
                path: "my-information",
                component: ProfileMyinformationComponent,
                canDeactivate: [confirmExitGuard]
            },
            {
                path: "notification-settings",
                component: ProfileNotificationSettingsComponent
            }
        ]
    },
    {
        path: "login",
        component: LoginComponent
    }

];
