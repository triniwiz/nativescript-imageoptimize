import { Observable } from 'tns-core-modules/data/observable';
import { ImageOptimize } from 'nativescript-imageoptimize';
export class HelloWorldModel extends Observable {
  public message: string;
  private imageoptimize: ImageOptimize;

  constructor() {
    super();
    this.imageoptimize = new ImageOptimize({
      src: '~/destiny_2.jpg',
      width: 400,
      quality: 50
    })
  }
  optimize() {
    return this.imageoptimize.optimize();
  }
}