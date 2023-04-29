import { Component } from '@angular/core';
import { layoutTypes } from './shared/utils';
import { Observable, filter, map, mergeMap } from 'rxjs';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Health Mate';
  layout$ = this.getLayoutType$();

  readonly layoutTypes = layoutTypes;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  //Esto sirve para cambiar entre los diferentes layouts
  private getLayoutType$(): Observable<layoutTypes> {
    return this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd),
      map(() => this.activatedRoute),
      map((route) => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      }),
      filter((route) => route.outlet === 'primary'),
      mergeMap((route) => route.data),
      map(({ layout }) => layout)
    );
  }
}
