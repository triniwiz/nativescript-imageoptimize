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
    imageoptimize().optimize().then(
    (res)=>{
    console.log(res.file)
    },(err)=>{
    console.log(err.message)
    }
    )
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
    imageoptimize().optimize().then(
    (res)=>{
    console.log(res.file)
    },(err)=>{
    console.log(err.message)
    }
    )
```

## API

    
| Property | Default | Type | Required | Description  |
| --- | --- | --- | ---| ---|
| width | source width | number | <ul><li>- [ ] </li></ul> |
| height | source width | number  | <ul><li>- [ ] </li></ul> |
| quality | null | number | <ul><li>- [x] </li></ul> | |
| format | jpg | string | <ul><li>- [ ] </li></ul> |
| dest | null | string | <ul><li>- [x] </li></ul> |
| src | null | string | <ul><li>- [x] </li></ul> |
    
## License

Apache License Version 2.0, January 2004
