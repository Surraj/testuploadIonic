import { Injectable } from '@angular/core';
import { SystemVariableService} from './services/system-variable.service';
import { HttpClient } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class S3ServiceService {
  SYSTEM_VARIABLE = new SystemVariableService().SYSTEM_PARAMS;
  constructor( private http:HttpClient) {}

  upload(image) {
    
  }
}
