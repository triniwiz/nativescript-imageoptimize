require('globals');
const platform = require('tns-core-modules/platform');
const common = require('./imageoptimize.common');
const utils = require('tns-core-modules/utils/utils');
const fs = require('tns-core-modules/file-system');
const imageSource = require('tns-core-modules/image-source');
function optimize(msg) {
    const options = msg.data.options;
    let optimizer;
    let ratio;
    const temp = fs.knownFolders.temp().path;
    const imgSrc = imageSource.fromFile(options.src);
    if (platform.isAndroid) {
        optimizer = new id.zelory.compressor.Compressor(utils.ad.getApplicationContext());

        if (options.height && !options.width) {
            ratio = options.height / imgSrc.height;
            optimizer.setMaxHeight(options.height);
            optimizer.setMaxWidth(Math.round(imgSrc.width * ratio));
        }

        if (options.width && !options.height) {
            ratio = options.width / imgSrc.width;
            optimizer.setMaxHeight(Math.round(imgSrc.height * ratio));
            optimizer.setMaxWidth(options.width);
        }

        if (options.width && options.height) {
            optimizer.setMaxHeight(options.height);
            optimizer.setMaxWidth(options.width);
        }

        optimizer.setQuality(options.quality);

        switch (options.format) {
            case 'png':
                optimizer.setCompressFormat(android.graphics.Bitmap.CompressFormat.PNG);
                break;
            default:
                optimizer.setCompressFormat(android.graphics.Bitmap.CompressFormat.JPEG);
                break;
        }

        if (options.dest) {
            optimizer.setDestinationDirectoryPath(options.dest);
        } else {
            optimizer.setDestinationDirectoryPath(temp);
        }

        try {
            optimizer.compressToFile(new java.io.File(common.getFile(options.src)));
            const name = new java.io.File(common.getFile(options.src)).getName();
            let file;
            let path;
            if (!options.dest) {
                path = fs.knownFolders.temp().path;
            } else {
                path = options.dest;
            }
            file = fs.path.join(path, name);
            postMessage({ file: file })
        } catch (ex) {
            postMessage({ message: ex.getLocalizedMessage() });
        }

    } else if (platform.isIOS) {
        let size;
        optimizer = UIImage.alloc().initWithData(NSData.alloc().initWithContentsOfURL(NSURL.fileURLWithPath(common.getFile(options.src))));
        try {

            if (options.height && !options.width) {
                ratio = options.height / imgSrc.height;
                size = CGRectMake(0, 0, round(imgSrc.width * ratio), options.height);
            }

            if (options.width && !options.height) {
                ratio = options.width / imgSrc.width;
                size = CGRectMake(0, 0, options.width, round(imgSrc.height * ratio));
            }

            if (options.width && options.height) {
                size = CGRectMake(0, 0, options.width, options.height);
            }

            if (options.width || options.height) {
                UIGraphicsBeginImageContextWithOptions(size.size, false, 0.0);
                optimizer.drawInRect(size);
                optimizer = UIGraphicsGetImageFromCurrentImageContext();
                UIGraphicsEndImageContext();
            }

            const fileName = `${+new Date()}`;
            let data;
            let file;
            switch (options.format) {
                case 'png':
                    data = UIImagePNGRepresentation(optimizer);
                    fileName + '.png';
                    break;
                default:
                    data = UIImageJPEGRepresentation(optimizer, options.quality / 100);
                    fileName + '.jpg';
                    break;
            }
            if (data) {
                if (options.dest) {
                    file = fs.path.join(options.dest, fileName);
                    data.writeToFileAtomically(file, true);
                } else {
                    file = fs.path.join(fs.knownFolders.temp().path, fileName);
                    data.writeToFileAtomically(file, true);
                }
            } else {
                postMessage({ message: 'Failed to save file.' });
            }
            postMessage({ file: file });
        } catch (ex) {
            postMessage({ message: ex.localizedDescription });
        }
    }
}
onmessage = (msg) => {
    optimize(msg);
}