/* darkmode_enable is defined in darkmode.js(should be in the same directory as this file)  */
/* Must be executed after document.body is finished, else there would be error :)           */
if (localStorage.getItem('dark-mode') === 'true') {
    darkmode_enable()
}