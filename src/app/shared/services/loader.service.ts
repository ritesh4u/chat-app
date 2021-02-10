import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  loader: boolean;
  constructor() {
    this.loader = false;
  }
  setLoader(loader: boolean) {
    this.loader = loader;
  }
}
