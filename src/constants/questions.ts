import { Color } from '../models/Color';
import { Question } from '../models/Question';

export const questions: Map<Color, Question[]> = new Map([
  [
    Color.RED,
    [
      {
        question:
          '¿Cuál de los siguientes atributos de calidad pertenece al modelo de Boehm?',
        options: [
          'Fiabilidad',
          'Facilidad de uso',
          'Portabilidad',
          'Reusabilidad',
        ],
        correctAnswer: 'Portabilidad',
        type: 'multiple',
      },
      {
        question: "¿Qué significa la 'S' en el modelo FURPS?",
        options: ['Seguridad', 'Sustentabilidad', 'Soporte', 'Simplicidad'],
        correctAnswer: 'Soporte',
        type: 'multiple',
      },
      {
        question:
          '¿Cuál es uno de los principales objetivos del modelo de calidad de McCall?',
        options: [
          'Medir el rendimiento del software',
          'Evaluar la calidad externa e interna del software',
          'Determinar el costo del desarrollo',
          'Aumentar la reusabilidad del código',
        ],
        correctAnswer: 'Evaluar la calidad externa e interna del software',
        type: 'multiple',
      },
      {
        question: 'Enumera los principales componentes del modelo FURPS.',
        correctAnswer:
          'Funcionalidad, Usabilidad, Fiabilidad, Rendimiento, Soporte',
        type: 'open',
      },
      {
        question:
          '¿En qué se enfoca principalmente el modelo de calidad de Dromey?',
        options: [
          'Factores y métricas de calidad interna',
          'Procesos de desarrollo',
          'Atributos de calidad específicos del software',
          'Experiencia del usuario',
        ],
        correctAnswer: 'Atributos de calidad específicos del software',
        type: 'multiple',
      },
      {
        question:
          "¿Qué significa el acrónimo 'SQUID' en el modelo de calidad de software?",
        options: [
          'Software Quality In Design',
          'Software Quality Improvement Definition',
          'System Quality in Development',
          'Service Quality in Digital',
        ],
        correctAnswer: 'Software Quality Improvement Definition',
        type: 'multiple',
      },
      {
        question:
          'Explica el propósito principal del modelo de calidad de Dromey.',
        correctAnswer:
          'Evaluar la calidad de componentes del software a través de atributos como corrección, fiabilidad y eficiencia.',
        type: 'open',
      },
      {
        question:
          "¿Cuál de los modelos de calidad mencionados hace énfasis en los 'factores' y 'criterios' de calidad?",
        options: ['McCall', 'Dromey', 'Boehm', 'FURPS'],
        correctAnswer: 'McCall',
        type: 'multiple',
      },
      {
        question:
          '¿Cuál es una diferencia clave entre los modelos de calidad de Boehm y McCall?',
        correctAnswer:
          'El modelo de McCall se enfoca en factores y criterios, mientras que Boehm se enfoca en características de alta y baja calidad.',
        type: 'open',
      },
      {
        question:
          '¿Qué métrica en el modelo de Boehm se utiliza para evaluar la mantenibilidad del software?',
        options: [
          'Comprensibilidad',
          'Fiabilidad',
          'Usabilidad',
          'Portabilidad',
        ],
        correctAnswer: 'Comprensibilidad',
        type: 'multiple',
      },
    ],
  ],
  [
    Color.YELLOW,
    [
      {
        question: '¿Qué significa la calidad del software?',
        options: [
          'Cumplir con los requisitos',
          'Satisfacer las expectativas del cliente',
          'Reducir el tiempo de desarrollo',
          'Evitar los errores en el código',
        ],
        correctAnswer: 'Satisfacer las expectativas del cliente',
        type: 'multiple',
      },
      {
        question:
          '¿Cuál es la principal diferencia entre calidad interna y calidad externa del software?',
        options: [
          'La calidad interna se refiere a la estabilidad del software, mientras que la externa se refiere a la satisfacción del cliente.',
          'La calidad interna se enfoca en el desempeño del software, mientras que la externa se refiere a las características visibles para el usuario.',
          'La calidad externa se refiere a la estabilidad del software, mientras que la interna se refiere a la usabilidad.',
          'No existe diferencia entre calidad interna y externa.',
        ],
        correctAnswer:
          'La calidad interna se enfoca en el desempeño del software, mientras que la externa se refiere a las características visibles para el usuario.',
        type: 'multiple',
      },
      {
        question:
          '¿Qué es la mantenibilidad en el contexto de calidad del software?',
        options: [
          'La capacidad del software de adaptarse a nuevos requisitos.',
          'La facilidad con la que el software puede ser corregido o modificado.',
          'La rapidez con la que el software se ejecuta.',
          'La resistencia del software ante errores.',
        ],
        correctAnswer:
          'La facilidad con la que el software puede ser corregido o modificado.',
        type: 'multiple',
      },
      {
        question:
          'Enumera los principales atributos de calidad del software según el modelo FURPS.',
        correctAnswer:
          'Funcionalidad, Usabilidad, Fiabilidad, Rendimiento, Soporte',
        type: 'open',
      },
      {
        question:
          '¿Qué tipo de pruebas de software se utilizan para evaluar la calidad funcional del software?',
        options: [
          'Pruebas unitarias',
          'Pruebas de aceptación',
          'Pruebas de integración',
          'Pruebas de rendimiento',
        ],
        correctAnswer: 'Pruebas de aceptación',
        type: 'multiple',
      },
      {
        question: '¿Cómo se mide la usabilidad de un software?',
        options: [
          'A través de métricas como la eficiencia, efectividad y satisfacción del usuario.',
          'Por la cantidad de errores que se encuentran en el código.',
          'Mediante la evaluación de la estabilidad y rendimiento del software.',
          'Por la capacidad de adaptarse a diferentes plataformas.',
        ],
        correctAnswer:
          'A través de métricas como la eficiencia, efectividad y satisfacción del usuario.',
        type: 'multiple',
      },
      {
        question:
          "¿Qué es el 'ciclo de vida del software' en términos de calidad?",
        options: [
          'El tiempo que tarda en desarrollarse un software.',
          'Las etapas a través de las cuales pasa el software, desde su desarrollo hasta su obsolescencia.',
          'El proceso de eliminar los errores del software.',
          'El proceso de actualizar el software a nuevas versiones.',
        ],
        correctAnswer:
          'Las etapas a través de las cuales pasa el software, desde su desarrollo hasta su obsolescencia.',
        type: 'multiple',
      },
      {
        question: "¿Qué significa la 'fiabilidad' en la calidad del software?",
        options: [
          'La capacidad del software para recuperarse de fallos.',
          'La facilidad con la que el software puede ser mantenido.',
          'La capacidad del software para realizar tareas sin errores.',
          'La rapidez con la que el software responde a los usuarios.',
        ],
        correctAnswer:
          'La capacidad del software para realizar tareas sin errores.',
        type: 'multiple',
      },
      {
        question:
          'Explica la importancia de realizar pruebas de rendimiento en el software.',
        correctAnswer:
          'Las pruebas de rendimiento evalúan cómo el software maneja diferentes niveles de carga, lo que garantiza su estabilidad y eficiencia bajo condiciones de uso intensivo.',
        type: 'open',
      },
      {
        question:
          '¿Qué métricas de calidad son útiles para evaluar la eficiencia del software?',
        options: [
          'Tiempo de respuesta y consumo de recursos.',
          'Número de líneas de código y complejidad del código.',
          'Número de errores detectados y corregidos.',
          'Satisfacción del cliente y rendimiento del software.',
        ],
        correctAnswer: 'Tiempo de respuesta y consumo de recursos.',
        type: 'multiple',
      },
    ],
  ],
  [
    Color.BLUE,
    [
      {
        question: '¿Cuál es el objetivo principal de la ISO/IEC 15504?',
        options: [
          'Evaluar la capacidad y mejorar los procesos del desarrollo de software',
          'Certificar la calidad del software',
          'Desarrollar nuevos estándares de programación',
          'Establecer prácticas de desarrollo ágil',
        ],
        correctAnswer:
          'Evaluar la capacidad y mejorar los procesos del desarrollo de software',
        type: 'multiple',
      },
      {
        question: "¿Qué significa el término 'SPICE' en ISO/IEC 15504?",
        options: [
          'Software Process Improvement and Capability Evaluation',
          'Standard Process for Integrated Computing Evaluation',
          'Systematic Process for Improving Communication Efficiency',
          'Software Programming Instruction and Capability Evaluation',
        ],
        correctAnswer: 'Software Process Improvement and Capability Evaluation',
        type: 'multiple',
      },
      {
        question:
          '¿Cuáles son los niveles de capacidad establecidos por la ISO/IEC 15504?',
        options: ['Nivel 0 a 5', 'Nivel 1 a 6', 'Nivel 0 a 3', 'Nivel 1 a 4'],
        correctAnswer: 'Nivel 0 a 5',
        type: 'multiple',
      },
      {
        question:
          'Enumera los procesos que cubre el modelo PRM de la ISO/IEC 15504.',
        correctAnswer:
          'Procesos de cliente-proveedor, procesos de ingeniería, procesos de soporte, procesos de gestión, procesos de organización',
        type: 'open',
      },
      {
        question:
          '¿Qué define el nivel 4 (Predecible) de madurez de los procesos en SPICE?',
        options: [
          'El proceso es controlado mediante métricas y análisis cuantitativos',
          'El proceso es estandarizado y documentado',
          'El proceso se lleva a cabo y logra su propósito',
          'El proceso no alcanza su propósito de manera consistente',
        ],
        correctAnswer:
          'El proceso es controlado mediante métricas y análisis cuantitativos',
        type: 'multiple',
      },
      {
        question:
          "¿Qué significa 'Nivel 1 (Realizado)' en la clasificación de madurez de SPICE?",
        options: [
          'El proceso se lleva a cabo y logra su propósito',
          'El proceso es planificado, monitorizado y ajustado',
          'El proceso es controlado mediante métricas',
          'El proceso no tiene un propósito consistente',
        ],
        correctAnswer: 'El proceso se lleva a cabo y logra su propósito',
        type: 'multiple',
      },
      {
        question:
          'En la ISO/IEC 15504, ¿qué atributo del proceso se evalúa en los diferentes niveles de madurez?',
        options: [
          'Desempeño, gestión, definición, medición, optimización',
          'Desempeño, agilidad, optimización',
          'Gestión, velocidad, adaptabilidad',
          'Desempeño, innovación, documentación',
        ],
        correctAnswer: 'Desempeño, gestión, definición, medición, optimización',
        type: 'multiple',
      },
      {
        question:
          "¿Qué significa el 'Nivel 0 (Incompleto)' en la clasificación de madurez de los procesos?",
        options: [
          'El proceso no alcanza su propósito de manera consistente',
          'El proceso es controlado mediante métricas y análisis cuantitativos',
          'El proceso es planificado y ajustado',
          'El proceso es documentado y estandarizado',
        ],
        correctAnswer:
          'El proceso no alcanza su propósito de manera consistente',
        type: 'multiple',
      },
      {
        question:
          '¿En qué año se estandarizó la ISO/IEC 15504 con seis niveles de capacidad de proceso?',
        options: ['2004', '1998', '2015', '2000'],
        correctAnswer: '2004',
        type: 'multiple',
      },
      {
        question:
          "Explica qué significa el 'Nivel 5 (Optimizado)' en la madurez de los procesos según SPICE.",
        correctAnswer: 'El proceso se mejora de forma continua.',
        type: 'open',
      },
    ],
  ],
  [
    Color.GREEN,
    [
      {
        question: '¿Cuál es el objetivo principal de la ISO/IEC 25000?',
        options: [
          'Establecer requisitos de calidad para el software',
          'Medir el desempeño del hardware',
          'Definir las herramientas de desarrollo de software',
          'Establecer estándares de programación',
        ],
        correctAnswer: 'Establecer requisitos de calidad para el software',
        type: 'multiple',
      },
      {
        question: '¿Qué significa ISO/IEC 25000?',
        options: [
          'Un estándar de calidad para el software',
          'Un sistema operativo para desarrollo de software',
          'Un modelo para la evaluación de hardware',
          'Un lenguaje de programación',
        ],
        correctAnswer: 'Un estándar de calidad para el software',
        type: 'multiple',
      },
      {
        question:
          'La ISO/IEC 25000 establece la calidad del software en qué áreas principales:',
        options: [
          'Funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad',
          'Costo, tiempo, programación',
          'Eficiencia, rendimiento, capacidad',
          'Seguridad, programación, diseño',
        ],
        correctAnswer:
          'Funcionalidad, fiabilidad, usabilidad, eficiencia, mantenibilidad, portabilidad',
        type: 'multiple',
      },
      {
        question:
          '¿Qué área de calidad trata la ISO/IEC 25000 con respecto a la facilidad de uso del software?',
        options: ['Usabilidad', 'Seguridad', 'Eficiencia', 'Mantenibilidad'],
        correctAnswer: 'Usabilidad',
        type: 'multiple',
      },
      {
        question: "¿Cómo define la ISO/IEC 25000 la 'fiabilidad' del software?",
        options: [
          'La capacidad de funcionar sin fallos en condiciones específicas',
          'La facilidad de uso del software',
          'La velocidad con la que el software opera',
          'La cantidad de código escrito',
        ],
        correctAnswer:
          'La capacidad de funcionar sin fallos en condiciones específicas',
        type: 'multiple',
      },
      {
        question:
          "¿Qué significa 'mantenibilidad' en el contexto de la ISO/IEC 25000?",
        options: [
          'La facilidad con la que se pueden realizar cambios en el software',
          'La cantidad de código reutilizable',
          'La facilidad con la que el software puede ser optimizado',
          'La velocidad de ejecución del software',
        ],
        correctAnswer:
          'La facilidad con la que se pueden realizar cambios en el software',
        type: 'multiple',
      },
      {
        question:
          '¿Qué aspecto de la calidad trata la ISO/IEC 25000 en relación con el software que debe poder ejecutarse en diversas plataformas?',
        options: ['Portabilidad', 'Seguridad', 'Eficiencia', 'Usabilidad'],
        correctAnswer: 'Portabilidad',
        type: 'multiple',
      },
      {
        question:
          '¿Cuál de estas áreas de calidad no es parte de la ISO/IEC 25000?',
        options: [
          'Costos de desarrollo',
          'Funcionalidad',
          'Eficiencia',
          'Fiabilidad',
        ],
        correctAnswer: 'Costos de desarrollo',
        type: 'multiple',
      },
      {
        question: '¿Qué tipo de estándar es la ISO/IEC 25000?',
        options: [
          'Estándar de calidad para el software',
          'Estándar de seguridad de redes',
          'Estándar de eficiencia energética',
          'Estándar de programación ágil',
        ],
        correctAnswer: 'Estándar de calidad para el software',
        type: 'multiple',
      },
      {
        question:
          'En la ISO/IEC 25000, ¿qué área se enfoca en la capacidad del software para desempeñarse bien en condiciones limitadas de recursos?',
        options: ['Eficiencia', 'Usabilidad', 'Mantenibilidad', 'Fiabilidad'],
        correctAnswer: 'Eficiencia',
        type: 'multiple',
      },
    ],
  ],
]);


export const QUESTIONS_NUMBER = 8;