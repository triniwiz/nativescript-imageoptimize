import * as observable from 'tns-core-modules/data/observable';
import * as pages from 'tns-core-modules/ui/page';
import { HelloWorldModel } from './main-view-model';
import { isIOS } from 'tns-core-modules/platform';
let page;
declare const NSFileManager, java;
import * as fs from 'tns-core-modules/file-system';
// Event handler for Page 'loaded' event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
    page.bindingContext = new HelloWorldModel();
}

export function optimize() {
    page.bindingContext.optimize().then(
        (res) => {
            page.bindingContext.set('newImage', res.file);
            try {
                if (isIOS) {
                    const original = NSFileManager.defaultManager.attributesOfItemAtPathError(fs.path.join(fs.knownFolders.currentApp().path, `destiny_2.jpg`))
                    console.log(original.fileSize())

                    const file = NSFileManager.defaultManager.attributesOfItemAtPathError(res.file)
                    console.log(file.fileSize())
                } else {
                    const file = new java.io.File(res.file)
                    console.log(file.length());
                }
            } catch (ex) {
                console.dir(ex)
            }
        },
        (error) => {
            console.dir(error.message)
        }
    )
}
