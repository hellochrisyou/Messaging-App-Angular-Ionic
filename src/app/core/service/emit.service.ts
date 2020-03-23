import { User } from './../../shared/models';
import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmitService {

  @Output() refreshMessageOutput: EventEmitter<true> = new EventEmitter<true>();


  constructor() { }

  public refreshMessages(): void {
    this.refreshMessageOutput.emit(true);
  }
}
