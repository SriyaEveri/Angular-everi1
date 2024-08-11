// import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
// import { provideRouter } from '@angular/router';

// import { routes } from './app.routes';

// export const appConfig: ApplicationConfig = {
//   providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)]
// };

// src/app/app.config.ts
// import { provideAnimations } from '@angular/platform-browser/animations';
// import { provideRouter } from '@angular/router';
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { AppComponent } from './app.component';

// export const appConfig = {
//   providers: [
//     provideAnimations(),
//     DragDropModule, // Add DragDropModule here
//     provideRouter([]), // Add your routes here if needed
//   ],
//   declarations: [
//     AppComponent,
//     // other components if you have any
//   ],
// };
// import { DragDropModule } from '@angular/cdk/drag-drop';
// import { AppComponent } from './app.component';

// export const appConfig = {
//   providers: [
//     DragDropModule,
//   ],
//   declarations: [
//     AppComponent,
//   ],
// };

import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), 
              provideRouter(routes), 
              provideHttpClient()]
};

