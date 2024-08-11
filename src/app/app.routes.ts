import { Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AuthGardCls } from './auth.guard';

export const routes: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'about', component: AboutPageComponent },
	{ path: 'contact',
		canActivate:[AuthGardCls],
		 component: ContactPageComponent},
	{ path: 'user/:NamVak', component: UserPageComponent},
	{ path: 'user/:NamVak/mobile/:mobile', component: UserPageComponent}
];
