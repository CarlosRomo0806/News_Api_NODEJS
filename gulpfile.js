const gulp = require('gulp');
const sass = require('gulp-sass') (require('sass'));
const tsc = require('gulp-typescript'); 


gulp.task('styles', function(){
    return gulp.src('src/sass/**/*.scss') //primero vamos por archivos fuente src()
        .pipe(sass())  //despues se transforman pipe1(),
        .pipe(gulp.dest('styles')); //luego se mueven a carpeta destino pipe2() 
});

gulp.task('scripts', function(){
    const tsConfig = tsc.createProject('tsconfig.json');
    return tsConfig.src() //primero vamos por archivos fuente src()
        .pipe(tsConfig())  //despues se transforman pipe1(),
        .pipe(gulp.dest('scripts')); //luego se mueven a carpeta destino pipe2()
});

gulp.task('scripts:watch', gulp.series('scripts', function(done){ //Esta tarea se encargara de guardar cambios, por lo que va en serie con la tarea de Scripts.
    gulp.watch('src/scripts_ts/**/*.ts', gulp.series('scripts')); //Escuchar cambios
    done();
}));

gulp.task('styles:watch', gulp.series('styles', function(done){ //Esta tarea se encargara de guardar cambios, por lo que va en serie con la tarea de Scripts.
    gulp.watch('src/sass/**/*.scss', gulp.series('styles')); //Escuchar cambios
    done();
}));

gulp.task('serve', gulp.parallel('styles:watch', 'scripts:watch'));//Manda a llamar a watch y watch a styles y scripts

gulp.task('default', gulp.parallel('styles', 'scripts', function(done){ //Realiza ambas tareas de TSC y SASS en paralelo
    done();
}));

