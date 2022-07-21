import { Component, Inject } from '@angular/core';
import { CONFIGURATION, MyConfiguration } from '../my-configuration.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'configuration';

  constructor(@Inject(CONFIGURATION) public config: MyConfiguration) {
    console.log(config);
  }

  formatJson(): string {
    return JSON.stringify(this.config, null, 4);
  }
}
