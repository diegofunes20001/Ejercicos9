import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { AppComponent } from './app';

@NgModule({
  imports: [
    AppComponent,
    ServerModule,
  ],
  bootstrap: [],
  providers: [
    // Add any server-specific providers here
  ]    
})
export class AppServerModule {}
