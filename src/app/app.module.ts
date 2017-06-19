import { NgModule, ApplicationRef } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ApiService } from './shared';
import { routing } from './app.routing';

import { removeNgStyles, createNewHosts } from '@angularclass/hmr';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './store/effects/effects';
import { SearchActions } from './store/actions/search-actions';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { getAppReducers } from './store/reducers';
import { MovieService } from './movie.service';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    routing,
    StoreModule.provideStore(getAppReducers),
    StoreDevtoolsModule.instrumentOnlyWithExtension({
      maxAge: 5
    }),
    EffectsModule.run(SearchEffects)
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent
  ],
  providers: [
    ApiService,
    SearchActions,
    MovieService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(public appRef: ApplicationRef) {}
  hmrOnInit(store) {
    console.log('HMR store', store);
  }
  hmrOnDestroy(store) {
    let cmpLocation = this.appRef.components.map(cmp => cmp.location.nativeElement);
    // recreate elements
    store.disposeOldHosts = createNewHosts(cmpLocation);
    // remove styles
    removeNgStyles();
  }
  hmrAfterDestroy(store) {
    // display new elements
    store.disposeOldHosts();
    delete store.disposeOldHosts;
  }
}
