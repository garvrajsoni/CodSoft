let out = "";


function putValue(value) {
    switch (value) {
        case 'lb':
            out += '(';
            break;
        case 'rb':
            out += ')';
            break;
        case '=':
            let val;
            val = eval(out);
            out = val;
            document.getElementById('disp').innerHTML = val;
            break;
        case 'clear':
            out = "";
            document.getElementById('disp').innerHTML = out;
            break;

       

        case 'back':
            let temp = String(out).slice(0,out.length-1);
            out=temp;
            break;

        default:
            out += value;
            break;
    }




    document.getElementById('disp').innerHTML = out;
}



