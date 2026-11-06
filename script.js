'use strict';

document.addEventListener('DOMContentLoaded', () => {

    const tabs = [...document.querySelectorAll('nav .tab')];

    const inicio = document.getElementById('inicio');
    const panelBusqueda = document.getElementById('panel-busqueda-filtrada');
    const fondoCatalogo = document.getElementById('fondoCatalogo');

    const botonCerrarCatalogo = document.getElementById('cerrarCatalogo');
    const botonCerrarBusqueda = document.getElementById('cerrarBusqueda');

    const contenedorMapa = document.getElementById('mapa');

    const selectSede = document.getElementById('sede');
    const selectAula = document.getElementById('aula');

    const formularioBusqueda = document.getElementById('formBusqueda');
    const mensajeBusqueda = document.getElementById('mensajeBusqueda');

    const aulasPorSede = {

        sedeA: [
            'AA01', 'AA02', 'AA03', 'AA04', 'AA05',
            'AA06', 'AA07', 'AA08', 'AA09', 'AA10',
            'AB11', 'AB12', 'AB13', 'AB14', 'AB15',
            'AB16', 'AB17', 'AB18', 'AB19', 'AB20',
            'AB21',
            'Sala de sistemas - AS01',
            'Sala de sistemas - AS02',
            'Sala de sistemas - AS03',
            'Sala de consulta virtual - SCV',
            'Laboratorio de ingeniería - LIG',
            'Laboratorio de mantenimiento - MC1',
            'Laboratorio de mantenimiento - ME1',
            'Laboratorio SST y física - SYF'
        ],

        sedeB: [
            'BB01', 'BB02', 'BB03', 'BB04',
            'BB05', 'BB06', 'BB07'
        ],

        sedeC: [
            'CA01', 'CA03', 'CA04', 'CA06',
            'CB07', 'CB08', 'CB09', 'CB10',
            'CB11', 'CB12', 'CC13', 'CC14',
            'CC15', 'CC16', 'CD17', 'CD18',
            'CD19', 'CD20', 'CD21', 'CD22',
            'CD23', 'CD24',
            'Sala de sistemas - CS04',
            'Sala de audiencias - SAU',
            'Sala de consultas virtuales - SCV',
            'Sala de juntas - SJU',
            'Sala de profesores - SPF',
            'Laboratorio aula radio - LRD',
            'Laboratorio de TV y fotografía - 000',
            'Laboratorio financiero - LFI',
            'Laboratorio de prácticas - LP1',
            'Laboratorio de morfofisiología'
        ],

        sedeE: [
            'Aula de clases - E01',
            'Aula de clases - E02',
            'Sala de juntas - SJU',
            'Oficinas de admisiones',
            'Bodega de laboratorios - BOD',
            'Coordinación de laboratorio - CLB',
            'Laboratorio de Cuidado Crítico - LCC',
            'Laboratorio de Ciencias Básicas - LCB',
            'Laboratorio de Prescripción - LPR',
            'Laboratorio de Intervención - INT',
            'Laboratorio de Morfofisiología - LMO',
            'Laboratorio Múltiple de la Salud - SMU',
            'Laboratorio de Neurorrehabilitación - NRH',
            'Laboratorio de psicométricas - LPC'
        ],

        consultorio: [
            'Consultorio Jurídico'
        ],

        clinica: [
            'Endocrinología',
            'Genética',
            'Inmunología',
            'Neurología',
            'Alergología',
            'Neumología',
            'Infectología',
            'Cirugía general',
            'Cirugía especializada',
            'Laboratorio clínico',
            'Imágenes diagnósticas',
            'Consulta externa',
            'Valoración médica'
        ],

        restaurante: [
            'Restaurante'
        ]
    };

    const serviciosPorSeccion = {

        clinica: [
            {
                titulo: 'ESPECIALIDADES MÉDICAS',
                servicios: [
                    'Endocrinología',
                    'Genética',
                    'Inmunología',
                    'Neurología',
                    'Alergología',
                    'Neumología',
                    'Infectología',
                    'Cirugía general',
                    'Cirugía especializada'
                ]
            },
            {
                titulo: 'SERVICIOS DE DIAGNÓSTICO',
                servicios: [
                    'Laboratorio clínico',
                    'Imágenes diagnósticas'
                ]
            },
            {
                titulo: 'ATENCIÓN AL PACIENTE',
                servicios: [
                    'Consulta externa',
                    'Valoración médica'
                ]
            }
        ]
    };

    const informacionOpciones = {

        A: {
            nombre: 'SEDE A',
            direccion: 'Calle 21 #25-59, barrio La María, Sincelejo, Sucre.',
            foto: 'sedeA.png',
            clave: 'sedeA',
            titulo: 'AULAS'
        },

        B: {
            nombre: 'SEDE B',
            direccion: 'Calle 21 #25-59, barrio La María, Sincelejo, Sucre.',
            foto: 'SEDE B.png',
            clave: 'sedeB',
            titulo: 'AULAS'
        },

        C: {
            nombre: 'SEDE C',
            direccion: 'Cra. 19 #32-109, Miraflores, Sincelejo, Sucre.',
            foto: 'SEDE C.png',
            clave: 'sedeC',
            titulo: 'AULAS'
        },

        E: {
            nombre: 'SEDE E',
            direccion: 'Cra. 21 #27-A, Sincelejo, Sucre.',
            foto: 'SEDE E.png',
            clave: 'sedeE',
            titulo: 'AULAS'
        },

        consultorio: {
            nombre: 'CONSULTORIO JURÍDICO',
            direccion: 'Calle 32 16B-13, avenida Alfonso López, Sincelejo.',
            foto: 'CONSULTORIO JURIDICO.png',
            clave: 'consultorio',
            titulo: 'SERVICIOS DISPONIBLES'
        },

        clinica: {
            nombre: 'CLÍNICA',
            direccion: 'Cl. 25 #21-50, Sincelejo, Sucre.',
            foto: 'CLINICA.png',
            clave: 'clinica',
            titulo: 'SERVICIOS DISPONIBLES'
        },

        restaurante: {
            nombre: 'RESTAURANTE',
            direccion: 'Dirección del restaurante por confirmar.',
            foto: 'RESTAURANTES.png',
            clave: 'restaurante',
            titulo: 'OPCIONES DISPONIBLES'
        }
    };

    const coordenadas = {

        sedeA: [-75.39255022285737, 9.299830560649003],
        sedeB: [-75.39287208789415, 9.299819972892063],
        sedeC: [-75.39222835779383, 9.296251859825508],
        sedeE: [-75.39246439218248, 9.299174115309201]

    };

    const coloresSede = {

        A: '#db2800',
        B: '#edd51e',
        C: '#e75480',
        E: '#a317db',
        consultorio: '#36a6a6',
        clinica: '#001ea2',
        restaurante: '#219008'

    };

    let mapaGPS = null;
    let popupBusqueda = null;

    function actualizarPestanaActiva(pestanaActiva) {

        tabs.forEach(tab => {

            tab.classList.toggle('activa', tab === pestanaActiva);

            const enlace = tab.querySelector('a');

            if (enlace) {

                if (tab === pestanaActiva) {
                    enlace.setAttribute('aria-current', 'page');
                } else {
                    enlace.removeAttribute('aria-current');
                }

            }

        });

    }

    function ocultarSecciones() {

        document.querySelectorAll('.seccion-contenido').forEach(seccion => {
            seccion.classList.remove('activa');
        });

    }

   function cerrarPaneles() {
    panelBusqueda?.classList.remove('mostrar');

    fondoCatalogo?.classList.remove('abierto');
    fondoCatalogo?.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('mostrar-mapas');
    document.body.classList.remove('panel-abierto');
}

function volverAInicio(pestana) {
    cerrarPaneles();

    // Inicio siempre permanece activo.
    inicio?.classList.add('activa');

    actualizarPestanaActiva(pestana);

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

function mostrarMapa(pestana) {
    cerrarPaneles();

    document.body.classList.add('mostrar-mapas');

    inicio?.classList.add('activa');

    actualizarPestanaActiva(pestana);

    requestAnimationFrame(() => {
        mapaGPS?.resize();
    });
}

function alternarBusqueda(pestana) {
    const debeAbrir = !panelBusqueda.classList.contains('mostrar');

    cerrarPaneles();

    if (debeAbrir) {
        panelBusqueda.classList.add('mostrar');
        document.body.classList.add('panel-abierto');
        actualizarPestanaActiva(pestana);
    } else {
        volverAInicio(
            tabs.find(tab =>
                tab.querySelector('a[href="#inicio"]')
            )
        );
    }
}

function alternarCatalogo(pestana) {
    const debeAbrir = !fondoCatalogo.classList.contains('abierto');

    cerrarPaneles();

    if (debeAbrir) {
        fondoCatalogo.classList.add('abierto');
        fondoCatalogo.setAttribute('aria-hidden', 'false');

        document.body.classList.add('panel-abierto');

        actualizarPestanaActiva(pestana);
    } else {
        volverAInicio(
            tabs.find(tab =>
                tab.querySelector('a[href="#inicio"]')
            )
        );
    }
}
    function mostrarSeccion(seccion, pestana) {

        if (!seccion) return;

        cerrarPaneles();

        document.body.classList.remove('mostrar-mapas');

        ocultarSecciones();

        seccion.classList.add('activa');

        actualizarPestanaActiva(pestana);

        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });

    }

    function mostrarMapa(pestana) {

        cerrarPaneles();

        ocultarSecciones();

        document.body.classList.add('mostrar-mapas');

        actualizarPestanaActiva(pestana);

        requestAnimationFrame(() => {
            mapaGPS?.resize();
        });

    }

    function alternarBusqueda(pestana) {

        const debeAbrir = !panelBusqueda?.classList.contains('mostrar');

        cerrarPaneles();

        ocultarSecciones();

        document.body.classList.remove('mostrar-mapas');

        if (debeAbrir && panelBusqueda) {

            panelBusqueda.classList.add('mostrar');

            document.body.classList.add('panel-abierto');

            actualizarPestanaActiva(pestana);

        } else {

            mostrarSeccion(
                inicio,
                tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
            );

        }

    }

    function alternarCatalogo(pestana) {

        const debeAbrir = !fondoCatalogo?.classList.contains('abierto');

        cerrarPaneles();

        ocultarSecciones();

        document.body.classList.remove('mostrar-mapas');

        if (debeAbrir && fondoCatalogo) {

            fondoCatalogo.classList.add('abierto');

            fondoCatalogo.setAttribute('aria-hidden', 'false');

            document.body.classList.add('panel-abierto');

            actualizarPestanaActiva(pestana);

        } else {

            mostrarSeccion(
                inicio,
                tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
            );

        }

    }

    tabs.forEach(tab => {

        const enlace = tab.querySelector('a');

        if (!enlace) return;

        enlace.addEventListener('click', evento => {

            const destino = enlace.getAttribute('href');

            evento.preventDefault();

            if (enlace.id === 'btnCatalogo') {

                alternarCatalogo(tab);

            } else if (tab.id === 'nave') {

                alternarBusqueda(tab);

            } else if (destino === '#mapa-principal') {

                mostrarMapa(tab);

            } else if (destino?.startsWith('#')) {

                const seccion = document.getElementById(destino.slice(1));

                if (seccion?.classList.contains('seccion-contenido')) {
                    mostrarSeccion(seccion, tab);
                }

            }

        });

    });

   botonCerrarCatalogo?.addEventListener('click', evento => {

    evento.preventDefault();
    evento.stopPropagation();

    fondoCatalogo?.classList.remove('abierto');

    fondoCatalogo?.setAttribute('aria-hidden', 'true');

    document.body.classList.remove('panel-abierto');

    mostrarSeccion(
        inicio,
        tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
    );

});

    fondoCatalogo?.addEventListener('click', evento => {

        if (evento.target === fondoCatalogo) {

            mostrarSeccion(
                inicio,
                tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
            );

        }

    });

    botonCerrarBusqueda?.addEventListener('click', () => {

        mostrarSeccion(
            inicio,
            tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
        );

    });

    document.addEventListener('keydown', evento => {

        if (evento.key === 'Escape') {

            if (
                fondoCatalogo?.classList.contains('abierto') ||
                panelBusqueda?.classList.contains('mostrar')
            ) {

                mostrarSeccion(
                    inicio,
                    tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
                );

            }

        }

    });

    if (contenedorMapa && window.maplibregl) {

        mapaGPS = new maplibregl.Map({

            container: contenedorMapa,

            style: {

                version: 8,

                sources: {

                    osm: {

                        type: 'raster',

                        tiles: [
                            'https://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                            'https://b.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
                            'https://c.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'
                        ],

                        tileSize: 256,

                        attribution: '© OpenStreetMap contributors'

                    }

                },

                layers: [

                    {
                        id: 'osm-raster',
                        type: 'raster',
                        source: 'osm'
                    }

                ]

            },

            center: coordenadas.sedeA,

            zoom: 16

        });

        mapaGPS.addControl(
            new maplibregl.NavigationControl(),
            'top-right'
        );

        const sedesGPS = [

            {
                nombre: 'SEDE A',
                coordenadas: coordenadas.sedeA,
                color: '#e10000'
            },

            {
                nombre: 'SEDE B',
                coordenadas: coordenadas.sedeB,
                color: '#edd51e'
            },

            {
                nombre: 'SEDE C',
                coordenadas: coordenadas.sedeC,
                color: '#e75480'
            },

            {
                nombre: 'SEDE E',
                coordenadas: coordenadas.sedeE,
                color: '#a317db'
            },
            {
                nombre: "Consultorio Juridico",
                coordenadas: [-75.39449151876225, 9.293416570844506],
                color: "#36a6a6"
            },
            {
                nombre: "Consultorio Juridico",
                coordenadas: [-75.39212997285009, 9.300178847803666,],
                color: "#001ea2"
                }
            ];

        sedesGPS.forEach(sede => {

            new maplibregl.Marker({
                color: sede.color
            })

                .setLngLat(sede.coordenadas)

                .setPopup(
                    new maplibregl.Popup({
                        offset: 25
                    }).setText(sede.nombre)
                )

                .addTo(mapaGPS);

        });

        window.mapaGPS = mapaGPS;

        mapaGPS.on('load', () => {
            mapaGPS.resize();
        });

    } else {

        console.error(
            'No se pudo iniciar el mapa: falta el contenedor #mapa o la librería MapLibre GL JS.'
        );

    }

    selectSede?.addEventListener('change', () => {

        if (!selectAula) return;

        selectAula.replaceChildren();

        const opcionInicial = document.createElement('option');

        opcionInicial.value = '';

        const opciones = aulasPorSede[selectSede.value] || [];

        opcionInicial.textContent = opciones.length
            ? 'Seleccione un aula o servicio'
            : 'No hay opciones configuradas';

        selectAula.appendChild(opcionInicial);

        selectAula.disabled = opciones.length === 0;

        opciones.forEach(nombre => {

            const opcion = document.createElement('option');

            opcion.value = nombre;

            opcion.textContent = nombre;

            selectAula.appendChild(opcion);

        });

        if (mensajeBusqueda) {
            mensajeBusqueda.textContent = '';
        }

    });

    formularioBusqueda?.addEventListener('submit', evento => {

        evento.preventDefault();

        const claveSede = selectSede?.value;
        const destino = selectAula?.value;

        if (!claveSede || !destino) {

            if (mensajeBusqueda) {
                mensajeBusqueda.textContent =
                    'Selecciona una sede y un aula o servicio.';
            }

            return;

        }

        const punto = coordenadas[claveSede];

        if (!punto) {

            if (mensajeBusqueda) {
                mensajeBusqueda.textContent =
                    'La ubicación geográfica de este lugar todavía no está configurada.';
            }

            return;

        }

        const pestanaMapa = tabs.find(tab =>
            tab.querySelector('a[href="#mapa-principal"]')
        );

        mostrarMapa(pestanaMapa);

        mapaGPS?.flyTo({

            center: punto,

            zoom: 19,

            essential: true

        });

        if (mapaGPS && window.maplibregl) {

            popupBusqueda?.remove();

            popupBusqueda = new maplibregl.Popup({

                offset: 25

            })

                .setLngLat(punto)

                .setText(`${destino} — ${claveSede}`)

                .addTo(mapaGPS);

        }

    });

    const fotoSede = document.getElementById('fotoSede');
    const nombreSede = document.getElementById('nombreSede');
    const direccionSede = document.getElementById('direccionSede');
    const tituloAulas = document.getElementById('tituloAulas');
    const listaAulas = document.getElementById('listaAulas');
    const catalogo = document.querySelector('.ventana-catalogo');

    const pestanasSede = document.querySelectorAll(
        '.pestanas button[data-sede]'
    );

    function crearTarjetaServicio(nombreServicio) {

        const tarjeta = document.createElement('div');

        tarjeta.className = 'aula-item';

        const nombre = document.createElement('span');

        nombre.className = 'aula-nombre';

        nombre.textContent = nombreServicio;

        const semaforo = document.createElement('div');

        semaforo.className = 'aula-semaforo';

        const estados = [

            {
                clase: 'verde',
                texto: 'Desocupado'
            },

            {
                clase: 'amarillo',
                texto: 'Reservado'
            },

            {
                clase: 'rojo',
                texto: 'Ocupado'
            }

        ];

        estados.forEach(estado => {

            const luz = document.createElement('button');

            luz.type = 'button';

            luz.className = `aula-luz ${estado.clase}`;

            luz.title = estado.texto;

            luz.setAttribute('aria-label', estado.texto);

            luz.setAttribute('aria-pressed', 'false');

            luz.addEventListener('click', evento => {

                evento.stopPropagation();

                semaforo.querySelectorAll('.aula-luz').forEach(otra => {

                    otra.classList.remove('activa');

                    otra.setAttribute('aria-pressed', 'false');

                });

                luz.classList.add('activa');

                luz.setAttribute('aria-pressed', 'true');

            });

            semaforo.appendChild(luz);

        });

        tarjeta.append(nombre, semaforo);

        return tarjeta;

    }

    function mostrarContenidoSede(boton) {

        const opcion = informacionOpciones[boton.dataset.sede];

        if (!opcion) return;

        if (nombreSede) {
            nombreSede.textContent = opcion.nombre;
        }

        if (direccionSede) {
            direccionSede.textContent = opcion.direccion;
        }

        if (fotoSede) {

            fotoSede.src = opcion.foto;

            fotoSede.alt = `Fotografía de ${opcion.nombre}`;

        }

        if (tituloAulas) {
            tituloAulas.textContent = opcion.titulo;
        }

        if (catalogo) {

            catalogo.style.setProperty(
                '--color-sede',
                coloresSede[boton.dataset.sede]
            );

        }

        pestanasSede.forEach(pestana => {

            pestana.classList.toggle(
                'activa',
                pestana === boton
            );

        });

        if (!listaAulas) return;

        listaAulas.replaceChildren();

        const secciones = serviciosPorSeccion[opcion.clave];

        if (secciones) {

            secciones.forEach(seccion => {

                const contenedorSeccion = document.createElement('div');

                contenedorSeccion.className = 'grupo-servicios';

                const titulo = document.createElement('h3');

                titulo.className = 'titulo-seccion-servicios';

                titulo.textContent = seccion.titulo;

                const lista = document.createElement('div');

                lista.className = 'lista-servicios-seccion';

                seccion.servicios.forEach(servicio => {

                    lista.appendChild(
                        crearTarjetaServicio(servicio)
                    );

                });

                contenedorSeccion.append(titulo, lista);

                listaAulas.appendChild(contenedorSeccion);

            });

            return;

        }

        const opciones = aulasPorSede[opcion.clave] || [];

        if (!opciones.length) {

            listaAulas.textContent =
                'No hay aulas ni servicios configurados para esta sede.';

            return;

        }

        opciones.forEach(nombre => {

            listaAulas.appendChild(
                crearTarjetaServicio(nombre)
            );

        });

    }

    pestanasSede.forEach(boton => {

        boton.addEventListener('click', () => {
            mostrarContenidoSede(boton);
        });

    });

    document.querySelectorAll('[data-abrir-catalogo]').forEach(boton => {

        boton.addEventListener('click', () => {

            alternarCatalogo(
                tabs.find(tab => tab.querySelector('#btnCatalogo'))
            );

        });

    });

    cerrarPaneles();

    document.body.classList.remove('mostrar-mapas');

    ocultarSecciones();

    inicio?.classList.add('activa');

    actualizarPestanaActiva(
        tabs.find(tab => tab.querySelector('a[href="#inicio"]'))
    );

    document.querySelector(
        '.pestanas button[data-sede="A"]'
    )?.click();

});
