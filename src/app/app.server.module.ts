import { NgModule } from '@angular/core';
import { ServerModule } from '@angular/platform-server';
import { App } from './app';
import { routes } from './app.routes';

@NgModule({
  imports: [
    App,
    ServerModule,
  ],
  bootstrap: [App],
  providers: [
    // Add any server-specific providers here
  ]
})
export class AppServerModule {}
