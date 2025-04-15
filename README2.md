
│├── Node_modules <!-- contiene librerias y dependencias utilizadas en el proeycto -->
││
│├──public
││├── favicon.ico
││└── manifest.json
││
│└──src/<!-- Contiene todo el código fuente de la aplicación, Carpeta Principal dentro del proyecto  -->
││├── App.css
││├── App.jsx<!-- Punto d eentrada principal de los components -->
││├── index.css
││├── main.jsx<!-- Archivo raiz que conecta REACT con DOM -->
│││
││├── assets/ <!-- Contiene imágenes, íconos, estilos (CSS, SCSS) y otros recursos -->
│││ ├── images/
│││ ├── styles/
│││ └── icons/
│││
││├── components/<!--Incluye todos los componentes reutilizables y modularizados de la aplicación. -->
│││ ├── Header.js
│││ ├── Footer.js
│││ └── Button.js
│││
││├── pages/ <!-- contiene components que representan paginas completas dentro de la aplicacion -->
│││ ├── Home.js
│││ ├── About.js
│││ └── Contact.js
│││
││├── utils/  <!-- Archivos con funciones auxiliares o lógica compartida que se usan en varios lugares del proyecto. -->
│││ ├── api.js
│││ ├── constants.js
│││ └── helpers.js
│││
│││ ├── context/  <!-- Archivos relacionados con el contexto (React Context API) para manejar estados globales. -->
│││ ├── AuthContext.js
│││ └── ThemeContext.js
