import { Routes } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { exampleGuard } from './guards/example.guard';

export const routes: Routes = [
    {
        path: "profile",
        component: ProfileComponent,
        canActivate: [exampleGuard]
    }
];
