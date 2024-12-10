export const formationObject = {
  categoriaInfo: {
    "administracion": {
      description: "Labor realizada por usted, con documento soporte para verificarlo. Se asigna puntaje por semestre de tiempo completo y buena evaluación, o proporcional según dedicación. Se incluyen en este concepto cuando usted ha sido director de programa o ha tenido encargos administrativos temporales asignados por la IES. Incluye cuando usted tiene encargo de presentar un nuevo programa ante el MEN  (se asigna al presentar el documento al MEN). Para todos los casos, debe presentar documentos institucionales que soporten la información que resumirá a continuación",
      fieldIds: [],
      labels: {
        titulo: "Cargo",
        descripcion: "Descripción de la labor, incluyendo información de dedicación a la misma en horas al semestre (semestre académico)"
      },
      placeholders: {
        titulo: "Ingrese el cargo"
      }
    },
    "encargo_administrativo_empresarial": {
      description: "Labor realizada por usted, con documento soporte para verificarlo. Se asigna puntaje por semestrede tiempo completo y buena evaluación. Se consideran cargos directivos o de liderazgo en el sector empresarial (con personal a cargo).",
      fieldIds: [],
      labels: {
        titulo: "Cargo",
        descripcion: "Descripción de la labor, incluyendo información de dedicación a la misma en horas al semestre (semestre académico)"
      },
      placeholders: {
        titulo: "Ingrese el cargo"
      }
    },
    "direccion_tesis_doctorado": {
      description: "Labor realizada por usted como tutor o director de la tesis (o codirector), con documento soporte para verificarlo. Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo (aquí descrito como año y semestre de publicación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa,  institución, año de grado. Indicar si obtuvo reconocimiento. Registrar URL en repositorio institucional en el que se encuentra el documento."
      },
      placeholders: {
        titulo: "Ingrese el título del producto"
      }
    },
    "direccion_trabajos_grado_maestria_investigacion": {
      description: "Labor realizada por usted como tutor o director de la tesis (o codirector), con documento soporte para verificarlo. Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo (aquí descrito como año y semestre de publicación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa,  institución, año de grado. Indicar si obtuvo reconocimiento. Registrar URL en repositorio institucional en el que se encuentra el documento."
      },
      placeholders: {
        titulo: "Ingrese el título del producto"
      }
    },
    "direccion_trabajos_grado_maestria_profundizacion": {
      description: "Labor realizada por usted como tutor o director de la tesis (o codirector), con documento soporte para verificarlo. Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo (aquí descrito como año y semestre de publicación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa,  institución, año de grado. Indicar si obtuvo reconocimiento. Registrar URL en repositorio institucional en el que se encuentra el documento."
      },
      placeholders: {
        titulo: "Ingrese el título del producto"
      }
    },
    "direccion_trabajo_grado_pregrado": {
      description: "Labor realizada por usted como tutor o director del trabajo, con documento soporte para verificarlo. Se asigna puntaje cuando se ha concluido y el tutoriado recibe el grado al que optó con este trabajo (aquí descrito como año y semestre de publicación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título del Producto",
        descripcion: "Descripción, incluyendo nombres y apellidos del tutoriado, programa,  institución, año de grado. Indicar si obtuvo reconocimiento. Registrar URL en repositorio institucional en el que se encuentra el documento."
      },
      placeholders: {
        titulo: "Ingrese el título del producto"
      }
    },
    "tutor_investigacion": {
      description: "Se aplica por proyecto que tenga jóvenes investigadores, estudiantes de posgrado, profesores en entrenamiento o profesores auxiliares vinculados  a su cargo y cuya participación haya sido al menos 6 meses y con dedicación mínima de medio tiempo. Se asigna puntaje cuando se ha concluido la vinculación y el tutoriado concluye las labores a su cargo (aquí descrito como año y semestre de publicación). Debe presentar documento institucional que soporte la información que resumirá a continuación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, incluyendo título del proyecto, nombres y apellidos del tutoriado,  tiempo de participación bajo este rol. Identificación de entidades participantes en el proyecto."
      },
      placeholders: {
        titulo: "Ingrese el título del producto"
      }
    },
    "credito_docencia_directa": {
      description: "Créditos académicos de cada uno de los cursos dictados por usted, soportados mediante certificado de la IES. Se consideran tanto si están en plan de trabajo básico como adicional. Para cursos ofrecidos en inglés se otorgará 50% adicional del puntaje. No se tienen en cuenta cursos de extensión.",
      fieldIds: ["div-creditos", "div-grupos"],
      labels: {
        titulo: "Nombre del curso",
        descripcion: "Descripción, incluyendo institución, programa académico y si se dictó en un idioma diferente al español."
      },
      placeholders: {
        titulo: "Ingrese el nombre del curso"
      }
    },
    "coordinacion_area_academica": {
      description: "Labor realizada por usted como coordinador de área acádemica, con documento soporte para verificarlo. Por semestre (aquí descrito como semestre de publicación) y con buena evaluación.",
      fieldIds: [],
      labels: {
        titulo: "Nombre del área",
        descripcion: "Descripción, incluyendo institución, programa académico."
      },
      placeholders: {
        titulo: "Ingrese el nombre del área"
      }
    },
    "apoyo_academico_laboratorio": {
      description: "Labor realizada por usted, con soporte documental de la delegación para realizarla. Por semestre (aquí descrito como semestre de publicación) con informe debidamente aprobado.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Nombre del laboratorio o de la competencia institucional",
        descripcion: "Descripción, incluyendo institución."
      },
      placeholders: {
        titulo: "Ingrese el nombre del laboratorio"
      }
    },
    "direccion_grupo_investigacion": {
      description: "Labor que ha realizado usted como director o líder de un grupo de investigación avalado por una institución frente a Minciencias. Se asigna puntaje por semestre (aquí descrito como semestre de publicación), con GrupLAC actualizado. Debe presentar documento institucional que soporte la información que resumirá a continuación.",
      fieldIds: [],
      labels: {
        titulo: "Nombre del grupo",
        descripcion: "Descripción, incluyendo institución que avala el grupo y código COL de Minciencias y URL a GrupLAC"
      },
      placeholders: {
        titulo: "Ingrese el nombre del grupo"
      }
    },
    "estudios_doctorales": {
      description: "Doctorado realizado por usted. Registrar por semestre concluido satisfactoriamente (aquí descrito como semestre de publicación). Máximo por 4 años (8 semestres continuos). Se otorga una vez obtenido el título, convalidado en Colombia si aplica convalidación.",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Programa",
        descripcion: "Descripción, incluyendo institución."
      },
      placeholders: {
        titulo: "Ingrese el programa"
      }
    }
  },
  allFieldIds: ["div-creditos", "div-autores", "div-grupos"]
};

export const newKnowledgeObject = {
  categoriaInfo: {
    "patente": {
      description: "Indicar la etapa del proceso en la que se encuentra al momento del registro en este formulario (año-semestre). Puede registrar este producto a partir de etapa \"sometida a evaluación en oficina de patentes\". Indicar también si el por vía tradicional o vía PCT.",
      fieldIds: ["div-radicado", "div-contratoPat"],
      labels: {
        titulo: "Título",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), etapa en la que se encuentra"
      },
      placeholders: {
        titulo: "Ingrese el titulo"
      }
    },
    "modelo_utilidad": {
      description: "Indicar la etapa del proceso en la que se encuentra al momento del registro en este formulario (año-semestre). Puede registrar este producto a partir de etapa \"sometida a evaluación en oficina de patentes\".",
      fieldIds: ["div-radicado", "div-contratoPat"],
      labels: {
        titulo: "Título",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), etapa en la que se encuentra"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "certificado_variedades": {
      description: "Certificado de obtentor en el que usted sea titular. Debe indicar si cuenta con contrato de licencia de explotación y entregar soporte documentales (del certificado y del contrato).",
      fieldIds: ["div-certificado", "div-contrato"],
      labels: {
        titulo: "Título",
        descripcion: "Descripción. Indicar si cuenta con contrato o no."
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "libro_investigacion": {
      description: "Debe aportar certificado emitido por la editorial en el que indique que es un libro producto de investigación, que tuvo proceso de evaluación por pares técnicos y demás condiciones (ver comenario) o, si ya es profesor de planta de la EIA, aportar documentación para que la Jefatura del Fondo Editorial EIA realice la evaluación y emita certificado correspondiente. En la columna de descripción incluya citaciones que el producto haya tenido en artículos de revistas especilizadas o en otros libros, así como título del proyecto de investigación que originó los resultados presentados en la publicación, las entidades participantes y financiadoras.",
      fieldIds: ["div-capitulo", "div-articulo", "div-tipo-libro"],
      labels: {
        titulo: "Título producto (si es un capítulo, debe indicar título del mismo y título del libro en que está contenido)",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), así como otra información solicitada en la definición del producto"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_q1": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_q2": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_q3": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_q4": {
      description: "Cuartiles de índices bibliográficos ISI o SCOPUS (en https://bit.ly/2O8HgQX puede revisar si la revista se encontraba indexada en SCOPUS en el año de publicación de su artículo y en cuál cuartil de acuerdo con la categoría temática en la que se enmarcó el contenido del manuscrito).",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_indexadas_inferiores": {
      description: "Si la revista no está en índices bibliográficos ISI o SCOPUS, consultar en Publindex https://bit.ly/2NnnSdr (por buscador si la revista es editada en Colombia o por homologación si es editada en otro país) si la revista estuvo indexada (nacional) u homologada (internacional) por ellos en el año de publicación de su artículo. Si está, ubica su producto en este subtipo.",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    }
  },
  allFieldIds: ["div-capitulo", "div-radicado", "div-certificado", "div-articulo", "div-contratoPat", "div-contrato", "div-tipo-libro"]
}

export const innovationObject = {
  categoriaInfo: {
    "spinOff": {
      description: "La existencia se verifica con certificado de Cámara de comercio, NIT o código de registro tributario de la empresa que surgió con base en una investigación y desarrollo tecnológico en la que una IES o empresa tuvo participación. Debe anear el soporte documental para hacer la verificación.",
      fieldIds: [],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "productosEmpresariales": {
      description: "Se debe aportar certificación de la empresa de su participación como autor de estos tipos de productos, describiendo a cuál de los subtipos pertenece.",
      fieldIds: [],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "asesoriasConsultorias": {
      description: "Se debe aportar certificación insititucional de su participación en una asesoría o consultoría de este tipo,  Se debe indicar en descripción: Monto del proyecto ubicado en uno de los siguientes dos rangos: 1) hasta 500 smmlv, 2) más de 500 smmlv. Rol en el que participó el profesor que está reportando el producto (Investigador principal o director, coinvestigador)",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "softwareFuncional": {
      description: "Obtenidos en el marco de proyectos I+D+i formales, en semilleros de investigación o en actividades académicas formales con estudiantes. El software debe estar registrado en la Dirección Nacional de Derechos de Autor. Debe aportar documento soporte del registro.",
      fieldIds: ["div-autores", "campoRegistro"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "prototipoIndustrial": {
      description: "Obtenido en el marco de proyecto I+D+i formal, en Semillero de investigación o en actividad académica formal con estudiantes (p.e Proyecto de ingeniería). Indicar en descripción proyecto asociado, ubicación actual del prototipo y uso. Aportar fotos y certificado institucional de existencia del producto en el que se pueda verificar la información que describe a continuación.",
      fieldIds: ["div-autores"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "regulacionesNormas": {
      description: "Se requiere evidencia de la participación del profesor en la construcción del documento que hoy es acogido como regulación, norma, reglamento o legislación (se puede verificar con certificado de la entidad que emite o en el mismo documento publicado en la información de autores).",
      fieldIds: ["div-autores", "campoIdNorma"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    }
  },
  allFieldIds: ["campoRegistro", "campoIdNorma", "div-autores"]
}

export const divulgationObject = {
  categoriaInfo: {
    "libro_texto": {
      description: "Son las publicaciones, en las que usted es autor, que demuestran, además de servir como guías, conceptualización teórica robusta, reflexiones en el campo de la ciencia tratada, metodologías y conclusiones. Incluye libros informativos que cuentan con soporte teórico verificable y sirven para difundir conocimiento técnico, científico académico, histórico o cultural. Deben ser publicaciones formales editadas por Sello/Fondo Editorial, con ISBN. Debe aportar certificado de existencia y tipología del producto, emitido por el Sello/Fondo Editorial.",
      fieldIds: ["div-articulo", "div-tipo-libro", "div-publicado-eia"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), así como otra información solicitada en la definición del producto."
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "capitulo_libro": {
      description: "Son los capítulos de autoría declarada dentro de un libro por parte del autor, que cumplen con las pautas de las publicaciones donde se suscriben con una conceptualización teórica robusta, reflexiones en el campo de la ciencia tratada, metodologías y conclusiones.Deben ser publicaciones formales editadas por Sello/Fondo Editorial, detro de libro con ISBN. Debe aportar certificado de existencia y tipología del producto, emitido por el Sello/Fondo Editorial.",
      fieldIds: ["div-articulo", "div-tipo-libro", "div-publicado-eia"],
      labels: {
        titulo: "Título producto (si es un capítulo, debe indicar título del mismo y título del libro en que está contenido)",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), así como otra información solicitada en la definición del producto."
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "guia_clase": {
      description: "Es el material escrito que orienta y apoya el trabajo del estudiante en el aula, cuenta con actividades prácticas o de reflexión que facilitan el aprendizaje y debe cumplir con los aspectos básicos para ser una guía. Deben contar con el aval de Currículo para su publicación. Debe estar publicada bajo proceso formal con Fondo Editorial, con ISBN. Debe aportar certificado de existencia y tipología del producto, emitido por el Sello/Fondo Editorial.",
      fieldIds: ["div-articulo", "div-publicado-eia"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), así como otra información solicitada en la definición del producto"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "manual_laboratorio": {
      description: "Es el material escrito que orienta y apoya el trabajo del estudiante para lograr el aprendizaje propuesto para una actividad de laboratorio o una actividad práctica en otros espacios y debe cubrir los aspectos básicos para ser un manual. Incluye manuales o tutoriales de un tema específico aplicable a cualquier asignatura. Para la actividad puede requerir el uso de recursos educativos como fichas, tarjetas, etc. cuyo uso debe estar definido en el manual. Deben contar con el aval de Currículo y si es del caso de la Jefatura de laboratorios. Debe estar publicada bajo proceso formal con Fondo Editorial, con ISBN. Debe aportar certificado de existencia y tipología del producto, emitido por el Sello/Fondo Editorial.",
      fieldIds: ["div-articulo", "div-publicado-eia"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia), así como otra información solicitada en la definición del producto"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "artefacto_laboratorio": {
      description: "Es el diseño y construcción de un nuevo equipo de laboratorio previamente aprobado por el jefe de laboratorios y el profesor de apoyo académico correspondiente, que demuestre un valor agregado al trabajo del laboratorio. Debe incluir el manual de operación del equipo y debe haber sido utilizado con éxito al menos un semestre. Debe aportar certificado que soporte el cumplimiento de estas condiciones.",
      fieldIds: [],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "aula_digital": {
      description: "Para un aula digital de asignatura que articule materiales, mínimo 50% de autoría propia, con actividades con las que se logre el objetivo de aprendizaje propuesto.  Para aula digital de competencias, temas institucionales o cursos de educación continua se realiza la equivalencia que corresponda con créditos. Debe incluir documento que certifique el cumplimiento de estas condiciones. Si ya es profesor de planta EIA, el operador del acuerdo tramitara certificado con NTE, aportando la información descrita por usted.",
      fieldIds: [],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "ova": {
      description: "Por OVA publicado en un repositorio de la institucional. Debe incluir documento que certifique el cumplimiento de estas condiciones. Si ya es profesor de planta EIA, el operador del acuerdo tramitara certificado con NTE, aportando la información descrita por usted.",
      fieldIds: [],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulo_no_indexadas": {
      description: "Artículo en revistas de divulgación. Producción bibliográfica de Divulgación Pública de la Ciencia",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)."
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "working_papers": {
      description: "Documentos preliminares de carácter técnico o científico. Se elaboran para compartir ideas acerca de un tema o para recibir realimentación previa a una presentación formal con la comunidad científica o para publicar en una revista científica. Validado y publicado en repositorio institucional o en un sitio arbitrado que permita la realimentación que se busca. Incluye protocolos de laboratorio, modelos y metodologías en evaluación.",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "articulos_prensa": {
      description: "Se asigna el puntaje por cada 5 artículos o 200 minutos de programa de radio en los que usted es autor. Sólo columnas de opinión (para artículos). Incluye programas de radio o de televisión realizados por el profesor en un medio de comunicación de reconocida difusión. No considera entrevistas que le realicen a usted (en ese caso usted no es autor del producto)",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    },
    "ponencia_eventos": {
      description: "Participación en eventos científicos con presentación de trabajo (ya sea aprobado bajo modalidades de ponencia oral, conferencia magistrar, poster). Debe aportar documento para verificar información.",
      fieldIds: ["div-articulo"],
      labels: {
        titulo: "Título producto",
        descripcion: "Descripción medio de publicación, url a soporte para verificación (o anexa copia)"
      },
      placeholders: {
        titulo: "Ingrese el título"
      }
    }
  },
  allFieldIds: [
    "div-articulo",
    "div-tipo-libro",
    "div-publicado-eia",
    "div-entrega"]
}

export const quillDefaultValue = {
  modules: {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }, { 'list': 'check' }],
      [{ 'align': [] }],
      [{ 'indent': '-1'}, { 'indent': '+1' }], 
      ['clean'],
      ['link', 'image']
    ]
  },
  placeholder: '',
  theme: 'snow'
};