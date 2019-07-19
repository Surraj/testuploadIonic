import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SystemVariableService {

  public SYSTEM_PARAMS = {
    REGION: 'Asia Pacific (Singapore)',
    S3: {
      BUCKET_NAME: 'test-imageuploadionic'
  }
  };
}
