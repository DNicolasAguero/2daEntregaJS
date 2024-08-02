const stock = [
    {
        nombre: 'Camiseta River Plate 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 1,
    },
    {
        nombre: 'Camiseta Boca Juniors 23/24',
        liga: 'Liga Argentina',
        precio: '$912',
        id: 2,
    },
    {
        nombre: 'Camiseta Racing 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 3,
    },
    {
        nombre: 'Camiseta Independiente 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 4,
    },
    {
        nombre: 'Camiseta Barcelona 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 5,
    },
    {
        nombre: 'Camiseta Real Madrid 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 6,
    },
    {
        nombre: 'Camiseta Inter Miami 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 7,
    },
    {
        nombre: 'Camiseta Manchester City 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 8,
    },
    {
        nombre: 'Camiseta Liverpool 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 9,
    },
    {
        nombre: 'Camiseta Chelsea 23/24',
        liga: 'Liga Argentina',
        precio: '$10.000',
        id: 10,
    },
]


let opcion = parseInt(prompt(`Bienvenido a la tienda, ingrese una opcion:
    
    1- Ver todo el stock.
    2- Buscar por liga.
    3- Buscar por equipo.
    4- Comprar.
    
    0-SALIR.`))

    while(opcion !==0){
    switch(opcion){
        case 0:
        alert ("Saliste")
        break;
        case 1:

        break;
        case 2:

        break;
        case 3:

        break;
        case 4:

        break;
        default:
        alert("opcion invalida")
        break;
    }
    }