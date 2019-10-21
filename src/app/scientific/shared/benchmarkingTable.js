!(function(e, t) {
    for (var n in t) e[n] = t[n];
})(
    this,
    (function(e) {
        var t = {};
        function n(r) {
            if (t[r]) return t[r].exports;
            var o = (t[r] = { i: r, l: !1, exports: {} });
            return e[r].call(o.exports, o, o.exports, n), (o.l = !0), o.exports;
        }
        return (
            (n.m = e),
            (n.c = t),
            (n.d = function(e, t, r) {
                n.o(e, t) ||
                    Object.defineProperty(e, t, { enumerable: !0, get: r });
            }),
            (n.r = function(e) {
                'undefined' != typeof Symbol &&
                    Symbol.toStringTag &&
                    Object.defineProperty(e, Symbol.toStringTag, {
                        value: 'Module'
                    }),
                    Object.defineProperty(e, '__esModule', { value: !0 });
            }),
            (n.t = function(e, t) {
                if ((1 & t && (e = n(e)), 8 & t)) return e;
                if (4 & t && 'object' == typeof e && e && e.__esModule)
                    return e;
                var r = Object.create(null);
                if (
                    (n.r(r),
                    Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: e
                    }),
                    2 & t && 'string' != typeof e)
                )
                    for (var o in e)
                        n.d(
                            r,
                            o,
                            function(t) {
                                return e[t];
                            }.bind(null, o)
                        );
                return r;
            }),
            (n.n = function(e) {
                var t =
                    e && e.__esModule
                        ? function() {
                              return e.default;
                          }
                        : function() {
                              return e;
                          };
                return n.d(t, 'a', t), t;
            }),
            (n.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }),
            (n.p = ''),
            n((n.s = 8))
        );
    })([
        function(e, t, n) {
            var r;
            /*!
             * jQuery JavaScript Library v3.4.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2019-05-01T21:04Z
             */
            /*!
             * jQuery JavaScript Library v3.4.1
             * https://jquery.com/
             *
             * Includes Sizzle.js
             * https://sizzlejs.com/
             *
             * Copyright JS Foundation and other contributors
             * Released under the MIT license
             * https://jquery.org/license
             *
             * Date: 2019-05-01T21:04Z
             */
            !(function(t, n) {
                'use strict';
                'object' == typeof e.exports
                    ? (e.exports = t.document
                          ? n(t, !0)
                          : function(e) {
                                if (!e.document)
                                    throw new Error(
                                        'jQuery requires a window with a document'
                                    );
                                return n(e);
                            })
                    : n(t);
            })('undefined' != typeof window ? window : this, function(n, o) {
                'use strict';
                var i = [],
                    a = n.document,
                    s = Object.getPrototypeOf,
                    u = i.slice,
                    l = i.concat,
                    c = i.push,
                    f = i.indexOf,
                    p = {},
                    d = p.toString,
                    h = p.hasOwnProperty,
                    y = h.toString,
                    g = y.call(Object),
                    m = {},
                    v = function(e) {
                        return (
                            'function' == typeof e &&
                            'number' != typeof e.nodeType
                        );
                    },
                    b = function(e) {
                        return null != e && e === e.window;
                    },
                    x = { type: !0, src: !0, nonce: !0, noModule: !0 };
                function w(e, t, n) {
                    var r,
                        o,
                        i = (n = n || a).createElement('script');
                    if (((i.text = e), t))
                        for (r in x)
                            (o =
                                t[r] ||
                                (t.getAttribute && t.getAttribute(r))) &&
                                i.setAttribute(r, o);
                    n.head.appendChild(i).parentNode.removeChild(i);
                }
                function T(e) {
                    return null == e
                        ? e + ''
                        : 'object' == typeof e || 'function' == typeof e
                        ? p[d.call(e)] || 'object'
                        : typeof e;
                }
                var E = function(e, t) {
                        return new E.fn.init(e, t);
                    },
                    C = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                function A(e) {
                    var t = !!e && 'length' in e && e.length,
                        n = T(e);
                    return (
                        !v(e) &&
                        !b(e) &&
                        ('array' === n ||
                            0 === t ||
                            ('number' == typeof t && t > 0 && t - 1 in e))
                    );
                }
                (E.fn = E.prototype = {
                    jquery: '3.4.1',
                    constructor: E,
                    length: 0,
                    toArray: function() {
                        return u.call(this);
                    },
                    get: function(e) {
                        return null == e
                            ? u.call(this)
                            : e < 0
                            ? this[e + this.length]
                            : this[e];
                    },
                    pushStack: function(e) {
                        var t = E.merge(this.constructor(), e);
                        return (t.prevObject = this), t;
                    },
                    each: function(e) {
                        return E.each(this, e);
                    },
                    map: function(e) {
                        return this.pushStack(
                            E.map(this, function(t, n) {
                                return e.call(t, n, t);
                            })
                        );
                    },
                    slice: function() {
                        return this.pushStack(u.apply(this, arguments));
                    },
                    first: function() {
                        return this.eq(0);
                    },
                    last: function() {
                        return this.eq(-1);
                    },
                    eq: function(e) {
                        var t = this.length,
                            n = +e + (e < 0 ? t : 0);
                        return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
                    },
                    end: function() {
                        return this.prevObject || this.constructor();
                    },
                    push: c,
                    sort: i.sort,
                    splice: i.splice
                }),
                    (E.extend = E.fn.extend = function() {
                        var e,
                            t,
                            n,
                            r,
                            o,
                            i,
                            a = arguments[0] || {},
                            s = 1,
                            u = arguments.length,
                            l = !1;
                        for (
                            'boolean' == typeof a &&
                                ((l = a), (a = arguments[s] || {}), s++),
                                'object' == typeof a || v(a) || (a = {}),
                                s === u && ((a = this), s--);
                            s < u;
                            s++
                        )
                            if (null != (e = arguments[s]))
                                for (t in e)
                                    (r = e[t]),
                                        '__proto__' !== t &&
                                            a !== r &&
                                            (l &&
                                            r &&
                                            (E.isPlainObject(r) ||
                                                (o = Array.isArray(r)))
                                                ? ((n = a[t]),
                                                  (i =
                                                      o && !Array.isArray(n)
                                                          ? []
                                                          : o ||
                                                            E.isPlainObject(n)
                                                          ? n
                                                          : {}),
                                                  (o = !1),
                                                  (a[t] = E.extend(l, i, r)))
                                                : void 0 !== r && (a[t] = r));
                        return a;
                    }),
                    E.extend({
                        expando:
                            'jQuery' +
                            ('3.4.1' + Math.random()).replace(/\D/g, ''),
                        isReady: !0,
                        error: function(e) {
                            throw new Error(e);
                        },
                        noop: function() {},
                        isPlainObject: function(e) {
                            var t, n;
                            return (
                                !(!e || '[object Object]' !== d.call(e)) &&
                                (!(t = s(e)) ||
                                    ('function' ==
                                        typeof (n =
                                            h.call(t, 'constructor') &&
                                            t.constructor) &&
                                        y.call(n) === g))
                            );
                        },
                        isEmptyObject: function(e) {
                            var t;
                            for (t in e) return !1;
                            return !0;
                        },
                        globalEval: function(e, t) {
                            w(e, { nonce: t && t.nonce });
                        },
                        each: function(e, t) {
                            var n,
                                r = 0;
                            if (A(e))
                                for (
                                    n = e.length;
                                    r < n && !1 !== t.call(e[r], r, e[r]);
                                    r++
                                );
                            else
                                for (r in e)
                                    if (!1 === t.call(e[r], r, e[r])) break;
                            return e;
                        },
                        trim: function(e) {
                            return null == e ? '' : (e + '').replace(C, '');
                        },
                        makeArray: function(e, t) {
                            var n = t || [];
                            return (
                                null != e &&
                                    (A(Object(e))
                                        ? E.merge(
                                              n,
                                              'string' == typeof e ? [e] : e
                                          )
                                        : c.call(n, e)),
                                n
                            );
                        },
                        inArray: function(e, t, n) {
                            return null == t ? -1 : f.call(t, e, n);
                        },
                        merge: function(e, t) {
                            for (
                                var n = +t.length, r = 0, o = e.length;
                                r < n;
                                r++
                            )
                                e[o++] = t[r];
                            return (e.length = o), e;
                        },
                        grep: function(e, t, n) {
                            for (
                                var r = [], o = 0, i = e.length, a = !n;
                                o < i;
                                o++
                            )
                                !t(e[o], o) !== a && r.push(e[o]);
                            return r;
                        },
                        map: function(e, t, n) {
                            var r,
                                o,
                                i = 0,
                                a = [];
                            if (A(e))
                                for (r = e.length; i < r; i++)
                                    null != (o = t(e[i], i, n)) && a.push(o);
                            else
                                for (i in e)
                                    null != (o = t(e[i], i, n)) && a.push(o);
                            return l.apply([], a);
                        },
                        guid: 1,
                        support: m
                    }),
                    'function' == typeof Symbol &&
                        (E.fn[Symbol.iterator] = i[Symbol.iterator]),
                    E.each(
                        'Boolean Number String Function Array Date RegExp Object Error Symbol'.split(
                            ' '
                        ),
                        function(e, t) {
                            p['[object ' + t + ']'] = t.toLowerCase();
                        }
                    );
                var S =
                    /*!
                     * Sizzle CSS Selector Engine v2.3.4
                     * https://sizzlejs.com/
                     *
                     * Copyright JS Foundation and other contributors
                     * Released under the MIT license
                     * https://js.foundation/
                     *
                     * Date: 2019-04-08
                     */
                    (function(e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g,
                            m,
                            v,
                            b,
                            x = 'sizzle' + 1 * new Date(),
                            w = e.document,
                            T = 0,
                            E = 0,
                            C = ue(),
                            A = ue(),
                            S = ue(),
                            k = ue(),
                            j = function(e, t) {
                                return e === t && (f = !0), 0;
                            },
                            N = {}.hasOwnProperty,
                            D = [],
                            L = D.pop,
                            O = D.push,
                            q = D.push,
                            _ = D.slice,
                            P = function(e, t) {
                                for (var n = 0, r = e.length; n < r; n++)
                                    if (e[n] === t) return n;
                                return -1;
                            },
                            R =
                                'checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped',
                            H = '[\\x20\\t\\r\\n\\f]',
                            B = '(?:\\\\.|[\\w-]|[^\0-\\xa0])+',
                            I =
                                '\\[' +
                                H +
                                '*(' +
                                B +
                                ')(?:' +
                                H +
                                '*([*^$|!~]?=)' +
                                H +
                                '*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|(' +
                                B +
                                '))|)' +
                                H +
                                '*\\]',
                            M =
                                ':(' +
                                B +
                                ')(?:\\(((\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|((?:\\\\.|[^\\\\()[\\]]|' +
                                I +
                                ')*)|.*)\\)|)',
                            U = new RegExp(H + '+', 'g'),
                            F = new RegExp(
                                '^' +
                                    H +
                                    '+|((?:^|[^\\\\])(?:\\\\.)*)' +
                                    H +
                                    '+$',
                                'g'
                            ),
                            $ = new RegExp('^' + H + '*,' + H + '*'),
                            W = new RegExp(
                                '^' + H + '*([>+~]|' + H + ')' + H + '*'
                            ),
                            z = new RegExp(H + '|>'),
                            X = new RegExp(M),
                            G = new RegExp('^' + B + '$'),
                            V = {
                                ID: new RegExp('^#(' + B + ')'),
                                CLASS: new RegExp('^\\.(' + B + ')'),
                                TAG: new RegExp('^(' + B + '|[*])'),
                                ATTR: new RegExp('^' + I),
                                PSEUDO: new RegExp('^' + M),
                                CHILD: new RegExp(
                                    '^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(' +
                                        H +
                                        '*(even|odd|(([+-]|)(\\d*)n|)' +
                                        H +
                                        '*(?:([+-]|)' +
                                        H +
                                        '*(\\d+)|))' +
                                        H +
                                        '*\\)|)',
                                    'i'
                                ),
                                bool: new RegExp('^(?:' + R + ')$', 'i'),
                                needsContext: new RegExp(
                                    '^' +
                                        H +
                                        '*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(' +
                                        H +
                                        '*((?:-\\d)?\\d*)' +
                                        H +
                                        '*\\)|)(?=[^-]|$)',
                                    'i'
                                )
                            },
                            J = /HTML$/i,
                            Q = /^(?:input|select|textarea|button)$/i,
                            Y = /^h\d$/i,
                            K = /^[^{]+\{\s*\[native \w/,
                            Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                            ee = /[+~]/,
                            te = new RegExp(
                                '\\\\([\\da-f]{1,6}' + H + '?|(' + H + ')|.)',
                                'ig'
                            ),
                            ne = function(e, t, n) {
                                var r = '0x' + t - 65536;
                                return r != r || n
                                    ? t
                                    : r < 0
                                    ? String.fromCharCode(r + 65536)
                                    : String.fromCharCode(
                                          (r >> 10) | 55296,
                                          (1023 & r) | 56320
                                      );
                            },
                            re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
                            oe = function(e, t) {
                                return t
                                    ? '\0' === e
                                        ? '�'
                                        : e.slice(0, -1) +
                                          '\\' +
                                          e
                                              .charCodeAt(e.length - 1)
                                              .toString(16) +
                                          ' '
                                    : '\\' + e;
                            },
                            ie = function() {
                                p();
                            },
                            ae = xe(
                                function(e) {
                                    return (
                                        !0 === e.disabled &&
                                        'fieldset' === e.nodeName.toLowerCase()
                                    );
                                },
                                { dir: 'parentNode', next: 'legend' }
                            );
                        try {
                            q.apply((D = _.call(w.childNodes)), w.childNodes),
                                D[w.childNodes.length].nodeType;
                        } catch (e) {
                            q = {
                                apply: D.length
                                    ? function(e, t) {
                                          O.apply(e, _.call(t));
                                      }
                                    : function(e, t) {
                                          for (
                                              var n = e.length, r = 0;
                                              (e[n++] = t[r++]);

                                          );
                                          e.length = n - 1;
                                      }
                            };
                        }
                        function se(e, t, r, o) {
                            var i,
                                s,
                                l,
                                c,
                                f,
                                h,
                                m,
                                v = t && t.ownerDocument,
                                T = t ? t.nodeType : 9;
                            if (
                                ((r = r || []),
                                'string' != typeof e ||
                                    !e ||
                                    (1 !== T && 9 !== T && 11 !== T))
                            )
                                return r;
                            if (
                                !o &&
                                ((t ? t.ownerDocument || t : w) !== d && p(t),
                                (t = t || d),
                                y)
                            ) {
                                if (11 !== T && (f = Z.exec(e)))
                                    if ((i = f[1])) {
                                        if (9 === T) {
                                            if (!(l = t.getElementById(i)))
                                                return r;
                                            if (l.id === i) return r.push(l), r;
                                        } else if (
                                            v &&
                                            (l = v.getElementById(i)) &&
                                            b(t, l) &&
                                            l.id === i
                                        )
                                            return r.push(l), r;
                                    } else {
                                        if (f[2])
                                            return (
                                                q.apply(
                                                    r,
                                                    t.getElementsByTagName(e)
                                                ),
                                                r
                                            );
                                        if (
                                            (i = f[3]) &&
                                            n.getElementsByClassName &&
                                            t.getElementsByClassName
                                        )
                                            return (
                                                q.apply(
                                                    r,
                                                    t.getElementsByClassName(i)
                                                ),
                                                r
                                            );
                                    }
                                if (
                                    n.qsa &&
                                    !k[e + ' '] &&
                                    (!g || !g.test(e)) &&
                                    (1 !== T ||
                                        'object' !== t.nodeName.toLowerCase())
                                ) {
                                    if (
                                        ((m = e), (v = t), 1 === T && z.test(e))
                                    ) {
                                        for (
                                            (c = t.getAttribute('id'))
                                                ? (c = c.replace(re, oe))
                                                : t.setAttribute('id', (c = x)),
                                                s = (h = a(e)).length;
                                            s--;

                                        )
                                            h[s] = '#' + c + ' ' + be(h[s]);
                                        (m = h.join(',')),
                                            (v =
                                                (ee.test(e) &&
                                                    me(t.parentNode)) ||
                                                t);
                                    }
                                    try {
                                        return (
                                            q.apply(r, v.querySelectorAll(m)), r
                                        );
                                    } catch (t) {
                                        k(e, !0);
                                    } finally {
                                        c === x && t.removeAttribute('id');
                                    }
                                }
                            }
                            return u(e.replace(F, '$1'), t, r, o);
                        }
                        function ue() {
                            var e = [];
                            return function t(n, o) {
                                return (
                                    e.push(n + ' ') > r.cacheLength &&
                                        delete t[e.shift()],
                                    (t[n + ' '] = o)
                                );
                            };
                        }
                        function le(e) {
                            return (e[x] = !0), e;
                        }
                        function ce(e) {
                            var t = d.createElement('fieldset');
                            try {
                                return !!e(t);
                            } catch (e) {
                                return !1;
                            } finally {
                                t.parentNode && t.parentNode.removeChild(t),
                                    (t = null);
                            }
                        }
                        function fe(e, t) {
                            for (var n = e.split('|'), o = n.length; o--; )
                                r.attrHandle[n[o]] = t;
                        }
                        function pe(e, t) {
                            var n = t && e,
                                r =
                                    n &&
                                    1 === e.nodeType &&
                                    1 === t.nodeType &&
                                    e.sourceIndex - t.sourceIndex;
                            if (r) return r;
                            if (n)
                                for (; (n = n.nextSibling); )
                                    if (n === t) return -1;
                            return e ? 1 : -1;
                        }
                        function de(e) {
                            return function(t) {
                                return (
                                    'input' === t.nodeName.toLowerCase() &&
                                    t.type === e
                                );
                            };
                        }
                        function he(e) {
                            return function(t) {
                                var n = t.nodeName.toLowerCase();
                                return (
                                    ('input' === n || 'button' === n) &&
                                    t.type === e
                                );
                            };
                        }
                        function ye(e) {
                            return function(t) {
                                return 'form' in t
                                    ? t.parentNode && !1 === t.disabled
                                        ? 'label' in t
                                            ? 'label' in t.parentNode
                                                ? t.parentNode.disabled === e
                                                : t.disabled === e
                                            : t.isDisabled === e ||
                                              (t.isDisabled !== !e &&
                                                  ae(t) === e)
                                        : t.disabled === e
                                    : 'label' in t && t.disabled === e;
                            };
                        }
                        function ge(e) {
                            return le(function(t) {
                                return (
                                    (t = +t),
                                    le(function(n, r) {
                                        for (
                                            var o,
                                                i = e([], n.length, t),
                                                a = i.length;
                                            a--;

                                        )
                                            n[(o = i[a])] &&
                                                (n[o] = !(r[o] = n[o]));
                                    })
                                );
                            });
                        }
                        function me(e) {
                            return e && void 0 !== e.getElementsByTagName && e;
                        }
                        for (t in ((n = se.support = {}),
                        (i = se.isXML = function(e) {
                            var t = e.namespaceURI,
                                n = (e.ownerDocument || e).documentElement;
                            return !J.test(t || (n && n.nodeName) || 'HTML');
                        }),
                        (p = se.setDocument = function(e) {
                            var t,
                                o,
                                a = e ? e.ownerDocument || e : w;
                            return a !== d &&
                                9 === a.nodeType &&
                                a.documentElement
                                ? ((h = (d = a).documentElement),
                                  (y = !i(d)),
                                  w !== d &&
                                      (o = d.defaultView) &&
                                      o.top !== o &&
                                      (o.addEventListener
                                          ? o.addEventListener('unload', ie, !1)
                                          : o.attachEvent &&
                                            o.attachEvent('onunload', ie)),
                                  (n.attributes = ce(function(e) {
                                      return (
                                          (e.className = 'i'),
                                          !e.getAttribute('className')
                                      );
                                  })),
                                  (n.getElementsByTagName = ce(function(e) {
                                      return (
                                          e.appendChild(d.createComment('')),
                                          !e.getElementsByTagName('*').length
                                      );
                                  })),
                                  (n.getElementsByClassName = K.test(
                                      d.getElementsByClassName
                                  )),
                                  (n.getById = ce(function(e) {
                                      return (
                                          (h.appendChild(e).id = x),
                                          !d.getElementsByName ||
                                              !d.getElementsByName(x).length
                                      );
                                  })),
                                  n.getById
                                      ? ((r.filter.ID = function(e) {
                                            var t = e.replace(te, ne);
                                            return function(e) {
                                                return (
                                                    e.getAttribute('id') === t
                                                );
                                            };
                                        }),
                                        (r.find.ID = function(e, t) {
                                            if (
                                                void 0 !== t.getElementById &&
                                                y
                                            ) {
                                                var n = t.getElementById(e);
                                                return n ? [n] : [];
                                            }
                                        }))
                                      : ((r.filter.ID = function(e) {
                                            var t = e.replace(te, ne);
                                            return function(e) {
                                                var n =
                                                    void 0 !==
                                                        e.getAttributeNode &&
                                                    e.getAttributeNode('id');
                                                return n && n.value === t;
                                            };
                                        }),
                                        (r.find.ID = function(e, t) {
                                            if (
                                                void 0 !== t.getElementById &&
                                                y
                                            ) {
                                                var n,
                                                    r,
                                                    o,
                                                    i = t.getElementById(e);
                                                if (i) {
                                                    if (
                                                        (n = i.getAttributeNode(
                                                            'id'
                                                        )) &&
                                                        n.value === e
                                                    )
                                                        return [i];
                                                    for (
                                                        o = t.getElementsByName(
                                                            e
                                                        ),
                                                            r = 0;
                                                        (i = o[r++]);

                                                    )
                                                        if (
                                                            (n = i.getAttributeNode(
                                                                'id'
                                                            )) &&
                                                            n.value === e
                                                        )
                                                            return [i];
                                                }
                                                return [];
                                            }
                                        })),
                                  (r.find.TAG = n.getElementsByTagName
                                      ? function(e, t) {
                                            return void 0 !==
                                                t.getElementsByTagName
                                                ? t.getElementsByTagName(e)
                                                : n.qsa
                                                ? t.querySelectorAll(e)
                                                : void 0;
                                        }
                                      : function(e, t) {
                                            var n,
                                                r = [],
                                                o = 0,
                                                i = t.getElementsByTagName(e);
                                            if ('*' === e) {
                                                for (; (n = i[o++]); )
                                                    1 === n.nodeType &&
                                                        r.push(n);
                                                return r;
                                            }
                                            return i;
                                        }),
                                  (r.find.CLASS =
                                      n.getElementsByClassName &&
                                      function(e, t) {
                                          if (
                                              void 0 !==
                                                  t.getElementsByClassName &&
                                              y
                                          )
                                              return t.getElementsByClassName(
                                                  e
                                              );
                                      }),
                                  (m = []),
                                  (g = []),
                                  (n.qsa = K.test(d.querySelectorAll)) &&
                                      (ce(function(e) {
                                          (h.appendChild(e).innerHTML =
                                              "<a id='" +
                                              x +
                                              "'></a><select id='" +
                                              x +
                                              "-\r\\' msallowcapture=''><option selected=''></option></select>"),
                                              e.querySelectorAll(
                                                  "[msallowcapture^='']"
                                              ).length &&
                                                  g.push(
                                                      '[*^$]=' +
                                                          H +
                                                          '*(?:\'\'|"")'
                                                  ),
                                              e.querySelectorAll('[selected]')
                                                  .length ||
                                                  g.push(
                                                      '\\[' +
                                                          H +
                                                          '*(?:value|' +
                                                          R +
                                                          ')'
                                                  ),
                                              e.querySelectorAll(
                                                  '[id~=' + x + '-]'
                                              ).length || g.push('~='),
                                              e.querySelectorAll(':checked')
                                                  .length || g.push(':checked'),
                                              e.querySelectorAll(
                                                  'a#' + x + '+*'
                                              ).length || g.push('.#.+[+~]');
                                      }),
                                      ce(function(e) {
                                          e.innerHTML =
                                              "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                                          var t = d.createElement('input');
                                          t.setAttribute('type', 'hidden'),
                                              e
                                                  .appendChild(t)
                                                  .setAttribute('name', 'D'),
                                              e.querySelectorAll('[name=d]')
                                                  .length &&
                                                  g.push(
                                                      'name' + H + '*[*^$|!~]?='
                                                  ),
                                              2 !==
                                                  e.querySelectorAll(':enabled')
                                                      .length &&
                                                  g.push(
                                                      ':enabled',
                                                      ':disabled'
                                                  ),
                                              (h.appendChild(e).disabled = !0),
                                              2 !==
                                                  e.querySelectorAll(
                                                      ':disabled'
                                                  ).length &&
                                                  g.push(
                                                      ':enabled',
                                                      ':disabled'
                                                  ),
                                              e.querySelectorAll('*,:x'),
                                              g.push(',.*:');
                                      })),
                                  (n.matchesSelector = K.test(
                                      (v =
                                          h.matches ||
                                          h.webkitMatchesSelector ||
                                          h.mozMatchesSelector ||
                                          h.oMatchesSelector ||
                                          h.msMatchesSelector)
                                  )) &&
                                      ce(function(e) {
                                          (n.disconnectedMatch = v.call(
                                              e,
                                              '*'
                                          )),
                                              v.call(e, "[s!='']:x"),
                                              m.push('!=', M);
                                      }),
                                  (g = g.length && new RegExp(g.join('|'))),
                                  (m = m.length && new RegExp(m.join('|'))),
                                  (t = K.test(h.compareDocumentPosition)),
                                  (b =
                                      t || K.test(h.contains)
                                          ? function(e, t) {
                                                var n =
                                                        9 === e.nodeType
                                                            ? e.documentElement
                                                            : e,
                                                    r = t && t.parentNode;
                                                return (
                                                    e === r ||
                                                    !(
                                                        !r ||
                                                        1 !== r.nodeType ||
                                                        !(n.contains
                                                            ? n.contains(r)
                                                            : e.compareDocumentPosition &&
                                                              16 &
                                                                  e.compareDocumentPosition(
                                                                      r
                                                                  ))
                                                    )
                                                );
                                            }
                                          : function(e, t) {
                                                if (t)
                                                    for (; (t = t.parentNode); )
                                                        if (t === e) return !0;
                                                return !1;
                                            }),
                                  (j = t
                                      ? function(e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var r =
                                                !e.compareDocumentPosition -
                                                !t.compareDocumentPosition;
                                            return (
                                                r ||
                                                (1 &
                                                    (r =
                                                        (e.ownerDocument ||
                                                            e) ===
                                                        (t.ownerDocument || t)
                                                            ? e.compareDocumentPosition(
                                                                  t
                                                              )
                                                            : 1) ||
                                                (!n.sortDetached &&
                                                    t.compareDocumentPosition(
                                                        e
                                                    ) === r)
                                                    ? e === d ||
                                                      (e.ownerDocument === w &&
                                                          b(w, e))
                                                        ? -1
                                                        : t === d ||
                                                          (t.ownerDocument ===
                                                              w &&
                                                              b(w, t))
                                                        ? 1
                                                        : c
                                                        ? P(c, e) - P(c, t)
                                                        : 0
                                                    : 4 & r
                                                    ? -1
                                                    : 1)
                                            );
                                        }
                                      : function(e, t) {
                                            if (e === t) return (f = !0), 0;
                                            var n,
                                                r = 0,
                                                o = e.parentNode,
                                                i = t.parentNode,
                                                a = [e],
                                                s = [t];
                                            if (!o || !i)
                                                return e === d
                                                    ? -1
                                                    : t === d
                                                    ? 1
                                                    : o
                                                    ? -1
                                                    : i
                                                    ? 1
                                                    : c
                                                    ? P(c, e) - P(c, t)
                                                    : 0;
                                            if (o === i) return pe(e, t);
                                            for (n = e; (n = n.parentNode); )
                                                a.unshift(n);
                                            for (n = t; (n = n.parentNode); )
                                                s.unshift(n);
                                            for (; a[r] === s[r]; ) r++;
                                            return r
                                                ? pe(a[r], s[r])
                                                : a[r] === w
                                                ? -1
                                                : s[r] === w
                                                ? 1
                                                : 0;
                                        }),
                                  d)
                                : d;
                        }),
                        (se.matches = function(e, t) {
                            return se(e, null, null, t);
                        }),
                        (se.matchesSelector = function(e, t) {
                            if (
                                ((e.ownerDocument || e) !== d && p(e),
                                n.matchesSelector &&
                                    y &&
                                    !k[t + ' '] &&
                                    (!m || !m.test(t)) &&
                                    (!g || !g.test(t)))
                            )
                                try {
                                    var r = v.call(e, t);
                                    if (
                                        r ||
                                        n.disconnectedMatch ||
                                        (e.document &&
                                            11 !== e.document.nodeType)
                                    )
                                        return r;
                                } catch (e) {
                                    k(t, !0);
                                }
                            return se(t, d, null, [e]).length > 0;
                        }),
                        (se.contains = function(e, t) {
                            return (
                                (e.ownerDocument || e) !== d && p(e), b(e, t)
                            );
                        }),
                        (se.attr = function(e, t) {
                            (e.ownerDocument || e) !== d && p(e);
                            var o = r.attrHandle[t.toLowerCase()],
                                i =
                                    o && N.call(r.attrHandle, t.toLowerCase())
                                        ? o(e, t, !y)
                                        : void 0;
                            return void 0 !== i
                                ? i
                                : n.attributes || !y
                                ? e.getAttribute(t)
                                : (i = e.getAttributeNode(t)) && i.specified
                                ? i.value
                                : null;
                        }),
                        (se.escape = function(e) {
                            return (e + '').replace(re, oe);
                        }),
                        (se.error = function(e) {
                            throw new Error(
                                'Syntax error, unrecognized expression: ' + e
                            );
                        }),
                        (se.uniqueSort = function(e) {
                            var t,
                                r = [],
                                o = 0,
                                i = 0;
                            if (
                                ((f = !n.detectDuplicates),
                                (c = !n.sortStable && e.slice(0)),
                                e.sort(j),
                                f)
                            ) {
                                for (; (t = e[i++]); )
                                    t === e[i] && (o = r.push(i));
                                for (; o--; ) e.splice(r[o], 1);
                            }
                            return (c = null), e;
                        }),
                        (o = se.getText = function(e) {
                            var t,
                                n = '',
                                r = 0,
                                i = e.nodeType;
                            if (i) {
                                if (1 === i || 9 === i || 11 === i) {
                                    if ('string' == typeof e.textContent)
                                        return e.textContent;
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        n += o(e);
                                } else if (3 === i || 4 === i)
                                    return e.nodeValue;
                            } else for (; (t = e[r++]); ) n += o(t);
                            return n;
                        }),
                        ((r = se.selectors = {
                            cacheLength: 50,
                            createPseudo: le,
                            match: V,
                            attrHandle: {},
                            find: {},
                            relative: {
                                '>': { dir: 'parentNode', first: !0 },
                                ' ': { dir: 'parentNode' },
                                '+': { dir: 'previousSibling', first: !0 },
                                '~': { dir: 'previousSibling' }
                            },
                            preFilter: {
                                ATTR: function(e) {
                                    return (
                                        (e[1] = e[1].replace(te, ne)),
                                        (e[3] = (
                                            e[3] ||
                                            e[4] ||
                                            e[5] ||
                                            ''
                                        ).replace(te, ne)),
                                        '~=' === e[2] &&
                                            (e[3] = ' ' + e[3] + ' '),
                                        e.slice(0, 4)
                                    );
                                },
                                CHILD: function(e) {
                                    return (
                                        (e[1] = e[1].toLowerCase()),
                                        'nth' === e[1].slice(0, 3)
                                            ? (e[3] || se.error(e[0]),
                                              (e[4] = +(e[4]
                                                  ? e[5] + (e[6] || 1)
                                                  : 2 *
                                                    ('even' === e[3] ||
                                                        'odd' === e[3]))),
                                              (e[5] = +(
                                                  e[7] + e[8] || 'odd' === e[3]
                                              )))
                                            : e[3] && se.error(e[0]),
                                        e
                                    );
                                },
                                PSEUDO: function(e) {
                                    var t,
                                        n = !e[6] && e[2];
                                    return V.CHILD.test(e[0])
                                        ? null
                                        : (e[3]
                                              ? (e[2] = e[4] || e[5] || '')
                                              : n &&
                                                X.test(n) &&
                                                (t = a(n, !0)) &&
                                                (t =
                                                    n.indexOf(
                                                        ')',
                                                        n.length - t
                                                    ) - n.length) &&
                                                ((e[0] = e[0].slice(0, t)),
                                                (e[2] = n.slice(0, t))),
                                          e.slice(0, 3));
                                }
                            },
                            filter: {
                                TAG: function(e) {
                                    var t = e.replace(te, ne).toLowerCase();
                                    return '*' === e
                                        ? function() {
                                              return !0;
                                          }
                                        : function(e) {
                                              return (
                                                  e.nodeName &&
                                                  e.nodeName.toLowerCase() === t
                                              );
                                          };
                                },
                                CLASS: function(e) {
                                    var t = C[e + ' '];
                                    return (
                                        t ||
                                        ((t = new RegExp(
                                            '(^|' +
                                                H +
                                                ')' +
                                                e +
                                                '(' +
                                                H +
                                                '|$)'
                                        )) &&
                                            C(e, function(e) {
                                                return t.test(
                                                    ('string' ==
                                                        typeof e.className &&
                                                        e.className) ||
                                                        (void 0 !==
                                                            e.getAttribute &&
                                                            e.getAttribute(
                                                                'class'
                                                            )) ||
                                                        ''
                                                );
                                            }))
                                    );
                                },
                                ATTR: function(e, t, n) {
                                    return function(r) {
                                        var o = se.attr(r, e);
                                        return null == o
                                            ? '!=' === t
                                            : !t ||
                                                  ((o += ''),
                                                  '=' === t
                                                      ? o === n
                                                      : '!=' === t
                                                      ? o !== n
                                                      : '^=' === t
                                                      ? n && 0 === o.indexOf(n)
                                                      : '*=' === t
                                                      ? n && o.indexOf(n) > -1
                                                      : '$=' === t
                                                      ? n &&
                                                        o.slice(-n.length) === n
                                                      : '~=' === t
                                                      ? (
                                                            ' ' +
                                                            o.replace(U, ' ') +
                                                            ' '
                                                        ).indexOf(n) > -1
                                                      : '|=' === t &&
                                                        (o === n ||
                                                            o.slice(
                                                                0,
                                                                n.length + 1
                                                            ) ===
                                                                n + '-'));
                                    };
                                },
                                CHILD: function(e, t, n, r, o) {
                                    var i = 'nth' !== e.slice(0, 3),
                                        a = 'last' !== e.slice(-4),
                                        s = 'of-type' === t;
                                    return 1 === r && 0 === o
                                        ? function(e) {
                                              return !!e.parentNode;
                                          }
                                        : function(t, n, u) {
                                              var l,
                                                  c,
                                                  f,
                                                  p,
                                                  d,
                                                  h,
                                                  y =
                                                      i !== a
                                                          ? 'nextSibling'
                                                          : 'previousSibling',
                                                  g = t.parentNode,
                                                  m =
                                                      s &&
                                                      t.nodeName.toLowerCase(),
                                                  v = !u && !s,
                                                  b = !1;
                                              if (g) {
                                                  if (i) {
                                                      for (; y; ) {
                                                          for (
                                                              p = t;
                                                              (p = p[y]);

                                                          )
                                                              if (
                                                                  s
                                                                      ? p.nodeName.toLowerCase() ===
                                                                        m
                                                                      : 1 ===
                                                                        p.nodeType
                                                              )
                                                                  return !1;
                                                          h = y =
                                                              'only' === e &&
                                                              !h &&
                                                              'nextSibling';
                                                      }
                                                      return !0;
                                                  }
                                                  if (
                                                      ((h = [
                                                          a
                                                              ? g.firstChild
                                                              : g.lastChild
                                                      ]),
                                                      a && v)
                                                  ) {
                                                      for (
                                                          b =
                                                              (d =
                                                                  (l =
                                                                      (c =
                                                                          (f =
                                                                              (p = g)[
                                                                                  x
                                                                              ] ||
                                                                              (p[
                                                                                  x
                                                                              ] = {}))[
                                                                              p
                                                                                  .uniqueID
                                                                          ] ||
                                                                          (f[
                                                                              p.uniqueID
                                                                          ] = {}))[
                                                                          e
                                                                      ] ||
                                                                      [])[0] ===
                                                                      T &&
                                                                  l[1]) && l[2],
                                                              p =
                                                                  d &&
                                                                  g.childNodes[
                                                                      d
                                                                  ];
                                                          (p =
                                                              (++d &&
                                                                  p &&
                                                                  p[y]) ||
                                                              (b = d = 0) ||
                                                              h.pop());

                                                      )
                                                          if (
                                                              1 ===
                                                                  p.nodeType &&
                                                              ++b &&
                                                              p === t
                                                          ) {
                                                              c[e] = [T, d, b];
                                                              break;
                                                          }
                                                  } else if (
                                                      (v &&
                                                          (b = d =
                                                              (l =
                                                                  (c =
                                                                      (f =
                                                                          (p = t)[
                                                                              x
                                                                          ] ||
                                                                          (p[
                                                                              x
                                                                          ] = {}))[
                                                                          p
                                                                              .uniqueID
                                                                      ] ||
                                                                      (f[
                                                                          p.uniqueID
                                                                      ] = {}))[
                                                                      e
                                                                  ] ||
                                                                  [])[0] ===
                                                                  T && l[1]),
                                                      !1 === b)
                                                  )
                                                      for (
                                                          ;
                                                          (p =
                                                              (++d &&
                                                                  p &&
                                                                  p[y]) ||
                                                              (b = d = 0) ||
                                                              h.pop()) &&
                                                          ((s
                                                              ? p.nodeName.toLowerCase() !==
                                                                m
                                                              : 1 !==
                                                                p.nodeType) ||
                                                              !++b ||
                                                              (v &&
                                                                  ((c =
                                                                      (f =
                                                                          p[
                                                                              x
                                                                          ] ||
                                                                          (p[
                                                                              x
                                                                          ] = {}))[
                                                                          p
                                                                              .uniqueID
                                                                      ] ||
                                                                      (f[
                                                                          p.uniqueID
                                                                      ] = {}))[
                                                                      e
                                                                  ] = [T, b]),
                                                              p !== t));

                                                      );
                                                  return (
                                                      (b -= o) === r ||
                                                      (b % r == 0 && b / r >= 0)
                                                  );
                                              }
                                          };
                                },
                                PSEUDO: function(e, t) {
                                    var n,
                                        o =
                                            r.pseudos[e] ||
                                            r.setFilters[e.toLowerCase()] ||
                                            se.error(
                                                'unsupported pseudo: ' + e
                                            );
                                    return o[x]
                                        ? o(t)
                                        : o.length > 1
                                        ? ((n = [e, e, '', t]),
                                          r.setFilters.hasOwnProperty(
                                              e.toLowerCase()
                                          )
                                              ? le(function(e, n) {
                                                    for (
                                                        var r,
                                                            i = o(e, t),
                                                            a = i.length;
                                                        a--;

                                                    )
                                                        e[
                                                            (r = P(e, i[a]))
                                                        ] = !(n[r] = i[a]);
                                                })
                                              : function(e) {
                                                    return o(e, 0, n);
                                                })
                                        : o;
                                }
                            },
                            pseudos: {
                                not: le(function(e) {
                                    var t = [],
                                        n = [],
                                        r = s(e.replace(F, '$1'));
                                    return r[x]
                                        ? le(function(e, t, n, o) {
                                              for (
                                                  var i,
                                                      a = r(e, null, o, []),
                                                      s = e.length;
                                                  s--;

                                              )
                                                  (i = a[s]) &&
                                                      (e[s] = !(t[s] = i));
                                          })
                                        : function(e, o, i) {
                                              return (
                                                  (t[0] = e),
                                                  r(t, null, i, n),
                                                  (t[0] = null),
                                                  !n.pop()
                                              );
                                          };
                                }),
                                has: le(function(e) {
                                    return function(t) {
                                        return se(e, t).length > 0;
                                    };
                                }),
                                contains: le(function(e) {
                                    return (
                                        (e = e.replace(te, ne)),
                                        function(t) {
                                            return (
                                                (t.textContent || o(t)).indexOf(
                                                    e
                                                ) > -1
                                            );
                                        }
                                    );
                                }),
                                lang: le(function(e) {
                                    return (
                                        G.test(e || '') ||
                                            se.error('unsupported lang: ' + e),
                                        (e = e.replace(te, ne).toLowerCase()),
                                        function(t) {
                                            var n;
                                            do {
                                                if (
                                                    (n = y
                                                        ? t.lang
                                                        : t.getAttribute(
                                                              'xml:lang'
                                                          ) ||
                                                          t.getAttribute(
                                                              'lang'
                                                          ))
                                                )
                                                    return (
                                                        (n = n.toLowerCase()) ===
                                                            e ||
                                                        0 === n.indexOf(e + '-')
                                                    );
                                            } while (
                                                (t = t.parentNode) &&
                                                1 === t.nodeType
                                            );
                                            return !1;
                                        }
                                    );
                                }),
                                target: function(t) {
                                    var n = e.location && e.location.hash;
                                    return n && n.slice(1) === t.id;
                                },
                                root: function(e) {
                                    return e === h;
                                },
                                focus: function(e) {
                                    return (
                                        e === d.activeElement &&
                                        (!d.hasFocus || d.hasFocus()) &&
                                        !!(e.type || e.href || ~e.tabIndex)
                                    );
                                },
                                enabled: ye(!1),
                                disabled: ye(!0),
                                checked: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return (
                                        ('input' === t && !!e.checked) ||
                                        ('option' === t && !!e.selected)
                                    );
                                },
                                selected: function(e) {
                                    return (
                                        e.parentNode &&
                                            e.parentNode.selectedIndex,
                                        !0 === e.selected
                                    );
                                },
                                empty: function(e) {
                                    for (e = e.firstChild; e; e = e.nextSibling)
                                        if (e.nodeType < 6) return !1;
                                    return !0;
                                },
                                parent: function(e) {
                                    return !r.pseudos.empty(e);
                                },
                                header: function(e) {
                                    return Y.test(e.nodeName);
                                },
                                input: function(e) {
                                    return Q.test(e.nodeName);
                                },
                                button: function(e) {
                                    var t = e.nodeName.toLowerCase();
                                    return (
                                        ('input' === t &&
                                            'button' === e.type) ||
                                        'button' === t
                                    );
                                },
                                text: function(e) {
                                    var t;
                                    return (
                                        'input' === e.nodeName.toLowerCase() &&
                                        'text' === e.type &&
                                        (null == (t = e.getAttribute('type')) ||
                                            'text' === t.toLowerCase())
                                    );
                                },
                                first: ge(function() {
                                    return [0];
                                }),
                                last: ge(function(e, t) {
                                    return [t - 1];
                                }),
                                eq: ge(function(e, t, n) {
                                    return [n < 0 ? n + t : n];
                                }),
                                even: ge(function(e, t) {
                                    for (var n = 0; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                odd: ge(function(e, t) {
                                    for (var n = 1; n < t; n += 2) e.push(n);
                                    return e;
                                }),
                                lt: ge(function(e, t, n) {
                                    for (
                                        var r = n < 0 ? n + t : n > t ? t : n;
                                        --r >= 0;

                                    )
                                        e.push(r);
                                    return e;
                                }),
                                gt: ge(function(e, t, n) {
                                    for (var r = n < 0 ? n + t : n; ++r < t; )
                                        e.push(r);
                                    return e;
                                })
                            }
                        }).pseudos.nth = r.pseudos.eq),
                        {
                            radio: !0,
                            checkbox: !0,
                            file: !0,
                            password: !0,
                            image: !0
                        }))
                            r.pseudos[t] = de(t);
                        for (t in { submit: !0, reset: !0 })
                            r.pseudos[t] = he(t);
                        function ve() {}
                        function be(e) {
                            for (var t = 0, n = e.length, r = ''; t < n; t++)
                                r += e[t].value;
                            return r;
                        }
                        function xe(e, t, n) {
                            var r = t.dir,
                                o = t.next,
                                i = o || r,
                                a = n && 'parentNode' === i,
                                s = E++;
                            return t.first
                                ? function(t, n, o) {
                                      for (; (t = t[r]); )
                                          if (1 === t.nodeType || a)
                                              return e(t, n, o);
                                      return !1;
                                  }
                                : function(t, n, u) {
                                      var l,
                                          c,
                                          f,
                                          p = [T, s];
                                      if (u) {
                                          for (; (t = t[r]); )
                                              if (
                                                  (1 === t.nodeType || a) &&
                                                  e(t, n, u)
                                              )
                                                  return !0;
                                      } else
                                          for (; (t = t[r]); )
                                              if (1 === t.nodeType || a)
                                                  if (
                                                      ((c =
                                                          (f =
                                                              t[x] ||
                                                              (t[x] = {}))[
                                                              t.uniqueID
                                                          ] ||
                                                          (f[t.uniqueID] = {})),
                                                      o &&
                                                          o ===
                                                              t.nodeName.toLowerCase())
                                                  )
                                                      t = t[r] || t;
                                                  else {
                                                      if (
                                                          (l = c[i]) &&
                                                          l[0] === T &&
                                                          l[1] === s
                                                      )
                                                          return (p[2] = l[2]);
                                                      if (
                                                          ((c[i] = p),
                                                          (p[2] = e(t, n, u)))
                                                      )
                                                          return !0;
                                                  }
                                      return !1;
                                  };
                        }
                        function we(e) {
                            return e.length > 1
                                ? function(t, n, r) {
                                      for (var o = e.length; o--; )
                                          if (!e[o](t, n, r)) return !1;
                                      return !0;
                                  }
                                : e[0];
                        }
                        function Te(e, t, n, r, o) {
                            for (
                                var i,
                                    a = [],
                                    s = 0,
                                    u = e.length,
                                    l = null != t;
                                s < u;
                                s++
                            )
                                (i = e[s]) &&
                                    ((n && !n(i, r, o)) ||
                                        (a.push(i), l && t.push(s)));
                            return a;
                        }
                        function Ee(e, t, n, r, o, i) {
                            return (
                                r && !r[x] && (r = Ee(r)),
                                o && !o[x] && (o = Ee(o, i)),
                                le(function(i, a, s, u) {
                                    var l,
                                        c,
                                        f,
                                        p = [],
                                        d = [],
                                        h = a.length,
                                        y =
                                            i ||
                                            (function(e, t, n) {
                                                for (
                                                    var r = 0, o = t.length;
                                                    r < o;
                                                    r++
                                                )
                                                    se(e, t[r], n);
                                                return n;
                                            })(
                                                t || '*',
                                                s.nodeType ? [s] : s,
                                                []
                                            ),
                                        g =
                                            !e || (!i && t)
                                                ? y
                                                : Te(y, p, e, s, u),
                                        m = n
                                            ? o || (i ? e : h || r)
                                                ? []
                                                : a
                                            : g;
                                    if ((n && n(g, m, s, u), r))
                                        for (
                                            l = Te(m, d),
                                                r(l, [], s, u),
                                                c = l.length;
                                            c--;

                                        )
                                            (f = l[c]) &&
                                                (m[d[c]] = !(g[d[c]] = f));
                                    if (i) {
                                        if (o || e) {
                                            if (o) {
                                                for (
                                                    l = [], c = m.length;
                                                    c--;

                                                )
                                                    (f = m[c]) &&
                                                        l.push((g[c] = f));
                                                o(null, (m = []), l, u);
                                            }
                                            for (c = m.length; c--; )
                                                (f = m[c]) &&
                                                    (l = o ? P(i, f) : p[c]) >
                                                        -1 &&
                                                    (i[l] = !(a[l] = f));
                                        }
                                    } else (m = Te(m === a ? m.splice(h, m.length) : m)), o ? o(null, a, m, u) : q.apply(a, m);
                                })
                            );
                        }
                        function Ce(e) {
                            for (
                                var t,
                                    n,
                                    o,
                                    i = e.length,
                                    a = r.relative[e[0].type],
                                    s = a || r.relative[' '],
                                    u = a ? 1 : 0,
                                    c = xe(
                                        function(e) {
                                            return e === t;
                                        },
                                        s,
                                        !0
                                    ),
                                    f = xe(
                                        function(e) {
                                            return P(t, e) > -1;
                                        },
                                        s,
                                        !0
                                    ),
                                    p = [
                                        function(e, n, r) {
                                            var o =
                                                (!a && (r || n !== l)) ||
                                                ((t = n).nodeType
                                                    ? c(e, n, r)
                                                    : f(e, n, r));
                                            return (t = null), o;
                                        }
                                    ];
                                u < i;
                                u++
                            )
                                if ((n = r.relative[e[u].type]))
                                    p = [xe(we(p), n)];
                                else {
                                    if (
                                        (n = r.filter[e[u].type].apply(
                                            null,
                                            e[u].matches
                                        ))[x]
                                    ) {
                                        for (
                                            o = ++u;
                                            o < i && !r.relative[e[o].type];
                                            o++
                                        );
                                        return Ee(
                                            u > 1 && we(p),
                                            u > 1 &&
                                                be(
                                                    e
                                                        .slice(0, u - 1)
                                                        .concat({
                                                            value:
                                                                ' ' ===
                                                                e[u - 2].type
                                                                    ? '*'
                                                                    : ''
                                                        })
                                                ).replace(F, '$1'),
                                            n,
                                            u < o && Ce(e.slice(u, o)),
                                            o < i && Ce((e = e.slice(o))),
                                            o < i && be(e)
                                        );
                                    }
                                    p.push(n);
                                }
                            return we(p);
                        }
                        return (
                            (ve.prototype = r.filters = r.pseudos),
                            (r.setFilters = new ve()),
                            (a = se.tokenize = function(e, t) {
                                var n,
                                    o,
                                    i,
                                    a,
                                    s,
                                    u,
                                    l,
                                    c = A[e + ' '];
                                if (c) return t ? 0 : c.slice(0);
                                for (s = e, u = [], l = r.preFilter; s; ) {
                                    for (a in ((n && !(o = $.exec(s))) ||
                                        (o && (s = s.slice(o[0].length) || s),
                                        u.push((i = []))),
                                    (n = !1),
                                    (o = W.exec(s)) &&
                                        ((n = o.shift()),
                                        i.push({
                                            value: n,
                                            type: o[0].replace(F, ' ')
                                        }),
                                        (s = s.slice(n.length))),
                                    r.filter))
                                        !(o = V[a].exec(s)) ||
                                            (l[a] && !(o = l[a](o))) ||
                                            ((n = o.shift()),
                                            i.push({
                                                value: n,
                                                type: a,
                                                matches: o
                                            }),
                                            (s = s.slice(n.length)));
                                    if (!n) break;
                                }
                                return t
                                    ? s.length
                                    : s
                                    ? se.error(e)
                                    : A(e, u).slice(0);
                            }),
                            (s = se.compile = function(e, t) {
                                var n,
                                    o = [],
                                    i = [],
                                    s = S[e + ' '];
                                if (!s) {
                                    for (t || (t = a(e)), n = t.length; n--; )
                                        (s = Ce(t[n]))[x]
                                            ? o.push(s)
                                            : i.push(s);
                                    (s = S(
                                        e,
                                        (function(e, t) {
                                            var n = t.length > 0,
                                                o = e.length > 0,
                                                i = function(i, a, s, u, c) {
                                                    var f,
                                                        h,
                                                        g,
                                                        m = 0,
                                                        v = '0',
                                                        b = i && [],
                                                        x = [],
                                                        w = l,
                                                        E =
                                                            i ||
                                                            (o &&
                                                                r.find.TAG(
                                                                    '*',
                                                                    c
                                                                )),
                                                        C = (T +=
                                                            null == w
                                                                ? 1
                                                                : Math.random() ||
                                                                  0.1),
                                                        A = E.length;
                                                    for (
                                                        c &&
                                                        (l = a === d || a || c);
                                                        v !== A &&
                                                        null != (f = E[v]);
                                                        v++
                                                    ) {
                                                        if (o && f) {
                                                            for (
                                                                h = 0,
                                                                    a ||
                                                                        f.ownerDocument ===
                                                                            d ||
                                                                        (p(f),
                                                                        (s = !y));
                                                                (g = e[h++]);

                                                            )
                                                                if (
                                                                    g(
                                                                        f,
                                                                        a || d,
                                                                        s
                                                                    )
                                                                ) {
                                                                    u.push(f);
                                                                    break;
                                                                }
                                                            c && (T = C);
                                                        }
                                                        n &&
                                                            ((f = !g && f) &&
                                                                m--,
                                                            i && b.push(f));
                                                    }
                                                    if (
                                                        ((m += v), n && v !== m)
                                                    ) {
                                                        for (
                                                            h = 0;
                                                            (g = t[h++]);

                                                        )
                                                            g(b, x, a, s);
                                                        if (i) {
                                                            if (m > 0)
                                                                for (; v--; )
                                                                    b[v] ||
                                                                        x[v] ||
                                                                        (x[
                                                                            v
                                                                        ] = L.call(
                                                                            u
                                                                        ));
                                                            x = Te(x);
                                                        }
                                                        q.apply(u, x),
                                                            c &&
                                                                !i &&
                                                                x.length > 0 &&
                                                                m + t.length >
                                                                    1 &&
                                                                se.uniqueSort(
                                                                    u
                                                                );
                                                    }
                                                    return (
                                                        c && ((T = C), (l = w)),
                                                        b
                                                    );
                                                };
                                            return n ? le(i) : i;
                                        })(i, o)
                                    )).selector = e;
                                }
                                return s;
                            }),
                            (u = se.select = function(e, t, n, o) {
                                var i,
                                    u,
                                    l,
                                    c,
                                    f,
                                    p = 'function' == typeof e && e,
                                    d = !o && a((e = p.selector || e));
                                if (((n = n || []), 1 === d.length)) {
                                    if (
                                        (u = d[0] = d[0].slice(0)).length > 2 &&
                                        'ID' === (l = u[0]).type &&
                                        9 === t.nodeType &&
                                        y &&
                                        r.relative[u[1].type]
                                    ) {
                                        if (
                                            !(t = (r.find.ID(
                                                l.matches[0].replace(te, ne),
                                                t
                                            ) || [])[0])
                                        )
                                            return n;
                                        p && (t = t.parentNode),
                                            (e = e.slice(
                                                u.shift().value.length
                                            ));
                                    }
                                    for (
                                        i = V.needsContext.test(e)
                                            ? 0
                                            : u.length;
                                        i-- &&
                                        ((l = u[i]), !r.relative[(c = l.type)]);

                                    )
                                        if (
                                            (f = r.find[c]) &&
                                            (o = f(
                                                l.matches[0].replace(te, ne),
                                                (ee.test(u[0].type) &&
                                                    me(t.parentNode)) ||
                                                    t
                                            ))
                                        ) {
                                            if (
                                                (u.splice(i, 1),
                                                !(e = o.length && be(u)))
                                            )
                                                return q.apply(n, o), n;
                                            break;
                                        }
                                }
                                return (
                                    (p || s(e, d))(
                                        o,
                                        t,
                                        !y,
                                        n,
                                        !t ||
                                            (ee.test(e) && me(t.parentNode)) ||
                                            t
                                    ),
                                    n
                                );
                            }),
                            (n.sortStable =
                                x
                                    .split('')
                                    .sort(j)
                                    .join('') === x),
                            (n.detectDuplicates = !!f),
                            p(),
                            (n.sortDetached = ce(function(e) {
                                return (
                                    1 &
                                    e.compareDocumentPosition(
                                        d.createElement('fieldset')
                                    )
                                );
                            })),
                            ce(function(e) {
                                return (
                                    (e.innerHTML = "<a href='#'></a>"),
                                    '#' === e.firstChild.getAttribute('href')
                                );
                            }) ||
                                fe('type|href|height|width', function(e, t, n) {
                                    if (!n)
                                        return e.getAttribute(
                                            t,
                                            'type' === t.toLowerCase() ? 1 : 2
                                        );
                                }),
                            (n.attributes &&
                                ce(function(e) {
                                    return (
                                        (e.innerHTML = '<input/>'),
                                        e.firstChild.setAttribute('value', ''),
                                        '' ===
                                            e.firstChild.getAttribute('value')
                                    );
                                })) ||
                                fe('value', function(e, t, n) {
                                    if (
                                        !n &&
                                        'input' === e.nodeName.toLowerCase()
                                    )
                                        return e.defaultValue;
                                }),
                            ce(function(e) {
                                return null == e.getAttribute('disabled');
                            }) ||
                                fe(R, function(e, t, n) {
                                    var r;
                                    if (!n)
                                        return !0 === e[t]
                                            ? t.toLowerCase()
                                            : (r = e.getAttributeNode(t)) &&
                                              r.specified
                                            ? r.value
                                            : null;
                                }),
                            se
                        );
                    })(n);
                (E.find = S),
                    (E.expr = S.selectors),
                    (E.expr[':'] = E.expr.pseudos),
                    (E.uniqueSort = E.unique = S.uniqueSort),
                    (E.text = S.getText),
                    (E.isXMLDoc = S.isXML),
                    (E.contains = S.contains),
                    (E.escapeSelector = S.escape);
                var k = function(e, t, n) {
                        for (
                            var r = [], o = void 0 !== n;
                            (e = e[t]) && 9 !== e.nodeType;

                        )
                            if (1 === e.nodeType) {
                                if (o && E(e).is(n)) break;
                                r.push(e);
                            }
                        return r;
                    },
                    j = function(e, t) {
                        for (var n = []; e; e = e.nextSibling)
                            1 === e.nodeType && e !== t && n.push(e);
                        return n;
                    },
                    N = E.expr.match.needsContext;
                function D(e, t) {
                    return (
                        e.nodeName &&
                        e.nodeName.toLowerCase() === t.toLowerCase()
                    );
                }
                var L = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
                function O(e, t, n) {
                    return v(t)
                        ? E.grep(e, function(e, r) {
                              return !!t.call(e, r, e) !== n;
                          })
                        : t.nodeType
                        ? E.grep(e, function(e) {
                              return (e === t) !== n;
                          })
                        : 'string' != typeof t
                        ? E.grep(e, function(e) {
                              return f.call(t, e) > -1 !== n;
                          })
                        : E.filter(t, e, n);
                }
                (E.filter = function(e, t, n) {
                    var r = t[0];
                    return (
                        n && (e = ':not(' + e + ')'),
                        1 === t.length && 1 === r.nodeType
                            ? E.find.matchesSelector(r, e)
                                ? [r]
                                : []
                            : E.find.matches(
                                  e,
                                  E.grep(t, function(e) {
                                      return 1 === e.nodeType;
                                  })
                              )
                    );
                }),
                    E.fn.extend({
                        find: function(e) {
                            var t,
                                n,
                                r = this.length,
                                o = this;
                            if ('string' != typeof e)
                                return this.pushStack(
                                    E(e).filter(function() {
                                        for (t = 0; t < r; t++)
                                            if (E.contains(o[t], this))
                                                return !0;
                                    })
                                );
                            for (n = this.pushStack([]), t = 0; t < r; t++)
                                E.find(e, o[t], n);
                            return r > 1 ? E.uniqueSort(n) : n;
                        },
                        filter: function(e) {
                            return this.pushStack(O(this, e || [], !1));
                        },
                        not: function(e) {
                            return this.pushStack(O(this, e || [], !0));
                        },
                        is: function(e) {
                            return !!O(
                                this,
                                'string' == typeof e && N.test(e)
                                    ? E(e)
                                    : e || [],
                                !1
                            ).length;
                        }
                    });
                var q,
                    _ = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
                ((E.fn.init = function(e, t, n) {
                    var r, o;
                    if (!e) return this;
                    if (((n = n || q), 'string' == typeof e)) {
                        if (
                            !(r =
                                '<' === e[0] &&
                                '>' === e[e.length - 1] &&
                                e.length >= 3
                                    ? [null, e, null]
                                    : _.exec(e)) ||
                            (!r[1] && t)
                        )
                            return !t || t.jquery
                                ? (t || n).find(e)
                                : this.constructor(t).find(e);
                        if (r[1]) {
                            if (
                                ((t = t instanceof E ? t[0] : t),
                                E.merge(
                                    this,
                                    E.parseHTML(
                                        r[1],
                                        t && t.nodeType
                                            ? t.ownerDocument || t
                                            : a,
                                        !0
                                    )
                                ),
                                L.test(r[1]) && E.isPlainObject(t))
                            )
                                for (r in t)
                                    v(this[r])
                                        ? this[r](t[r])
                                        : this.attr(r, t[r]);
                            return this;
                        }
                        return (
                            (o = a.getElementById(r[2])) &&
                                ((this[0] = o), (this.length = 1)),
                            this
                        );
                    }
                    return e.nodeType
                        ? ((this[0] = e), (this.length = 1), this)
                        : v(e)
                        ? void 0 !== n.ready
                            ? n.ready(e)
                            : e(E)
                        : E.makeArray(e, this);
                }).prototype = E.fn),
                    (q = E(a));
                var P = /^(?:parents|prev(?:Until|All))/,
                    R = { children: !0, contents: !0, next: !0, prev: !0 };
                function H(e, t) {
                    for (; (e = e[t]) && 1 !== e.nodeType; );
                    return e;
                }
                E.fn.extend({
                    has: function(e) {
                        var t = E(e, this),
                            n = t.length;
                        return this.filter(function() {
                            for (var e = 0; e < n; e++)
                                if (E.contains(this, t[e])) return !0;
                        });
                    },
                    closest: function(e, t) {
                        var n,
                            r = 0,
                            o = this.length,
                            i = [],
                            a = 'string' != typeof e && E(e);
                        if (!N.test(e))
                            for (; r < o; r++)
                                for (
                                    n = this[r];
                                    n && n !== t;
                                    n = n.parentNode
                                )
                                    if (
                                        n.nodeType < 11 &&
                                        (a
                                            ? a.index(n) > -1
                                            : 1 === n.nodeType &&
                                              E.find.matchesSelector(n, e))
                                    ) {
                                        i.push(n);
                                        break;
                                    }
                        return this.pushStack(
                            i.length > 1 ? E.uniqueSort(i) : i
                        );
                    },
                    index: function(e) {
                        return e
                            ? 'string' == typeof e
                                ? f.call(E(e), this[0])
                                : f.call(this, e.jquery ? e[0] : e)
                            : this[0] && this[0].parentNode
                            ? this.first().prevAll().length
                            : -1;
                    },
                    add: function(e, t) {
                        return this.pushStack(
                            E.uniqueSort(E.merge(this.get(), E(e, t)))
                        );
                    },
                    addBack: function(e) {
                        return this.add(
                            null == e
                                ? this.prevObject
                                : this.prevObject.filter(e)
                        );
                    }
                }),
                    E.each(
                        {
                            parent: function(e) {
                                var t = e.parentNode;
                                return t && 11 !== t.nodeType ? t : null;
                            },
                            parents: function(e) {
                                return k(e, 'parentNode');
                            },
                            parentsUntil: function(e, t, n) {
                                return k(e, 'parentNode', n);
                            },
                            next: function(e) {
                                return H(e, 'nextSibling');
                            },
                            prev: function(e) {
                                return H(e, 'previousSibling');
                            },
                            nextAll: function(e) {
                                return k(e, 'nextSibling');
                            },
                            prevAll: function(e) {
                                return k(e, 'previousSibling');
                            },
                            nextUntil: function(e, t, n) {
                                return k(e, 'nextSibling', n);
                            },
                            prevUntil: function(e, t, n) {
                                return k(e, 'previousSibling', n);
                            },
                            siblings: function(e) {
                                return j((e.parentNode || {}).firstChild, e);
                            },
                            children: function(e) {
                                return j(e.firstChild);
                            },
                            contents: function(e) {
                                return void 0 !== e.contentDocument
                                    ? e.contentDocument
                                    : (D(e, 'template') && (e = e.content || e),
                                      E.merge([], e.childNodes));
                            }
                        },
                        function(e, t) {
                            E.fn[e] = function(n, r) {
                                var o = E.map(this, t, n);
                                return (
                                    'Until' !== e.slice(-5) && (r = n),
                                    r &&
                                        'string' == typeof r &&
                                        (o = E.filter(r, o)),
                                    this.length > 1 &&
                                        (R[e] || E.uniqueSort(o),
                                        P.test(e) && o.reverse()),
                                    this.pushStack(o)
                                );
                            };
                        }
                    );
                var B = /[^\x20\t\r\n\f]+/g;
                function I(e) {
                    return e;
                }
                function M(e) {
                    throw e;
                }
                function U(e, t, n, r) {
                    var o;
                    try {
                        e && v((o = e.promise))
                            ? o
                                  .call(e)
                                  .done(t)
                                  .fail(n)
                            : e && v((o = e.then))
                            ? o.call(e, t, n)
                            : t.apply(void 0, [e].slice(r));
                    } catch (e) {
                        n.apply(void 0, [e]);
                    }
                }
                (E.Callbacks = function(e) {
                    e =
                        'string' == typeof e
                            ? (function(e) {
                                  var t = {};
                                  return (
                                      E.each(e.match(B) || [], function(e, n) {
                                          t[n] = !0;
                                      }),
                                      t
                                  );
                              })(e)
                            : E.extend({}, e);
                    var t,
                        n,
                        r,
                        o,
                        i = [],
                        a = [],
                        s = -1,
                        u = function() {
                            for (o = o || e.once, r = t = !0; a.length; s = -1)
                                for (n = a.shift(); ++s < i.length; )
                                    !1 === i[s].apply(n[0], n[1]) &&
                                        e.stopOnFalse &&
                                        ((s = i.length), (n = !1));
                            e.memory || (n = !1),
                                (t = !1),
                                o && (i = n ? [] : '');
                        },
                        l = {
                            add: function() {
                                return (
                                    i &&
                                        (n &&
                                            !t &&
                                            ((s = i.length - 1), a.push(n)),
                                        (function t(n) {
                                            E.each(n, function(n, r) {
                                                v(r)
                                                    ? (e.unique && l.has(r)) ||
                                                      i.push(r)
                                                    : r &&
                                                      r.length &&
                                                      'string' !== T(r) &&
                                                      t(r);
                                            });
                                        })(arguments),
                                        n && !t && u()),
                                    this
                                );
                            },
                            remove: function() {
                                return (
                                    E.each(arguments, function(e, t) {
                                        for (
                                            var n;
                                            (n = E.inArray(t, i, n)) > -1;

                                        )
                                            i.splice(n, 1), n <= s && s--;
                                    }),
                                    this
                                );
                            },
                            has: function(e) {
                                return e ? E.inArray(e, i) > -1 : i.length > 0;
                            },
                            empty: function() {
                                return i && (i = []), this;
                            },
                            disable: function() {
                                return (o = a = []), (i = n = ''), this;
                            },
                            disabled: function() {
                                return !i;
                            },
                            lock: function() {
                                return (
                                    (o = a = []), n || t || (i = n = ''), this
                                );
                            },
                            locked: function() {
                                return !!o;
                            },
                            fireWith: function(e, n) {
                                return (
                                    o ||
                                        ((n = [
                                            e,
                                            (n = n || []).slice ? n.slice() : n
                                        ]),
                                        a.push(n),
                                        t || u()),
                                    this
                                );
                            },
                            fire: function() {
                                return l.fireWith(this, arguments), this;
                            },
                            fired: function() {
                                return !!r;
                            }
                        };
                    return l;
                }),
                    E.extend({
                        Deferred: function(e) {
                            var t = [
                                    [
                                        'notify',
                                        'progress',
                                        E.Callbacks('memory'),
                                        E.Callbacks('memory'),
                                        2
                                    ],
                                    [
                                        'resolve',
                                        'done',
                                        E.Callbacks('once memory'),
                                        E.Callbacks('once memory'),
                                        0,
                                        'resolved'
                                    ],
                                    [
                                        'reject',
                                        'fail',
                                        E.Callbacks('once memory'),
                                        E.Callbacks('once memory'),
                                        1,
                                        'rejected'
                                    ]
                                ],
                                r = 'pending',
                                o = {
                                    state: function() {
                                        return r;
                                    },
                                    always: function() {
                                        return (
                                            i.done(arguments).fail(arguments),
                                            this
                                        );
                                    },
                                    catch: function(e) {
                                        return o.then(null, e);
                                    },
                                    pipe: function() {
                                        var e = arguments;
                                        return E.Deferred(function(n) {
                                            E.each(t, function(t, r) {
                                                var o = v(e[r[4]]) && e[r[4]];
                                                i[r[1]](function() {
                                                    var e =
                                                        o &&
                                                        o.apply(
                                                            this,
                                                            arguments
                                                        );
                                                    e && v(e.promise)
                                                        ? e
                                                              .promise()
                                                              .progress(
                                                                  n.notify
                                                              )
                                                              .done(n.resolve)
                                                              .fail(n.reject)
                                                        : n[r[0] + 'With'](
                                                              this,
                                                              o
                                                                  ? [e]
                                                                  : arguments
                                                          );
                                                });
                                            }),
                                                (e = null);
                                        }).promise();
                                    },
                                    then: function(e, r, o) {
                                        var i = 0;
                                        function a(e, t, r, o) {
                                            return function() {
                                                var s = this,
                                                    u = arguments,
                                                    l = function() {
                                                        var n, l;
                                                        if (!(e < i)) {
                                                            if (
                                                                (n = r.apply(
                                                                    s,
                                                                    u
                                                                )) ===
                                                                t.promise()
                                                            )
                                                                throw new TypeError(
                                                                    'Thenable self-resolution'
                                                                );
                                                            (l =
                                                                n &&
                                                                ('object' ==
                                                                    typeof n ||
                                                                    'function' ==
                                                                        typeof n) &&
                                                                n.then),
                                                                v(l)
                                                                    ? o
                                                                        ? l.call(
                                                                              n,
                                                                              a(
                                                                                  i,
                                                                                  t,
                                                                                  I,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  t,
                                                                                  M,
                                                                                  o
                                                                              )
                                                                          )
                                                                        : (i++,
                                                                          l.call(
                                                                              n,
                                                                              a(
                                                                                  i,
                                                                                  t,
                                                                                  I,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  t,
                                                                                  M,
                                                                                  o
                                                                              ),
                                                                              a(
                                                                                  i,
                                                                                  t,
                                                                                  I,
                                                                                  t.notifyWith
                                                                              )
                                                                          ))
                                                                    : (r !==
                                                                          I &&
                                                                          ((s = void 0),
                                                                          (u = [
                                                                              n
                                                                          ])),
                                                                      (o ||
                                                                          t.resolveWith)(
                                                                          s,
                                                                          u
                                                                      ));
                                                        }
                                                    },
                                                    c = o
                                                        ? l
                                                        : function() {
                                                              try {
                                                                  l();
                                                              } catch (n) {
                                                                  E.Deferred
                                                                      .exceptionHook &&
                                                                      E.Deferred.exceptionHook(
                                                                          n,
                                                                          c.stackTrace
                                                                      ),
                                                                      e + 1 >=
                                                                          i &&
                                                                          (r !==
                                                                              M &&
                                                                              ((s = void 0),
                                                                              (u = [
                                                                                  n
                                                                              ])),
                                                                          t.rejectWith(
                                                                              s,
                                                                              u
                                                                          ));
                                                              }
                                                          };
                                                e
                                                    ? c()
                                                    : (E.Deferred
                                                          .getStackHook &&
                                                          (c.stackTrace = E.Deferred.getStackHook()),
                                                      n.setTimeout(c));
                                            };
                                        }
                                        return E.Deferred(function(n) {
                                            t[0][3].add(
                                                a(
                                                    0,
                                                    n,
                                                    v(o) ? o : I,
                                                    n.notifyWith
                                                )
                                            ),
                                                t[1][3].add(
                                                    a(0, n, v(e) ? e : I)
                                                ),
                                                t[2][3].add(
                                                    a(0, n, v(r) ? r : M)
                                                );
                                        }).promise();
                                    },
                                    promise: function(e) {
                                        return null != e ? E.extend(e, o) : o;
                                    }
                                },
                                i = {};
                            return (
                                E.each(t, function(e, n) {
                                    var a = n[2],
                                        s = n[5];
                                    (o[n[1]] = a.add),
                                        s &&
                                            a.add(
                                                function() {
                                                    r = s;
                                                },
                                                t[3 - e][2].disable,
                                                t[3 - e][3].disable,
                                                t[0][2].lock,
                                                t[0][3].lock
                                            ),
                                        a.add(n[3].fire),
                                        (i[n[0]] = function() {
                                            return (
                                                i[n[0] + 'With'](
                                                    this === i ? void 0 : this,
                                                    arguments
                                                ),
                                                this
                                            );
                                        }),
                                        (i[n[0] + 'With'] = a.fireWith);
                                }),
                                o.promise(i),
                                e && e.call(i, i),
                                i
                            );
                        },
                        when: function(e) {
                            var t = arguments.length,
                                n = t,
                                r = Array(n),
                                o = u.call(arguments),
                                i = E.Deferred(),
                                a = function(e) {
                                    return function(n) {
                                        (r[e] = this),
                                            (o[e] =
                                                arguments.length > 1
                                                    ? u.call(arguments)
                                                    : n),
                                            --t || i.resolveWith(r, o);
                                    };
                                };
                            if (
                                t <= 1 &&
                                (U(e, i.done(a(n)).resolve, i.reject, !t),
                                'pending' === i.state() || v(o[n] && o[n].then))
                            )
                                return i.then();
                            for (; n--; ) U(o[n], a(n), i.reject);
                            return i.promise();
                        }
                    });
                var F = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
                (E.Deferred.exceptionHook = function(e, t) {
                    n.console &&
                        n.console.warn &&
                        e &&
                        F.test(e.name) &&
                        n.console.warn(
                            'jQuery.Deferred exception: ' + e.message,
                            e.stack,
                            t
                        );
                }),
                    (E.readyException = function(e) {
                        n.setTimeout(function() {
                            throw e;
                        });
                    });
                var $ = E.Deferred();
                function W() {
                    a.removeEventListener('DOMContentLoaded', W),
                        n.removeEventListener('load', W),
                        E.ready();
                }
                (E.fn.ready = function(e) {
                    return (
                        $.then(e).catch(function(e) {
                            E.readyException(e);
                        }),
                        this
                    );
                }),
                    E.extend({
                        isReady: !1,
                        readyWait: 1,
                        ready: function(e) {
                            (!0 === e ? --E.readyWait : E.isReady) ||
                                ((E.isReady = !0),
                                (!0 !== e && --E.readyWait > 0) ||
                                    $.resolveWith(a, [E]));
                        }
                    }),
                    (E.ready.then = $.then),
                    'complete' === a.readyState ||
                    ('loading' !== a.readyState && !a.documentElement.doScroll)
                        ? n.setTimeout(E.ready)
                        : (a.addEventListener('DOMContentLoaded', W),
                          n.addEventListener('load', W));
                var z = function(e, t, n, r, o, i, a) {
                        var s = 0,
                            u = e.length,
                            l = null == n;
                        if ('object' === T(n))
                            for (s in ((o = !0), n)) z(e, t, s, n[s], !0, i, a);
                        else if (
                            void 0 !== r &&
                            ((o = !0),
                            v(r) || (a = !0),
                            l &&
                                (a
                                    ? (t.call(e, r), (t = null))
                                    : ((l = t),
                                      (t = function(e, t, n) {
                                          return l.call(E(e), n);
                                      }))),
                            t)
                        )
                            for (; s < u; s++)
                                t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
                        return o ? e : l ? t.call(e) : u ? t(e[0], n) : i;
                    },
                    X = /^-ms-/,
                    G = /-([a-z])/g;
                function V(e, t) {
                    return t.toUpperCase();
                }
                function J(e) {
                    return e.replace(X, 'ms-').replace(G, V);
                }
                var Q = function(e) {
                    return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
                };
                function Y() {
                    this.expando = E.expando + Y.uid++;
                }
                (Y.uid = 1),
                    (Y.prototype = {
                        cache: function(e) {
                            var t = e[this.expando];
                            return (
                                t ||
                                    ((t = {}),
                                    Q(e) &&
                                        (e.nodeType
                                            ? (e[this.expando] = t)
                                            : Object.defineProperty(
                                                  e,
                                                  this.expando,
                                                  { value: t, configurable: !0 }
                                              ))),
                                t
                            );
                        },
                        set: function(e, t, n) {
                            var r,
                                o = this.cache(e);
                            if ('string' == typeof t) o[J(t)] = n;
                            else for (r in t) o[J(r)] = t[r];
                            return o;
                        },
                        get: function(e, t) {
                            return void 0 === t
                                ? this.cache(e)
                                : e[this.expando] && e[this.expando][J(t)];
                        },
                        access: function(e, t, n) {
                            return void 0 === t ||
                                (t && 'string' == typeof t && void 0 === n)
                                ? this.get(e, t)
                                : (this.set(e, t, n), void 0 !== n ? n : t);
                        },
                        remove: function(e, t) {
                            var n,
                                r = e[this.expando];
                            if (void 0 !== r) {
                                if (void 0 !== t) {
                                    n = (t = Array.isArray(t)
                                        ? t.map(J)
                                        : (t = J(t)) in r
                                        ? [t]
                                        : t.match(B) || []).length;
                                    for (; n--; ) delete r[t[n]];
                                }
                                (void 0 === t || E.isEmptyObject(r)) &&
                                    (e.nodeType
                                        ? (e[this.expando] = void 0)
                                        : delete e[this.expando]);
                            }
                        },
                        hasData: function(e) {
                            var t = e[this.expando];
                            return void 0 !== t && !E.isEmptyObject(t);
                        }
                    });
                var K = new Y(),
                    Z = new Y(),
                    ee = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                    te = /[A-Z]/g;
                function ne(e, t, n) {
                    var r;
                    if (void 0 === n && 1 === e.nodeType)
                        if (
                            ((r = 'data-' + t.replace(te, '-$&').toLowerCase()),
                            'string' == typeof (n = e.getAttribute(r)))
                        ) {
                            try {
                                n = (function(e) {
                                    return (
                                        'true' === e ||
                                        ('false' !== e &&
                                            ('null' === e
                                                ? null
                                                : e === +e + ''
                                                ? +e
                                                : ee.test(e)
                                                ? JSON.parse(e)
                                                : e))
                                    );
                                })(n);
                            } catch (e) {}
                            Z.set(e, t, n);
                        } else n = void 0;
                    return n;
                }
                E.extend({
                    hasData: function(e) {
                        return Z.hasData(e) || K.hasData(e);
                    },
                    data: function(e, t, n) {
                        return Z.access(e, t, n);
                    },
                    removeData: function(e, t) {
                        Z.remove(e, t);
                    },
                    _data: function(e, t, n) {
                        return K.access(e, t, n);
                    },
                    _removeData: function(e, t) {
                        K.remove(e, t);
                    }
                }),
                    E.fn.extend({
                        data: function(e, t) {
                            var n,
                                r,
                                o,
                                i = this[0],
                                a = i && i.attributes;
                            if (void 0 === e) {
                                if (
                                    this.length &&
                                    ((o = Z.get(i)),
                                    1 === i.nodeType &&
                                        !K.get(i, 'hasDataAttrs'))
                                ) {
                                    for (n = a.length; n--; )
                                        a[n] &&
                                            0 ===
                                                (r = a[n].name).indexOf(
                                                    'data-'
                                                ) &&
                                            ((r = J(r.slice(5))),
                                            ne(i, r, o[r]));
                                    K.set(i, 'hasDataAttrs', !0);
                                }
                                return o;
                            }
                            return 'object' == typeof e
                                ? this.each(function() {
                                      Z.set(this, e);
                                  })
                                : z(
                                      this,
                                      function(t) {
                                          var n;
                                          if (i && void 0 === t)
                                              return void 0 !==
                                                  (n = Z.get(i, e))
                                                  ? n
                                                  : void 0 !== (n = ne(i, e))
                                                  ? n
                                                  : void 0;
                                          this.each(function() {
                                              Z.set(this, e, t);
                                          });
                                      },
                                      null,
                                      t,
                                      arguments.length > 1,
                                      null,
                                      !0
                                  );
                        },
                        removeData: function(e) {
                            return this.each(function() {
                                Z.remove(this, e);
                            });
                        }
                    }),
                    E.extend({
                        queue: function(e, t, n) {
                            var r;
                            if (e)
                                return (
                                    (t = (t || 'fx') + 'queue'),
                                    (r = K.get(e, t)),
                                    n &&
                                        (!r || Array.isArray(n)
                                            ? (r = K.access(
                                                  e,
                                                  t,
                                                  E.makeArray(n)
                                              ))
                                            : r.push(n)),
                                    r || []
                                );
                        },
                        dequeue: function(e, t) {
                            t = t || 'fx';
                            var n = E.queue(e, t),
                                r = n.length,
                                o = n.shift(),
                                i = E._queueHooks(e, t);
                            'inprogress' === o && ((o = n.shift()), r--),
                                o &&
                                    ('fx' === t && n.unshift('inprogress'),
                                    delete i.stop,
                                    o.call(
                                        e,
                                        function() {
                                            E.dequeue(e, t);
                                        },
                                        i
                                    )),
                                !r && i && i.empty.fire();
                        },
                        _queueHooks: function(e, t) {
                            var n = t + 'queueHooks';
                            return (
                                K.get(e, n) ||
                                K.access(e, n, {
                                    empty: E.Callbacks('once memory').add(
                                        function() {
                                            K.remove(e, [t + 'queue', n]);
                                        }
                                    )
                                })
                            );
                        }
                    }),
                    E.fn.extend({
                        queue: function(e, t) {
                            var n = 2;
                            return (
                                'string' != typeof e &&
                                    ((t = e), (e = 'fx'), n--),
                                arguments.length < n
                                    ? E.queue(this[0], e)
                                    : void 0 === t
                                    ? this
                                    : this.each(function() {
                                          var n = E.queue(this, e, t);
                                          E._queueHooks(this, e),
                                              'fx' === e &&
                                                  'inprogress' !== n[0] &&
                                                  E.dequeue(this, e);
                                      })
                            );
                        },
                        dequeue: function(e) {
                            return this.each(function() {
                                E.dequeue(this, e);
                            });
                        },
                        clearQueue: function(e) {
                            return this.queue(e || 'fx', []);
                        },
                        promise: function(e, t) {
                            var n,
                                r = 1,
                                o = E.Deferred(),
                                i = this,
                                a = this.length,
                                s = function() {
                                    --r || o.resolveWith(i, [i]);
                                };
                            for (
                                'string' != typeof e && ((t = e), (e = void 0)),
                                    e = e || 'fx';
                                a--;

                            )
                                (n = K.get(i[a], e + 'queueHooks')) &&
                                    n.empty &&
                                    (r++, n.empty.add(s));
                            return s(), o.promise(t);
                        }
                    });
                var re = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                    oe = new RegExp('^(?:([+-])=|)(' + re + ')([a-z%]*)$', 'i'),
                    ie = ['Top', 'Right', 'Bottom', 'Left'],
                    ae = a.documentElement,
                    se = function(e) {
                        return E.contains(e.ownerDocument, e);
                    },
                    ue = { composed: !0 };
                ae.getRootNode &&
                    (se = function(e) {
                        return (
                            E.contains(e.ownerDocument, e) ||
                            e.getRootNode(ue) === e.ownerDocument
                        );
                    });
                var le = function(e, t) {
                        return (
                            'none' === (e = t || e).style.display ||
                            ('' === e.style.display &&
                                se(e) &&
                                'none' === E.css(e, 'display'))
                        );
                    },
                    ce = function(e, t, n, r) {
                        var o,
                            i,
                            a = {};
                        for (i in t) (a[i] = e.style[i]), (e.style[i] = t[i]);
                        for (i in ((o = n.apply(e, r || [])), t))
                            e.style[i] = a[i];
                        return o;
                    };
                function fe(e, t, n, r) {
                    var o,
                        i,
                        a = 20,
                        s = r
                            ? function() {
                                  return r.cur();
                              }
                            : function() {
                                  return E.css(e, t, '');
                              },
                        u = s(),
                        l = (n && n[3]) || (E.cssNumber[t] ? '' : 'px'),
                        c =
                            e.nodeType &&
                            (E.cssNumber[t] || ('px' !== l && +u)) &&
                            oe.exec(E.css(e, t));
                    if (c && c[3] !== l) {
                        for (u /= 2, l = l || c[3], c = +u || 1; a--; )
                            E.style(e, t, c + l),
                                (1 - i) * (1 - (i = s() / u || 0.5)) <= 0 &&
                                    (a = 0),
                                (c /= i);
                        (c *= 2), E.style(e, t, c + l), (n = n || []);
                    }
                    return (
                        n &&
                            ((c = +c || +u || 0),
                            (o = n[1] ? c + (n[1] + 1) * n[2] : +n[2]),
                            r && ((r.unit = l), (r.start = c), (r.end = o))),
                        o
                    );
                }
                var pe = {};
                function de(e) {
                    var t,
                        n = e.ownerDocument,
                        r = e.nodeName,
                        o = pe[r];
                    return (
                        o ||
                        ((t = n.body.appendChild(n.createElement(r))),
                        (o = E.css(t, 'display')),
                        t.parentNode.removeChild(t),
                        'none' === o && (o = 'block'),
                        (pe[r] = o),
                        o)
                    );
                }
                function he(e, t) {
                    for (var n, r, o = [], i = 0, a = e.length; i < a; i++)
                        (r = e[i]).style &&
                            ((n = r.style.display),
                            t
                                ? ('none' === n &&
                                      ((o[i] = K.get(r, 'display') || null),
                                      o[i] || (r.style.display = '')),
                                  '' === r.style.display &&
                                      le(r) &&
                                      (o[i] = de(r)))
                                : 'none' !== n &&
                                  ((o[i] = 'none'), K.set(r, 'display', n)));
                    for (i = 0; i < a; i++)
                        null != o[i] && (e[i].style.display = o[i]);
                    return e;
                }
                E.fn.extend({
                    show: function() {
                        return he(this, !0);
                    },
                    hide: function() {
                        return he(this);
                    },
                    toggle: function(e) {
                        return 'boolean' == typeof e
                            ? e
                                ? this.show()
                                : this.hide()
                            : this.each(function() {
                                  le(this) ? E(this).show() : E(this).hide();
                              });
                    }
                });
                var ye = /^(?:checkbox|radio)$/i,
                    ge = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i,
                    me = /^$|^module$|\/(?:java|ecma)script/i,
                    ve = {
                        option: [
                            1,
                            "<select multiple='multiple'>",
                            '</select>'
                        ],
                        thead: [1, '<table>', '</table>'],
                        col: [2, '<table><colgroup>', '</colgroup></table>'],
                        tr: [2, '<table><tbody>', '</tbody></table>'],
                        td: [3, '<table><tbody><tr>', '</tr></tbody></table>'],
                        _default: [0, '', '']
                    };
                function be(e, t) {
                    var n;
                    return (
                        (n =
                            void 0 !== e.getElementsByTagName
                                ? e.getElementsByTagName(t || '*')
                                : void 0 !== e.querySelectorAll
                                ? e.querySelectorAll(t || '*')
                                : []),
                        void 0 === t || (t && D(e, t)) ? E.merge([e], n) : n
                    );
                }
                function xe(e, t) {
                    for (var n = 0, r = e.length; n < r; n++)
                        K.set(
                            e[n],
                            'globalEval',
                            !t || K.get(t[n], 'globalEval')
                        );
                }
                (ve.optgroup = ve.option),
                    (ve.tbody = ve.tfoot = ve.colgroup = ve.caption = ve.thead),
                    (ve.th = ve.td);
                var we,
                    Te,
                    Ee = /<|&#?\w+;/;
                function Ce(e, t, n, r, o) {
                    for (
                        var i,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f = t.createDocumentFragment(),
                            p = [],
                            d = 0,
                            h = e.length;
                        d < h;
                        d++
                    )
                        if ((i = e[d]) || 0 === i)
                            if ('object' === T(i))
                                E.merge(p, i.nodeType ? [i] : i);
                            else if (Ee.test(i)) {
                                for (
                                    a =
                                        a ||
                                        f.appendChild(t.createElement('div')),
                                        s = (ge.exec(i) || [
                                            '',
                                            ''
                                        ])[1].toLowerCase(),
                                        u = ve[s] || ve._default,
                                        a.innerHTML =
                                            u[1] + E.htmlPrefilter(i) + u[2],
                                        c = u[0];
                                    c--;

                                )
                                    a = a.lastChild;
                                E.merge(p, a.childNodes),
                                    ((a = f.firstChild).textContent = '');
                            } else p.push(t.createTextNode(i));
                    for (f.textContent = '', d = 0; (i = p[d++]); )
                        if (r && E.inArray(i, r) > -1) o && o.push(i);
                        else if (
                            ((l = se(i)),
                            (a = be(f.appendChild(i), 'script')),
                            l && xe(a),
                            n)
                        )
                            for (c = 0; (i = a[c++]); )
                                me.test(i.type || '') && n.push(i);
                    return f;
                }
                (we = a
                    .createDocumentFragment()
                    .appendChild(a.createElement('div'))),
                    (Te = a.createElement('input')).setAttribute(
                        'type',
                        'radio'
                    ),
                    Te.setAttribute('checked', 'checked'),
                    Te.setAttribute('name', 't'),
                    we.appendChild(Te),
                    (m.checkClone = we
                        .cloneNode(!0)
                        .cloneNode(!0).lastChild.checked),
                    (we.innerHTML = '<textarea>x</textarea>'),
                    (m.noCloneChecked = !!we.cloneNode(!0).lastChild
                        .defaultValue);
                var Ae = /^key/,
                    Se = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                    ke = /^([^.]*)(?:\.(.+)|)/;
                function je() {
                    return !0;
                }
                function Ne() {
                    return !1;
                }
                function De(e, t) {
                    return (
                        (e ===
                            (function() {
                                try {
                                    return a.activeElement;
                                } catch (e) {}
                            })()) ==
                        ('focus' === t)
                    );
                }
                function Le(e, t, n, r, o, i) {
                    var a, s;
                    if ('object' == typeof t) {
                        for (s in ('string' != typeof n &&
                            ((r = r || n), (n = void 0)),
                        t))
                            Le(e, s, n, r, t[s], i);
                        return e;
                    }
                    if (
                        (null == r && null == o
                            ? ((o = n), (r = n = void 0))
                            : null == o &&
                              ('string' == typeof n
                                  ? ((o = r), (r = void 0))
                                  : ((o = r), (r = n), (n = void 0))),
                        !1 === o)
                    )
                        o = Ne;
                    else if (!o) return e;
                    return (
                        1 === i &&
                            ((a = o),
                            ((o = function(e) {
                                return E().off(e), a.apply(this, arguments);
                            }).guid = a.guid || (a.guid = E.guid++))),
                        e.each(function() {
                            E.event.add(this, t, o, r, n);
                        })
                    );
                }
                function Oe(e, t, n) {
                    n
                        ? (K.set(e, t, !1),
                          E.event.add(e, t, {
                              namespace: !1,
                              handler: function(e) {
                                  var r,
                                      o,
                                      i = K.get(this, t);
                                  if (1 & e.isTrigger && this[t]) {
                                      if (i.length)
                                          (E.event.special[t] || {})
                                              .delegateType &&
                                              e.stopPropagation();
                                      else if (
                                          ((i = u.call(arguments)),
                                          K.set(this, t, i),
                                          (r = n(this, t)),
                                          this[t](),
                                          i !== (o = K.get(this, t)) || r
                                              ? K.set(this, t, !1)
                                              : (o = {}),
                                          i !== o)
                                      )
                                          return (
                                              e.stopImmediatePropagation(),
                                              e.preventDefault(),
                                              o.value
                                          );
                                  } else
                                      i.length &&
                                          (K.set(this, t, {
                                              value: E.event.trigger(
                                                  E.extend(
                                                      i[0],
                                                      E.Event.prototype
                                                  ),
                                                  i.slice(1),
                                                  this
                                              )
                                          }),
                                          e.stopImmediatePropagation());
                              }
                          }))
                        : void 0 === K.get(e, t) && E.event.add(e, t, je);
                }
                (E.event = {
                    global: {},
                    add: function(e, t, n, r, o) {
                        var i,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g = K.get(e);
                        if (g)
                            for (
                                n.handler &&
                                    ((n = (i = n).handler), (o = i.selector)),
                                    o && E.find.matchesSelector(ae, o),
                                    n.guid || (n.guid = E.guid++),
                                    (u = g.events) || (u = g.events = {}),
                                    (a = g.handle) ||
                                        (a = g.handle = function(t) {
                                            return void 0 !== E &&
                                                E.event.triggered !== t.type
                                                ? E.event.dispatch.apply(
                                                      e,
                                                      arguments
                                                  )
                                                : void 0;
                                        }),
                                    l = (t = (t || '').match(B) || ['']).length;
                                l--;

                            )
                                (d = y = (s = ke.exec(t[l]) || [])[1]),
                                    (h = (s[2] || '').split('.').sort()),
                                    d &&
                                        ((f = E.event.special[d] || {}),
                                        (d =
                                            (o ? f.delegateType : f.bindType) ||
                                            d),
                                        (f = E.event.special[d] || {}),
                                        (c = E.extend(
                                            {
                                                type: d,
                                                origType: y,
                                                data: r,
                                                handler: n,
                                                guid: n.guid,
                                                selector: o,
                                                needsContext:
                                                    o &&
                                                    E.expr.match.needsContext.test(
                                                        o
                                                    ),
                                                namespace: h.join('.')
                                            },
                                            i
                                        )),
                                        (p = u[d]) ||
                                            (((p = u[
                                                d
                                            ] = []).delegateCount = 0),
                                            (f.setup &&
                                                !1 !==
                                                    f.setup.call(e, r, h, a)) ||
                                                (e.addEventListener &&
                                                    e.addEventListener(d, a))),
                                        f.add &&
                                            (f.add.call(e, c),
                                            c.handler.guid ||
                                                (c.handler.guid = n.guid)),
                                        o
                                            ? p.splice(p.delegateCount++, 0, c)
                                            : p.push(c),
                                        (E.event.global[d] = !0));
                    },
                    remove: function(e, t, n, r, o) {
                        var i,
                            a,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            h,
                            y,
                            g = K.hasData(e) && K.get(e);
                        if (g && (u = g.events)) {
                            for (
                                l = (t = (t || '').match(B) || ['']).length;
                                l--;

                            )
                                if (
                                    ((d = y = (s = ke.exec(t[l]) || [])[1]),
                                    (h = (s[2] || '').split('.').sort()),
                                    d)
                                ) {
                                    for (
                                        f = E.event.special[d] || {},
                                            p =
                                                u[
                                                    (d =
                                                        (r
                                                            ? f.delegateType
                                                            : f.bindType) || d)
                                                ] || [],
                                            s =
                                                s[2] &&
                                                new RegExp(
                                                    '(^|\\.)' +
                                                        h.join(
                                                            '\\.(?:.*\\.|)'
                                                        ) +
                                                        '(\\.|$)'
                                                ),
                                            a = i = p.length;
                                        i--;

                                    )
                                        (c = p[i]),
                                            (!o && y !== c.origType) ||
                                                (n && n.guid !== c.guid) ||
                                                (s && !s.test(c.namespace)) ||
                                                (r &&
                                                    r !== c.selector &&
                                                    ('**' !== r ||
                                                        !c.selector)) ||
                                                (p.splice(i, 1),
                                                c.selector && p.delegateCount--,
                                                f.remove &&
                                                    f.remove.call(e, c));
                                    a &&
                                        !p.length &&
                                        ((f.teardown &&
                                            !1 !==
                                                f.teardown.call(
                                                    e,
                                                    h,
                                                    g.handle
                                                )) ||
                                            E.removeEvent(e, d, g.handle),
                                        delete u[d]);
                                } else
                                    for (d in u)
                                        E.event.remove(e, d + t[l], n, r, !0);
                            E.isEmptyObject(u) && K.remove(e, 'handle events');
                        }
                    },
                    dispatch: function(e) {
                        var t,
                            n,
                            r,
                            o,
                            i,
                            a,
                            s = E.event.fix(e),
                            u = new Array(arguments.length),
                            l = (K.get(this, 'events') || {})[s.type] || [],
                            c = E.event.special[s.type] || {};
                        for (u[0] = s, t = 1; t < arguments.length; t++)
                            u[t] = arguments[t];
                        if (
                            ((s.delegateTarget = this),
                            !c.preDispatch ||
                                !1 !== c.preDispatch.call(this, s))
                        ) {
                            for (
                                a = E.event.handlers.call(this, s, l), t = 0;
                                (o = a[t++]) && !s.isPropagationStopped();

                            )
                                for (
                                    s.currentTarget = o.elem, n = 0;
                                    (i = o.handlers[n++]) &&
                                    !s.isImmediatePropagationStopped();

                                )
                                    (s.rnamespace &&
                                        !1 !== i.namespace &&
                                        !s.rnamespace.test(i.namespace)) ||
                                        ((s.handleObj = i),
                                        (s.data = i.data),
                                        void 0 !==
                                            (r = (
                                                (
                                                    E.event.special[
                                                        i.origType
                                                    ] || {}
                                                ).handle || i.handler
                                            ).apply(o.elem, u)) &&
                                            !1 === (s.result = r) &&
                                            (s.preventDefault(),
                                            s.stopPropagation()));
                            return (
                                c.postDispatch && c.postDispatch.call(this, s),
                                s.result
                            );
                        }
                    },
                    handlers: function(e, t) {
                        var n,
                            r,
                            o,
                            i,
                            a,
                            s = [],
                            u = t.delegateCount,
                            l = e.target;
                        if (
                            u &&
                            l.nodeType &&
                            !('click' === e.type && e.button >= 1)
                        )
                            for (; l !== this; l = l.parentNode || this)
                                if (
                                    1 === l.nodeType &&
                                    ('click' !== e.type || !0 !== l.disabled)
                                ) {
                                    for (i = [], a = {}, n = 0; n < u; n++)
                                        void 0 ===
                                            a[
                                                (o = (r = t[n]).selector + ' ')
                                            ] &&
                                            (a[o] = r.needsContext
                                                ? E(o, this).index(l) > -1
                                                : E.find(o, this, null, [l])
                                                      .length),
                                            a[o] && i.push(r);
                                    i.length &&
                                        s.push({ elem: l, handlers: i });
                                }
                        return (
                            (l = this),
                            u < t.length &&
                                s.push({ elem: l, handlers: t.slice(u) }),
                            s
                        );
                    },
                    addProp: function(e, t) {
                        Object.defineProperty(E.Event.prototype, e, {
                            enumerable: !0,
                            configurable: !0,
                            get: v(t)
                                ? function() {
                                      if (this.originalEvent)
                                          return t(this.originalEvent);
                                  }
                                : function() {
                                      if (this.originalEvent)
                                          return this.originalEvent[e];
                                  },
                            set: function(t) {
                                Object.defineProperty(this, e, {
                                    enumerable: !0,
                                    configurable: !0,
                                    writable: !0,
                                    value: t
                                });
                            }
                        });
                    },
                    fix: function(e) {
                        return e[E.expando] ? e : new E.Event(e);
                    },
                    special: {
                        load: { noBubble: !0 },
                        click: {
                            setup: function(e) {
                                var t = this || e;
                                return (
                                    ye.test(t.type) &&
                                        t.click &&
                                        D(t, 'input') &&
                                        Oe(t, 'click', je),
                                    !1
                                );
                            },
                            trigger: function(e) {
                                var t = this || e;
                                return (
                                    ye.test(t.type) &&
                                        t.click &&
                                        D(t, 'input') &&
                                        Oe(t, 'click'),
                                    !0
                                );
                            },
                            _default: function(e) {
                                var t = e.target;
                                return (
                                    (ye.test(t.type) &&
                                        t.click &&
                                        D(t, 'input') &&
                                        K.get(t, 'click')) ||
                                    D(t, 'a')
                                );
                            }
                        },
                        beforeunload: {
                            postDispatch: function(e) {
                                void 0 !== e.result &&
                                    e.originalEvent &&
                                    (e.originalEvent.returnValue = e.result);
                            }
                        }
                    }
                }),
                    (E.removeEvent = function(e, t, n) {
                        e.removeEventListener && e.removeEventListener(t, n);
                    }),
                    (E.Event = function(e, t) {
                        if (!(this instanceof E.Event))
                            return new E.Event(e, t);
                        e && e.type
                            ? ((this.originalEvent = e),
                              (this.type = e.type),
                              (this.isDefaultPrevented =
                                  e.defaultPrevented ||
                                  (void 0 === e.defaultPrevented &&
                                      !1 === e.returnValue)
                                      ? je
                                      : Ne),
                              (this.target =
                                  e.target && 3 === e.target.nodeType
                                      ? e.target.parentNode
                                      : e.target),
                              (this.currentTarget = e.currentTarget),
                              (this.relatedTarget = e.relatedTarget))
                            : (this.type = e),
                            t && E.extend(this, t),
                            (this.timeStamp = (e && e.timeStamp) || Date.now()),
                            (this[E.expando] = !0);
                    }),
                    (E.Event.prototype = {
                        constructor: E.Event,
                        isDefaultPrevented: Ne,
                        isPropagationStopped: Ne,
                        isImmediatePropagationStopped: Ne,
                        isSimulated: !1,
                        preventDefault: function() {
                            var e = this.originalEvent;
                            (this.isDefaultPrevented = je),
                                e && !this.isSimulated && e.preventDefault();
                        },
                        stopPropagation: function() {
                            var e = this.originalEvent;
                            (this.isPropagationStopped = je),
                                e && !this.isSimulated && e.stopPropagation();
                        },
                        stopImmediatePropagation: function() {
                            var e = this.originalEvent;
                            (this.isImmediatePropagationStopped = je),
                                e &&
                                    !this.isSimulated &&
                                    e.stopImmediatePropagation(),
                                this.stopPropagation();
                        }
                    }),
                    E.each(
                        {
                            altKey: !0,
                            bubbles: !0,
                            cancelable: !0,
                            changedTouches: !0,
                            ctrlKey: !0,
                            detail: !0,
                            eventPhase: !0,
                            metaKey: !0,
                            pageX: !0,
                            pageY: !0,
                            shiftKey: !0,
                            view: !0,
                            char: !0,
                            code: !0,
                            charCode: !0,
                            key: !0,
                            keyCode: !0,
                            button: !0,
                            buttons: !0,
                            clientX: !0,
                            clientY: !0,
                            offsetX: !0,
                            offsetY: !0,
                            pointerId: !0,
                            pointerType: !0,
                            screenX: !0,
                            screenY: !0,
                            targetTouches: !0,
                            toElement: !0,
                            touches: !0,
                            which: function(e) {
                                var t = e.button;
                                return null == e.which && Ae.test(e.type)
                                    ? null != e.charCode
                                        ? e.charCode
                                        : e.keyCode
                                    : !e.which &&
                                      void 0 !== t &&
                                      Se.test(e.type)
                                    ? 1 & t
                                        ? 1
                                        : 2 & t
                                        ? 3
                                        : 4 & t
                                        ? 2
                                        : 0
                                    : e.which;
                            }
                        },
                        E.event.addProp
                    ),
                    E.each({ focus: 'focusin', blur: 'focusout' }, function(
                        e,
                        t
                    ) {
                        E.event.special[e] = {
                            setup: function() {
                                return Oe(this, e, De), !1;
                            },
                            trigger: function() {
                                return Oe(this, e), !0;
                            },
                            delegateType: t
                        };
                    }),
                    E.each(
                        {
                            mouseenter: 'mouseover',
                            mouseleave: 'mouseout',
                            pointerenter: 'pointerover',
                            pointerleave: 'pointerout'
                        },
                        function(e, t) {
                            E.event.special[e] = {
                                delegateType: t,
                                bindType: t,
                                handle: function(e) {
                                    var n,
                                        r = e.relatedTarget,
                                        o = e.handleObj;
                                    return (
                                        (r &&
                                            (r === this ||
                                                E.contains(this, r))) ||
                                            ((e.type = o.origType),
                                            (n = o.handler.apply(
                                                this,
                                                arguments
                                            )),
                                            (e.type = t)),
                                        n
                                    );
                                }
                            };
                        }
                    ),
                    E.fn.extend({
                        on: function(e, t, n, r) {
                            return Le(this, e, t, n, r);
                        },
                        one: function(e, t, n, r) {
                            return Le(this, e, t, n, r, 1);
                        },
                        off: function(e, t, n) {
                            var r, o;
                            if (e && e.preventDefault && e.handleObj)
                                return (
                                    (r = e.handleObj),
                                    E(e.delegateTarget).off(
                                        r.namespace
                                            ? r.origType + '.' + r.namespace
                                            : r.origType,
                                        r.selector,
                                        r.handler
                                    ),
                                    this
                                );
                            if ('object' == typeof e) {
                                for (o in e) this.off(o, t, e[o]);
                                return this;
                            }
                            return (
                                (!1 !== t && 'function' != typeof t) ||
                                    ((n = t), (t = void 0)),
                                !1 === n && (n = Ne),
                                this.each(function() {
                                    E.event.remove(this, e, n, t);
                                })
                            );
                        }
                    });
                var qe = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                    _e = /<script|<style|<link/i,
                    Pe = /checked\s*(?:[^=]|=\s*.checked.)/i,
                    Re = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
                function He(e, t) {
                    return (
                        (D(e, 'table') &&
                            D(11 !== t.nodeType ? t : t.firstChild, 'tr') &&
                            E(e).children('tbody')[0]) ||
                        e
                    );
                }
                function Be(e) {
                    return (
                        (e.type =
                            (null !== e.getAttribute('type')) + '/' + e.type),
                        e
                    );
                }
                function Ie(e) {
                    return (
                        'true/' === (e.type || '').slice(0, 5)
                            ? (e.type = e.type.slice(5))
                            : e.removeAttribute('type'),
                        e
                    );
                }
                function Me(e, t) {
                    var n, r, o, i, a, s, u, l;
                    if (1 === t.nodeType) {
                        if (
                            K.hasData(e) &&
                            ((i = K.access(e)),
                            (a = K.set(t, i)),
                            (l = i.events))
                        )
                            for (o in (delete a.handle, (a.events = {}), l))
                                for (n = 0, r = l[o].length; n < r; n++)
                                    E.event.add(t, o, l[o][n]);
                        Z.hasData(e) &&
                            ((s = Z.access(e)),
                            (u = E.extend({}, s)),
                            Z.set(t, u));
                    }
                }
                function Ue(e, t) {
                    var n = t.nodeName.toLowerCase();
                    'input' === n && ye.test(e.type)
                        ? (t.checked = e.checked)
                        : ('input' !== n && 'textarea' !== n) ||
                          (t.defaultValue = e.defaultValue);
                }
                function Fe(e, t, n, r) {
                    t = l.apply([], t);
                    var o,
                        i,
                        a,
                        s,
                        u,
                        c,
                        f = 0,
                        p = e.length,
                        d = p - 1,
                        h = t[0],
                        y = v(h);
                    if (
                        y ||
                        (p > 1 &&
                            'string' == typeof h &&
                            !m.checkClone &&
                            Pe.test(h))
                    )
                        return e.each(function(o) {
                            var i = e.eq(o);
                            y && (t[0] = h.call(this, o, i.html())),
                                Fe(i, t, n, r);
                        });
                    if (
                        p &&
                        ((i = (o = Ce(t, e[0].ownerDocument, !1, e, r))
                            .firstChild),
                        1 === o.childNodes.length && (o = i),
                        i || r)
                    ) {
                        for (
                            s = (a = E.map(be(o, 'script'), Be)).length;
                            f < p;
                            f++
                        )
                            (u = o),
                                f !== d &&
                                    ((u = E.clone(u, !0, !0)),
                                    s && E.merge(a, be(u, 'script'))),
                                n.call(e[f], u, f);
                        if (s)
                            for (
                                c = a[a.length - 1].ownerDocument,
                                    E.map(a, Ie),
                                    f = 0;
                                f < s;
                                f++
                            )
                                (u = a[f]),
                                    me.test(u.type || '') &&
                                        !K.access(u, 'globalEval') &&
                                        E.contains(c, u) &&
                                        (u.src &&
                                        'module' !==
                                            (u.type || '').toLowerCase()
                                            ? E._evalUrl &&
                                              !u.noModule &&
                                              E._evalUrl(u.src, {
                                                  nonce:
                                                      u.nonce ||
                                                      u.getAttribute('nonce')
                                              })
                                            : w(
                                                  u.textContent.replace(Re, ''),
                                                  u,
                                                  c
                                              ));
                    }
                    return e;
                }
                function $e(e, t, n) {
                    for (
                        var r, o = t ? E.filter(t, e) : e, i = 0;
                        null != (r = o[i]);
                        i++
                    )
                        n || 1 !== r.nodeType || E.cleanData(be(r)),
                            r.parentNode &&
                                (n && se(r) && xe(be(r, 'script')),
                                r.parentNode.removeChild(r));
                    return e;
                }
                E.extend({
                    htmlPrefilter: function(e) {
                        return e.replace(qe, '<$1></$2>');
                    },
                    clone: function(e, t, n) {
                        var r,
                            o,
                            i,
                            a,
                            s = e.cloneNode(!0),
                            u = se(e);
                        if (
                            !(
                                m.noCloneChecked ||
                                (1 !== e.nodeType && 11 !== e.nodeType) ||
                                E.isXMLDoc(e)
                            )
                        )
                            for (
                                a = be(s), r = 0, o = (i = be(e)).length;
                                r < o;
                                r++
                            )
                                Ue(i[r], a[r]);
                        if (t)
                            if (n)
                                for (
                                    i = i || be(e),
                                        a = a || be(s),
                                        r = 0,
                                        o = i.length;
                                    r < o;
                                    r++
                                )
                                    Me(i[r], a[r]);
                            else Me(e, s);
                        return (
                            (a = be(s, 'script')).length > 0 &&
                                xe(a, !u && be(e, 'script')),
                            s
                        );
                    },
                    cleanData: function(e) {
                        for (
                            var t, n, r, o = E.event.special, i = 0;
                            void 0 !== (n = e[i]);
                            i++
                        )
                            if (Q(n)) {
                                if ((t = n[K.expando])) {
                                    if (t.events)
                                        for (r in t.events)
                                            o[r]
                                                ? E.event.remove(n, r)
                                                : E.removeEvent(n, r, t.handle);
                                    n[K.expando] = void 0;
                                }
                                n[Z.expando] && (n[Z.expando] = void 0);
                            }
                    }
                }),
                    E.fn.extend({
                        detach: function(e) {
                            return $e(this, e, !0);
                        },
                        remove: function(e) {
                            return $e(this, e);
                        },
                        text: function(e) {
                            return z(
                                this,
                                function(e) {
                                    return void 0 === e
                                        ? E.text(this)
                                        : this.empty().each(function() {
                                              (1 !== this.nodeType &&
                                                  11 !== this.nodeType &&
                                                  9 !== this.nodeType) ||
                                                  (this.textContent = e);
                                          });
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        append: function() {
                            return Fe(this, arguments, function(e) {
                                (1 !== this.nodeType &&
                                    11 !== this.nodeType &&
                                    9 !== this.nodeType) ||
                                    He(this, e).appendChild(e);
                            });
                        },
                        prepend: function() {
                            return Fe(this, arguments, function(e) {
                                if (
                                    1 === this.nodeType ||
                                    11 === this.nodeType ||
                                    9 === this.nodeType
                                ) {
                                    var t = He(this, e);
                                    t.insertBefore(e, t.firstChild);
                                }
                            });
                        },
                        before: function() {
                            return Fe(this, arguments, function(e) {
                                this.parentNode &&
                                    this.parentNode.insertBefore(e, this);
                            });
                        },
                        after: function() {
                            return Fe(this, arguments, function(e) {
                                this.parentNode &&
                                    this.parentNode.insertBefore(
                                        e,
                                        this.nextSibling
                                    );
                            });
                        },
                        empty: function() {
                            for (var e, t = 0; null != (e = this[t]); t++)
                                1 === e.nodeType &&
                                    (E.cleanData(be(e, !1)),
                                    (e.textContent = ''));
                            return this;
                        },
                        clone: function(e, t) {
                            return (
                                (e = null != e && e),
                                (t = null == t ? e : t),
                                this.map(function() {
                                    return E.clone(this, e, t);
                                })
                            );
                        },
                        html: function(e) {
                            return z(
                                this,
                                function(e) {
                                    var t = this[0] || {},
                                        n = 0,
                                        r = this.length;
                                    if (void 0 === e && 1 === t.nodeType)
                                        return t.innerHTML;
                                    if (
                                        'string' == typeof e &&
                                        !_e.test(e) &&
                                        !ve[
                                            (ge.exec(e) || [
                                                '',
                                                ''
                                            ])[1].toLowerCase()
                                        ]
                                    ) {
                                        e = E.htmlPrefilter(e);
                                        try {
                                            for (; n < r; n++)
                                                1 ===
                                                    (t = this[n] || {})
                                                        .nodeType &&
                                                    (E.cleanData(be(t, !1)),
                                                    (t.innerHTML = e));
                                            t = 0;
                                        } catch (e) {}
                                    }
                                    t && this.empty().append(e);
                                },
                                null,
                                e,
                                arguments.length
                            );
                        },
                        replaceWith: function() {
                            var e = [];
                            return Fe(
                                this,
                                arguments,
                                function(t) {
                                    var n = this.parentNode;
                                    E.inArray(this, e) < 0 &&
                                        (E.cleanData(be(this)),
                                        n && n.replaceChild(t, this));
                                },
                                e
                            );
                        }
                    }),
                    E.each(
                        {
                            appendTo: 'append',
                            prependTo: 'prepend',
                            insertBefore: 'before',
                            insertAfter: 'after',
                            replaceAll: 'replaceWith'
                        },
                        function(e, t) {
                            E.fn[e] = function(e) {
                                for (
                                    var n,
                                        r = [],
                                        o = E(e),
                                        i = o.length - 1,
                                        a = 0;
                                    a <= i;
                                    a++
                                )
                                    (n = a === i ? this : this.clone(!0)),
                                        E(o[a])[t](n),
                                        c.apply(r, n.get());
                                return this.pushStack(r);
                            };
                        }
                    );
                var We = new RegExp('^(' + re + ')(?!px)[a-z%]+$', 'i'),
                    ze = function(e) {
                        var t = e.ownerDocument.defaultView;
                        return (
                            (t && t.opener) || (t = n), t.getComputedStyle(e)
                        );
                    },
                    Xe = new RegExp(ie.join('|'), 'i');
                function Ge(e, t, n) {
                    var r,
                        o,
                        i,
                        a,
                        s = e.style;
                    return (
                        (n = n || ze(e)) &&
                            ('' !== (a = n.getPropertyValue(t) || n[t]) ||
                                se(e) ||
                                (a = E.style(e, t)),
                            !m.pixelBoxStyles() &&
                                We.test(a) &&
                                Xe.test(t) &&
                                ((r = s.width),
                                (o = s.minWidth),
                                (i = s.maxWidth),
                                (s.minWidth = s.maxWidth = s.width = a),
                                (a = n.width),
                                (s.width = r),
                                (s.minWidth = o),
                                (s.maxWidth = i))),
                        void 0 !== a ? a + '' : a
                    );
                }
                function Ve(e, t) {
                    return {
                        get: function() {
                            if (!e())
                                return (this.get = t).apply(this, arguments);
                            delete this.get;
                        }
                    };
                }
                !(function() {
                    function e() {
                        if (c) {
                            (l.style.cssText =
                                'position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0'),
                                (c.style.cssText =
                                    'position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%'),
                                ae.appendChild(l).appendChild(c);
                            var e = n.getComputedStyle(c);
                            (r = '1%' !== e.top),
                                (u = 12 === t(e.marginLeft)),
                                (c.style.right = '60%'),
                                (s = 36 === t(e.right)),
                                (o = 36 === t(e.width)),
                                (c.style.position = 'absolute'),
                                (i = 12 === t(c.offsetWidth / 3)),
                                ae.removeChild(l),
                                (c = null);
                        }
                    }
                    function t(e) {
                        return Math.round(parseFloat(e));
                    }
                    var r,
                        o,
                        i,
                        s,
                        u,
                        l = a.createElement('div'),
                        c = a.createElement('div');
                    c.style &&
                        ((c.style.backgroundClip = 'content-box'),
                        (c.cloneNode(!0).style.backgroundClip = ''),
                        (m.clearCloneStyle =
                            'content-box' === c.style.backgroundClip),
                        E.extend(m, {
                            boxSizingReliable: function() {
                                return e(), o;
                            },
                            pixelBoxStyles: function() {
                                return e(), s;
                            },
                            pixelPosition: function() {
                                return e(), r;
                            },
                            reliableMarginLeft: function() {
                                return e(), u;
                            },
                            scrollboxSize: function() {
                                return e(), i;
                            }
                        }));
                })();
                var Je = ['Webkit', 'Moz', 'ms'],
                    Qe = a.createElement('div').style,
                    Ye = {};
                function Ke(e) {
                    var t = E.cssProps[e] || Ye[e];
                    return (
                        t ||
                        (e in Qe
                            ? e
                            : (Ye[e] =
                                  (function(e) {
                                      for (
                                          var t =
                                                  e[0].toUpperCase() +
                                                  e.slice(1),
                                              n = Je.length;
                                          n--;

                                      )
                                          if ((e = Je[n] + t) in Qe) return e;
                                  })(e) || e))
                    );
                }
                var Ze = /^(none|table(?!-c[ea]).+)/,
                    et = /^--/,
                    tt = {
                        position: 'absolute',
                        visibility: 'hidden',
                        display: 'block'
                    },
                    nt = { letterSpacing: '0', fontWeight: '400' };
                function rt(e, t, n) {
                    var r = oe.exec(t);
                    return r
                        ? Math.max(0, r[2] - (n || 0)) + (r[3] || 'px')
                        : t;
                }
                function ot(e, t, n, r, o, i) {
                    var a = 'width' === t ? 1 : 0,
                        s = 0,
                        u = 0;
                    if (n === (r ? 'border' : 'content')) return 0;
                    for (; a < 4; a += 2)
                        'margin' === n && (u += E.css(e, n + ie[a], !0, o)),
                            r
                                ? ('content' === n &&
                                      (u -= E.css(e, 'padding' + ie[a], !0, o)),
                                  'margin' !== n &&
                                      (u -= E.css(
                                          e,
                                          'border' + ie[a] + 'Width',
                                          !0,
                                          o
                                      )))
                                : ((u += E.css(e, 'padding' + ie[a], !0, o)),
                                  'padding' !== n
                                      ? (u += E.css(
                                            e,
                                            'border' + ie[a] + 'Width',
                                            !0,
                                            o
                                        ))
                                      : (s += E.css(
                                            e,
                                            'border' + ie[a] + 'Width',
                                            !0,
                                            o
                                        )));
                    return (
                        !r &&
                            i >= 0 &&
                            (u +=
                                Math.max(
                                    0,
                                    Math.ceil(
                                        e[
                                            'offset' +
                                                t[0].toUpperCase() +
                                                t.slice(1)
                                        ] -
                                            i -
                                            u -
                                            s -
                                            0.5
                                    )
                                ) || 0),
                        u
                    );
                }
                function it(e, t, n) {
                    var r = ze(e),
                        o =
                            (!m.boxSizingReliable() || n) &&
                            'border-box' === E.css(e, 'boxSizing', !1, r),
                        i = o,
                        a = Ge(e, t, r),
                        s = 'offset' + t[0].toUpperCase() + t.slice(1);
                    if (We.test(a)) {
                        if (!n) return a;
                        a = 'auto';
                    }
                    return (
                        ((!m.boxSizingReliable() && o) ||
                            'auto' === a ||
                            (!parseFloat(a) &&
                                'inline' === E.css(e, 'display', !1, r))) &&
                            e.getClientRects().length &&
                            ((o =
                                'border-box' === E.css(e, 'boxSizing', !1, r)),
                            (i = s in e) && (a = e[s])),
                        (a = parseFloat(a) || 0) +
                            ot(e, t, n || (o ? 'border' : 'content'), i, r, a) +
                            'px'
                    );
                }
                function at(e, t, n, r, o) {
                    return new at.prototype.init(e, t, n, r, o);
                }
                E.extend({
                    cssHooks: {
                        opacity: {
                            get: function(e, t) {
                                if (t) {
                                    var n = Ge(e, 'opacity');
                                    return '' === n ? '1' : n;
                                }
                            }
                        }
                    },
                    cssNumber: {
                        animationIterationCount: !0,
                        columnCount: !0,
                        fillOpacity: !0,
                        flexGrow: !0,
                        flexShrink: !0,
                        fontWeight: !0,
                        gridArea: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnStart: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowStart: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0
                    },
                    cssProps: {},
                    style: function(e, t, n, r) {
                        if (
                            e &&
                            3 !== e.nodeType &&
                            8 !== e.nodeType &&
                            e.style
                        ) {
                            var o,
                                i,
                                a,
                                s = J(t),
                                u = et.test(t),
                                l = e.style;
                            if (
                                (u || (t = Ke(s)),
                                (a = E.cssHooks[t] || E.cssHooks[s]),
                                void 0 === n)
                            )
                                return a &&
                                    'get' in a &&
                                    void 0 !== (o = a.get(e, !1, r))
                                    ? o
                                    : l[t];
                            'string' === (i = typeof n) &&
                                (o = oe.exec(n)) &&
                                o[1] &&
                                ((n = fe(e, t, o)), (i = 'number')),
                                null != n &&
                                    n == n &&
                                    ('number' !== i ||
                                        u ||
                                        (n +=
                                            (o && o[3]) ||
                                            (E.cssNumber[s] ? '' : 'px')),
                                    m.clearCloneStyle ||
                                        '' !== n ||
                                        0 !== t.indexOf('background') ||
                                        (l[t] = 'inherit'),
                                    (a &&
                                        'set' in a &&
                                        void 0 === (n = a.set(e, n, r))) ||
                                        (u ? l.setProperty(t, n) : (l[t] = n)));
                        }
                    },
                    css: function(e, t, n, r) {
                        var o,
                            i,
                            a,
                            s = J(t);
                        return (
                            et.test(t) || (t = Ke(s)),
                            (a = E.cssHooks[t] || E.cssHooks[s]) &&
                                'get' in a &&
                                (o = a.get(e, !0, n)),
                            void 0 === o && (o = Ge(e, t, r)),
                            'normal' === o && t in nt && (o = nt[t]),
                            '' === n || n
                                ? ((i = parseFloat(o)),
                                  !0 === n || isFinite(i) ? i || 0 : o)
                                : o
                        );
                    }
                }),
                    E.each(['height', 'width'], function(e, t) {
                        E.cssHooks[t] = {
                            get: function(e, n, r) {
                                if (n)
                                    return !Ze.test(E.css(e, 'display')) ||
                                        (e.getClientRects().length &&
                                            e.getBoundingClientRect().width)
                                        ? it(e, t, r)
                                        : ce(e, tt, function() {
                                              return it(e, t, r);
                                          });
                            },
                            set: function(e, n, r) {
                                var o,
                                    i = ze(e),
                                    a =
                                        !m.scrollboxSize() &&
                                        'absolute' === i.position,
                                    s =
                                        (a || r) &&
                                        'border-box' ===
                                            E.css(e, 'boxSizing', !1, i),
                                    u = r ? ot(e, t, r, s, i) : 0;
                                return (
                                    s &&
                                        a &&
                                        (u -= Math.ceil(
                                            e[
                                                'offset' +
                                                    t[0].toUpperCase() +
                                                    t.slice(1)
                                            ] -
                                                parseFloat(i[t]) -
                                                ot(e, t, 'border', !1, i) -
                                                0.5
                                        )),
                                    u &&
                                        (o = oe.exec(n)) &&
                                        'px' !== (o[3] || 'px') &&
                                        ((e.style[t] = n), (n = E.css(e, t))),
                                    rt(0, n, u)
                                );
                            }
                        };
                    }),
                    (E.cssHooks.marginLeft = Ve(m.reliableMarginLeft, function(
                        e,
                        t
                    ) {
                        if (t)
                            return (
                                (parseFloat(Ge(e, 'marginLeft')) ||
                                    e.getBoundingClientRect().left -
                                        ce(e, { marginLeft: 0 }, function() {
                                            return e.getBoundingClientRect().left;
                                        })) + 'px'
                            );
                    })),
                    E.each(
                        { margin: '', padding: '', border: 'Width' },
                        function(e, t) {
                            (E.cssHooks[e + t] = {
                                expand: function(n) {
                                    for (
                                        var r = 0,
                                            o = {},
                                            i =
                                                'string' == typeof n
                                                    ? n.split(' ')
                                                    : [n];
                                        r < 4;
                                        r++
                                    )
                                        o[e + ie[r] + t] =
                                            i[r] || i[r - 2] || i[0];
                                    return o;
                                }
                            }),
                                'margin' !== e && (E.cssHooks[e + t].set = rt);
                        }
                    ),
                    E.fn.extend({
                        css: function(e, t) {
                            return z(
                                this,
                                function(e, t, n) {
                                    var r,
                                        o,
                                        i = {},
                                        a = 0;
                                    if (Array.isArray(t)) {
                                        for (
                                            r = ze(e), o = t.length;
                                            a < o;
                                            a++
                                        )
                                            i[t[a]] = E.css(e, t[a], !1, r);
                                        return i;
                                    }
                                    return void 0 !== n
                                        ? E.style(e, t, n)
                                        : E.css(e, t);
                                },
                                e,
                                t,
                                arguments.length > 1
                            );
                        }
                    }),
                    (E.Tween = at),
                    (at.prototype = {
                        constructor: at,
                        init: function(e, t, n, r, o, i) {
                            (this.elem = e),
                                (this.prop = n),
                                (this.easing = o || E.easing._default),
                                (this.options = t),
                                (this.start = this.now = this.cur()),
                                (this.end = r),
                                (this.unit = i || (E.cssNumber[n] ? '' : 'px'));
                        },
                        cur: function() {
                            var e = at.propHooks[this.prop];
                            return e && e.get
                                ? e.get(this)
                                : at.propHooks._default.get(this);
                        },
                        run: function(e) {
                            var t,
                                n = at.propHooks[this.prop];
                            return (
                                this.options.duration
                                    ? (this.pos = t = E.easing[this.easing](
                                          e,
                                          this.options.duration * e,
                                          0,
                                          1,
                                          this.options.duration
                                      ))
                                    : (this.pos = t = e),
                                (this.now =
                                    (this.end - this.start) * t + this.start),
                                this.options.step &&
                                    this.options.step.call(
                                        this.elem,
                                        this.now,
                                        this
                                    ),
                                n && n.set
                                    ? n.set(this)
                                    : at.propHooks._default.set(this),
                                this
                            );
                        }
                    }),
                    (at.prototype.init.prototype = at.prototype),
                    (at.propHooks = {
                        _default: {
                            get: function(e) {
                                var t;
                                return 1 !== e.elem.nodeType ||
                                    (null != e.elem[e.prop] &&
                                        null == e.elem.style[e.prop])
                                    ? e.elem[e.prop]
                                    : (t = E.css(e.elem, e.prop, '')) &&
                                      'auto' !== t
                                    ? t
                                    : 0;
                            },
                            set: function(e) {
                                E.fx.step[e.prop]
                                    ? E.fx.step[e.prop](e)
                                    : 1 !== e.elem.nodeType ||
                                      (!E.cssHooks[e.prop] &&
                                          null == e.elem.style[Ke(e.prop)])
                                    ? (e.elem[e.prop] = e.now)
                                    : E.style(e.elem, e.prop, e.now + e.unit);
                            }
                        }
                    }),
                    (at.propHooks.scrollTop = at.propHooks.scrollLeft = {
                        set: function(e) {
                            e.elem.nodeType &&
                                e.elem.parentNode &&
                                (e.elem[e.prop] = e.now);
                        }
                    }),
                    (E.easing = {
                        linear: function(e) {
                            return e;
                        },
                        swing: function(e) {
                            return 0.5 - Math.cos(e * Math.PI) / 2;
                        },
                        _default: 'swing'
                    }),
                    (E.fx = at.prototype.init),
                    (E.fx.step = {});
                var st,
                    ut,
                    lt = /^(?:toggle|show|hide)$/,
                    ct = /queueHooks$/;
                function ft() {
                    ut &&
                        (!1 === a.hidden && n.requestAnimationFrame
                            ? n.requestAnimationFrame(ft)
                            : n.setTimeout(ft, E.fx.interval),
                        E.fx.tick());
                }
                function pt() {
                    return (
                        n.setTimeout(function() {
                            st = void 0;
                        }),
                        (st = Date.now())
                    );
                }
                function dt(e, t) {
                    var n,
                        r = 0,
                        o = { height: e };
                    for (t = t ? 1 : 0; r < 4; r += 2 - t)
                        o['margin' + (n = ie[r])] = o['padding' + n] = e;
                    return t && (o.opacity = o.width = e), o;
                }
                function ht(e, t, n) {
                    for (
                        var r,
                            o = (yt.tweeners[t] || []).concat(yt.tweeners['*']),
                            i = 0,
                            a = o.length;
                        i < a;
                        i++
                    )
                        if ((r = o[i].call(n, t, e))) return r;
                }
                function yt(e, t, n) {
                    var r,
                        o,
                        i = 0,
                        a = yt.prefilters.length,
                        s = E.Deferred().always(function() {
                            delete u.elem;
                        }),
                        u = function() {
                            if (o) return !1;
                            for (
                                var t = st || pt(),
                                    n = Math.max(
                                        0,
                                        l.startTime + l.duration - t
                                    ),
                                    r = 1 - (n / l.duration || 0),
                                    i = 0,
                                    a = l.tweens.length;
                                i < a;
                                i++
                            )
                                l.tweens[i].run(r);
                            return (
                                s.notifyWith(e, [l, r, n]),
                                r < 1 && a
                                    ? n
                                    : (a || s.notifyWith(e, [l, 1, 0]),
                                      s.resolveWith(e, [l]),
                                      !1)
                            );
                        },
                        l = s.promise({
                            elem: e,
                            props: E.extend({}, t),
                            opts: E.extend(
                                !0,
                                {
                                    specialEasing: {},
                                    easing: E.easing._default
                                },
                                n
                            ),
                            originalProperties: t,
                            originalOptions: n,
                            startTime: st || pt(),
                            duration: n.duration,
                            tweens: [],
                            createTween: function(t, n) {
                                var r = E.Tween(
                                    e,
                                    l.opts,
                                    t,
                                    n,
                                    l.opts.specialEasing[t] || l.opts.easing
                                );
                                return l.tweens.push(r), r;
                            },
                            stop: function(t) {
                                var n = 0,
                                    r = t ? l.tweens.length : 0;
                                if (o) return this;
                                for (o = !0; n < r; n++) l.tweens[n].run(1);
                                return (
                                    t
                                        ? (s.notifyWith(e, [l, 1, 0]),
                                          s.resolveWith(e, [l, t]))
                                        : s.rejectWith(e, [l, t]),
                                    this
                                );
                            }
                        }),
                        c = l.props;
                    for (
                        !(function(e, t) {
                            var n, r, o, i, a;
                            for (n in e)
                                if (
                                    ((o = t[(r = J(n))]),
                                    (i = e[n]),
                                    Array.isArray(i) &&
                                        ((o = i[1]), (i = e[n] = i[0])),
                                    n !== r && ((e[r] = i), delete e[n]),
                                    (a = E.cssHooks[r]) && ('expand' in a))
                                )
                                    for (n in ((i = a.expand(i)),
                                    delete e[r],
                                    i))
                                        (n in e) || ((e[n] = i[n]), (t[n] = o));
                                else t[r] = o;
                        })(c, l.opts.specialEasing);
                        i < a;
                        i++
                    )
                        if ((r = yt.prefilters[i].call(l, e, c, l.opts)))
                            return (
                                v(r.stop) &&
                                    (E._queueHooks(
                                        l.elem,
                                        l.opts.queue
                                    ).stop = r.stop.bind(r)),
                                r
                            );
                    return (
                        E.map(c, ht, l),
                        v(l.opts.start) && l.opts.start.call(e, l),
                        l
                            .progress(l.opts.progress)
                            .done(l.opts.done, l.opts.complete)
                            .fail(l.opts.fail)
                            .always(l.opts.always),
                        E.fx.timer(
                            E.extend(u, {
                                elem: e,
                                anim: l,
                                queue: l.opts.queue
                            })
                        ),
                        l
                    );
                }
                (E.Animation = E.extend(yt, {
                    tweeners: {
                        '*': [
                            function(e, t) {
                                var n = this.createTween(e, t);
                                return fe(n.elem, e, oe.exec(t), n), n;
                            }
                        ]
                    },
                    tweener: function(e, t) {
                        v(e) ? ((t = e), (e = ['*'])) : (e = e.match(B));
                        for (var n, r = 0, o = e.length; r < o; r++)
                            (n = e[r]),
                                (yt.tweeners[n] = yt.tweeners[n] || []),
                                yt.tweeners[n].unshift(t);
                    },
                    prefilters: [
                        function(e, t, n) {
                            var r,
                                o,
                                i,
                                a,
                                s,
                                u,
                                l,
                                c,
                                f = 'width' in t || 'height' in t,
                                p = this,
                                d = {},
                                h = e.style,
                                y = e.nodeType && le(e),
                                g = K.get(e, 'fxshow');
                            for (r in (n.queue ||
                                (null ==
                                    (a = E._queueHooks(e, 'fx')).unqueued &&
                                    ((a.unqueued = 0),
                                    (s = a.empty.fire),
                                    (a.empty.fire = function() {
                                        a.unqueued || s();
                                    })),
                                a.unqueued++,
                                p.always(function() {
                                    p.always(function() {
                                        a.unqueued--,
                                            E.queue(e, 'fx').length ||
                                                a.empty.fire();
                                    });
                                })),
                            t))
                                if (((o = t[r]), lt.test(o))) {
                                    if (
                                        (delete t[r],
                                        (i = i || 'toggle' === o),
                                        o === (y ? 'hide' : 'show'))
                                    ) {
                                        if (
                                            'show' !== o ||
                                            !g ||
                                            void 0 === g[r]
                                        )
                                            continue;
                                        y = !0;
                                    }
                                    d[r] = (g && g[r]) || E.style(e, r);
                                }
                            if (
                                (u = !E.isEmptyObject(t)) ||
                                !E.isEmptyObject(d)
                            )
                                for (r in (f &&
                                    1 === e.nodeType &&
                                    ((n.overflow = [
                                        h.overflow,
                                        h.overflowX,
                                        h.overflowY
                                    ]),
                                    null == (l = g && g.display) &&
                                        (l = K.get(e, 'display')),
                                    'none' === (c = E.css(e, 'display')) &&
                                        (l
                                            ? (c = l)
                                            : (he([e], !0),
                                              (l = e.style.display || l),
                                              (c = E.css(e, 'display')),
                                              he([e]))),
                                    ('inline' === c ||
                                        ('inline-block' === c && null != l)) &&
                                        'none' === E.css(e, 'float') &&
                                        (u ||
                                            (p.done(function() {
                                                h.display = l;
                                            }),
                                            null == l &&
                                                ((c = h.display),
                                                (l = 'none' === c ? '' : c))),
                                        (h.display = 'inline-block'))),
                                n.overflow &&
                                    ((h.overflow = 'hidden'),
                                    p.always(function() {
                                        (h.overflow = n.overflow[0]),
                                            (h.overflowX = n.overflow[1]),
                                            (h.overflowY = n.overflow[2]);
                                    })),
                                (u = !1),
                                d))
                                    u ||
                                        (g
                                            ? 'hidden' in g && (y = g.hidden)
                                            : (g = K.access(e, 'fxshow', {
                                                  display: l
                                              })),
                                        i && (g.hidden = !y),
                                        y && he([e], !0),
                                        p.done(function() {
                                            for (r in (y || he([e]),
                                            K.remove(e, 'fxshow'),
                                            d))
                                                E.style(e, r, d[r]);
                                        })),
                                        (u = ht(y ? g[r] : 0, r, p)),
                                        r in g ||
                                            ((g[r] = u.start),
                                            y &&
                                                ((u.end = u.start),
                                                (u.start = 0)));
                        }
                    ],
                    prefilter: function(e, t) {
                        t ? yt.prefilters.unshift(e) : yt.prefilters.push(e);
                    }
                })),
                    (E.speed = function(e, t, n) {
                        var r =
                            e && 'object' == typeof e
                                ? E.extend({}, e)
                                : {
                                      complete: n || (!n && t) || (v(e) && e),
                                      duration: e,
                                      easing: (n && t) || (t && !v(t) && t)
                                  };
                        return (
                            E.fx.off
                                ? (r.duration = 0)
                                : 'number' != typeof r.duration &&
                                  (r.duration in E.fx.speeds
                                      ? (r.duration = E.fx.speeds[r.duration])
                                      : (r.duration = E.fx.speeds._default)),
                            (null != r.queue && !0 !== r.queue) ||
                                (r.queue = 'fx'),
                            (r.old = r.complete),
                            (r.complete = function() {
                                v(r.old) && r.old.call(this),
                                    r.queue && E.dequeue(this, r.queue);
                            }),
                            r
                        );
                    }),
                    E.fn.extend({
                        fadeTo: function(e, t, n, r) {
                            return this.filter(le)
                                .css('opacity', 0)
                                .show()
                                .end()
                                .animate({ opacity: t }, e, n, r);
                        },
                        animate: function(e, t, n, r) {
                            var o = E.isEmptyObject(e),
                                i = E.speed(t, n, r),
                                a = function() {
                                    var t = yt(this, E.extend({}, e), i);
                                    (o || K.get(this, 'finish')) && t.stop(!0);
                                };
                            return (
                                (a.finish = a),
                                o || !1 === i.queue
                                    ? this.each(a)
                                    : this.queue(i.queue, a)
                            );
                        },
                        stop: function(e, t, n) {
                            var r = function(e) {
                                var t = e.stop;
                                delete e.stop, t(n);
                            };
                            return (
                                'string' != typeof e &&
                                    ((n = t), (t = e), (e = void 0)),
                                t && !1 !== e && this.queue(e || 'fx', []),
                                this.each(function() {
                                    var t = !0,
                                        o = null != e && e + 'queueHooks',
                                        i = E.timers,
                                        a = K.get(this);
                                    if (o) a[o] && a[o].stop && r(a[o]);
                                    else
                                        for (o in a)
                                            a[o] &&
                                                a[o].stop &&
                                                ct.test(o) &&
                                                r(a[o]);
                                    for (o = i.length; o--; )
                                        i[o].elem !== this ||
                                            (null != e && i[o].queue !== e) ||
                                            (i[o].anim.stop(n),
                                            (t = !1),
                                            i.splice(o, 1));
                                    (!t && n) || E.dequeue(this, e);
                                })
                            );
                        },
                        finish: function(e) {
                            return (
                                !1 !== e && (e = e || 'fx'),
                                this.each(function() {
                                    var t,
                                        n = K.get(this),
                                        r = n[e + 'queue'],
                                        o = n[e + 'queueHooks'],
                                        i = E.timers,
                                        a = r ? r.length : 0;
                                    for (
                                        n.finish = !0,
                                            E.queue(this, e, []),
                                            o &&
                                                o.stop &&
                                                o.stop.call(this, !0),
                                            t = i.length;
                                        t--;

                                    )
                                        i[t].elem === this &&
                                            i[t].queue === e &&
                                            (i[t].anim.stop(!0),
                                            i.splice(t, 1));
                                    for (t = 0; t < a; t++)
                                        r[t] &&
                                            r[t].finish &&
                                            r[t].finish.call(this);
                                    delete n.finish;
                                })
                            );
                        }
                    }),
                    E.each(['toggle', 'show', 'hide'], function(e, t) {
                        var n = E.fn[t];
                        E.fn[t] = function(e, r, o) {
                            return null == e || 'boolean' == typeof e
                                ? n.apply(this, arguments)
                                : this.animate(dt(t, !0), e, r, o);
                        };
                    }),
                    E.each(
                        {
                            slideDown: dt('show'),
                            slideUp: dt('hide'),
                            slideToggle: dt('toggle'),
                            fadeIn: { opacity: 'show' },
                            fadeOut: { opacity: 'hide' },
                            fadeToggle: { opacity: 'toggle' }
                        },
                        function(e, t) {
                            E.fn[e] = function(e, n, r) {
                                return this.animate(t, e, n, r);
                            };
                        }
                    ),
                    (E.timers = []),
                    (E.fx.tick = function() {
                        var e,
                            t = 0,
                            n = E.timers;
                        for (st = Date.now(); t < n.length; t++)
                            (e = n[t])() || n[t] !== e || n.splice(t--, 1);
                        n.length || E.fx.stop(), (st = void 0);
                    }),
                    (E.fx.timer = function(e) {
                        E.timers.push(e), E.fx.start();
                    }),
                    (E.fx.interval = 13),
                    (E.fx.start = function() {
                        ut || ((ut = !0), ft());
                    }),
                    (E.fx.stop = function() {
                        ut = null;
                    }),
                    (E.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
                    (E.fn.delay = function(e, t) {
                        return (
                            (e = (E.fx && E.fx.speeds[e]) || e),
                            (t = t || 'fx'),
                            this.queue(t, function(t, r) {
                                var o = n.setTimeout(t, e);
                                r.stop = function() {
                                    n.clearTimeout(o);
                                };
                            })
                        );
                    }),
                    (function() {
                        var e = a.createElement('input'),
                            t = a
                                .createElement('select')
                                .appendChild(a.createElement('option'));
                        (e.type = 'checkbox'),
                            (m.checkOn = '' !== e.value),
                            (m.optSelected = t.selected),
                            ((e = a.createElement('input')).value = 't'),
                            (e.type = 'radio'),
                            (m.radioValue = 't' === e.value);
                    })();
                var gt,
                    mt = E.expr.attrHandle;
                E.fn.extend({
                    attr: function(e, t) {
                        return z(this, E.attr, e, t, arguments.length > 1);
                    },
                    removeAttr: function(e) {
                        return this.each(function() {
                            E.removeAttr(this, e);
                        });
                    }
                }),
                    E.extend({
                        attr: function(e, t, n) {
                            var r,
                                o,
                                i = e.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i)
                                return void 0 === e.getAttribute
                                    ? E.prop(e, t, n)
                                    : ((1 === i && E.isXMLDoc(e)) ||
                                          (o =
                                              E.attrHooks[t.toLowerCase()] ||
                                              (E.expr.match.bool.test(t)
                                                  ? gt
                                                  : void 0)),
                                      void 0 !== n
                                          ? null === n
                                              ? void E.removeAttr(e, t)
                                              : o &&
                                                'set' in o &&
                                                void 0 !== (r = o.set(e, n, t))
                                              ? r
                                              : (e.setAttribute(t, n + ''), n)
                                          : o &&
                                            'get' in o &&
                                            null !== (r = o.get(e, t))
                                          ? r
                                          : null == (r = E.find.attr(e, t))
                                          ? void 0
                                          : r);
                        },
                        attrHooks: {
                            type: {
                                set: function(e, t) {
                                    if (
                                        !m.radioValue &&
                                        'radio' === t &&
                                        D(e, 'input')
                                    ) {
                                        var n = e.value;
                                        return (
                                            e.setAttribute('type', t),
                                            n && (e.value = n),
                                            t
                                        );
                                    }
                                }
                            }
                        },
                        removeAttr: function(e, t) {
                            var n,
                                r = 0,
                                o = t && t.match(B);
                            if (o && 1 === e.nodeType)
                                for (; (n = o[r++]); ) e.removeAttribute(n);
                        }
                    }),
                    (gt = {
                        set: function(e, t, n) {
                            return (
                                !1 === t
                                    ? E.removeAttr(e, n)
                                    : e.setAttribute(n, n),
                                n
                            );
                        }
                    }),
                    E.each(E.expr.match.bool.source.match(/\w+/g), function(
                        e,
                        t
                    ) {
                        var n = mt[t] || E.find.attr;
                        mt[t] = function(e, t, r) {
                            var o,
                                i,
                                a = t.toLowerCase();
                            return (
                                r ||
                                    ((i = mt[a]),
                                    (mt[a] = o),
                                    (o = null != n(e, t, r) ? a : null),
                                    (mt[a] = i)),
                                o
                            );
                        };
                    });
                var vt = /^(?:input|select|textarea|button)$/i,
                    bt = /^(?:a|area)$/i;
                function xt(e) {
                    return (e.match(B) || []).join(' ');
                }
                function wt(e) {
                    return (e.getAttribute && e.getAttribute('class')) || '';
                }
                function Tt(e) {
                    return Array.isArray(e)
                        ? e
                        : ('string' == typeof e && e.match(B)) || [];
                }
                E.fn.extend({
                    prop: function(e, t) {
                        return z(this, E.prop, e, t, arguments.length > 1);
                    },
                    removeProp: function(e) {
                        return this.each(function() {
                            delete this[E.propFix[e] || e];
                        });
                    }
                }),
                    E.extend({
                        prop: function(e, t, n) {
                            var r,
                                o,
                                i = e.nodeType;
                            if (3 !== i && 8 !== i && 2 !== i)
                                return (
                                    (1 === i && E.isXMLDoc(e)) ||
                                        ((t = E.propFix[t] || t),
                                        (o = E.propHooks[t])),
                                    void 0 !== n
                                        ? o &&
                                          'set' in o &&
                                          void 0 !== (r = o.set(e, n, t))
                                            ? r
                                            : (e[t] = n)
                                        : o &&
                                          'get' in o &&
                                          null !== (r = o.get(e, t))
                                        ? r
                                        : e[t]
                                );
                        },
                        propHooks: {
                            tabIndex: {
                                get: function(e) {
                                    var t = E.find.attr(e, 'tabindex');
                                    return t
                                        ? parseInt(t, 10)
                                        : vt.test(e.nodeName) ||
                                          (bt.test(e.nodeName) && e.href)
                                        ? 0
                                        : -1;
                                }
                            }
                        },
                        propFix: { for: 'htmlFor', class: 'className' }
                    }),
                    m.optSelected ||
                        (E.propHooks.selected = {
                            get: function(e) {
                                var t = e.parentNode;
                                return (
                                    t &&
                                        t.parentNode &&
                                        t.parentNode.selectedIndex,
                                    null
                                );
                            },
                            set: function(e) {
                                var t = e.parentNode;
                                t &&
                                    (t.selectedIndex,
                                    t.parentNode && t.parentNode.selectedIndex);
                            }
                        }),
                    E.each(
                        [
                            'tabIndex',
                            'readOnly',
                            'maxLength',
                            'cellSpacing',
                            'cellPadding',
                            'rowSpan',
                            'colSpan',
                            'useMap',
                            'frameBorder',
                            'contentEditable'
                        ],
                        function() {
                            E.propFix[this.toLowerCase()] = this;
                        }
                    ),
                    E.fn.extend({
                        addClass: function(e) {
                            var t,
                                n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                u = 0;
                            if (v(e))
                                return this.each(function(t) {
                                    E(this).addClass(e.call(this, t, wt(this)));
                                });
                            if ((t = Tt(e)).length)
                                for (; (n = this[u++]); )
                                    if (
                                        ((o = wt(n)),
                                        (r =
                                            1 === n.nodeType &&
                                            ' ' + xt(o) + ' '))
                                    ) {
                                        for (a = 0; (i = t[a++]); )
                                            r.indexOf(' ' + i + ' ') < 0 &&
                                                (r += i + ' ');
                                        o !== (s = xt(r)) &&
                                            n.setAttribute('class', s);
                                    }
                            return this;
                        },
                        removeClass: function(e) {
                            var t,
                                n,
                                r,
                                o,
                                i,
                                a,
                                s,
                                u = 0;
                            if (v(e))
                                return this.each(function(t) {
                                    E(this).removeClass(
                                        e.call(this, t, wt(this))
                                    );
                                });
                            if (!arguments.length)
                                return this.attr('class', '');
                            if ((t = Tt(e)).length)
                                for (; (n = this[u++]); )
                                    if (
                                        ((o = wt(n)),
                                        (r =
                                            1 === n.nodeType &&
                                            ' ' + xt(o) + ' '))
                                    ) {
                                        for (a = 0; (i = t[a++]); )
                                            for (
                                                ;
                                                r.indexOf(' ' + i + ' ') > -1;

                                            )
                                                r = r.replace(
                                                    ' ' + i + ' ',
                                                    ' '
                                                );
                                        o !== (s = xt(r)) &&
                                            n.setAttribute('class', s);
                                    }
                            return this;
                        },
                        toggleClass: function(e, t) {
                            var n = typeof e,
                                r = 'string' === n || Array.isArray(e);
                            return 'boolean' == typeof t && r
                                ? t
                                    ? this.addClass(e)
                                    : this.removeClass(e)
                                : v(e)
                                ? this.each(function(n) {
                                      E(this).toggleClass(
                                          e.call(this, n, wt(this), t),
                                          t
                                      );
                                  })
                                : this.each(function() {
                                      var t, o, i, a;
                                      if (r)
                                          for (
                                              o = 0, i = E(this), a = Tt(e);
                                              (t = a[o++]);

                                          )
                                              i.hasClass(t)
                                                  ? i.removeClass(t)
                                                  : i.addClass(t);
                                      else
                                          (void 0 !== e && 'boolean' !== n) ||
                                              ((t = wt(this)) &&
                                                  K.set(
                                                      this,
                                                      '__className__',
                                                      t
                                                  ),
                                              this.setAttribute &&
                                                  this.setAttribute(
                                                      'class',
                                                      t || !1 === e
                                                          ? ''
                                                          : K.get(
                                                                this,
                                                                '__className__'
                                                            ) || ''
                                                  ));
                                  });
                        },
                        hasClass: function(e) {
                            var t,
                                n,
                                r = 0;
                            for (t = ' ' + e + ' '; (n = this[r++]); )
                                if (
                                    1 === n.nodeType &&
                                    (' ' + xt(wt(n)) + ' ').indexOf(t) > -1
                                )
                                    return !0;
                            return !1;
                        }
                    });
                var Et = /\r/g;
                E.fn.extend({
                    val: function(e) {
                        var t,
                            n,
                            r,
                            o = this[0];
                        return arguments.length
                            ? ((r = v(e)),
                              this.each(function(n) {
                                  var o;
                                  1 === this.nodeType &&
                                      (null ==
                                      (o = r
                                          ? e.call(this, n, E(this).val())
                                          : e)
                                          ? (o = '')
                                          : 'number' == typeof o
                                          ? (o += '')
                                          : Array.isArray(o) &&
                                            (o = E.map(o, function(e) {
                                                return null == e ? '' : e + '';
                                            })),
                                      ((t =
                                          E.valHooks[this.type] ||
                                          E.valHooks[
                                              this.nodeName.toLowerCase()
                                          ]) &&
                                          'set' in t &&
                                          void 0 !== t.set(this, o, 'value')) ||
                                          (this.value = o));
                              }))
                            : o
                            ? (t =
                                  E.valHooks[o.type] ||
                                  E.valHooks[o.nodeName.toLowerCase()]) &&
                              'get' in t &&
                              void 0 !== (n = t.get(o, 'value'))
                                ? n
                                : 'string' == typeof (n = o.value)
                                ? n.replace(Et, '')
                                : null == n
                                ? ''
                                : n
                            : void 0;
                    }
                }),
                    E.extend({
                        valHooks: {
                            option: {
                                get: function(e) {
                                    var t = E.find.attr(e, 'value');
                                    return null != t ? t : xt(E.text(e));
                                }
                            },
                            select: {
                                get: function(e) {
                                    var t,
                                        n,
                                        r,
                                        o = e.options,
                                        i = e.selectedIndex,
                                        a = 'select-one' === e.type,
                                        s = a ? null : [],
                                        u = a ? i + 1 : o.length;
                                    for (r = i < 0 ? u : a ? i : 0; r < u; r++)
                                        if (
                                            ((n = o[r]).selected || r === i) &&
                                            !n.disabled &&
                                            (!n.parentNode.disabled ||
                                                !D(n.parentNode, 'optgroup'))
                                        ) {
                                            if (((t = E(n).val()), a)) return t;
                                            s.push(t);
                                        }
                                    return s;
                                },
                                set: function(e, t) {
                                    for (
                                        var n,
                                            r,
                                            o = e.options,
                                            i = E.makeArray(t),
                                            a = o.length;
                                        a--;

                                    )
                                        ((r = o[a]).selected =
                                            E.inArray(
                                                E.valHooks.option.get(r),
                                                i
                                            ) > -1) && (n = !0);
                                    return n || (e.selectedIndex = -1), i;
                                }
                            }
                        }
                    }),
                    E.each(['radio', 'checkbox'], function() {
                        (E.valHooks[this] = {
                            set: function(e, t) {
                                if (Array.isArray(t))
                                    return (e.checked =
                                        E.inArray(E(e).val(), t) > -1);
                            }
                        }),
                            m.checkOn ||
                                (E.valHooks[this].get = function(e) {
                                    return null === e.getAttribute('value')
                                        ? 'on'
                                        : e.value;
                                });
                    }),
                    (m.focusin = 'onfocusin' in n);
                var Ct = /^(?:focusinfocus|focusoutblur)$/,
                    At = function(e) {
                        e.stopPropagation();
                    };
                E.extend(E.event, {
                    trigger: function(e, t, r, o) {
                        var i,
                            s,
                            u,
                            l,
                            c,
                            f,
                            p,
                            d,
                            y = [r || a],
                            g = h.call(e, 'type') ? e.type : e,
                            m = h.call(e, 'namespace')
                                ? e.namespace.split('.')
                                : [];
                        if (
                            ((s = d = u = r = r || a),
                            3 !== r.nodeType &&
                                8 !== r.nodeType &&
                                !Ct.test(g + E.event.triggered) &&
                                (g.indexOf('.') > -1 &&
                                    ((m = g.split('.')),
                                    (g = m.shift()),
                                    m.sort()),
                                (c = g.indexOf(':') < 0 && 'on' + g),
                                ((e = e[E.expando]
                                    ? e
                                    : new E.Event(
                                          g,
                                          'object' == typeof e && e
                                      )).isTrigger = o ? 2 : 3),
                                (e.namespace = m.join('.')),
                                (e.rnamespace = e.namespace
                                    ? new RegExp(
                                          '(^|\\.)' +
                                              m.join('\\.(?:.*\\.|)') +
                                              '(\\.|$)'
                                      )
                                    : null),
                                (e.result = void 0),
                                e.target || (e.target = r),
                                (t = null == t ? [e] : E.makeArray(t, [e])),
                                (p = E.event.special[g] || {}),
                                o ||
                                    !p.trigger ||
                                    !1 !== p.trigger.apply(r, t)))
                        ) {
                            if (!o && !p.noBubble && !b(r)) {
                                for (
                                    l = p.delegateType || g,
                                        Ct.test(l + g) || (s = s.parentNode);
                                    s;
                                    s = s.parentNode
                                )
                                    y.push(s), (u = s);
                                u === (r.ownerDocument || a) &&
                                    y.push(
                                        u.defaultView || u.parentWindow || n
                                    );
                            }
                            for (
                                i = 0;
                                (s = y[i++]) && !e.isPropagationStopped();

                            )
                                (d = s),
                                    (e.type = i > 1 ? l : p.bindType || g),
                                    (f =
                                        (K.get(s, 'events') || {})[e.type] &&
                                        K.get(s, 'handle')) && f.apply(s, t),
                                    (f = c && s[c]) &&
                                        f.apply &&
                                        Q(s) &&
                                        ((e.result = f.apply(s, t)),
                                        !1 === e.result && e.preventDefault());
                            return (
                                (e.type = g),
                                o ||
                                    e.isDefaultPrevented() ||
                                    (p._default &&
                                        !1 !== p._default.apply(y.pop(), t)) ||
                                    !Q(r) ||
                                    (c &&
                                        v(r[g]) &&
                                        !b(r) &&
                                        ((u = r[c]) && (r[c] = null),
                                        (E.event.triggered = g),
                                        e.isPropagationStopped() &&
                                            d.addEventListener(g, At),
                                        r[g](),
                                        e.isPropagationStopped() &&
                                            d.removeEventListener(g, At),
                                        (E.event.triggered = void 0),
                                        u && (r[c] = u))),
                                e.result
                            );
                        }
                    },
                    simulate: function(e, t, n) {
                        var r = E.extend(new E.Event(), n, {
                            type: e,
                            isSimulated: !0
                        });
                        E.event.trigger(r, null, t);
                    }
                }),
                    E.fn.extend({
                        trigger: function(e, t) {
                            return this.each(function() {
                                E.event.trigger(e, t, this);
                            });
                        },
                        triggerHandler: function(e, t) {
                            var n = this[0];
                            if (n) return E.event.trigger(e, t, n, !0);
                        }
                    }),
                    m.focusin ||
                        E.each({ focus: 'focusin', blur: 'focusout' }, function(
                            e,
                            t
                        ) {
                            var n = function(e) {
                                E.event.simulate(t, e.target, E.event.fix(e));
                            };
                            E.event.special[t] = {
                                setup: function() {
                                    var r = this.ownerDocument || this,
                                        o = K.access(r, t);
                                    o || r.addEventListener(e, n, !0),
                                        K.access(r, t, (o || 0) + 1);
                                },
                                teardown: function() {
                                    var r = this.ownerDocument || this,
                                        o = K.access(r, t) - 1;
                                    o
                                        ? K.access(r, t, o)
                                        : (r.removeEventListener(e, n, !0),
                                          K.remove(r, t));
                                }
                            };
                        });
                var St = n.location,
                    kt = Date.now(),
                    jt = /\?/;
                E.parseXML = function(e) {
                    var t;
                    if (!e || 'string' != typeof e) return null;
                    try {
                        t = new n.DOMParser().parseFromString(e, 'text/xml');
                    } catch (e) {
                        t = void 0;
                    }
                    return (
                        (t && !t.getElementsByTagName('parsererror').length) ||
                            E.error('Invalid XML: ' + e),
                        t
                    );
                };
                var Nt = /\[\]$/,
                    Dt = /\r?\n/g,
                    Lt = /^(?:submit|button|image|reset|file)$/i,
                    Ot = /^(?:input|select|textarea|keygen)/i;
                function qt(e, t, n, r) {
                    var o;
                    if (Array.isArray(t))
                        E.each(t, function(t, o) {
                            n || Nt.test(e)
                                ? r(e, o)
                                : qt(
                                      e +
                                          '[' +
                                          ('object' == typeof o && null != o
                                              ? t
                                              : '') +
                                          ']',
                                      o,
                                      n,
                                      r
                                  );
                        });
                    else if (n || 'object' !== T(t)) r(e, t);
                    else for (o in t) qt(e + '[' + o + ']', t[o], n, r);
                }
                (E.param = function(e, t) {
                    var n,
                        r = [],
                        o = function(e, t) {
                            var n = v(t) ? t() : t;
                            r[r.length] =
                                encodeURIComponent(e) +
                                '=' +
                                encodeURIComponent(null == n ? '' : n);
                        };
                    if (null == e) return '';
                    if (Array.isArray(e) || (e.jquery && !E.isPlainObject(e)))
                        E.each(e, function() {
                            o(this.name, this.value);
                        });
                    else for (n in e) qt(n, e[n], t, o);
                    return r.join('&');
                }),
                    E.fn.extend({
                        serialize: function() {
                            return E.param(this.serializeArray());
                        },
                        serializeArray: function() {
                            return this.map(function() {
                                var e = E.prop(this, 'elements');
                                return e ? E.makeArray(e) : this;
                            })
                                .filter(function() {
                                    var e = this.type;
                                    return (
                                        this.name &&
                                        !E(this).is(':disabled') &&
                                        Ot.test(this.nodeName) &&
                                        !Lt.test(e) &&
                                        (this.checked || !ye.test(e))
                                    );
                                })
                                .map(function(e, t) {
                                    var n = E(this).val();
                                    return null == n
                                        ? null
                                        : Array.isArray(n)
                                        ? E.map(n, function(e) {
                                              return {
                                                  name: t.name,
                                                  value: e.replace(Dt, '\r\n')
                                              };
                                          })
                                        : {
                                              name: t.name,
                                              value: n.replace(Dt, '\r\n')
                                          };
                                })
                                .get();
                        }
                    });
                var _t = /%20/g,
                    Pt = /#.*$/,
                    Rt = /([?&])_=[^&]*/,
                    Ht = /^(.*?):[ \t]*([^\r\n]*)$/gm,
                    Bt = /^(?:GET|HEAD)$/,
                    It = /^\/\//,
                    Mt = {},
                    Ut = {},
                    Ft = '*/'.concat('*'),
                    $t = a.createElement('a');
                function Wt(e) {
                    return function(t, n) {
                        'string' != typeof t && ((n = t), (t = '*'));
                        var r,
                            o = 0,
                            i = t.toLowerCase().match(B) || [];
                        if (v(n))
                            for (; (r = i[o++]); )
                                '+' === r[0]
                                    ? ((r = r.slice(1) || '*'),
                                      (e[r] = e[r] || []).unshift(n))
                                    : (e[r] = e[r] || []).push(n);
                    };
                }
                function zt(e, t, n, r) {
                    var o = {},
                        i = e === Ut;
                    function a(s) {
                        var u;
                        return (
                            (o[s] = !0),
                            E.each(e[s] || [], function(e, s) {
                                var l = s(t, n, r);
                                return 'string' != typeof l || i || o[l]
                                    ? i
                                        ? !(u = l)
                                        : void 0
                                    : (t.dataTypes.unshift(l), a(l), !1);
                            }),
                            u
                        );
                    }
                    return a(t.dataTypes[0]) || (!o['*'] && a('*'));
                }
                function Xt(e, t) {
                    var n,
                        r,
                        o = E.ajaxSettings.flatOptions || {};
                    for (n in t)
                        void 0 !== t[n] &&
                            ((o[n] ? e : r || (r = {}))[n] = t[n]);
                    return r && E.extend(!0, e, r), e;
                }
                ($t.href = St.href),
                    E.extend({
                        active: 0,
                        lastModified: {},
                        etag: {},
                        ajaxSettings: {
                            url: St.href,
                            type: 'GET',
                            isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(
                                St.protocol
                            ),
                            global: !0,
                            processData: !0,
                            async: !0,
                            contentType:
                                'application/x-www-form-urlencoded; charset=UTF-8',
                            accepts: {
                                '*': Ft,
                                text: 'text/plain',
                                html: 'text/html',
                                xml: 'application/xml, text/xml',
                                json: 'application/json, text/javascript'
                            },
                            contents: {
                                xml: /\bxml\b/,
                                html: /\bhtml/,
                                json: /\bjson\b/
                            },
                            responseFields: {
                                xml: 'responseXML',
                                text: 'responseText',
                                json: 'responseJSON'
                            },
                            converters: {
                                '* text': String,
                                'text html': !0,
                                'text json': JSON.parse,
                                'text xml': E.parseXML
                            },
                            flatOptions: { url: !0, context: !0 }
                        },
                        ajaxSetup: function(e, t) {
                            return t
                                ? Xt(Xt(e, E.ajaxSettings), t)
                                : Xt(E.ajaxSettings, e);
                        },
                        ajaxPrefilter: Wt(Mt),
                        ajaxTransport: Wt(Ut),
                        ajax: function(e, t) {
                            'object' == typeof e && ((t = e), (e = void 0)),
                                (t = t || {});
                            var r,
                                o,
                                i,
                                s,
                                u,
                                l,
                                c,
                                f,
                                p,
                                d,
                                h = E.ajaxSetup({}, t),
                                y = h.context || h,
                                g =
                                    h.context && (y.nodeType || y.jquery)
                                        ? E(y)
                                        : E.event,
                                m = E.Deferred(),
                                v = E.Callbacks('once memory'),
                                b = h.statusCode || {},
                                x = {},
                                w = {},
                                T = 'canceled',
                                C = {
                                    readyState: 0,
                                    getResponseHeader: function(e) {
                                        var t;
                                        if (c) {
                                            if (!s)
                                                for (s = {}; (t = Ht.exec(i)); )
                                                    s[
                                                        t[1].toLowerCase() + ' '
                                                    ] = (
                                                        s[
                                                            t[1].toLowerCase() +
                                                                ' '
                                                        ] || []
                                                    ).concat(t[2]);
                                            t = s[e.toLowerCase() + ' '];
                                        }
                                        return null == t ? null : t.join(', ');
                                    },
                                    getAllResponseHeaders: function() {
                                        return c ? i : null;
                                    },
                                    setRequestHeader: function(e, t) {
                                        return (
                                            null == c &&
                                                ((e = w[e.toLowerCase()] =
                                                    w[e.toLowerCase()] || e),
                                                (x[e] = t)),
                                            this
                                        );
                                    },
                                    overrideMimeType: function(e) {
                                        return (
                                            null == c && (h.mimeType = e), this
                                        );
                                    },
                                    statusCode: function(e) {
                                        var t;
                                        if (e)
                                            if (c) C.always(e[C.status]);
                                            else
                                                for (t in e)
                                                    b[t] = [b[t], e[t]];
                                        return this;
                                    },
                                    abort: function(e) {
                                        var t = e || T;
                                        return r && r.abort(t), A(0, t), this;
                                    }
                                };
                            if (
                                (m.promise(C),
                                (h.url = ((e || h.url || St.href) + '').replace(
                                    It,
                                    St.protocol + '//'
                                )),
                                (h.type =
                                    t.method || t.type || h.method || h.type),
                                (h.dataTypes = (h.dataType || '*')
                                    .toLowerCase()
                                    .match(B) || ['']),
                                null == h.crossDomain)
                            ) {
                                l = a.createElement('a');
                                try {
                                    (l.href = h.url),
                                        (l.href = l.href),
                                        (h.crossDomain =
                                            $t.protocol + '//' + $t.host !=
                                            l.protocol + '//' + l.host);
                                } catch (e) {
                                    h.crossDomain = !0;
                                }
                            }
                            if (
                                (h.data &&
                                    h.processData &&
                                    'string' != typeof h.data &&
                                    (h.data = E.param(h.data, h.traditional)),
                                zt(Mt, h, t, C),
                                c)
                            )
                                return C;
                            for (p in ((f = E.event && h.global) &&
                                0 == E.active++ &&
                                E.event.trigger('ajaxStart'),
                            (h.type = h.type.toUpperCase()),
                            (h.hasContent = !Bt.test(h.type)),
                            (o = h.url.replace(Pt, '')),
                            h.hasContent
                                ? h.data &&
                                  h.processData &&
                                  0 ===
                                      (h.contentType || '').indexOf(
                                          'application/x-www-form-urlencoded'
                                      ) &&
                                  (h.data = h.data.replace(_t, '+'))
                                : ((d = h.url.slice(o.length)),
                                  h.data &&
                                      (h.processData ||
                                          'string' == typeof h.data) &&
                                      ((o += (jt.test(o) ? '&' : '?') + h.data),
                                      delete h.data),
                                  !1 === h.cache &&
                                      ((o = o.replace(Rt, '$1')),
                                      (d =
                                          (jt.test(o) ? '&' : '?') +
                                          '_=' +
                                          kt++ +
                                          d)),
                                  (h.url = o + d)),
                            h.ifModified &&
                                (E.lastModified[o] &&
                                    C.setRequestHeader(
                                        'If-Modified-Since',
                                        E.lastModified[o]
                                    ),
                                E.etag[o] &&
                                    C.setRequestHeader(
                                        'If-None-Match',
                                        E.etag[o]
                                    )),
                            ((h.data && h.hasContent && !1 !== h.contentType) ||
                                t.contentType) &&
                                C.setRequestHeader(
                                    'Content-Type',
                                    h.contentType
                                ),
                            C.setRequestHeader(
                                'Accept',
                                h.dataTypes[0] && h.accepts[h.dataTypes[0]]
                                    ? h.accepts[h.dataTypes[0]] +
                                          ('*' !== h.dataTypes[0]
                                              ? ', ' + Ft + '; q=0.01'
                                              : '')
                                    : h.accepts['*']
                            ),
                            h.headers))
                                C.setRequestHeader(p, h.headers[p]);
                            if (
                                h.beforeSend &&
                                (!1 === h.beforeSend.call(y, C, h) || c)
                            )
                                return C.abort();
                            if (
                                ((T = 'abort'),
                                v.add(h.complete),
                                C.done(h.success),
                                C.fail(h.error),
                                (r = zt(Ut, h, t, C)))
                            ) {
                                if (
                                    ((C.readyState = 1),
                                    f && g.trigger('ajaxSend', [C, h]),
                                    c)
                                )
                                    return C;
                                h.async &&
                                    h.timeout > 0 &&
                                    (u = n.setTimeout(function() {
                                        C.abort('timeout');
                                    }, h.timeout));
                                try {
                                    (c = !1), r.send(x, A);
                                } catch (e) {
                                    if (c) throw e;
                                    A(-1, e);
                                }
                            } else A(-1, 'No Transport');
                            function A(e, t, a, s) {
                                var l,
                                    p,
                                    d,
                                    x,
                                    w,
                                    T = t;
                                c ||
                                    ((c = !0),
                                    u && n.clearTimeout(u),
                                    (r = void 0),
                                    (i = s || ''),
                                    (C.readyState = e > 0 ? 4 : 0),
                                    (l = (e >= 200 && e < 300) || 304 === e),
                                    a &&
                                        (x = (function(e, t, n) {
                                            for (
                                                var r,
                                                    o,
                                                    i,
                                                    a,
                                                    s = e.contents,
                                                    u = e.dataTypes;
                                                '*' === u[0];

                                            )
                                                u.shift(),
                                                    void 0 === r &&
                                                        (r =
                                                            e.mimeType ||
                                                            t.getResponseHeader(
                                                                'Content-Type'
                                                            ));
                                            if (r)
                                                for (o in s)
                                                    if (s[o] && s[o].test(r)) {
                                                        u.unshift(o);
                                                        break;
                                                    }
                                            if (u[0] in n) i = u[0];
                                            else {
                                                for (o in n) {
                                                    if (
                                                        !u[0] ||
                                                        e.converters[
                                                            o + ' ' + u[0]
                                                        ]
                                                    ) {
                                                        i = o;
                                                        break;
                                                    }
                                                    a || (a = o);
                                                }
                                                i = i || a;
                                            }
                                            if (i)
                                                return (
                                                    i !== u[0] && u.unshift(i),
                                                    n[i]
                                                );
                                        })(h, C, a)),
                                    (x = (function(e, t, n, r) {
                                        var o,
                                            i,
                                            a,
                                            s,
                                            u,
                                            l = {},
                                            c = e.dataTypes.slice();
                                        if (c[1])
                                            for (a in e.converters)
                                                l[a.toLowerCase()] =
                                                    e.converters[a];
                                        for (i = c.shift(); i; )
                                            if (
                                                (e.responseFields[i] &&
                                                    (n[
                                                        e.responseFields[i]
                                                    ] = t),
                                                !u &&
                                                    r &&
                                                    e.dataFilter &&
                                                    (t = e.dataFilter(
                                                        t,
                                                        e.dataType
                                                    )),
                                                (u = i),
                                                (i = c.shift()))
                                            )
                                                if ('*' === i) i = u;
                                                else if ('*' !== u && u !== i) {
                                                    if (
                                                        !(a =
                                                            l[u + ' ' + i] ||
                                                            l['* ' + i])
                                                    )
                                                        for (o in l)
                                                            if (
                                                                (s = o.split(
                                                                    ' '
                                                                ))[1] === i &&
                                                                (a =
                                                                    l[
                                                                        u +
                                                                            ' ' +
                                                                            s[0]
                                                                    ] ||
                                                                    l[
                                                                        '* ' +
                                                                            s[0]
                                                                    ])
                                                            ) {
                                                                !0 === a
                                                                    ? (a = l[o])
                                                                    : !0 !==
                                                                          l[
                                                                              o
                                                                          ] &&
                                                                      ((i =
                                                                          s[0]),
                                                                      c.unshift(
                                                                          s[1]
                                                                      ));
                                                                break;
                                                            }
                                                    if (!0 !== a)
                                                        if (a && e.throws)
                                                            t = a(t);
                                                        else
                                                            try {
                                                                t = a(t);
                                                            } catch (e) {
                                                                return {
                                                                    state:
                                                                        'parsererror',
                                                                    error: a
                                                                        ? e
                                                                        : 'No conversion from ' +
                                                                          u +
                                                                          ' to ' +
                                                                          i
                                                                };
                                                            }
                                                }
                                        return { state: 'success', data: t };
                                    })(h, x, C, l)),
                                    l
                                        ? (h.ifModified &&
                                              ((w = C.getResponseHeader(
                                                  'Last-Modified'
                                              )) && (E.lastModified[o] = w),
                                              (w = C.getResponseHeader(
                                                  'etag'
                                              )) && (E.etag[o] = w)),
                                          204 === e || 'HEAD' === h.type
                                              ? (T = 'nocontent')
                                              : 304 === e
                                              ? (T = 'notmodified')
                                              : ((T = x.state),
                                                (p = x.data),
                                                (l = !(d = x.error))))
                                        : ((d = T),
                                          (!e && T) ||
                                              ((T = 'error'),
                                              e < 0 && (e = 0))),
                                    (C.status = e),
                                    (C.statusText = (t || T) + ''),
                                    l
                                        ? m.resolveWith(y, [p, T, C])
                                        : m.rejectWith(y, [C, T, d]),
                                    C.statusCode(b),
                                    (b = void 0),
                                    f &&
                                        g.trigger(
                                            l ? 'ajaxSuccess' : 'ajaxError',
                                            [C, h, l ? p : d]
                                        ),
                                    v.fireWith(y, [C, T]),
                                    f &&
                                        (g.trigger('ajaxComplete', [C, h]),
                                        --E.active ||
                                            E.event.trigger('ajaxStop')));
                            }
                            return C;
                        },
                        getJSON: function(e, t, n) {
                            return E.get(e, t, n, 'json');
                        },
                        getScript: function(e, t) {
                            return E.get(e, void 0, t, 'script');
                        }
                    }),
                    E.each(['get', 'post'], function(e, t) {
                        E[t] = function(e, n, r, o) {
                            return (
                                v(n) && ((o = o || r), (r = n), (n = void 0)),
                                E.ajax(
                                    E.extend(
                                        {
                                            url: e,
                                            type: t,
                                            dataType: o,
                                            data: n,
                                            success: r
                                        },
                                        E.isPlainObject(e) && e
                                    )
                                )
                            );
                        };
                    }),
                    (E._evalUrl = function(e, t) {
                        return E.ajax({
                            url: e,
                            type: 'GET',
                            dataType: 'script',
                            cache: !0,
                            async: !1,
                            global: !1,
                            converters: { 'text script': function() {} },
                            dataFilter: function(e) {
                                E.globalEval(e, t);
                            }
                        });
                    }),
                    E.fn.extend({
                        wrapAll: function(e) {
                            var t;
                            return (
                                this[0] &&
                                    (v(e) && (e = e.call(this[0])),
                                    (t = E(e, this[0].ownerDocument)
                                        .eq(0)
                                        .clone(!0)),
                                    this[0].parentNode &&
                                        t.insertBefore(this[0]),
                                    t
                                        .map(function() {
                                            for (
                                                var e = this;
                                                e.firstElementChild;

                                            )
                                                e = e.firstElementChild;
                                            return e;
                                        })
                                        .append(this)),
                                this
                            );
                        },
                        wrapInner: function(e) {
                            return v(e)
                                ? this.each(function(t) {
                                      E(this).wrapInner(e.call(this, t));
                                  })
                                : this.each(function() {
                                      var t = E(this),
                                          n = t.contents();
                                      n.length ? n.wrapAll(e) : t.append(e);
                                  });
                        },
                        wrap: function(e) {
                            var t = v(e);
                            return this.each(function(n) {
                                E(this).wrapAll(t ? e.call(this, n) : e);
                            });
                        },
                        unwrap: function(e) {
                            return (
                                this.parent(e)
                                    .not('body')
                                    .each(function() {
                                        E(this).replaceWith(this.childNodes);
                                    }),
                                this
                            );
                        }
                    }),
                    (E.expr.pseudos.hidden = function(e) {
                        return !E.expr.pseudos.visible(e);
                    }),
                    (E.expr.pseudos.visible = function(e) {
                        return !!(
                            e.offsetWidth ||
                            e.offsetHeight ||
                            e.getClientRects().length
                        );
                    }),
                    (E.ajaxSettings.xhr = function() {
                        try {
                            return new n.XMLHttpRequest();
                        } catch (e) {}
                    });
                var Gt = { 0: 200, 1223: 204 },
                    Vt = E.ajaxSettings.xhr();
                (m.cors = !!Vt && 'withCredentials' in Vt),
                    (m.ajax = Vt = !!Vt),
                    E.ajaxTransport(function(e) {
                        var t, r;
                        if (m.cors || (Vt && !e.crossDomain))
                            return {
                                send: function(o, i) {
                                    var a,
                                        s = e.xhr();
                                    if (
                                        (s.open(
                                            e.type,
                                            e.url,
                                            e.async,
                                            e.username,
                                            e.password
                                        ),
                                        e.xhrFields)
                                    )
                                        for (a in e.xhrFields)
                                            s[a] = e.xhrFields[a];
                                    for (a in (e.mimeType &&
                                        s.overrideMimeType &&
                                        s.overrideMimeType(e.mimeType),
                                    e.crossDomain ||
                                        o['X-Requested-With'] ||
                                        (o['X-Requested-With'] =
                                            'XMLHttpRequest'),
                                    o))
                                        s.setRequestHeader(a, o[a]);
                                    (t = function(e) {
                                        return function() {
                                            t &&
                                                ((t = r = s.onload = s.onerror = s.onabort = s.ontimeout = s.onreadystatechange = null),
                                                'abort' === e
                                                    ? s.abort()
                                                    : 'error' === e
                                                    ? 'number' !=
                                                      typeof s.status
                                                        ? i(0, 'error')
                                                        : i(
                                                              s.status,
                                                              s.statusText
                                                          )
                                                    : i(
                                                          Gt[s.status] ||
                                                              s.status,
                                                          s.statusText,
                                                          'text' !==
                                                              (s.responseType ||
                                                                  'text') ||
                                                              'string' !=
                                                                  typeof s.responseText
                                                              ? {
                                                                    binary:
                                                                        s.response
                                                                }
                                                              : {
                                                                    text:
                                                                        s.responseText
                                                                },
                                                          s.getAllResponseHeaders()
                                                      ));
                                        };
                                    }),
                                        (s.onload = t()),
                                        (r = s.onerror = s.ontimeout = t(
                                            'error'
                                        )),
                                        void 0 !== s.onabort
                                            ? (s.onabort = r)
                                            : (s.onreadystatechange = function() {
                                                  4 === s.readyState &&
                                                      n.setTimeout(function() {
                                                          t && r();
                                                      });
                                              }),
                                        (t = t('abort'));
                                    try {
                                        s.send(
                                            (e.hasContent && e.data) || null
                                        );
                                    } catch (e) {
                                        if (t) throw e;
                                    }
                                },
                                abort: function() {
                                    t && t();
                                }
                            };
                    }),
                    E.ajaxPrefilter(function(e) {
                        e.crossDomain && (e.contents.script = !1);
                    }),
                    E.ajaxSetup({
                        accepts: {
                            script:
                                'text/javascript, application/javascript, application/ecmascript, application/x-ecmascript'
                        },
                        contents: { script: /\b(?:java|ecma)script\b/ },
                        converters: {
                            'text script': function(e) {
                                return E.globalEval(e), e;
                            }
                        }
                    }),
                    E.ajaxPrefilter('script', function(e) {
                        void 0 === e.cache && (e.cache = !1),
                            e.crossDomain && (e.type = 'GET');
                    }),
                    E.ajaxTransport('script', function(e) {
                        var t, n;
                        if (e.crossDomain || e.scriptAttrs)
                            return {
                                send: function(r, o) {
                                    (t = E('<script>')
                                        .attr(e.scriptAttrs || {})
                                        .prop({
                                            charset: e.scriptCharset,
                                            src: e.url
                                        })
                                        .on(
                                            'load error',
                                            (n = function(e) {
                                                t.remove(),
                                                    (n = null),
                                                    e &&
                                                        o(
                                                            'error' === e.type
                                                                ? 404
                                                                : 200,
                                                            e.type
                                                        );
                                            })
                                        )),
                                        a.head.appendChild(t[0]);
                                },
                                abort: function() {
                                    n && n();
                                }
                            };
                    });
                var Jt,
                    Qt = [],
                    Yt = /(=)\?(?=&|$)|\?\?/;
                E.ajaxSetup({
                    jsonp: 'callback',
                    jsonpCallback: function() {
                        var e = Qt.pop() || E.expando + '_' + kt++;
                        return (this[e] = !0), e;
                    }
                }),
                    E.ajaxPrefilter('json jsonp', function(e, t, r) {
                        var o,
                            i,
                            a,
                            s =
                                !1 !== e.jsonp &&
                                (Yt.test(e.url)
                                    ? 'url'
                                    : 'string' == typeof e.data &&
                                      0 ===
                                          (e.contentType || '').indexOf(
                                              'application/x-www-form-urlencoded'
                                          ) &&
                                      Yt.test(e.data) &&
                                      'data');
                        if (s || 'jsonp' === e.dataTypes[0])
                            return (
                                (o = e.jsonpCallback = v(e.jsonpCallback)
                                    ? e.jsonpCallback()
                                    : e.jsonpCallback),
                                s
                                    ? (e[s] = e[s].replace(Yt, '$1' + o))
                                    : !1 !== e.jsonp &&
                                      (e.url +=
                                          (jt.test(e.url) ? '&' : '?') +
                                          e.jsonp +
                                          '=' +
                                          o),
                                (e.converters['script json'] = function() {
                                    return (
                                        a || E.error(o + ' was not called'),
                                        a[0]
                                    );
                                }),
                                (e.dataTypes[0] = 'json'),
                                (i = n[o]),
                                (n[o] = function() {
                                    a = arguments;
                                }),
                                r.always(function() {
                                    void 0 === i
                                        ? E(n).removeProp(o)
                                        : (n[o] = i),
                                        e[o] &&
                                            ((e.jsonpCallback =
                                                t.jsonpCallback),
                                            Qt.push(o)),
                                        a && v(i) && i(a[0]),
                                        (a = i = void 0);
                                }),
                                'script'
                            );
                    }),
                    (m.createHTMLDocument =
                        (((Jt = a.implementation.createHTMLDocument('')
                            .body).innerHTML = '<form></form><form></form>'),
                        2 === Jt.childNodes.length)),
                    (E.parseHTML = function(e, t, n) {
                        return 'string' != typeof e
                            ? []
                            : ('boolean' == typeof t && ((n = t), (t = !1)),
                              t ||
                                  (m.createHTMLDocument
                                      ? (((r = (t = a.implementation.createHTMLDocument(
                                            ''
                                        )).createElement('base')).href =
                                            a.location.href),
                                        t.head.appendChild(r))
                                      : (t = a)),
                              (i = !n && []),
                              (o = L.exec(e))
                                  ? [t.createElement(o[1])]
                                  : ((o = Ce([e], t, i)),
                                    i && i.length && E(i).remove(),
                                    E.merge([], o.childNodes)));
                        var r, o, i;
                    }),
                    (E.fn.load = function(e, t, n) {
                        var r,
                            o,
                            i,
                            a = this,
                            s = e.indexOf(' ');
                        return (
                            s > -1 &&
                                ((r = xt(e.slice(s))), (e = e.slice(0, s))),
                            v(t)
                                ? ((n = t), (t = void 0))
                                : t && 'object' == typeof t && (o = 'POST'),
                            a.length > 0 &&
                                E.ajax({
                                    url: e,
                                    type: o || 'GET',
                                    dataType: 'html',
                                    data: t
                                })
                                    .done(function(e) {
                                        (i = arguments),
                                            a.html(
                                                r
                                                    ? E('<div>')
                                                          .append(
                                                              E.parseHTML(e)
                                                          )
                                                          .find(r)
                                                    : e
                                            );
                                    })
                                    .always(
                                        n &&
                                            function(e, t) {
                                                a.each(function() {
                                                    n.apply(
                                                        this,
                                                        i || [
                                                            e.responseText,
                                                            t,
                                                            e
                                                        ]
                                                    );
                                                });
                                            }
                                    ),
                            this
                        );
                    }),
                    E.each(
                        [
                            'ajaxStart',
                            'ajaxStop',
                            'ajaxComplete',
                            'ajaxError',
                            'ajaxSuccess',
                            'ajaxSend'
                        ],
                        function(e, t) {
                            E.fn[t] = function(e) {
                                return this.on(t, e);
                            };
                        }
                    ),
                    (E.expr.pseudos.animated = function(e) {
                        return E.grep(E.timers, function(t) {
                            return e === t.elem;
                        }).length;
                    }),
                    (E.offset = {
                        setOffset: function(e, t, n) {
                            var r,
                                o,
                                i,
                                a,
                                s,
                                u,
                                l = E.css(e, 'position'),
                                c = E(e),
                                f = {};
                            'static' === l && (e.style.position = 'relative'),
                                (s = c.offset()),
                                (i = E.css(e, 'top')),
                                (u = E.css(e, 'left')),
                                ('absolute' === l || 'fixed' === l) &&
                                (i + u).indexOf('auto') > -1
                                    ? ((a = (r = c.position()).top),
                                      (o = r.left))
                                    : ((a = parseFloat(i) || 0),
                                      (o = parseFloat(u) || 0)),
                                v(t) && (t = t.call(e, n, E.extend({}, s))),
                                null != t.top && (f.top = t.top - s.top + a),
                                null != t.left &&
                                    (f.left = t.left - s.left + o),
                                'using' in t ? t.using.call(e, f) : c.css(f);
                        }
                    }),
                    E.fn.extend({
                        offset: function(e) {
                            if (arguments.length)
                                return void 0 === e
                                    ? this
                                    : this.each(function(t) {
                                          E.offset.setOffset(this, e, t);
                                      });
                            var t,
                                n,
                                r = this[0];
                            return r
                                ? r.getClientRects().length
                                    ? ((t = r.getBoundingClientRect()),
                                      (n = r.ownerDocument.defaultView),
                                      {
                                          top: t.top + n.pageYOffset,
                                          left: t.left + n.pageXOffset
                                      })
                                    : { top: 0, left: 0 }
                                : void 0;
                        },
                        position: function() {
                            if (this[0]) {
                                var e,
                                    t,
                                    n,
                                    r = this[0],
                                    o = { top: 0, left: 0 };
                                if ('fixed' === E.css(r, 'position'))
                                    t = r.getBoundingClientRect();
                                else {
                                    for (
                                        t = this.offset(),
                                            n = r.ownerDocument,
                                            e =
                                                r.offsetParent ||
                                                n.documentElement;
                                        e &&
                                        (e === n.body ||
                                            e === n.documentElement) &&
                                        'static' === E.css(e, 'position');

                                    )
                                        e = e.parentNode;
                                    e &&
                                        e !== r &&
                                        1 === e.nodeType &&
                                        (((o = E(e).offset()).top += E.css(
                                            e,
                                            'borderTopWidth',
                                            !0
                                        )),
                                        (o.left += E.css(
                                            e,
                                            'borderLeftWidth',
                                            !0
                                        )));
                                }
                                return {
                                    top:
                                        t.top -
                                        o.top -
                                        E.css(r, 'marginTop', !0),
                                    left:
                                        t.left -
                                        o.left -
                                        E.css(r, 'marginLeft', !0)
                                };
                            }
                        },
                        offsetParent: function() {
                            return this.map(function() {
                                for (
                                    var e = this.offsetParent;
                                    e && 'static' === E.css(e, 'position');

                                )
                                    e = e.offsetParent;
                                return e || ae;
                            });
                        }
                    }),
                    E.each(
                        { scrollLeft: 'pageXOffset', scrollTop: 'pageYOffset' },
                        function(e, t) {
                            var n = 'pageYOffset' === t;
                            E.fn[e] = function(r) {
                                return z(
                                    this,
                                    function(e, r, o) {
                                        var i;
                                        if (
                                            (b(e)
                                                ? (i = e)
                                                : 9 === e.nodeType &&
                                                  (i = e.defaultView),
                                            void 0 === o)
                                        )
                                            return i ? i[t] : e[r];
                                        i
                                            ? i.scrollTo(
                                                  n ? i.pageXOffset : o,
                                                  n ? o : i.pageYOffset
                                              )
                                            : (e[r] = o);
                                    },
                                    e,
                                    r,
                                    arguments.length
                                );
                            };
                        }
                    ),
                    E.each(['top', 'left'], function(e, t) {
                        E.cssHooks[t] = Ve(m.pixelPosition, function(e, n) {
                            if (n)
                                return (
                                    (n = Ge(e, t)),
                                    We.test(n) ? E(e).position()[t] + 'px' : n
                                );
                        });
                    }),
                    E.each({ Height: 'height', Width: 'width' }, function(
                        e,
                        t
                    ) {
                        E.each(
                            {
                                padding: 'inner' + e,
                                content: t,
                                '': 'outer' + e
                            },
                            function(n, r) {
                                E.fn[r] = function(o, i) {
                                    var a =
                                            arguments.length &&
                                            (n || 'boolean' != typeof o),
                                        s =
                                            n ||
                                            (!0 === o || !0 === i
                                                ? 'margin'
                                                : 'border');
                                    return z(
                                        this,
                                        function(t, n, o) {
                                            var i;
                                            return b(t)
                                                ? 0 === r.indexOf('outer')
                                                    ? t['inner' + e]
                                                    : t.document
                                                          .documentElement[
                                                          'client' + e
                                                      ]
                                                : 9 === t.nodeType
                                                ? ((i = t.documentElement),
                                                  Math.max(
                                                      t.body['scroll' + e],
                                                      i['scroll' + e],
                                                      t.body['offset' + e],
                                                      i['offset' + e],
                                                      i['client' + e]
                                                  ))
                                                : void 0 === o
                                                ? E.css(t, n, s)
                                                : E.style(t, n, o, s);
                                        },
                                        t,
                                        a ? o : void 0,
                                        a
                                    );
                                };
                            }
                        );
                    }),
                    E.each(
                        'blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu'.split(
                            ' '
                        ),
                        function(e, t) {
                            E.fn[t] = function(e, n) {
                                return arguments.length > 0
                                    ? this.on(t, null, e, n)
                                    : this.trigger(t);
                            };
                        }
                    ),
                    E.fn.extend({
                        hover: function(e, t) {
                            return this.mouseenter(e).mouseleave(t || e);
                        }
                    }),
                    E.fn.extend({
                        bind: function(e, t, n) {
                            return this.on(e, null, t, n);
                        },
                        unbind: function(e, t) {
                            return this.off(e, null, t);
                        },
                        delegate: function(e, t, n, r) {
                            return this.on(t, e, n, r);
                        },
                        undelegate: function(e, t, n) {
                            return 1 === arguments.length
                                ? this.off(e, '**')
                                : this.off(t, e || '**', n);
                        }
                    }),
                    (E.proxy = function(e, t) {
                        var n, r, o;
                        if (
                            ('string' == typeof t &&
                                ((n = e[t]), (t = e), (e = n)),
                            v(e))
                        )
                            return (
                                (r = u.call(arguments, 2)),
                                ((o = function() {
                                    return e.apply(
                                        t || this,
                                        r.concat(u.call(arguments))
                                    );
                                }).guid = e.guid = e.guid || E.guid++),
                                o
                            );
                    }),
                    (E.holdReady = function(e) {
                        e ? E.readyWait++ : E.ready(!0);
                    }),
                    (E.isArray = Array.isArray),
                    (E.parseJSON = JSON.parse),
                    (E.nodeName = D),
                    (E.isFunction = v),
                    (E.isWindow = b),
                    (E.camelCase = J),
                    (E.type = T),
                    (E.now = Date.now),
                    (E.isNumeric = function(e) {
                        var t = E.type(e);
                        return (
                            ('number' === t || 'string' === t) &&
                            !isNaN(e - parseFloat(e))
                        );
                    }),
                    void 0 ===
                        (r = function() {
                            return E;
                        }.apply(t, [])) || (e.exports = r);
                var Kt = n.jQuery,
                    Zt = n.$;
                return (
                    (E.noConflict = function(e) {
                        return (
                            n.$ === E && (n.$ = Zt),
                            e && n.jQuery === E && (n.jQuery = Kt),
                            E
                        );
                    }),
                    o || (n.jQuery = n.$ = E),
                    E
                );
            });
        },
        function(e, t, n) {
            var r, o, i;
            (i = function() {
                return function() {
                    return (function(e) {
                        var t = [];
                        if (e[0].match(/^[^\/:]+:\/*$/) && e.length > 1) {
                            var n = e.shift();
                            e[0] = n + e[0];
                        }
                        e[0].match(/^file:\/\/\//)
                            ? (e[0] = e[0].replace(/^([^\/:]+):\/*/, '$1:///'))
                            : (e[0] = e[0].replace(/^([^\/:]+):\/*/, '$1://'));
                        for (var r = 0; r < e.length; r++) {
                            var o = e[r];
                            if ('string' != typeof o)
                                throw new TypeError(
                                    'Url must be a string. Received ' + o
                                );
                            '' !== o &&
                                (r > 0 && (o = o.replace(/^[\/]+/, '')),
                                (o =
                                    r < e.length - 1
                                        ? o.replace(/[\/]+$/, '')
                                        : o.replace(/[\/]+$/, '/')),
                                t.push(o));
                        }
                        var i = t.join('/'),
                            a = (i = i.replace(/\/(\?|&|#[^!])/g, '$1')).split(
                                '?'
                            );
                        return (i =
                            a.shift() +
                            (a.length > 0 ? '?' : '') +
                            a.join('&'));
                    })(
                        'object' == typeof arguments[0]
                            ? arguments[0]
                            : [].slice.call(arguments)
                    );
                };
            }),
                e.exports
                    ? (e.exports = i())
                    : void 0 ===
                          (o =
                              'function' == typeof (r = i)
                                  ? r.call(t, n, t, e)
                                  : r) || (e.exports = o);
        },
        function(e, t, n) {
            var r = n(3);
            'string' == typeof r && (r = [[e.i, r, '']]);
            var o = { hmr: !0, transform: void 0, insertInto: void 0 };
            n(5)(r, o);
            r.locals && (e.exports = r.locals);
        },
        function(e, t, n) {
            (e.exports = n(4)(!1)).push([
                e.i,
                '.oeb-table-scroll {\n  position: relative;\n  width:100%;\n  z-index: 1;\n  margin: auto;\n  overflow: scroll;\n  max-height: 500px;\n}\n.oeb-table-scroll table {\n  width: 100%;\n  min-width: 600px;\n  margin: auto;\n  border-collapse: separate;\n  border-spacing: 0;\n}\n\n.oeb-table-scroll th,\n.oeb-table-scroll td {\n  padding: 5px 10px;\n  border: 1px solid black;  \n  vertical-align: top;\n  text-align: center;\n}\n.oeb-table-scroll thead th {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n}\n\n.oeb-table-scroll th {\n  position: -webkit-sticky;\n  position: sticky;\n  background: #fff;  \n  /* overflow: hidden; */\n  z-index:3;\n}\n/* .oeb-table-scroll th a{\n \n}*/\n.oeb-table-scroll th:first-child {\n  position: -webkit-sticky;\n  position: sticky;\n  left: 0;\n  z-index: 2;\n}\n.oeb-table-scroll thead th:first-child{\n  z-index: 4;\n  \n}\n\n\n.no_benchmark_data {\n  text-align: center;\n  border: none !important;\n}\n\n.classificators_list {\n  background-color: #0A58A2;\n\n  border-radius: 8px;\n  color: #fff;\n  font-size: 1vw;\n  padding-left: 25px;\n  padding-right: 25px;\n  text-align: center;\n  width: 20vw;\n\n}\n\n.classificators_list:hover {\n  background-color: #b3cde0;\n\n} \n',
                ''
            ]);
        },
        function(e, t) {
            e.exports = function(e) {
                var t = [];
                return (
                    (t.toString = function() {
                        return this.map(function(t) {
                            var n = (function(e, t) {
                                var n = e[1] || '',
                                    r = e[3];
                                if (!r) return n;
                                if (t && 'function' == typeof btoa) {
                                    var o =
                                            ((a = r),
                                            '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' +
                                                btoa(
                                                    unescape(
                                                        encodeURIComponent(
                                                            JSON.stringify(a)
                                                        )
                                                    )
                                                ) +
                                                ' */'),
                                        i = r.sources.map(function(e) {
                                            return (
                                                '/*# sourceURL=' +
                                                r.sourceRoot +
                                                e +
                                                ' */'
                                            );
                                        });
                                    return [n]
                                        .concat(i)
                                        .concat([o])
                                        .join('\n');
                                }
                                var a;
                                return [n].join('\n');
                            })(t, e);
                            return t[2] ? '@media ' + t[2] + '{' + n + '}' : n;
                        }).join('');
                    }),
                    (t.i = function(e, n) {
                        'string' == typeof e && (e = [[null, e, '']]);
                        for (var r = {}, o = 0; o < this.length; o++) {
                            var i = this[o][0];
                            'number' == typeof i && (r[i] = !0);
                        }
                        for (o = 0; o < e.length; o++) {
                            var a = e[o];
                            ('number' == typeof a[0] && r[a[0]]) ||
                                (n && !a[2]
                                    ? (a[2] = n)
                                    : n &&
                                      (a[2] = '(' + a[2] + ') and (' + n + ')'),
                                t.push(a));
                        }
                    }),
                    t
                );
            };
        },
        function(e, t, n) {
            var r,
                o,
                i = {},
                a =
                    ((r = function() {
                        return (
                            window && document && document.all && !window.atob
                        );
                    }),
                    function() {
                        return (
                            void 0 === o && (o = r.apply(this, arguments)), o
                        );
                    }),
                s = (function(e) {
                    var t = {};
                    return function(e) {
                        if ('function' == typeof e) return e();
                        if (void 0 === t[e]) {
                            var n = function(e) {
                                return document.querySelector(e);
                            }.call(this, e);
                            if (
                                window.HTMLIFrameElement &&
                                n instanceof window.HTMLIFrameElement
                            )
                                try {
                                    n = n.contentDocument.head;
                                } catch (e) {
                                    n = null;
                                }
                            t[e] = n;
                        }
                        return t[e];
                    };
                })(),
                u = null,
                l = 0,
                c = [],
                f = n(6);
            function p(e, t) {
                for (var n = 0; n < e.length; n++) {
                    var r = e[n],
                        o = i[r.id];
                    if (o) {
                        o.refs++;
                        for (var a = 0; a < o.parts.length; a++)
                            o.parts[a](r.parts[a]);
                        for (; a < r.parts.length; a++)
                            o.parts.push(v(r.parts[a], t));
                    } else {
                        var s = [];
                        for (a = 0; a < r.parts.length; a++)
                            s.push(v(r.parts[a], t));
                        i[r.id] = { id: r.id, refs: 1, parts: s };
                    }
                }
            }
            function d(e, t) {
                for (var n = [], r = {}, o = 0; o < e.length; o++) {
                    var i = e[o],
                        a = t.base ? i[0] + t.base : i[0],
                        s = { css: i[1], media: i[2], sourceMap: i[3] };
                    r[a]
                        ? r[a].parts.push(s)
                        : n.push((r[a] = { id: a, parts: [s] }));
                }
                return n;
            }
            function h(e, t) {
                var n = s(e.insertInto);
                if (!n)
                    throw new Error(
                        "Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid."
                    );
                var r = c[c.length - 1];
                if ('top' === e.insertAt)
                    r
                        ? r.nextSibling
                            ? n.insertBefore(t, r.nextSibling)
                            : n.appendChild(t)
                        : n.insertBefore(t, n.firstChild),
                        c.push(t);
                else if ('bottom' === e.insertAt) n.appendChild(t);
                else {
                    if ('object' != typeof e.insertAt || !e.insertAt.before)
                        throw new Error(
                            "[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n"
                        );
                    var o = s(e.insertInto + ' ' + e.insertAt.before);
                    n.insertBefore(t, o);
                }
            }
            function y(e) {
                if (null === e.parentNode) return !1;
                e.parentNode.removeChild(e);
                var t = c.indexOf(e);
                t >= 0 && c.splice(t, 1);
            }
            function g(e) {
                var t = document.createElement('style');
                return (
                    void 0 === e.attrs.type && (e.attrs.type = 'text/css'),
                    m(t, e.attrs),
                    h(e, t),
                    t
                );
            }
            function m(e, t) {
                Object.keys(t).forEach(function(n) {
                    e.setAttribute(n, t[n]);
                });
            }
            function v(e, t) {
                var n, r, o, i;
                if (t.transform && e.css) {
                    if (!(i = t.transform(e.css))) return function() {};
                    e.css = i;
                }
                if (t.singleton) {
                    var a = l++;
                    (n = u || (u = g(t))),
                        (r = w.bind(null, n, a, !1)),
                        (o = w.bind(null, n, a, !0));
                } else
                    e.sourceMap &&
                    'function' == typeof URL &&
                    'function' == typeof URL.createObjectURL &&
                    'function' == typeof URL.revokeObjectURL &&
                    'function' == typeof Blob &&
                    'function' == typeof btoa
                        ? ((n = (function(e) {
                              var t = document.createElement('link');
                              return (
                                  void 0 === e.attrs.type &&
                                      (e.attrs.type = 'text/css'),
                                  (e.attrs.rel = 'stylesheet'),
                                  m(t, e.attrs),
                                  h(e, t),
                                  t
                              );
                          })(t)),
                          (r = function(e, t, n) {
                              var r = n.css,
                                  o = n.sourceMap,
                                  i = void 0 === t.convertToAbsoluteUrls && o;
                              (t.convertToAbsoluteUrls || i) && (r = f(r));
                              o &&
                                  (r +=
                                      '\n/*# sourceMappingURL=data:application/json;base64,' +
                                      btoa(
                                          unescape(
                                              encodeURIComponent(
                                                  JSON.stringify(o)
                                              )
                                          )
                                      ) +
                                      ' */');
                              var a = new Blob([r], { type: 'text/css' }),
                                  s = e.href;
                              (e.href = URL.createObjectURL(a)),
                                  s && URL.revokeObjectURL(s);
                          }.bind(null, n, t)),
                          (o = function() {
                              y(n), n.href && URL.revokeObjectURL(n.href);
                          }))
                        : ((n = g(t)),
                          (r = function(e, t) {
                              var n = t.css,
                                  r = t.media;
                              r && e.setAttribute('media', r);
                              if (e.styleSheet) e.styleSheet.cssText = n;
                              else {
                                  for (; e.firstChild; )
                                      e.removeChild(e.firstChild);
                                  e.appendChild(document.createTextNode(n));
                              }
                          }.bind(null, n)),
                          (o = function() {
                              y(n);
                          }));
                return (
                    r(e),
                    function(t) {
                        if (t) {
                            if (
                                t.css === e.css &&
                                t.media === e.media &&
                                t.sourceMap === e.sourceMap
                            )
                                return;
                            r((e = t));
                        } else o();
                    }
                );
            }
            e.exports = function(e, t) {
                if (
                    'undefined' != typeof DEBUG &&
                    DEBUG &&
                    'object' != typeof document
                )
                    throw new Error(
                        'The style-loader cannot be used in a non-browser environment'
                    );
                ((t = t || {}).attrs =
                    'object' == typeof t.attrs ? t.attrs : {}),
                    t.singleton ||
                        'boolean' == typeof t.singleton ||
                        (t.singleton = a()),
                    t.insertInto || (t.insertInto = 'head'),
                    t.insertAt || (t.insertAt = 'bottom');
                var n = d(e, t);
                return (
                    p(n, t),
                    function(e) {
                        for (var r = [], o = 0; o < n.length; o++) {
                            var a = n[o];
                            (s = i[a.id]).refs--, r.push(s);
                        }
                        e && p(d(e, t), t);
                        for (o = 0; o < r.length; o++) {
                            var s;
                            if (0 === (s = r[o]).refs) {
                                for (var u = 0; u < s.parts.length; u++)
                                    s.parts[u]();
                                delete i[s.id];
                            }
                        }
                    }
                );
            };
            var b,
                x =
                    ((b = []),
                    function(e, t) {
                        return (b[e] = t), b.filter(Boolean).join('\n');
                    });
            function w(e, t, n, r) {
                var o = n ? '' : r.css;
                if (e.styleSheet) e.styleSheet.cssText = x(t, o);
                else {
                    var i = document.createTextNode(o),
                        a = e.childNodes;
                    a[t] && e.removeChild(a[t]),
                        a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
                }
            }
        },
        function(e, t) {
            e.exports = function(e) {
                var t = 'undefined' != typeof window && window.location;
                if (!t) throw new Error('fixUrls requires window.location');
                if (!e || 'string' != typeof e) return e;
                var n = t.protocol + '//' + t.host,
                    r = n + t.pathname.replace(/\/[^\/]*$/, '/');
                return e.replace(
                    /url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,
                    function(e, t) {
                        var o,
                            i = t
                                .trim()
                                .replace(/^"(.*)"$/, function(e, t) {
                                    return t;
                                })
                                .replace(/^'(.*)'$/, function(e, t) {
                                    return t;
                                });
                        return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(
                            i
                        )
                            ? e
                            : ((o =
                                  0 === i.indexOf('//')
                                      ? i
                                      : 0 === i.indexOf('/')
                                      ? n + i
                                      : r + i.replace(/^\.\//, '')),
                              'url(' + JSON.stringify(o) + ')');
                    }
                );
            };
        },
        function(e, t) {
            !(function(e) {
                'use strict';
                if (!e.fetch) {
                    var t = {
                        searchParams: 'URLSearchParams' in e,
                        iterable: 'Symbol' in e && 'iterator' in Symbol,
                        blob:
                            'FileReader' in e &&
                            'Blob' in e &&
                            (function() {
                                try {
                                    return new Blob(), !0;
                                } catch (e) {
                                    return !1;
                                }
                            })(),
                        formData: 'FormData' in e,
                        arrayBuffer: 'ArrayBuffer' in e
                    };
                    if (t.arrayBuffer)
                        var n = [
                                '[object Int8Array]',
                                '[object Uint8Array]',
                                '[object Uint8ClampedArray]',
                                '[object Int16Array]',
                                '[object Uint16Array]',
                                '[object Int32Array]',
                                '[object Uint32Array]',
                                '[object Float32Array]',
                                '[object Float64Array]'
                            ],
                            r = function(e) {
                                return e && DataView.prototype.isPrototypeOf(e);
                            },
                            o =
                                ArrayBuffer.isView ||
                                function(e) {
                                    return (
                                        e &&
                                        n.indexOf(
                                            Object.prototype.toString.call(e)
                                        ) > -1
                                    );
                                };
                    (c.prototype.append = function(e, t) {
                        (e = s(e)), (t = u(t));
                        var n = this.map[e];
                        this.map[e] = n ? n + ',' + t : t;
                    }),
                        (c.prototype.delete = function(e) {
                            delete this.map[s(e)];
                        }),
                        (c.prototype.get = function(e) {
                            return (e = s(e)), this.has(e) ? this.map[e] : null;
                        }),
                        (c.prototype.has = function(e) {
                            return this.map.hasOwnProperty(s(e));
                        }),
                        (c.prototype.set = function(e, t) {
                            this.map[s(e)] = u(t);
                        }),
                        (c.prototype.forEach = function(e, t) {
                            for (var n in this.map)
                                this.map.hasOwnProperty(n) &&
                                    e.call(t, this.map[n], n, this);
                        }),
                        (c.prototype.keys = function() {
                            var e = [];
                            return (
                                this.forEach(function(t, n) {
                                    e.push(n);
                                }),
                                l(e)
                            );
                        }),
                        (c.prototype.values = function() {
                            var e = [];
                            return (
                                this.forEach(function(t) {
                                    e.push(t);
                                }),
                                l(e)
                            );
                        }),
                        (c.prototype.entries = function() {
                            var e = [];
                            return (
                                this.forEach(function(t, n) {
                                    e.push([n, t]);
                                }),
                                l(e)
                            );
                        }),
                        t.iterable &&
                            (c.prototype[Symbol.iterator] =
                                c.prototype.entries);
                    var i = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];
                    (g.prototype.clone = function() {
                        return new g(this, { body: this._bodyInit });
                    }),
                        y.call(g.prototype),
                        y.call(v.prototype),
                        (v.prototype.clone = function() {
                            return new v(this._bodyInit, {
                                status: this.status,
                                statusText: this.statusText,
                                headers: new c(this.headers),
                                url: this.url
                            });
                        }),
                        (v.error = function() {
                            var e = new v(null, { status: 0, statusText: '' });
                            return (e.type = 'error'), e;
                        });
                    var a = [301, 302, 303, 307, 308];
                    (v.redirect = function(e, t) {
                        if (-1 === a.indexOf(t))
                            throw new RangeError('Invalid status code');
                        return new v(null, {
                            status: t,
                            headers: { location: e }
                        });
                    }),
                        (e.Headers = c),
                        (e.Request = g),
                        (e.Response = v),
                        (e.fetch = function(e, n) {
                            return new Promise(function(r, o) {
                                var i = new g(e, n),
                                    a = new XMLHttpRequest();
                                (a.onload = function() {
                                    var e,
                                        t,
                                        n = {
                                            status: a.status,
                                            statusText: a.statusText,
                                            headers:
                                                ((e =
                                                    a.getAllResponseHeaders() ||
                                                    ''),
                                                (t = new c()),
                                                e
                                                    .split(/\r?\n/)
                                                    .forEach(function(e) {
                                                        var n = e.split(':'),
                                                            r = n
                                                                .shift()
                                                                .trim();
                                                        if (r) {
                                                            var o = n
                                                                .join(':')
                                                                .trim();
                                                            t.append(r, o);
                                                        }
                                                    }),
                                                t)
                                        };
                                    n.url =
                                        'responseURL' in a
                                            ? a.responseURL
                                            : n.headers.get('X-Request-URL');
                                    var o =
                                        'response' in a
                                            ? a.response
                                            : a.responseText;
                                    r(new v(o, n));
                                }),
                                    (a.onerror = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        );
                                    }),
                                    (a.ontimeout = function() {
                                        o(
                                            new TypeError(
                                                'Network request failed'
                                            )
                                        );
                                    }),
                                    a.open(i.method, i.url, !0),
                                    'include' === i.credentials &&
                                        (a.withCredentials = !0),
                                    'responseType' in a &&
                                        t.blob &&
                                        (a.responseType = 'blob'),
                                    i.headers.forEach(function(e, t) {
                                        a.setRequestHeader(t, e);
                                    }),
                                    a.send(
                                        void 0 === i._bodyInit
                                            ? null
                                            : i._bodyInit
                                    );
                            });
                        }),
                        (e.fetch.polyfill = !0);
                }
                function s(e) {
                    if (
                        ('string' != typeof e && (e = String(e)),
                        /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e))
                    )
                        throw new TypeError(
                            'Invalid character in header field name'
                        );
                    return e.toLowerCase();
                }
                function u(e) {
                    return 'string' != typeof e && (e = String(e)), e;
                }
                function l(e) {
                    var n = {
                        next: function() {
                            var t = e.shift();
                            return { done: void 0 === t, value: t };
                        }
                    };
                    return (
                        t.iterable &&
                            (n[Symbol.iterator] = function() {
                                return n;
                            }),
                        n
                    );
                }
                function c(e) {
                    (this.map = {}),
                        e instanceof c
                            ? e.forEach(function(e, t) {
                                  this.append(t, e);
                              }, this)
                            : Array.isArray(e)
                            ? e.forEach(function(e) {
                                  this.append(e[0], e[1]);
                              }, this)
                            : e &&
                              Object.getOwnPropertyNames(e).forEach(function(
                                  t
                              ) {
                                  this.append(t, e[t]);
                              },
                              this);
                }
                function f(e) {
                    if (e.bodyUsed)
                        return Promise.reject(new TypeError('Already read'));
                    e.bodyUsed = !0;
                }
                function p(e) {
                    return new Promise(function(t, n) {
                        (e.onload = function() {
                            t(e.result);
                        }),
                            (e.onerror = function() {
                                n(e.error);
                            });
                    });
                }
                function d(e) {
                    var t = new FileReader(),
                        n = p(t);
                    return t.readAsArrayBuffer(e), n;
                }
                function h(e) {
                    if (e.slice) return e.slice(0);
                    var t = new Uint8Array(e.byteLength);
                    return t.set(new Uint8Array(e)), t.buffer;
                }
                function y() {
                    return (
                        (this.bodyUsed = !1),
                        (this._initBody = function(e) {
                            if (((this._bodyInit = e), e))
                                if ('string' == typeof e) this._bodyText = e;
                                else if (
                                    t.blob &&
                                    Blob.prototype.isPrototypeOf(e)
                                )
                                    this._bodyBlob = e;
                                else if (
                                    t.formData &&
                                    FormData.prototype.isPrototypeOf(e)
                                )
                                    this._bodyFormData = e;
                                else if (
                                    t.searchParams &&
                                    URLSearchParams.prototype.isPrototypeOf(e)
                                )
                                    this._bodyText = e.toString();
                                else if (t.arrayBuffer && t.blob && r(e))
                                    (this._bodyArrayBuffer = h(e.buffer)),
                                        (this._bodyInit = new Blob([
                                            this._bodyArrayBuffer
                                        ]));
                                else {
                                    if (
                                        !t.arrayBuffer ||
                                        (!ArrayBuffer.prototype.isPrototypeOf(
                                            e
                                        ) &&
                                            !o(e))
                                    )
                                        throw new Error(
                                            'unsupported BodyInit type'
                                        );
                                    this._bodyArrayBuffer = h(e);
                                }
                            else this._bodyText = '';
                            this.headers.get('content-type') ||
                                ('string' == typeof e
                                    ? this.headers.set(
                                          'content-type',
                                          'text/plain;charset=UTF-8'
                                      )
                                    : this._bodyBlob && this._bodyBlob.type
                                    ? this.headers.set(
                                          'content-type',
                                          this._bodyBlob.type
                                      )
                                    : t.searchParams &&
                                      URLSearchParams.prototype.isPrototypeOf(
                                          e
                                      ) &&
                                      this.headers.set(
                                          'content-type',
                                          'application/x-www-form-urlencoded;charset=UTF-8'
                                      ));
                        }),
                        t.blob &&
                            ((this.blob = function() {
                                var e = f(this);
                                if (e) return e;
                                if (this._bodyBlob)
                                    return Promise.resolve(this._bodyBlob);
                                if (this._bodyArrayBuffer)
                                    return Promise.resolve(
                                        new Blob([this._bodyArrayBuffer])
                                    );
                                if (this._bodyFormData)
                                    throw new Error(
                                        'could not read FormData body as blob'
                                    );
                                return Promise.resolve(
                                    new Blob([this._bodyText])
                                );
                            }),
                            (this.arrayBuffer = function() {
                                return this._bodyArrayBuffer
                                    ? f(this) ||
                                          Promise.resolve(this._bodyArrayBuffer)
                                    : this.blob().then(d);
                            })),
                        (this.text = function() {
                            var e,
                                t,
                                n,
                                r = f(this);
                            if (r) return r;
                            if (this._bodyBlob)
                                return (
                                    (e = this._bodyBlob),
                                    (t = new FileReader()),
                                    (n = p(t)),
                                    t.readAsText(e),
                                    n
                                );
                            if (this._bodyArrayBuffer)
                                return Promise.resolve(
                                    (function(e) {
                                        for (
                                            var t = new Uint8Array(e),
                                                n = new Array(t.length),
                                                r = 0;
                                            r < t.length;
                                            r++
                                        )
                                            n[r] = String.fromCharCode(t[r]);
                                        return n.join('');
                                    })(this._bodyArrayBuffer)
                                );
                            if (this._bodyFormData)
                                throw new Error(
                                    'could not read FormData body as text'
                                );
                            return Promise.resolve(this._bodyText);
                        }),
                        t.formData &&
                            (this.formData = function() {
                                return this.text().then(m);
                            }),
                        (this.json = function() {
                            return this.text().then(JSON.parse);
                        }),
                        this
                    );
                }
                function g(e, t) {
                    var n,
                        r,
                        o = (t = t || {}).body;
                    if (e instanceof g) {
                        if (e.bodyUsed) throw new TypeError('Already read');
                        (this.url = e.url),
                            (this.credentials = e.credentials),
                            t.headers || (this.headers = new c(e.headers)),
                            (this.method = e.method),
                            (this.mode = e.mode),
                            o ||
                                null == e._bodyInit ||
                                ((o = e._bodyInit), (e.bodyUsed = !0));
                    } else this.url = String(e);
                    if (
                        ((this.credentials =
                            t.credentials || this.credentials || 'omit'),
                        (!t.headers && this.headers) ||
                            (this.headers = new c(t.headers)),
                        (this.method =
                            ((n = t.method || this.method || 'GET'),
                            (r = n.toUpperCase()),
                            i.indexOf(r) > -1 ? r : n)),
                        (this.mode = t.mode || this.mode || null),
                        (this.referrer = null),
                        ('GET' === this.method || 'HEAD' === this.method) && o)
                    )
                        throw new TypeError(
                            'Body not allowed for GET or HEAD requests'
                        );
                    this._initBody(o);
                }
                function m(e) {
                    var t = new FormData();
                    return (
                        e
                            .trim()
                            .split('&')
                            .forEach(function(e) {
                                if (e) {
                                    var n = e.split('='),
                                        r = n.shift().replace(/\+/g, ' '),
                                        o = n.join('=').replace(/\+/g, ' ');
                                    t.append(
                                        decodeURIComponent(r),
                                        decodeURIComponent(o)
                                    );
                                }
                            }),
                        t
                    );
                }
                function v(e, t) {
                    t || (t = {}),
                        (this.type = 'default'),
                        (this.status = 'status' in t ? t.status : 200),
                        (this.ok = this.status >= 200 && this.status < 300),
                        (this.statusText =
                            'statusText' in t ? t.statusText : 'OK'),
                        (this.headers = new c(t.headers)),
                        (this.url = t.url || ''),
                        this._initBody(e);
                }
            })('undefined' != typeof self ? self : this);
        },
        function(e, t, n) {
            'use strict';
            n.r(t);
            var r = n(0),
                o = n.n(r),
                i = (n(2), n(1)),
                a = n.n(i),
                s =
                    (n(7),
                    Object.assign ||
                        function(e) {
                            for (var t, n = 1, r = arguments.length; n < r; n++)
                                for (var o in (t = arguments[n]))
                                    Object.prototype.hasOwnProperty.call(
                                        t,
                                        o
                                    ) && (e[o] = t[o]);
                            return e;
                        });
            function u(e, t, n) {
                var r = this,
                    o = function() {
                        if (e.length > 0) {
                            var i = e.shift();
                            i && i.apply(r, [t, o]);
                        } else n(t);
                    };
                o();
            }
            function l(e, t) {
                var n;
                try {
                    n = JSON.stringify(e);
                } catch (e) {
                    throw new Error(
                        'Network request failed. Payload is not serializable: ' +
                            e.message
                    );
                }
                return s({ body: n, method: 'POST' }, t, {
                    headers: s(
                        { Accept: '*/*', 'Content-Type': 'application/json' },
                        t.headers || []
                    )
                });
            }
            function c(e) {
                void 0 === e && (e = {});
                var t = e.constructOptions,
                    n = e.customFetch,
                    r = e.uri || '/graphql',
                    o = [],
                    i = [],
                    a = [],
                    c = [],
                    f = function(e) {
                        var f,
                            p = {},
                            d = Array.isArray(e);
                        return (function(e, t) {
                            return new Promise(function(n, r) {
                                u(t ? i.slice() : o.slice(), e, n);
                            });
                        })(
                            d
                                ? { requests: e, options: p }
                                : { request: e, options: p },
                            d
                        )
                            .then(function(e) {
                                return (t ||
                                    l)(e.request || e.requests, e.options);
                            })
                            .then(function(e) {
                                return (p = s({}, e)), (n || fetch)(r, p);
                            })
                            .then(function(e) {
                                return e.text().then(function(t) {
                                    try {
                                        var n = JSON.parse(t);
                                        return (e.raw = t), (e.parsed = n), e;
                                    } catch (n) {
                                        return (f = n), (e.raw = t), e;
                                    }
                                });
                            })
                            .then(function(e) {
                                return (function(e, t) {
                                    return new Promise(function(n, r) {
                                        u(t ? c.slice() : a.slice(), e, n);
                                    });
                                })({ response: e, options: p }, d);
                            })
                            .then(function(e) {
                                var t = e.response;
                                if (t.parsed) {
                                    if (!d) return s({}, t.parsed);
                                    if (Array.isArray(t.parsed))
                                        return t.parsed;
                                    !(function(e) {
                                        var t = new Error(
                                            'A batched Operation of responses for '
                                        );
                                        throw ((t.response = e), t);
                                    })(t);
                                } else
                                    !(function(e, t) {
                                        var n;
                                        throw (((n =
                                            e && e.status >= 300
                                                ? new Error(
                                                      'Network request failed with status ' +
                                                          e.status +
                                                          ' - "' +
                                                          e.statusText +
                                                          '"'
                                                  )
                                                : new Error(
                                                      'Network request failed to return valid JSON'
                                                  )).response = e),
                                        (n.parseError = t),
                                        n);
                                    })(t, f);
                            });
                    };
                return (
                    (f.use = function(e) {
                        if ('function' != typeof e)
                            throw new Error('Middleware must be a function');
                        return o.push(e), f;
                    }),
                    (f.useAfter = function(e) {
                        if ('function' != typeof e)
                            throw new Error('Afterware must be a function');
                        return a.push(e), f;
                    }),
                    (f.batchUse = function(e) {
                        if ('function' != typeof e)
                            throw new Error('Middleware must be a function');
                        return i.push(e), f;
                    }),
                    (f.batchUseAfter = function(e) {
                        if ('function' != typeof e)
                            throw new Error('Afterware must be a function');
                        return c.push(e), f;
                    }),
                    f
                );
            }
            function f(e, t, n) {
                var r = o()('#' + e).data('mode')
                        ? 'dev-openebench'
                        : 'openebench',
                    i = o()('#' + e).data('benchmarkingevent') + '/' + t;
                let s;
                (async function(e, t, n) {
                    try {
                        return 'GET' == t
                            ? await fetch(e)
                            : await fetch(e, {
                                  method: 'POST',
                                  body: JSON.stringify(n)
                              });
                    } catch (t) {
                        console.log(`Invalid Url Error: ${t.stack} `, e);
                    }
                })(
                    (i = a()(
                        'https://dev-openebench.bsc.es/rest/bench_event_api/',
                        i
                    )),
                    (s = void 0 === n.length || 0 == n.length ? 'GET' : 'POST'),
                    n
                )
                    .then(e => {
                        if (!e.ok) throw e;
                        return e.json();
                    })
                    .then(t => {
                        if (void 0 !== t.data && null == t.data) {
                            document
                                .getElementById(e + '_bench_dropdown_list')
                                .remove();
                            var n = document.createElement('td');
                            n.className = 'no_benchmark_data';
                            var i = document.createTextNode(
                                "No data available for the benchmarking event: '" +
                                    o()('#' + e).data('benchmarkingevent') +
                                    "'"
                            );
                            n.appendChild(i),
                                document.getElementById(e).appendChild(n);
                        } else {
                            var s =
                                'OEBC' +
                                o()('#' + e)
                                    .data('benchmarkingevent')
                                    .substring(4, 7);
                            const n = c({
                                uri: a()(
                                    'https://' + r + '.bsc.es/',
                                    'sciapi/graphql'
                                )
                            });
                            (() =>
                                n({
                                    query:
                                        'query getTools($community_id: String!){\n                            getTools(toolFilters:{community_id: $community_id}) {\n                                registry_tool_id\n                                name\n                            }\n                        }',
                                    variables: { community_id: s }
                                }))().then(n => {
                                let i = n.data.getTools,
                                    u = {};
                                i.forEach(function(e) {
                                    null != e.registry_tool_id
                                        ? (u[e.name] = e.registry_tool_id
                                              .split(':')[1]
                                              .toLowerCase())
                                        : (u[e.name] = null);
                                }),
                                    (function(e, t, n, r, o) {
                                        null !=
                                            document.getElementById(
                                                e + '-oeb-main-table'
                                            ) &&
                                            (document
                                                .getElementById(
                                                    e + '-oeb-main-table'
                                                )
                                                .remove(),
                                            document
                                                .getElementById(
                                                    e + 'oeb-table-scroll'
                                                )
                                                .remove());
                                        var i = document.createElement('div');
                                        (i.id = e + 'oeb-table-scroll'),
                                            (i.className = 'oeb-table-scroll');
                                        var s = document.createElement('table');
                                        (s.id = e + '-oeb-main-table'),
                                            (s.className = 'oeb-main-table');
                                        var u = document.getElementById(e);
                                        i.appendChild(s), u.appendChild(i);
                                        var l = document.createElement('thead'),
                                            c = document.createElement('tbody');
                                        s.appendChild(l), s.appendChild(c);
                                        var f = l.insertRow(-1);
                                        ((y = document.createElement(
                                            'th'
                                        )).innerHTML =
                                            '<b>CHALLENGE &#8594  <br> TOOL &#8595</b>'),
                                            f.appendChild(y),
                                            Object.keys(
                                                t[0].participants
                                            ).forEach(function(e, t) {
                                                var o = c.insertRow(-1),
                                                    i = document.createElement(
                                                        'th'
                                                    );
                                                if (null != r[e]) {
                                                    var s = a()(
                                                        'https://' +
                                                            n +
                                                            '.bsc.es/tool/',
                                                        r[e]
                                                    );
                                                    i.innerHTML =
                                                        "<a href='" +
                                                        s +
                                                        "'>" +
                                                        e +
                                                        '</a>';
                                                } else i.innerHTML = '<a>' + e + '</a>';
                                                o.appendChild(i);
                                            });
                                        for (var p = 0; p < t.length; p++) {
                                            var d = [t[p].acronym];
                                            Object.keys(
                                                t[p].participants
                                            ).forEach(function(e, n) {
                                                d.push(t[p].participants[e]);
                                            });
                                            for (
                                                var h = 0;
                                                h < s.rows.length;
                                                h++
                                            )
                                                if (0 == h) {
                                                    var y,
                                                        g = a()(
                                                            'https://' +
                                                                n +
                                                                '.bsc.es/scientific/',
                                                            o,
                                                            t[p]._id
                                                        );
                                                    ((y = document.createElement(
                                                        'th'
                                                    )).innerHTML =
                                                        "<a href='" +
                                                        g +
                                                        "'>" +
                                                        d[h] +
                                                        '</a>'),
                                                        (y.id = d[h]),
                                                        l.rows[h].appendChild(
                                                            y
                                                        );
                                                } else
                                                    c.rows[h - 1].insertCell(
                                                        s.rows[h].cells.length
                                                    ).innerHTML = d[h];
                                        }
                                    })(e, t, r, u, s),
                                    o()('td').each(function() {
                                        '1' == o()(this).html()
                                            ? o()(this).css({
                                                  background: '#238b45',
                                                  color: '#ffffff'
                                              })
                                            : o()(this).css({
                                                  background: '#ffffff'
                                              });
                                    });
                            });
                        }
                    })
                    .catch(e => console.log(e));
            }
            function p(e, t = [], n = 'diagonal') {
                if (
                    null == document.getElementById(e + '_bench_dropdown_list')
                ) {
                    ((l = document.createElement('select')).id =
                        e + '_bench_dropdown_list'),
                        (l.className = 'classificators_list');
                    var r = document.getElementById(e),
                        i = document.createElement('OptGroup');
                    (i.label = 'Select a classification method:'), l.add(i);
                    var a = document.createElement('option');
                    (a.class = 'selection_option'),
                        (a.id = e + '_classificator__squares'),
                        (a.title =
                            'Apply square quartiles classification method (based on the 0.5 quartile of the X and Y metrics)'),
                        (a.data = 'list_tooltip'),
                        (a.data = '#tooltip_container'),
                        (a.value = 'squares'),
                        (a.innerHTML = 'SQUARE QUARTILES');
                    var s = document.createElement('option');
                    (s.class = 'selection_option'),
                        (s.id = e + '_classificator__diagonals'),
                        (s.title =
                            "Apply diagonal quartiles classifcation method (based on the assignment of a score to each participant proceeding from its distance to the 'optimal performance' corner)"),
                        (s.data = 'list_tooltip'),
                        (s.data = '#tooltip_container'),
                        (s.value = 'diagonals'),
                        (s.innerHTML = 'DIAGONAL QUARTILES');
                    var u = document.createElement('option');
                    (u.class = 'selection_option'),
                        (u.id = e + 'classificator__clusters'),
                        (u.title =
                            'Apply k-means clustering algorithm to group the participants'),
                        (u.data = 'list_tooltip'),
                        (u.data = '#tooltip_container'),
                        (u.value = 'clusters'),
                        (u.innerHTML = 'K-MEANS CLUSTERING'),
                        i.appendChild(a),
                        i.appendChild(s),
                        i.appendChild(u);
                    if (n)
                        switch (n) {
                            case 'squares':
                                a.selected = 'disabled';
                                break;
                            case 'diagonals':
                                s.selected = 'disabled';
                                break;
                            case 'clusters':
                                u.selected = 'disabled';
                                break;
                            default:
                                s.selected = 'disabled';
                        }
                    r.appendChild(l);
                }
                var l = document.getElementById(e + '_bench_dropdown_list');
                o()('#' + e + '_bench_dropdown_list').off(),
                    o()(l).on('change', function() {
                        f(
                            e,
                            this.options[this.selectedIndex].id.split('__')[1],
                            t
                        );
                    }),
                    f(e, l.options[l.selectedIndex].id.split('__')[1], t);
            }
            function d(e = [], t = null) {
                if (0 == e.length && null == t) {
                    let t,
                        r,
                        o = document.getElementsByClassName('oeb-table'),
                        i = 0;
                    for (r of ((i = 0), o)) {
                        var n = (
                            (t = r.getAttribute('data-benchmarkingevent')) + i
                        ).replace(':', '_');
                        (r.id = n), p(n, e), i++;
                    }
                } else p(t, e);
            }
            n.d(t, 'run_summary_table', function() {
                return d;
            });
        }
    ])
);
