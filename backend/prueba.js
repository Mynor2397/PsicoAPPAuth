function name(params) {
    for (var element in params) {
        let desisted = params[element]

        if (typeof desisted !== 'string' && element == 'desisted') {
            console.log(desisted);
        }
        // console.log(element);
        // console.log(params[element]);
    }
}

var data = {
    desisted: 'true',
    orderdate: 'DESC',
    orderage: 'ASC',
    asigned: null
}

name(data)