import envConfig from './config/environment';
import product from './api/product';
import user from './api/user';
import category from './api/category';
import tag from './api/tag';
import local from './api/local';

export default (app) => {
    app.use('/api/product', product);
    app.use('/api/user', user);
    app.use('/api/category', category);
    app.use('/api/tag', tag);
    app.use('/api/local', local);

    // All other routes should redirect to the index.html
    app.get('/*', (req, res) => {
        res.sendFile(`${envConfig.root}/src/public/index.html`);
    });
};
