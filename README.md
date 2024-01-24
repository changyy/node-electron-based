# Usage

build code:

```
% git clone https://github.com/changyy/node-electron-based
% cat env_nvm.sh
source /opt/local/share/nvm/init-nvm.sh
nvm use v20
% source env_nvm.sh
% npm install
% npm run build
```

electron code output:

```
% tree bundle 
bundle
├── html
│   └── mainRenderer
│       ├── index.html
│       └── index.js
├── main
│   └── index.js
├── preload
│   └── mainRenderer.js
└── renderer
    ├── index.js
    └── mainRenederer.js

5 directories, 6 files
```

multiplatform output:

```
 tree -L 1 dist 
dist
├── builder-debug.yml
├── builder-effective-config.yaml
├── latest-linux.yml
├── latest-mac.yml
├── latest.yml
├── linux-unpacked
├── mac
├── simple-electron-app\ Setup\ 1.0.0.exe
├── simple-electron-app\ Setup\ 1.0.0.exe.blockmap
├── simple-electron-app-1.0.0-mac.zip
├── simple-electron-app-1.0.0-mac.zip.blockmap
├── simple-electron-app-1.0.0.AppImage
├── simple-electron-app-1.0.0.dmg
├── simple-electron-app-1.0.0.dmg.blockmap
├── simple-electron-app_1.0.0_amd64.snap
└── win-unpacked

3 directories, 13 files
```
