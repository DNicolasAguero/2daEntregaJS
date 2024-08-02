const stock = [
    {
        nombre: 'Camiseta River Plate 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        id: 1,
    },
    {
        nombre: 'Camiseta Boca Juniors 23/24',
        ligaArgentina: true,
        precio: '$912',
        id: 2,
    },
    {
        nombre: 'Camiseta Racing 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        id: 3,
    },
    {
        nombre: 'Camiseta Independiente 23/24',
        ligaArgentina: true,
        precio: '$10.000',
        id: 4,
    },
    {
        nombre: 'Camiseta Barcelona 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 5,
    },
    {
        nombre: 'Camiseta Real Madrid 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 6,
    },
    {
        nombre: 'Camiseta Inter Miami 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 7,
    },
    {
        nombre: 'Camiseta Manchester City 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 8,
    },
    {
        nombre: 'Camiseta Liverpool 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 9,
    },
    {
        nombre: 'Camiseta Chelsea 23/24',
        ligaArgentina: false,
        precio: '$10.000',
        id: 10,
    },
]


let opcion = parseInt(prompt(`Bienvenido a la tienda, ingrese una opcion:
    
    1- Ver todo el stock.
    2- Camisetas Liga Argentina.
    3- Camisetas otras ligas.
    4- Buscar por equipo.
    
    0-SALIR.`))

    while(opcion !==0){
    switch(opcion){
        case 0:
        alert ("Saliste");
        break;
        case 1:
            console.log(stock);
            alert('Mira en la consola todo el stock');
        break;
        case 2:
            const ligaArg = stock.filter(el => el.ligaArgentina);
            console.log(ligaArg);
            alert('Mira en la consola el stock de Liga Argentina');
        break;
        case 3:
            const otrasLigas = stock.filter(el => el.ligaArgentina === false);
            console.log(otrasLigas);
            alert('Mira en consola el stock de otras ligas')
        break;
        case 4:
            const nombreIngresado = prompt('Ingrese el nombre del equipo');
            const casacaNombre = stock.find(el => el.nombre === nombreIngresado);
            console.log(casacaNombre);
            alert('Mira en consola los resultados')
        break;
        default:
        alert("opcion invalida")
        break;
    }
    }