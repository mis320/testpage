(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[321],{4856:t=>{t.exports={cmdContainer:"page_cmdContainer__6oKgP",titleBar:"page_titleBar__Zgqdm",titleText:"page_titleText__LezBa",windowControls:"page_windowControls__NCIrZ",controlButton:"page_controlButton__OnOB3",closeButton:"page_closeButton__fkYtJ",minimizeButton:"page_minimizeButton__pUZmR",maximizeButton:"page_maximizeButton___TZuE",mainContent:"page_mainContent__5aqPi",history:"page_history__PBjQ4",historyLine:"page_historyLine__lnb_i",inputLine:"page_inputLine__7M4zr",prompt:"page_prompt__eqfiw",commandInput:"page_commandInput__Vsp8V",blink:"page_blink__VgaRI"}},6566:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{default:()=>CmdWindow});var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(5155),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(2115),_page_module_css__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(4856),_page_module_css__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(_page_module_css__WEBPACK_IMPORTED_MODULE_2__);function CmdWindow(){let[input,setInput]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(""),[history,setHistory]=(0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(["Microsoft Windows [版本 10.0.19045.4046]","(c) Microsoft Corporation。保留所有权利。"]),inputRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),containerRef=(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null),processCommand=command=>{command=command.trim();let lowerCommand=command.toLowerCase();if("cls"===lowerCommand){setHistory([]);return}if("help"===lowerCommand)return["可用命令列表：","cls     - 清除屏幕","date    - 显示日期","time    - 显示时间","dir     - 显示目录内容","echo    - 显示消息","help    - 显示帮助信息","ver     - 显示系统版本","js      - 执行JavaScript代码"];if("date"===lowerCommand)return[new Date().toLocaleDateString("zh-CN")];if("time"===lowerCommand)return[new Date().toLocaleTimeString("zh-CN")];if("ver"===lowerCommand)return["Microsoft Windows [版本 10.0.19045.4046]"];if("dir"===lowerCommand)return[" 驱动器 C 中的卷没有标签。"," 卷的序列号是 1234-5678",""," C:\\ 的目录","","2025/03/21  09:00    <DIR>          Windows","2025/03/21  09:00    <DIR>          Program Files","2025/03/21  09:00    <DIR>          Users","              0 个文件              0 字节","              3 个目录  256,000,000,000 可用字节"];if(command.toLowerCase().startsWith("echo "))return[command.substring(5)];if(command.toLowerCase().startsWith("js ")){let code=command.substring(3);try{let result=eval(code);return["执行代码: "+code,"返回结果: "+String(result)]}catch(error){return["执行代码: "+code,"错误信息: "+error.message]}}return["命令未找到"]},handleInput=t=>{setInput(t.target.value)},handleKeyDown=t=>{if("Enter"===t.key){t.preventDefault();let e="C:\\>".concat(input),n=processCommand(input);setHistory(t=>[...t,e,...n||[]]),setInput(""),requestAnimationFrame(scrollToBottom)}},scrollToBottom=()=>{if(containerRef.current){let t=containerRef.current.querySelector(".".concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainContent));t&&requestAnimationFrame(()=>{t.scrollTop=t.scrollHeight})}};(0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{scrollToBottom()},[history]);let handleContainerClick=()=>{var t;null===(t=inputRef.current)||void 0===t||t.focus()};return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().cmdContainer,onClick:handleContainerClick,ref:containerRef,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleBar,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().titleText,children:"命令提示符"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().windowControls,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().controlButton," ").concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().minimizeButton)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().controlButton," ").concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().maximizeButton)}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button",{className:"".concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().controlButton," ").concat(_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().closeButton)})]})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().mainContent,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().history,children:history.map((t,e)=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().historyLine,children:t},e))}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().inputLine,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("span",{className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().prompt,children:"C:\\>"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input",{type:"text",value:input,onChange:handleInput,onKeyDown:handleKeyDown,className:_page_module_css__WEBPACK_IMPORTED_MODULE_2___default().commandInput,ref:inputRef,spellCheck:"false",autoComplete:"off"})]})]})]})}},6899:(t,e,n)=>{Promise.resolve().then(n.bind(n,6566))}},t=>{var e=e=>t(t.s=e);t.O(0,[719,441,684,358],()=>e(6899)),_N_E=t.O()}]);