"use strict";
const axiba_unit_test_1 = require('axiba-unit-test');
const index_1 = require('../src/index');
const gulp = require('gulp');
gulp.src("assets/pages/main/index.tsx", { base: 'assets' }).pipe(gulp.dest('./dist'));
console.log(index_1.default.clearPath('./Event'));
// Dependencies.dependenciesArray = [
// ]
axiba_unit_test_1.describeClass('依赖分析', index_1.default, () => {
    //     itClass('match', () => {
    //         itAdd(['1234567891033', /(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)/g, [2]], value => value.length == 1);
    //         itAdd(['require("md5")', /(require\(")(md5)("\))/g, [2]], value => value[0] == 'md5');
    //         itAdd(['@import "a1";@import \'a2\'', /@import "(.+)"/g, [1]], value => value[0] == 'a1');
    //     });
    //     itClass('clearPathParameter', () => {
    //         itAdd(['/ddd/dfdf/dfdf?ddd=1'], value => value == '/ddd/dfdf/dfdf');
    //     });
    // itClass('clearPath', () => {
    //     let fun = value => value == '/eest/e.t';
    //     itAdd(['//eest//e.t'], fun);
    //     itAdd(['\\eest\\e.t?123123'], fun);
    //     itAdd(['./ee./st/e.t?sss=123123'], value => value == './ee/st/e.t');
    //     itAdd(['./ee./st/e.t?sss=123123'], value => value == './ee/st/e.t');
    //     itAdd(['../ee./st/e.t?sss=123123'], value => value == '../ee/st/e.t');
    // });
    //     itClass('addAlias', () => {
    //         itAdd(['.less', '_less'], value => Dependencies.config.find(value => value.extname == '.less').extnameAlias[0] == '_less');
    //     });
    //     itClass('isAlias', () => {
    //         itAdd(['sss.less'], value => !value);
    //         itAdd(['react'], value => value);
    //         itAdd(['react-deadf'], value => value);
    //     });
    //     itClass('addParserRegExp', () => {
    //         let reg = /@import (['"])(.+?)(['"])/g;
    //         itAdd(['.less', reg, '$2'], value => {
    //             let config = Dependencies.config.find(value => value.extname == '.less')
    //             return config.parserRegExpList.find(value => value.match == '$2');
    //         });
    //         reg = /(@import) +(['"])(.+?)(['"])/g;
    //         itAdd(['.less', reg, '$3'], value => {
    //             let config = Dependencies.config.find(value => value.extname == '.less')
    //             return config.parserRegExpList.find(value => value.regExp == reg && value.match == '$3');
    //         });
    //     });
    //     itClass('getDependencies', () => {
    //         let lessFile = new Vinyl({
    //             cwd: '/',
    //             base: '/test/',
    //             path: '/test/file.less',
    //             contents: new Buffer('@import "a1";@import \'a2\'')
    //         });
    //         itAdd([lessFile], value => {
    //             return !!value.dep.find(value => value == "/test/a1.less");
    //         });
    //         itAdd([lessFile], value => {
    //             return !!value.dep.find(value => value == "/test/a2.less");
    //         });
    //         let jsFile = new Vinyl({
    //             cwd: '/',
    //             base: '/test/',
    //             path: '/test/ddd.js',
    //             contents: new Buffer("require('./testLess.less');require('./aaaa.ddd');")
    //         });
    //         itAdd([jsFile], value => {
    //             return !!value.dep.find(value => value == "/test/aaaa.ddd.js");
    //         });
    //         itAdd([jsFile], value => {
    //             return !!value.dep.find(value => value == "/test/testLess.less");
    //         });
    //         let tsFile = new Vinyl({
    //             cwd: '/',
    //             base: '/test/',
    //             path: '/test/ddd.ts',
    //             contents: new Buffer("import './test.less';import 'gulp';")
    //         });
    //         itAdd([tsFile], value => {
    //             return !!value.dep.find(value => value == "/test/test.less");
    //         });
    //         itAdd([tsFile], value => {
    //             return !!value.dep.find(value => value == "gulp");
    //         });
    //     });
    axiba_unit_test_1.itClass('src', () => {
        // itAdd(['node_modules/react/lib/React.js'], value => {
        //     return true;
        // }, 900000);
        // itAdd(['node_modules/react/**/*.js'], value => {
        //     return true;
        // }, 900000);
        axiba_unit_test_1.itAdd(['node_modules/omit.js/**/*.js'], value => {
            return true;
        }, 900000);
        // itAdd(['assets/**/*.*'], value => {
        //     return true;
        // }, 900000);
        // itAdd(['assets/**/*.less'], value => {
        //     Dependencies.createJsonFile();
        //     return Dependencies.dependenciesArray.length != 0;
        // }, 900000);
    });
    //     itClass('getDependenciesArr', () => {
    //         itAdd(["assets/pages/msgset/index.less"], value => {
    //             return value.length == 1;
    //         });
    //         itAdd(["assets/components/global/styles/index.less"], value => {
    //             return value.indexOf('assets/components/global/styles/qikexiu/index.less') != -1 && value.filter(value => value === 'assets/components/global/styles/qikexiu/index.less').length === 1;
    //         });
    //     })
    //     itClass('getBeDependenciesArr', () => {
    //         itAdd(["assets/components/global/styles/qikexiu/index.less"], value => {
    //             return value.indexOf("assets/components/global/styles/index.less") > -1;
    //         });
    //     })
    //     itClass('addBeDep', () => {
    //         itAdd(["assets/pages/msgset/test.less", "assets/pages/msgset/testBe.less"], async (value) => {
    //             let arr = await Dependencies.getBeDependenciesArr("assets/pages/msgset/test.less");
    //             return arr.indexOf("assets/pages/msgset/testBe.less") !== -1;
    //         });
    //         itAdd(["assets/pages/msgset/test.less", "assets/pages/msgset/testBe22.less"], async (value) => {
    //             let arr = await Dependencies.getBeDependenciesArr("assets/pages/msgset/test.less");
    //             return arr.indexOf("assets/pages/msgset/testBe22.less") !== -1;
    //         });
    //     });
    //     itClass('delBeDep', () => {
    //         itAdd(["assets/pages/msgset/test.less", "assets/pages/msgset/testBe.less"], async (value) => {
    //             let arr = await Dependencies.getBeDependenciesArr("assets/pages/msgset/test.less");
    //             return arr.indexOf("assets/pages/msgset/testBe.less") == -1;
    //         });
    //     });
    axiba_unit_test_1.itClass('createJsonFile', () => {
        axiba_unit_test_1.itAdd([], value => true);
    });
});
axiba_unit_test_1.run();

//# sourceMappingURL=index.js.map
