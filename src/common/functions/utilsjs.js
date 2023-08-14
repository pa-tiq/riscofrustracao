export function cpfMask(value) {
    return value
      .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
      .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})/, '$1-$2')
      .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada
}

export function getCurrentDate(separator=''){
    let newDate = new Date()
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    
    return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
}

export function toFormatDate(date) {
    // return new Intl.DateTimeFormat('pt-BR').format(date)
    const d = new Date(date)
    // return d.toLocaleDateString()
    return d.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
}

export function toFormatDateYYYYMMDD(date){
    var d = new Date(date)
    // d = d.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    d = toFormatDate(date)
    var dd = d.split('/') 
    var data = dd[2] + dd[1] + dd[0]  
    return (data)
}

export function toFormatDateYYYYMMDD2(date){
    var d = new Date(date)
    // d = d.toLocaleDateString('pt-BR', {timeZone: 'UTC'})
    d = (date)
    var dd = d.split('/') 
    var data = dd[2] + '-' + dd[1] + '-' + dd[0]  
    return (data)
}

export function toFormatDateDDMMYYYY(date){
    var d = new String(date)
    if (d.length == 8){
        var data = d.substr(4, 4) + '-' + d.substr(2, 2) + '-' + d.substr(0, 2)
        return (data)
    } else {
        return ''
    }
}

export function toFormatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}

export function toFormatNumber(value, digits) {
    return new Intl.NumberFormat('pt-BR', { maximumFractionDigits: digits }).format(value)
}

export function toFormatNumberPercent(value, digits) {
    return new Intl.NumberFormat('pt-BR', { style: 'percent', currency: 'BRL', maximumFractionDigits: digits }).format(value);
}

export function toCalculateIRE(_it, _q , _t ) {
    return Math.pow( (1 + _it), (_q/_t) ) - 1;
}

export function mapColorsToLabels(labels) {
    //Example to Use: const colors = mapColorsToLabels(labels);
    // const COLORS = ['#FFA07A', '#FF0000', '#FF7F50', '#FFFACD', '#98FB98', '#48D1CC', '#87CEEB', 
                    // '#D8BFD8', '#FFE4C4', '#F4A460', '#C0C0C0', '#FFF0F5']

    const chartColor = [
        {
            color: 'red'
        },
        {
            color: 'green'
        },
        {
            color: 'blue'
        },
        {
            color: 'orange'
        },
        {
            color: 'yellow'
        },
        {
            color: 'plum'
        },
        {
            color: 'darkcyan'
        },
        {
            color: 'dodgerblue'
        },
        {
            color: 'gray'
        }
    ]
    return chartColor.map(obj => { return obj.color })
}

export function isNumber(evt) {
    evt = (evt) ? evt : window.event.target
    const charCode = (evt.which) ? evt.which : evt.keyCode
    if ( (charCode > 31 && charCode < 48) || charCode > 57) { return false }
    return true
}

export function logout() {
    localStorage.clear()
    window.location.href = '/';
}

export function abbreviateNumber(number){
    var SI_SYMBOL = ["", "k", "M", "G", "T", "P", "E"]

    var tier = Math.log10(number) / 3 | 0

    // if zero, we don't need a suffix
    if(tier == 0) return number

    // get suffix and determine scale
    var suffix = SI_SYMBOL[tier]
    var scale = Math.pow(10, tier * 3)

    // scale the number
    var scaled = number / scale

    // format number and add suffix
    return scaled.toFixed(1) + suffix
}

export function isCpf (c) {

    if((c = c.replace(/[^\d]/g,"")).length != 11)
        return false

    if (c == "00000000000")
        return false;

    if (c == "11111111111")
        return false;

    var r;
    var s = 0;

    for (var i=1; i<=9; i++)
        s = s + parseInt(c[i-1]) * (11 - i);

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
        r = 0;

    if (r != parseInt(c[9]))
        return false;

    s = 0;

    for (i = 1; i <= 10; i++)
        s = s + parseInt(c[i-1]) * (12 - i);

    r = (s * 10) % 11;

    if ((r == 10) || (r == 11))
        r = 0;

    if (r != parseInt(c[10]))
        return false;

    return true;
}

export function isEmail(email){
    return new RegExp(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,15}/g).test(email)
}

export function isPhoneNumber(fone) {
    return new RegExp(/^[0-9\b]+$/).test(fone)
}

export function isNumeric(n){
    return !isNaN(parseFloat(n)) && !isNaN(n - 0) 
}

export function isDateTime(date) {
    return (date instanceof Date && !isNaN(date.valueOf()) )
}