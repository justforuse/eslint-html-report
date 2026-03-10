## [1.0.1](https://github.com/justforuse/eslint-html-report/compare/v1.0.0...v1.0.1) (2026-03-10)


### Bug Fixes

* **assets:** put assets in output dir ([e9c9429](https://github.com/justforuse/eslint-html-report/commit/e9c9429b4489d901e7367a20622146d3c8861d70))
* **assets:** wrong var ([6b5c30c](https://github.com/justforuse/eslint-html-report/commit/6b5c30ce6bf33e323a2721a70f41d924b3ed58b0))
* **browser support:** Replacing instances of forEach with regular for loops for better browser suppo ([20b9d7f](https://github.com/justforuse/eslint-html-report/commit/20b9d7f58604e727e3e00a6c218f63ab570e2e55))
* **buildScriptsAndStyleFiles:** Creating output folder prior to creating files. ([22905f8](https://github.com/justforuse/eslint-html-report/commit/22905f8a745792326c4853dd62dd8d8be64d997a))
* **details tab buttons:** Ensuring all tabs works as expected ([b6b5237](https://github.com/justforuse/eslint-html-report/commit/b6b523708032e60b08cbd435e53205e3b28bc39a)), closes [#3](https://github.com/justforuse/eslint-html-report/issues/3)
* ensure peer dependency accounts for latest version of eslint ([a4feadd](https://github.com/justforuse/eslint-html-report/commit/a4feadd88265df29936a7643590f266c4a92bfdc)), closes [#28](https://github.com/justforuse/eslint-html-report/issues/28)
* **eslint 4.x:** Updating peer dependency list. ([2b71e9f](https://github.com/justforuse/eslint-html-report/commit/2b71e9fc38f166fb8f91451b95e6ab0fbd172dca))
* **filter:** Closing accordions that are being hidden. ([b4227c0](https://github.com/justforuse/eslint-html-report/commit/b4227c0bb003198f0bd1d6a72eb7f526e3388a77))
* **HTML in JS:** Fixes rendering issues with HTML in JS files. ([712e1c1](https://github.com/justforuse/eslint-html-report/commit/712e1c1862ff27e614bea0ccafda33101ba3179d)), closes [#4](https://github.com/justforuse/eslint-html-report/issues/4)
* **package-lock:** update subdependencies ([5c0114f](https://github.com/justforuse/eslint-html-report/commit/5c0114f391e4638d9728c24f4da8ef2d203569f0))
* **package.json:** add conventional changelog to dependencies ([1b1b029](https://github.com/justforuse/eslint-html-report/commit/1b1b029d64f2dadaf5c6d5643b72e3c68ef9e454))
* **package.json:** Updating postversion task. ([d761f4e](https://github.com/justforuse/eslint-html-report/commit/d761f4ea05ca170120a8d48cc733d76e4dd62a47))
* **permalink:** Disabling permalink feature from accordion due to demo page issue. ([c4c8462](https://github.com/justforuse/eslint-html-report/commit/c4c84629655714d3a1de491765bbec97f1bd9d96))
* **Rule links:** Fixing links to description of angular and lodash rules. ([4552450](https://github.com/justforuse/eslint-html-report/commit/45524508f58d7a16645500a9f878657a2eeb8bfe))
* **Source code template:** Fixes issues where source code is not available when there are problems o ([3f98c7f](https://github.com/justforuse/eslint-html-report/commit/3f98c7f54bb0a1e5b7ad28e1347a32c22ba1265f))
* **style:** Fix table width and remove current directory from file paths in result. ([a9b461e](https://github.com/justforuse/eslint-html-report/commit/a9b461ee385c4684aa5336c9a3b8aad354c2c666))
* **styles:** Changing cursor on successfull results to default. ([a08ca09](https://github.com/justforuse/eslint-html-report/commit/a08ca09d43ec54bea113bf4c4ab1226eabb7dbe6))
* **tabs:** Making active tab styles get updated properly. ([7e7f268](https://github.com/justforuse/eslint-html-report/commit/7e7f268477ee1e80ca4d268acd54d11a07f4ad30))
* **template-generator:** fix xss problem in issue message ([505c190](https://github.com/justforuse/eslint-html-report/commit/505c190efd4905990db6207863bdcbd9b1d7e1bd))
* **template-generator:** remove double call of getOutputPath ([4791dcc](https://github.com/justforuse/eslint-html-report/commit/4791dcc38cddab817fd9a48b1f2a30b37abd9086))
* update compatible eslint version ([ee6fcf8](https://github.com/justforuse/eslint-html-report/commit/ee6fcf8308386008f5c3bcf369d1ab601bd63622)), closes [#14](https://github.com/justforuse/eslint-html-report/issues/14)


### Features

* **a11y:** Making the accordions work via keyboard navigation. ([385e61f](https://github.com/justforuse/eslint-html-report/commit/385e61fbf53aac727079cb2c1048a1e770628711))
* **accordion:** Minor updates to accordion styles. ([fc33db9](https://github.com/justforuse/eslint-html-report/commit/fc33db9fd3ccd231565b1dcd221e6f2604e0db2f))
* add details table for rule ([562b840](https://github.com/justforuse/eslint-html-report/commit/562b8402558ba094f8e5ab6a17b228225db699d3))
* add project info(branch, commit, time) ([28a4093](https://github.com/justforuse/eslint-html-report/commit/28a409309213cd7998852e6192d474ac344c96fd))
* **anchors:** Making result rows into anchors for easy linking. ([e7cbb70](https://github.com/justforuse/eslint-html-report/commit/e7cbb70cc80020820783c4a1e704386619a1e0a7))
* **detailed.js:** Reporter now returns multiple files as the output. ([313a333](https://github.com/justforuse/eslint-html-report/commit/313a33345e2a4141bd92699660da308767558a79))
* **file overview:** Adding a filter to the file list. ([b350b46](https://github.com/justforuse/eslint-html-report/commit/b350b467d5eadf6caa49b299eefe92abf352a05c))
* **file overview:** Adding filtering to file overview ([2d7b3b6](https://github.com/justforuse/eslint-html-report/commit/2d7b3b64199e64e8dbad11ebcef4ab075a6eb280))
* hide the success files & update rule url formatter ([628e9d9](https://github.com/justforuse/eslint-html-report/commit/628e9d9be919868801207f0cef85c8e4a3a9967d))
* **Result Details:** Adding tabs to result details. ([f7ff04d](https://github.com/justforuse/eslint-html-report/commit/f7ff04d5cfc75459f9fb8e8d0e15c66fb2ca4a13))
* run eslint if not specify json file ([c99f532](https://github.com/justforuse/eslint-html-report/commit/c99f532af271b47c1732d54812cb9d3ede0c4fbe))
* **styles:** Updating CSS styles. ([96d469f](https://github.com/justforuse/eslint-html-report/commit/96d469f7c667d4d6d51ca9c22c5b575b9591e43f))
* **Summary Details:** Added list of top 5 files with most problems. ([52cc989](https://github.com/justforuse/eslint-html-report/commit/52cc989c50e5c2b2733a6147a6a94ead5d883cd4))
* **Summary Details:** Adding the ability to hide summary details when not needed. ([b861353](https://github.com/justforuse/eslint-html-report/commit/b861353a751ffa0ab9151089b78ef6bc7cb3022b))
* **summary:** Improving reporter appearance when no CSS is available. ([323bf6d](https://github.com/justforuse/eslint-html-report/commit/323bf6d71cbbd77d4aeb061a76f5928f30321996))


### Reverts

* Revert "docs(package.json): Adding commitzen settings to package.json" ([2a4a246](https://github.com/justforuse/eslint-html-report/commit/2a4a246f9c883851d2e91478f126ff8ad8007c16))
* Revert "docs(CHANGELOG.md): Attempting to add an automatic changelong using commitzen" ([c84383c](https://github.com/justforuse/eslint-html-report/commit/c84383c35bb1da809e7d0e40ce9732a4ac1f7e0c))



# 1.0.0 (2026-03-02)


### Bug Fixes

* **assets:** put assets in output dir ([e9c9429](https://github.com/justforuse/eslint-html-report/commit/e9c9429b4489d901e7367a20622146d3c8861d70))
* **assets:** wrong var ([6b5c30c](https://github.com/justforuse/eslint-html-report/commit/6b5c30ce6bf33e323a2721a70f41d924b3ed58b0))
* **browser support:** Replacing instances of forEach with regular for loops for better browser suppo ([20b9d7f](https://github.com/justforuse/eslint-html-report/commit/20b9d7f58604e727e3e00a6c218f63ab570e2e55))
* **buildScriptsAndStyleFiles:** Creating output folder prior to creating files. ([22905f8](https://github.com/justforuse/eslint-html-report/commit/22905f8a745792326c4853dd62dd8d8be64d997a))
* **details tab buttons:** Ensuring all tabs works as expected ([b6b5237](https://github.com/justforuse/eslint-html-report/commit/b6b523708032e60b08cbd435e53205e3b28bc39a)), closes [#3](https://github.com/justforuse/eslint-html-report/issues/3)
* ensure peer dependency accounts for latest version of eslint ([a4feadd](https://github.com/justforuse/eslint-html-report/commit/a4feadd88265df29936a7643590f266c4a92bfdc)), closes [#28](https://github.com/justforuse/eslint-html-report/issues/28)
* **eslint 4.x:** Updating peer dependency list. ([2b71e9f](https://github.com/justforuse/eslint-html-report/commit/2b71e9fc38f166fb8f91451b95e6ab0fbd172dca))
* **filter:** Closing accordions that are being hidden. ([b4227c0](https://github.com/justforuse/eslint-html-report/commit/b4227c0bb003198f0bd1d6a72eb7f526e3388a77))
* **HTML in JS:** Fixes rendering issues with HTML in JS files. ([712e1c1](https://github.com/justforuse/eslint-html-report/commit/712e1c1862ff27e614bea0ccafda33101ba3179d)), closes [#4](https://github.com/justforuse/eslint-html-report/issues/4)
* **package-lock:** update subdependencies ([5c0114f](https://github.com/justforuse/eslint-html-report/commit/5c0114f391e4638d9728c24f4da8ef2d203569f0))
* **package.json:** add conventional changelog to dependencies ([1b1b029](https://github.com/justforuse/eslint-html-report/commit/1b1b029d64f2dadaf5c6d5643b72e3c68ef9e454))
* **package.json:** Updating postversion task. ([d761f4e](https://github.com/justforuse/eslint-html-report/commit/d761f4ea05ca170120a8d48cc733d76e4dd62a47))
* **permalink:** Disabling permalink feature from accordion due to demo page issue. ([c4c8462](https://github.com/justforuse/eslint-html-report/commit/c4c84629655714d3a1de491765bbec97f1bd9d96))
* **Rule links:** Fixing links to description of angular and lodash rules. ([4552450](https://github.com/justforuse/eslint-html-report/commit/45524508f58d7a16645500a9f878657a2eeb8bfe))
* **Source code template:** Fixes issues where source code is not available when there are problems o ([3f98c7f](https://github.com/justforuse/eslint-html-report/commit/3f98c7f54bb0a1e5b7ad28e1347a32c22ba1265f))
* **style:** Fix table width and remove current directory from file paths in result. ([a9b461e](https://github.com/justforuse/eslint-html-report/commit/a9b461ee385c4684aa5336c9a3b8aad354c2c666))
* **styles:** Changing cursor on successfull results to default. ([a08ca09](https://github.com/justforuse/eslint-html-report/commit/a08ca09d43ec54bea113bf4c4ab1226eabb7dbe6))
* **tabs:** Making active tab styles get updated properly. ([7e7f268](https://github.com/justforuse/eslint-html-report/commit/7e7f268477ee1e80ca4d268acd54d11a07f4ad30))
* **template-generator:** fix xss problem in issue message ([505c190](https://github.com/justforuse/eslint-html-report/commit/505c190efd4905990db6207863bdcbd9b1d7e1bd))
* **template-generator:** remove double call of getOutputPath ([4791dcc](https://github.com/justforuse/eslint-html-report/commit/4791dcc38cddab817fd9a48b1f2a30b37abd9086))
* update compatible eslint version ([ee6fcf8](https://github.com/justforuse/eslint-html-report/commit/ee6fcf8308386008f5c3bcf369d1ab601bd63622)), closes [#14](https://github.com/justforuse/eslint-html-report/issues/14)


### Features

* **a11y:** Making the accordions work via keyboard navigation. ([385e61f](https://github.com/justforuse/eslint-html-report/commit/385e61fbf53aac727079cb2c1048a1e770628711))
* **accordion:** Minor updates to accordion styles. ([fc33db9](https://github.com/justforuse/eslint-html-report/commit/fc33db9fd3ccd231565b1dcd221e6f2604e0db2f))
* add details table for rule ([562b840](https://github.com/justforuse/eslint-html-report/commit/562b8402558ba094f8e5ab6a17b228225db699d3))
* add project info(branch, commit, time) ([28a4093](https://github.com/justforuse/eslint-html-report/commit/28a409309213cd7998852e6192d474ac344c96fd))
* **anchors:** Making result rows into anchors for easy linking. ([e7cbb70](https://github.com/justforuse/eslint-html-report/commit/e7cbb70cc80020820783c4a1e704386619a1e0a7))
* **detailed.js:** Reporter now returns multiple files as the output. ([313a333](https://github.com/justforuse/eslint-html-report/commit/313a33345e2a4141bd92699660da308767558a79))
* **file overview:** Adding a filter to the file list. ([b350b46](https://github.com/justforuse/eslint-html-report/commit/b350b467d5eadf6caa49b299eefe92abf352a05c))
* **file overview:** Adding filtering to file overview ([2d7b3b6](https://github.com/justforuse/eslint-html-report/commit/2d7b3b64199e64e8dbad11ebcef4ab075a6eb280))
* **Result Details:** Adding tabs to result details. ([f7ff04d](https://github.com/justforuse/eslint-html-report/commit/f7ff04d5cfc75459f9fb8e8d0e15c66fb2ca4a13))
* run eslint if not specify json file ([c99f532](https://github.com/justforuse/eslint-html-report/commit/c99f532af271b47c1732d54812cb9d3ede0c4fbe))
* **styles:** Updating CSS styles. ([96d469f](https://github.com/justforuse/eslint-html-report/commit/96d469f7c667d4d6d51ca9c22c5b575b9591e43f))
* **Summary Details:** Added list of top 5 files with most problems. ([52cc989](https://github.com/justforuse/eslint-html-report/commit/52cc989c50e5c2b2733a6147a6a94ead5d883cd4))
* **Summary Details:** Adding the ability to hide summary details when not needed. ([b861353](https://github.com/justforuse/eslint-html-report/commit/b861353a751ffa0ab9151089b78ef6bc7cb3022b))
* **summary:** Improving reporter appearance when no CSS is available. ([323bf6d](https://github.com/justforuse/eslint-html-report/commit/323bf6d71cbbd77d4aeb061a76f5928f30321996))


### Reverts

* Revert "docs(package.json): Adding commitzen settings to package.json" ([2a4a246](https://github.com/justforuse/eslint-html-report/commit/2a4a246f9c883851d2e91478f126ff8ad8007c16))
* Revert "docs(CHANGELOG.md): Attempting to add an automatic changelong using commitzen" ([c84383c](https://github.com/justforuse/eslint-html-report/commit/c84383c35bb1da809e7d0e40ce9732a4ac1f7e0c))



## [0.10.3](https://github.com/justforuse/eslint-html-report/compare/v0.10.3-0...v0.10.3) (2025-02-08)



## [0.10.3-0](https://github.com/justforuse/eslint-html-report/compare/v0.10.2-0...v0.10.3-0) (2025-02-08)



## [0.10.2-0](https://github.com/justforuse/eslint-html-report/compare/v0.10.0...v0.10.2-0) (2025-02-08)



# [0.10.0](https://github.com/justforuse/eslint-html-report/compare/562b8402558ba094f8e5ab6a17b228225db699d3...v0.10.0) (2025-02-08)


### Features

* add details table for rule ([562b840](https://github.com/justforuse/eslint-html-report/commit/562b8402558ba094f8e5ab6a17b228225db699d3))



