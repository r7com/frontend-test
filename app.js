import browserSync from "browser-sync";
import connect from 'connect';
import serveStatic from 'serve-static'

try {
    const isDevServer = process.env['npm_lifecycle_script']?.includes('--dev-server')

    if (isDevServer) {
        browserSync.create()
        /**
         * This example will serve files from the './public' directory
         * and will automatically watch for html/css/js changes
         */
        browserSync.init({
            watch: true,
            server: "./public"
        });
    } else {
        const app = connect();

        app.use(serveStatic('public'))

        console.log(' ➜   Open: http://localhost:7007')
        app.listen(7007)

    }
} catch (error) {

    console.error("Ocorreu um erro ao tentar intanciar o Servidor ")
}