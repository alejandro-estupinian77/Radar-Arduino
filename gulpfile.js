//Automatizar tareas con Gulp
const {src, dest, watch, series} = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const sourcemaps = require("gulp-sourcemaps");
const concat = require("gulp-concat");
const terser = require("gulp-terser-js");
const rename = require("gulp-rename");
const notify = require("gulp-notify");
const webp = require("gulp-webp");



const paths = {
    scss: "src/scss/**/*.scss",
    js: "src/js/**/*.js",
    imagenes: "src/img/**/*"
}


//Compilar SCSS a CSS
function css(){
    return src(paths.scss)
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write('.'))
        .pipe(dest("./build/css"))
}

//Compilar JavaScript
function javascript() {
    return src(paths.js)
      .pipe(sourcemaps.init())
      .pipe(concat('bundle.js')) // final output file name
      .pipe(terser())
      .pipe(sourcemaps.write('.'))
      .pipe(dest('./build/js'))
}

//VersionWebp
function versionWebp() {
    return src(paths.imagenes)
        .pipe( webp() )
        .pipe(dest('build/img'))
        .pipe(notify({ message: 'Imagen Completada'}));
}

//WatchArchivos
function watchArchivos(){
    watch(paths.scss, css),
    watch(paths.js, javascript);
};

//Exportar tareas 
exports.watchArchivos = watchArchivos;
exports.default = series(css, javascript, versionWebp, watchArchivos);
