# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [1.0.0-beta.6](https://github.com/lifinance/sdk/compare/v1.0.0-beta.5...v1.0.0-beta.6) (2022-05-17)


### Features

* expose error codes ([e151051](https://github.com/lifinance/sdk/commit/e151051e96d57c99606bc447d4391e9f7bc8a266))

## [1.0.0-beta.5](https://github.com/lifinance/sdk/compare/v1.0.0-beta.4...v1.0.0-beta.5) (2022-05-17)


### Bug Fixes

* add missing toAddress param ([#68](https://github.com/lifinance/sdk/issues/68)) ([c9318ed](https://github.com/lifinance/sdk/commit/c9318edef9b5ec2b2c86b7e2f8f1645ae597437e))

## [1.0.0-beta.4](https://github.com/lifinance/sdk/compare/v1.0.0-beta.3...v1.0.0-beta.4) (2022-05-13)


### Bug Fixes

* fix types for requests cancellation ([36d7b55](https://github.com/lifinance/sdk/commit/36d7b5561d2cc2c1b47eba2ac75f07554dfca118))

## [1.0.0-beta.3](https://github.com/lifinance/sdk/compare/v1.0.0-beta.2...v1.0.0-beta.3) (2022-05-13)


### Features

* add getTokens endpoint ([#65](https://github.com/lifinance/sdk/issues/65)) ([5d9319c](https://github.com/lifinance/sdk/commit/5d9319c3ee749a6b5a81847440a3e803ffe40ee8))
* add requests cancellation ([#67](https://github.com/lifinance/sdk/issues/67)) ([32d0595](https://github.com/lifinance/sdk/commit/32d059590e0c03844245138f9f2aa9e76d7b6166))


### Bug Fixes

* remove duplicated getRoutes logic ([#66](https://github.com/lifinance/sdk/issues/66)) ([52bb994](https://github.com/lifinance/sdk/commit/52bb994ea1f6d5be90755f4dea4e1f5198557a95))

## [1.0.0-beta.2](https://github.com/lifinance/sdk/compare/v1.0.0-beta.1...v1.0.0-beta.2) (2022-05-06)


### ⚠ BREAKING CHANGES

* refine error messages and codes (#64)

### Features

* refine error messages and codes ([#64](https://github.com/lifinance/sdk/issues/64)) ([543bd28](https://github.com/lifinance/sdk/commit/543bd28b7d41c8daee3a82ca95cde1fce56f8db9))

## [1.0.0-beta.1](https://github.com/lifinance/sdk/compare/v1.0.0-beta.0...v1.0.0-beta.1) (2022-05-06)


### ⚠ BREAKING CHANGES

* deep clone incoming routes to prevent side effects (#62)
* improve status management (#63)

### Features

* add retry logic to jest ([#59](https://github.com/lifinance/sdk/issues/59)) ([c62ac37](https://github.com/lifinance/sdk/commit/c62ac370504e6bf652c24c75888d1fc44d394683))
* added getTools ([#61](https://github.com/lifinance/sdk/issues/61)) ([82e8ddd](https://github.com/lifinance/sdk/commit/82e8ddd6becbbbb197bc8f68376f12cfc6426ec1))
* improve status management ([#63](https://github.com/lifinance/sdk/issues/63)) ([e22ab60](https://github.com/lifinance/sdk/commit/e22ab6077f2b4e4fd88ca6519154d6c74e7480e7))


### Bug Fixes

* deep clone incoming routes to prevent side effects ([#62](https://github.com/lifinance/sdk/issues/62)) ([6040757](https://github.com/lifinance/sdk/commit/6040757f96a77ef8d370abc92ea0128c555a6696)), closes [#61](https://github.com/lifinance/sdk/issues/61) [#63](https://github.com/lifinance/sdk/issues/63)
* fix optimism balance loading ([#57](https://github.com/lifinance/sdk/issues/57)) ([219c3a9](https://github.com/lifinance/sdk/commit/219c3a903e7568f4df9d058d9b83f6d99744766b))
* fix undefined route error ([#58](https://github.com/lifinance/sdk/issues/58)) ([8cb120e](https://github.com/lifinance/sdk/commit/8cb120eb509ae12afdc9cea933081b2f4c1cdc5f))

## [1.0.0-beta.0](https://github.com/lifinance/sdk/compare/v0.5.3...v1.0.0-beta.0) (2022-04-13)


### ⚠ BREAKING CHANGES

* use object pattern for public methods with many params (#56)
* load available chains from the backend (#53)

### Features

* load available chains from the backend ([#53](https://github.com/lifinance/sdk/issues/53)) ([67cff83](https://github.com/lifinance/sdk/commit/67cff834aa7643234ec43626489059869e018787))
* use /status for swap execution handling ([#55](https://github.com/lifinance/sdk/issues/55)) ([0e4821c](https://github.com/lifinance/sdk/commit/0e4821c3784d87e0e4ac725eea14b3f14fe8b03c))
* use object pattern for public methods with many params ([#56](https://github.com/lifinance/sdk/issues/56)) ([b167240](https://github.com/lifinance/sdk/commit/b167240602b13d3733e5e4de5271411b5fdbd4b2))


### Bug Fixes

* handle status result 'FAILED' correctly ([#54](https://github.com/lifinance/sdk/issues/54)) ([a2113a4](https://github.com/lifinance/sdk/commit/a2113a42dc05c3cc9666a6f73bc64fe0b083372b))
* route undefined bug ([#52](https://github.com/lifinance/sdk/issues/52)) ([f0bd05e](https://github.com/lifinance/sdk/commit/f0bd05e8e8454ee570ed908b9584d24dcfadc10e))

### [0.5.4](https://github.com/lifinance/sdk/compare/v0.5.3...v0.5.4) (2022-04-04)

### [0.5.3](https://github.com/lifinance/sdk/compare/v0.5.2...v0.5.3) (2022-04-04)

### [0.5.2](https://github.com/lifinance/sdk/compare/v0.5.1...v0.5.2) (2022-04-04)


### Features

* adjust status handling to new behaviour ([#50](https://github.com/lifinance/sdk/issues/50)) ([3d3c540](https://github.com/lifinance/sdk/commit/3d3c5403da8392d3e9e62271c0b84c71042b73c4))


### Bug Fixes

* continue status calls after failure ([#49](https://github.com/lifinance/sdk/issues/49)) ([3db0a62](https://github.com/lifinance/sdk/commit/3db0a626cc6eb8449c11ed5b3091a748f9c38094))

### [0.5.1](https://github.com/lifinance/sdk/compare/v0.5.0...v0.5.1) (2022-03-24)

## [0.5.0](https://github.com/lifinance/sdk/compare/v0.4.11...v0.5.0) (2022-03-24)

### [0.4.11](https://github.com/lifinance/sdk/compare/v0.4.10...v0.4.11) (2022-03-24)


### Features

* add infinite approval to execution settings ([#47](https://github.com/lifinance/sdk/issues/47)) ([e2b3995](https://github.com/lifinance/sdk/commit/e2b39950a8e3d06998ce492ffd6bfcc2b36c35de))
* add token approval methods ([#48](https://github.com/lifinance/sdk/issues/48)) ([1f3b64d](https://github.com/lifinance/sdk/commit/1f3b64d8e545a0eb4ca33e94065b6b99dd02b0e3))

### [0.4.10](https://github.com/lifinance/sdk/compare/v0.4.9...v0.4.10) (2022-03-20)


### Features

* add chains endpoint to SDK ([#46](https://github.com/lifinance/sdk/issues/46)) ([4b500d7](https://github.com/lifinance/sdk/commit/4b500d738303e1c67f54c929447157a1fab26f8a))

### [0.4.9](https://github.com/lifinance/sdk/compare/v0.4.8...v0.4.9) (2022-03-15)


### Bug Fixes

* store received token in execution object ([#45](https://github.com/lifinance/sdk/issues/45)) ([8115ccd](https://github.com/lifinance/sdk/commit/8115ccde4123c420d7e3f96b1e3e2b67c4773e68))

### [0.4.8](https://github.com/lifinance/sdk/compare/v0.4.7...v0.4.8) (2022-03-07)


### Features

* randomly select RPCs to prevent quota issues ([#44](https://github.com/lifinance/sdk/issues/44)) ([4346282](https://github.com/lifinance/sdk/commit/4346282ccd82072cba0e8ba1101f1b55b5bbd8f4))

### [0.4.7](https://github.com/lifinance/sdk/compare/v0.4.6...v0.4.7) (2022-02-24)


### Features

* use common bridge executor for all known BridgeTools ([#43](https://github.com/lifinance/sdk/issues/43)) ([77626b3](https://github.com/lifinance/sdk/commit/77626b35c617a594f7f1924fc6860c35b9fafa8c))

### [0.4.6](https://github.com/lifinance/sdk/compare/v0.4.5-beta.2...v0.4.6) (2022-02-24)

### Bug Fixes

* handle tokens with 0xeee... zero
  addresses ([#41](https://github.com/lifinance/sdk/issues/41)) ([130df5](https://github.com/lifinance/sdk/commit/130df5a3c60e4e5848e7893035c19bec6a9e8365))

### Features

* use common bridge executor for bridge
  calls ([#42](https://github.com/lifinance/sdk/issues/40)) ([2c8865](https://github.com/lifinance/sdk/commit/2c88651532af66a31108489dd455a2fece54436b))
* **Hop:** use common bridge executor for hop
  transfers ([#40](https://github.com/lifinance/sdk/issues/40)) ([b65519](https://github.com/lifinance/sdk/commit/b655190a481a29b1b09b09e97c1c9edd1d25fd92))

### [0.4.5](https://github.com/lifinance/sdk/compare/v0.4.4...v0.4.5) (2022-02-10)

### [0.4.4](https://github.com/lifinance/sdk/compare/v0.4.2...v0.4.4) (2022-02-09)

### Bug Fixes

* check chain before sending
  transactions ([#33](https://github.com/lifinance/sdk/issues/33)) ([6b92a77](https://github.com/lifinance/sdk/commit/6b92a7740d00427244c48df2a4c30f255e2a89ec))
* fix type changes ([59b9981](https://github.com/lifinance/sdk/commit/59b9981d7b71704bcb137ecc2de4af09f3f819a8))
* **nxtp:** wait for subgraph setup before calling
  waitFor ([62c7f73](https://github.com/lifinance/sdk/commit/62c7f73fe186c6ebd70fdbb38c84863abb71fc52))
* show better connext error
  message ([#32](https://github.com/lifinance/sdk/issues/32)) ([e3f9998](https://github.com/lifinance/sdk/commit/e3f9998c12a16b99e2b3d3b638b47016d90a85fe))

### [0.4.3](https://github.com/lifinance/sdk/compare/v0.4.2...v0.4.3) (2022-01-29)

### [0.4.2](https://github.com/lifinance/sdk/compare/v0.4.1...v0.4.2) (2022-01-28)

### Features

* add new API endpoints to
  SDK ([#30](https://github.com/lifinance/sdk/issues/30)) ([89ace22](https://github.com/lifinance/sdk/commit/89ace22ed6f7a76900ebdffb85b4393ba687770c))
* improve handling of wallet & backend
  errors ([#22](https://github.com/lifinance/sdk/issues/22)) ([05e94d6](https://github.com/lifinance/sdk/commit/05e94d617ac22928bbc3265d3a75579e7e5a833d))
* use v1 LiFi
  endpoints ([#29](https://github.com/lifinance/sdk/issues/29)) ([c271425](https://github.com/lifinance/sdk/commit/c2714252a9be2df0ea1e1a30b7f01be3839bb563))

### Bug Fixes

* **Hop:** check subgraphs for success confirmation instead of using hop
  sdk ([#24](https://github.com/lifinance/sdk/issues/24)) ([ce95623](https://github.com/lifinance/sdk/commit/ce956233f19c16ba017606207715f5ab61143032))
* **nxtp:** improve nxtp timeout
  handling ([#23](https://github.com/lifinance/sdk/issues/23)) ([fa12dec](https://github.com/lifinance/sdk/commit/fa12dec9834d236ae8a621866b3813d19a56107e))
* **nxtp:** use transactionId returned by the backend (
  LF-78) ([121c103](https://github.com/lifinance/sdk/commit/121c1032a989a137d8d473af233e362e0d80ff3b))
* resolve eslint
  issues ([#27](https://github.com/lifinance/sdk/issues/27)) ([5b307ce](https://github.com/lifinance/sdk/commit/5b307ce749c6f9e87513155778421eb6323b148a))
* type in
  hook ([#28](https://github.com/lifinance/sdk/issues/28)) ([9e72a39](https://github.com/lifinance/sdk/commit/9e72a3917a9fa6441b859dc6492b73dd9568df92))

### [0.4.1](https://github.com/lifinance/sdk/compare/v0.4.0...v0.4.1) (2022-01-14)

## [0.4.0](https://github.com/lifinance/sdk/compare/v0.3.3...v0.4.0) (2022-01-14)

### ⚠ BREAKING CHANGES

* interface of external status management methods changed

### Bug Fixes

* **nxtp:** handle cancelled
  transfers ([#18](https://github.com/lifinance/sdk/issues/18)) ([02cd6de](https://github.com/lifinance/sdk/commit/02cd6deb499e5b6b08ee111dcefe2ebda81da548))
* **scripts:** make install script OS
  agnostic ([6792a8f](https://github.com/lifinance/sdk/commit/6792a8fceb4246ed77b18ef58481fa56a6bca92c))


* refactor status
  handling ([#5](https://github.com/lifinance/sdk/issues/5)) ([aa924d8](https://github.com/lifinance/sdk/commit/aa924d80a3b151b8ca750a311436fb10aa4f8f7a))

### [0.3.4](https://github.com/lifinance/sdk/compare/v0.3.3...v0.3.4) (2022-01-12)

### Bug Fixes

* **nxtp:** handle cancelled
  transfers ([#18](https://github.com/lifinance/sdk/issues/18)) ([02cd6de](https://github.com/lifinance/sdk/commit/02cd6deb499e5b6b08ee111dcefe2ebda81da548))
* **scripts:** make install script OS
  agnostic ([6792a8f](https://github.com/lifinance/sdk/commit/6792a8fceb4246ed77b18ef58481fa56a6bca92c))

### [0.3.3](https://github.com/lifinance/sdk/compare/v0.2.3...v0.3.3) (2022-01-04)

### Bug Fixes

* **nxtp:** wait until balance rpc contains block number larger than claim block
  number ([#14](https://github.com/lifinance/sdk/issues/14)) ([5146af0](https://github.com/lifinance/sdk/commit/5146af0a2596f202eec74ffc0af89905264ab66c))

### [0.2.3](https://github.com/lifinance/sdk/compare/v0.2.2...v0.2.3) (2021-12-30)

### Features

* **bal:** add local balance checks to avoid impossible
  transactions ([2a8e0b2](https://github.com/lifinance/sdk/commit/2a8e0b2fd25622cdb9f253e610e25fc0cde9d3f7))
* **balance:** update multicall contract usage in balance
  util ([#9](https://github.com/lifinance/sdk/issues/9)) ([74b1d8f](https://github.com/lifinance/sdk/commit/74b1d8fe4c2a4da505584db65826c015608ebebe))
* **dex:** parse exchange
  transactions ([97cba56](https://github.com/lifinance/sdk/commit/97cba56fdd97c6f7998e9da8b8346832ee5d25eb))

### [0.2.2](https://github.com/lifinance/sdk/compare/v0.2.1...v0.2.2) (2021-12-28)

### Bug Fixes

* **paraswap:** improve receipt
  parsing ([ee604a5](https://github.com/lifinance/sdk/commit/ee604a5e7fe4ae1e5c433441b7cb8fb0fd4e241d))

### [0.2.1](https://github.com/lifinance/sdk/compare/v0.2.0...v0.2.1) (2021-12-16)

## [0.2.0](https://github.com/lifinance/sdk/compare/v0.1.1...v0.2.0) (2021-12-16)

### Features

* **config:** allow to edit the underlying
  config ([#2](https://github.com/lifinance/sdk/issues/2)) ([3c04ead](https://github.com/lifinance/sdk/commit/3c04ead754097ae9d39071b87fe9f7174dee50e4))

### Bug Fixes

* **balance:** split large token lists into
  chunks ([#7](https://github.com/lifinance/sdk/issues/7)) ([d19f837](https://github.com/lifinance/sdk/commit/d19f837b2df88427444ea954016ed61a1cc2e0f8))

### [0.1.1](https://github.com/lifinance/sdk/compare/v0.1.0...v0.1.1) (2021-12-13)

### Features

* **balances:** handle empty token
  lists ([b0a4837](https://github.com/lifinance/sdk/commit/b0a48376b70b92266eff368437b56ac26a715c39))
* **nxtp:** handle encryption/decryption via
  hooks ([#4](https://github.com/lifinance/sdk/issues/4)) ([4e4f27d](https://github.com/lifinance/sdk/commit/4e4f27de798f2ccb9b04def0a518afdebb26cf43))

## [0.1.0](https://github.com/lifinance/sdk/compare/v0.0.2...v0.1.0) (2021-12-10)

* **Token:** refactor token and coin
  usage ([#1](https://github.com/lifinance/sdk/issues/1)) ([5ee4d86](https://github.com/lifinance/sdk/commit/5ee4d86ac037f74de0981139f8275031be58c82b))
