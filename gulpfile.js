var gulp = require('gulp');
var server = require('gulp-webserver');
var fs = require('fs');
var path = require('path');
var url = require('url');
gulp.task('server', function() {
    return gulp.src('./src')
        .pipe(server({
            port: "9090",
            proxies: [{
                source: '/api/get/train_tickets',
                target: 'http://localhost:9090/api/get/train_tickets'
            }],
            middleware: function(req, res, next) {
                if (req.url === '/favicon.ico') {
                    return res.end();
                }
                var pathname = url.parse(req.url).pathname;
                if (pathname === '/') {
                    res.end(fs.readFileSync(path.join(__dirname, 'index.html')));
                } else {

                }
            }
        }))
})