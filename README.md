# Nativescript ImageOptimize

## Installation


```
tns plugin add nativescript-imageoptimize
```

## Usage 

```ts
    import { ImageOptimize } from 'nativescript-imageoptimize';
    import * as fs from 'tns-core-modules/file-system';
    const imageoptimize = new ImageOptimize({
      src: '~/destiny_2.jpg',
      height: 400, //optional
      width:400,
      quality: 50, // 100 - 1
      format:'jpg' // jpeg || jpg || png
      dest: fs.knownFolders.documents().getFolder('images').path
    })
```
```js
    const ImageOptimize = require('nativescript-imageoptimize').ImageOptimize;
    const fs = require('tns-core-modules/file-system');
    const imageoptimize = new ImageOptimize({
      src: '~/destiny_2.jpg',
      height: 400, //optional
      width:400,
      quality: 50, // 100 - 1
      format:'jpg' // jpeg || jpg || png
      dest: fs.knownFolders.documents().getFolder('images').path,
    })
```

## API

    
| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| width | source width | number | - [ ] |
| height | source width | number  | - [ ] |
| quality | null | number | - [x] | |
| format | jpg | string | - [ ] |
| dest | null | string | - [x] |
| src | null | string | - [x] |
    
## License

Apache License Version 2.0, January 2004
