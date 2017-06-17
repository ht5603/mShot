
var express = require('express');

var bodyParser = require('body-parser');
var app = express();

var path = require('path');
var config = require('./webpack.config.js');
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

/* session相關配置 */
const session = require('express-session');
app.use(session({
  saveUninitialized: true, // don't create session until something stored
  resave: false, //don't save session if unmodified
  secret: 'yicheng',
  key: 'auth_token',//cookie name
  cookie: {maxAge: 1000 * 60 * 60 * 24 * 30}//30 days
  
}));

var router = express.Router();
var port = 8000;

/*設定靜態資源*/
app.use('/resource', express.static('resource'));
app.use(express.static('./bin'));

/*設定模板引擎*/
app.set('view engine', 'ejs');

/*一定得在路由解析前面*/
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
    
/*路由解析*/    
frontRouter = require( './routes/frontRoute.js' )(app);
    


    

app.listen( port,()=> console.log('server start!') );

