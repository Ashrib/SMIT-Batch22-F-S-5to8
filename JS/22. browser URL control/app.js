
var currentLocation = window.location.href
console.log(currentLocation)
// console.log(window.location.pathName)

/// www.facebook.com/settings

// window.location.href = 'https://www.google.com'
    // window.location.assign('https://www.google.com')
    // window.location.assign('file:///E:/Desktop%2005-07-2026/Desktop%2002-04-2026/SMIT-Web-batch22-FS-5to8/JS/22.%20browser%20URL%20control/pages/settings.html')
    // window.location.replace('file:///E:/Desktop%2005-07-2026/Desktop%2002-04-2026/SMIT-Web-batch22-FS-5to8/JS/22.%20browser%20URL%20control/pages/settings.html')

    var monkeyWindow = window.open("./pages/settings.html", "win1", "width=420,height=380,left=200,top=100")

    setTimeout(function () {
        monkeyWindow.close();
    }
    , 2000);

