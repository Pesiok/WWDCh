var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync = require('browser-sync').create();

//Watch
gulp.task('watch', function() {
    
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });
    
    watch('./app/index.html', function() {
        browserSync.reload();
    });
    //watch every file in folder/future subfolders that have .css extension
    watch('./app/assets/styles/**/*.css', function() {
        gulp.start('cssInject');
    });

    watch('./app/assets/scripts/**/*.js', function() {
        gulp.start('scriptsRefresh');
    })
    
});

//dependencies in arrays will be run first
gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
    
});

gulp.task('scriptsRefresh', ['scripts'], function() {
   browserSync.reload();
    
});