<div align="center">

  <h1><code>wasm-vite-template</code></h1>

</div>

## 介绍

使用ViteJS,rust与Webassembly的模板项目，方便快速开发Webassembly库项目。

## 前置

1. 安装rust，https://www.rust-lang.org/tools/install
2. 安装wasm-pack: `cargo install wasm-pack`
3. 安装cargo-generat `cargo install cargo-generat`

## 🚴 使用

### 使用 `cargo generate` 克隆模板

```
  cargo generate --git https://github.com/damiduo/wasm-vite-template.git --name hello-vite-wasm
```
--name 为项目文件名

### 初始化项目

进入已克隆的项目，执行

```
npm install 或 pnpm install
```


### 编译项目

```
wasm-pack build
```

### 运行项目

```
npm run dev
```
> 每次rust文件变化都需要编译`wasm-pack build`

### 测试项目

```
wasm-pack test --headless --firefox
```

### 发布项目

```
wasm-pack publish
```


## License

Licensed under either of

* Apache License, Version 2.0, ([LICENSE-APACHE](LICENSE-APACHE) or http://www.apache.org/licenses/LICENSE-2.0)
* MIT license ([LICENSE-MIT](LICENSE-MIT) or http://opensource.org/licenses/MIT)

at your option.
