"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[6087],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),d=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=d(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},c=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(n),m=a,h=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?o.createElement(h,i(i({ref:t},p),{},{components:n})):o.createElement(h,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=c;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var d=2;d<r;d++)i[d]=n[d];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1414:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return s},default:function(){return c},frontMatter:function(){return l},metadata:function(){return d},toc:function(){return p}});var o=n(7462),a=n(3366),r=(n(7294),n(3905)),i=["components"],l={id:"getting-started",slug:"introduction/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},s=void 0,d={unversionedId:"getting-started",id:"getting-started",isDocsHomePage:!1,title:"Getting Started",description:"Getting Started",source:"@site/../docs/Introduction.GettingStarted.md",sourceDirName:".",slug:"/introduction/getting-started",permalink:"/Detox/docs/introduction/getting-started",editUrl:"https://github.com/wix/Detox/edit/master/docs/../docs/Introduction.GettingStarted.md",tags:[],version:"current",frontMatter:{id:"getting-started",slug:"introduction/getting-started",title:"Getting Started",sidebar_label:"Getting Started"},sidebar:"tutorialSidebar",next:{title:"Setting Up an iOS Development & Testing Environment",permalink:"/Detox/docs/introduction/ios-dev-env"}},p=[{value:"Getting Started",id:"getting-started",children:[],level:2},{value:"Step 1: Environment Setup",id:"step-1-environment-setup",children:[{value:"Install Node.js",id:"install-nodejs",children:[],level:3},{value:"Install Detox Command Line Tools (<code>detox-cli</code>)",id:"install-detox-command-line-tools-detox-cli",children:[],level:3},{value:"Install Platform-specific Dependencies, Tools and SDKs",id:"install-platform-specific-dependencies-tools-and-sdks",children:[],level:3}],level:2},{value:"Step 2: Add Detox to Your Project",id:"step-2-add-detox-to-your-project",children:[{value:"Install the Detox Node-module",id:"install-the-detox-node-module",children:[],level:3},{value:"Set Up a Test Runner",id:"set-up-a-test-runner",children:[],level:3},{value:"Apply Detox Configuration",id:"apply-detox-configuration",children:[],level:3}],level:2},{value:"Step 3: Build Your App and Run Detox Tests",id:"step-3-build-your-app-and-run-detox-tests",children:[{value:"1. Build Your App",id:"1-build-your-app",children:[],level:3},{value:"2. Run the Tests",id:"2-run-the-tests",children:[],level:3}],level:2}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Welcome to Detox!")),(0,r.kt)("p",null,"In this guide, we will walk you through setting Detox up in your project, one step at a time."),(0,r.kt)("p",null,"You will find that some steps are longer than the others: some are just one-paragraph long, while for others we have a dedicated multistep guide worked out. Bear with us - it is all necessary, and once set-up, it is easy to move forward with writing tests very rapidly."),(0,r.kt)("h2",{id:"step-1-environment-setup"},"Step 1: Environment Setup"),(0,r.kt)("h3",{id:"install-nodejs"},"Install ",(0,r.kt)("a",{parentName:"h3",href:"https://nodejs.org/en/"},"Node.js")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Node.js")," is the JavaScript runtime Detox will run on. ",(0,r.kt)("strong",{parentName:"p"},"Install Node.js ",(0,r.kt)("inlineCode",{parentName:"strong"},"v12.0")," or above"),"."),(0,r.kt)("p",null,"There\u2019s more than one way to install Node.js:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Download from the ",(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"official download page")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("a",{parentName:"li",href:"https://formulae.brew.sh/formula/node"},"Homebrew")),(0,r.kt)("li",{parentName:"ul"},"Use ",(0,r.kt)("inlineCode",{parentName:"li"},"nvm")," - if you need to allow for several versions to be installed on a single machine")),(0,r.kt)("p",null,"The simplest way is to use Homebrew:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"brew install node\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Tip: Verify installation succeeded by typing in ",(0,r.kt)("inlineCode",{parentName:"p"},"node -v")," in the terminal to output current node version.")),(0,r.kt)("h3",{id:"install-detox-command-line-tools-detox-cli"},"Install Detox Command Line Tools (",(0,r.kt)("inlineCode",{parentName:"h3"},"detox-cli"),")"),(0,r.kt)("p",null,"This package makes it easier to operate Detox from the command line. ",(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," should be installed globally, enabling usage of the command line tools outside your npm scripts. ",(0,r.kt)("inlineCode",{parentName:"p"},"detox-cli")," is merely a script that passes commands through to a command line tool shipped inside ",(0,r.kt)("inlineCode",{parentName:"p"},"detox")," package (in ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules/.bin/detox"),")."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install -g detox-cli\n")),(0,r.kt)("h3",{id:"install-platform-specific-dependencies-tools-and-sdks"},"Install Platform-specific Dependencies, Tools and SDKs"),(0,r.kt)("p",null,"Depending on the platform/s you\u2019re aiming at (iOS, Android), take the time to run through these environment setup guides:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/android-dev-env"},"Android")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/ios-dev-env"},"iOS"))),(0,r.kt)("h2",{id:"step-2-add-detox-to-your-project"},"Step 2: Add Detox to Your Project"),(0,r.kt)("h3",{id:"install-the-detox-node-module"},"Install the Detox Node-module"),(0,r.kt)("p",null,"If you have a React Native project, go to its root folder (where ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," is found) and type the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install detox --save-dev\n")),(0,r.kt)("p",null,"If you have a project without Node integration (such as a native project), add the following ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," file to the root folder of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "<your_project_name>",\n  "version": "0.0.1"\n}\n')),(0,r.kt)("p",null,"Name your project in ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json")," and then run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"npm install detox --save-dev --no-package-lock\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"You should now have Detox available in ",(0,r.kt)("inlineCode",{parentName:"strong"},"node_modules/detox"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Tip:")," Remember to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"node_modules")," folder to your git ignore file (e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},".gitignore"),").")),(0,r.kt)("h3",{id:"set-up-a-test-runner"},"Set Up a Test Runner"),(0,r.kt)("p",null,"Detox delegates the actual JavaScript test-code execution to a dedicated test-runner. It supports the popular ",(0,r.kt)("inlineCode",{parentName:"p"},"Jest")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Mocha")," out of the box. You need to choose and set up one of them now, but it ",(0,r.kt)("em",{parentName:"p"},"is")," possible to switch later on, should you change your mind."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},(0,r.kt)("a",{parentName:"strong",href:"https://jestjs.io/"},"Jest")," is the recommended test runner for use with Detox"),", since it provides parallel test execution and a complete lifecycle integration with Detox. To set up, follow ",(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/guide/jest"},"our comprehensive guide for Jest"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://mochajs.org/"},"Mocha"),", albeit its integration is less complete, is still lightweight, and a bit easier to set up. To set up, follow ",(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/guide/mocha"},"our guide for Mocha"),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Detox is coupled to neither Mocha or Jest, nor with a specific directory structure. Both runners are just a recommendation \u2014 with some effort, they can be replaced without touching the internal implementation of Detox itself.")),(0,r.kt)("h3",{id:"apply-detox-configuration"},"Apply Detox Configuration"),(0,r.kt)("p",null,"If you\u2019ve completed the test-runner setup successfully using ",(0,r.kt)("inlineCode",{parentName:"p"},"detox init"),", you should have a ",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc.json")," file containing a skeletal configuration for Detox to use. This configuration is only half-baked and needs to be set up properly. You now need to either create or edit that file, and apply the actual configuration suitable for your specific project."),(0,r.kt)("p",null,"Detox scans for a configuration through multiple files. It starts from the current working directory, and runs over the following options, in this order:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".detoxrc.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".detoxrc.json")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},".detoxrc")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"detox.config.js")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"detox.config.json")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"package.json")," (",(0,r.kt)("inlineCode",{parentName:"li"},'"detox"')," section)")),(0,r.kt)("p",null,"If you prefer to use something other than ",(0,r.kt)("inlineCode",{parentName:"p"},".detoxrc.json"),"\u2014for example, would like to keep all project configs in one place\u2014you can create a ",(0,r.kt)("inlineCode",{parentName:"p"},"detox")," section in your ",(0,r.kt)("inlineCode",{parentName:"p"},"package.json"),". If you otherwise prefer separating configs, all of the other options are valid."),(0,r.kt)("p",null,"For specific configuration options for each supported platform, see:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/android"},"Android")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/Detox/docs/introduction/ios"},"iOS"))),(0,r.kt)("h2",{id:"step-3-build-your-app-and-run-detox-tests"},"Step 3: Build Your App and Run Detox Tests"),(0,r.kt)("h3",{id:"1-build-your-app"},"1. Build Your App"),(0,r.kt)("p",null,"Use a convenience method in Detox command line tools to build your project easily:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox build --configuration <your configuration name>\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note:")," Detox executes the build command you specified in your Detox configuration. If your build fails, make sure to provide the correct build command.")),(0,r.kt)("h3",{id:"2-run-the-tests"},"2. Run the Tests"),(0,r.kt)("p",null,"Use the Detox command line tools to test your project easily:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"detox test --configuration <your configuration name>\n")),(0,r.kt)("p",null,"That\u2019s it. Your first failing Detox test is running!"),(0,r.kt)("p",null,"Next, we\u2019ll go over usage and how to make this test ",(0,r.kt)("a",{parentName:"p",href:"/Detox/docs/introduction/writing-first-test"},"actually pass"),"."))}c.isMDXComponent=!0}}]);