const OriginalFetch = window.fetch.bind(window);

const redirects = {
    'api/user': 'http://localhost:5000/api/user',
    'api/networks': 'http://localhost:5000/api/networks',
    '/api/logs/traffic/Q4AB-NWGM-BCBX': 'http://localhost:5000/api/logs/traffic/Q4AB-NWGM-BCBX',
    '/api/switches/Q4AB-NWGM-BCBX': 'http://localhost:5000/api/switches/Q4AB-NWGM-BCBX',
}

class XHRInterceptor extends XMLHttpRequest {
    request_ = {};

    open(method, url, async, user, password) {
        const redirectedUrl = redirects[Object.keys(redirects).find((key) => url.includes(key))] ?? url;
        this.request_ = {
            method,
            url: redirectedUrl,
            async,
            user,
            password
        };

        super.open(method, redirectedUrl, async, user, password);
    }

    send(body) {
        console.log('Intercepted XHR request', this.request_, body);
        super.send(body);
    }
}

console.log('Intercepting requests');

window.fetch = function (url, options) {
    console.log('Intercepted fetch request', url, options);
    return OriginalFetch(url, options);
}

window.XMLHttpRequest = XHRInterceptor;
