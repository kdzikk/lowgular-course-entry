import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import {Observable} from "rxjs";
import {ProjectModel} from "../../model/project.model";
import {ProjectService} from "../../services/project.service";
import {PersonModel} from "../../model/person.model";
import {EmployeeService} from "../../services/employee.service";

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProjectComponent {
  data$: Observable<ProjectModel[]> = this._projectService.getAll();
  constructor(private _projectService: ProjectService) {
  }
}
