import { Task } from '../entity/task.entity';

export class FrontendTask {
  id: number;
  topic: string;
  description: string;
  isObligatory: boolean;
  lecturesNumber: number;
  practicalNumber: number;
  laboratoryNumber: number;
  academicModuleId: number;

  constructor(task: Task) {
    this.id = task.id;
    this.topic = task.topic;
    this.description = task.description;
    this.isObligatory = task.isObligatory;
    this.lecturesNumber = task.lecturesNumber;
    this.practicalNumber = task.practicalNumber;
    this.laboratoryNumber = task.laboratoryNumber;
    this.academicModuleId = task.academicModuleId;
  }
}
