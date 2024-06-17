"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _express = _interopRequireDefault(require("express"));
var _mongodb = require("mongodb");
var _path = _interopRequireDefault(require("path"));
var _cors = _interopRequireDefault(require("cors"));
function start() {
  return _start.apply(this, arguments);
}
function _start() {
  _start = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
    var url, client, app, db, populatedCartIds, _populatedCartIds, port;
    return _regenerator["default"].wrap(function _callee7$(_context7) {
      while (1) switch (_context7.prev = _context7.next) {
        case 0:
          _populatedCartIds = function _populatedCartIds3() {
            _populatedCartIds = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6(ids) {
              return _regenerator["default"].wrap(function _callee6$(_context6) {
                while (1) switch (_context6.prev = _context6.next) {
                  case 0:
                    return _context6.abrupt("return", Promise.all(ids.map(function (id) {
                      return db.collection('products').findOne({
                        id: id
                      });
                    })));
                  case 1:
                  case "end":
                    return _context6.stop();
                }
              }, _callee6);
            }));
            return _populatedCartIds.apply(this, arguments);
          };
          populatedCartIds = function _populatedCartIds2(_x3) {
            return _populatedCartIds.apply(this, arguments);
          };
          url = "mongodb+srv://martinhorn2014:cZzeQcltSuxgvfTX@vue-project.kodctjv.mongodb.net/?retryWrites=true&w=majority";
          client = new _mongodb.MongoClient(url);
          app = (0, _express["default"])();
          app.use(_express["default"].json());
          app.use((0, _cors["default"])()); // Enable CORS for all routes

          // Serve static files
          app.use('/images', _express["default"]["static"](_path["default"].join(__dirname, '../assets')));
          app.use(_express["default"]["static"](_path["default"].resolve(__dirname, '../dist'), {
            maxAge: '1y',
            etag: false
          }));
          _context7.next = 11;
          return client.connect();
        case 11:
          db = client.db('fsv-db');
          app.get('/api/products', /*#__PURE__*/function () {
            var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
              var products;
              return _regenerator["default"].wrap(function _callee$(_context) {
                while (1) switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return db.collection('products').find({}).toArray();
                  case 2:
                    products = _context.sent;
                    res.send(products);
                  case 4:
                  case "end":
                    return _context.stop();
                }
              }, _callee);
            }));
            return function (_x, _x2) {
              return _ref.apply(this, arguments);
            };
          }());
          app.get('/api/users/:userId/cart', /*#__PURE__*/function () {
            var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
              var user, populatedCart;
              return _regenerator["default"].wrap(function _callee2$(_context2) {
                while (1) switch (_context2.prev = _context2.next) {
                  case 0:
                    _context2.next = 2;
                    return db.collection('users').findOne({
                      id: req.params.userId
                    });
                  case 2:
                    user = _context2.sent;
                    if (!(user && user !== null && user !== void 0 && user.cartItems || [])) {
                      _context2.next = 10;
                      break;
                    }
                    _context2.next = 6;
                    return populatedCartIds((user === null || user === void 0 ? void 0 : user.cartItems) || []);
                  case 6:
                    populatedCart = _context2.sent;
                    res.json(populatedCart);
                    _context2.next = 11;
                    break;
                  case 10:
                    res.status(404).json({
                      error: 'User not found or cart is empty'
                    });
                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }, _callee2);
            }));
            return function (_x4, _x5) {
              return _ref2.apply(this, arguments);
            };
          }());
          app.post('/api/users/:userId/cart', /*#__PURE__*/function () {
            var _ref3 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(req, res) {
              var userId, productId, existingUser, user, populatedCart;
              return _regenerator["default"].wrap(function _callee3$(_context3) {
                while (1) switch (_context3.prev = _context3.next) {
                  case 0:
                    userId = req.params.userId;
                    productId = req.body.id;
                    _context3.next = 4;
                    return db.collection('users').findOne({
                      id: userId
                    });
                  case 4:
                    existingUser = _context3.sent;
                    if (existingUser) {
                      _context3.next = 8;
                      break;
                    }
                    _context3.next = 8;
                    return db.collection('users').insertOne({
                      id: userId,
                      cartItems: []
                    });
                  case 8:
                    _context3.next = 10;
                    return db.collection('users').updateOne({
                      id: userId
                    }, {
                      $addToSet: {
                        cartItems: productId
                      }
                    });
                  case 10:
                    _context3.next = 12;
                    return db.collection('users').findOne({
                      id: req.params.userId
                    });
                  case 12:
                    user = _context3.sent;
                    _context3.next = 15;
                    return populatedCartIds((user === null || user === void 0 ? void 0 : user.cartItems) || []);
                  case 15:
                    populatedCart = _context3.sent;
                    res.json(populatedCart);
                  case 17:
                  case "end":
                    return _context3.stop();
                }
              }, _callee3);
            }));
            return function (_x6, _x7) {
              return _ref3.apply(this, arguments);
            };
          }());
          app["delete"]('/api/users/:userId/cart/:productId', /*#__PURE__*/function () {
            var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(req, res) {
              var userId, productId, user, populatedCart;
              return _regenerator["default"].wrap(function _callee4$(_context4) {
                while (1) switch (_context4.prev = _context4.next) {
                  case 0:
                    userId = req.params.userId;
                    productId = req.params.productId;
                    _context4.next = 4;
                    return db.collection('users').updateOne({
                      id: userId
                    }, {
                      $pull: {
                        cartItems: productId
                      }
                    });
                  case 4:
                    _context4.next = 6;
                    return db.collection('users').findOne({
                      id: req.params.userId
                    });
                  case 6:
                    user = _context4.sent;
                    _context4.next = 9;
                    return populatedCartIds((user === null || user === void 0 ? void 0 : user.cartItems) || []);
                  case 9:
                    populatedCart = _context4.sent;
                    res.json(populatedCart);
                  case 11:
                  case "end":
                    return _context4.stop();
                }
              }, _callee4);
            }));
            return function (_x8, _x9) {
              return _ref4.apply(this, arguments);
            };
          }());
          app.get('/api/products/:productId', /*#__PURE__*/function () {
            var _ref5 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(req, res) {
              var productId, product;
              return _regenerator["default"].wrap(function _callee5$(_context5) {
                while (1) switch (_context5.prev = _context5.next) {
                  case 0:
                    productId = req.params.productId;
                    _context5.next = 3;
                    return db.collection('products').findOne({
                      id: productId
                    });
                  case 3:
                    product = _context5.sent;
                    res.json(product);
                  case 5:
                  case "end":
                    return _context5.stop();
                }
              }, _callee5);
            }));
            return function (_x10, _x11) {
              return _ref5.apply(this, arguments);
            };
          }());
          app.get('*', function (req, res) {
            res.sendFile(_path["default"].join(__dirname, '../dist/index.html'));
          });
          port = process.env.PORT || 8000;
          app.listen(port, function () {
            console.log('Server is listening on port' + port);
          });
        case 20:
        case "end":
          return _context7.stop();
      }
    }, _callee7);
  }));
  return _start.apply(this, arguments);
}
start();