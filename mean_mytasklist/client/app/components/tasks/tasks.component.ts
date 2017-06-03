import { Component } from '@angular/core';
import {TaskService} from '../../services/task.service';
import {Task} from '../../../Task';

@Component({
  moduleId: module.id,
  selector: 'tasks',
  templateUrl: 'tasks.component.html'
})

export class TasksComponent { 
    tasks: Task[];
    title: string;
    model:Task[];
    selectedObject:Task;
    selectedimg:Task;
    imageUrl: string;
     public select = false;
     public selectImage=false;
     selectedModel=null;
       selectedValue = null;
    constructor(private taskService:TaskService){
        this.taskService.getTasks()
            .subscribe(tasks => {
                this.tasks = tasks;
                
                this.selectedObject = this.tasks[1];
            });
            
    }
    updateSelectedValue(event:string): void{
        var tasks = this.tasks;
        this.taskService.getById(event).subscribe(data => {
             this.model = data.model;
             this.select = true;
             this.selectImage=false;
         
        });
  }
    selectModelCar(event:string): void{
       
        this.imageUrl=event;
        this.selectImage=true;
    }
    
}
