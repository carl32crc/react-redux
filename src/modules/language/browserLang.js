const browserLang = () => {
    
    console.log(navigator.language)

    switch(navigator.language) {
    case 'ja':
        return 'ja'
    case 'fr':
        return 'fr'
    default:
        return 'en'
    } 
}

module.exports = browserLang;