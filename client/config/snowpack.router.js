import proxy from 'http2-proxy'

class Route {
    client() {
        const paths = [
            '/dashboard*', '/login*', '/protected*', '/dashboard/panel*'
        ]
        const configRoutes =[]
        for(let url of paths) {
            configRoutes.push({
                src: url,
                dest: '/index.html',
            },)
        }
        return configRoutes
    }
    server() {
        const paths = [
            '/account/login*', '/account/register*', '/account/refresh*'
        ]
        const configRoutes =[]
        for(let url of paths) {
            configRoutes.push({
                src: url,
                dest: (req, res) => {
                    return proxy.web(req, res, {
                        hostname: 'localhost',
                        port: 5000,
                    });
                },
            })
        }
        return configRoutes
    }
}

export const routes = new Route()