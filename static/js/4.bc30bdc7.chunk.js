(this.webpackJsonptrx_dapp_demo=this.webpackJsonptrx_dapp_demo||[]).push([[4],{122:function(n,t,e){"use strict";e.d(t,"a",(function(){return r})),e.d(t,"b",(function(){return o})),e.d(t,"c",(function(){return A}));var c,a,s,r,o,i=e(7);!function(n){n.WTOKEN="WTOKEN",n.WAVE="WAVE"}(r||(r={})),function(n){n[n.MAINNET=0]="MAINNET",n[n.TESTNET=1]="TESTNET",n[n.UNNET=2]="UNNET"}(o||(o={}));var A=(s={},Object(i.a)(s,o.MAINNET,(c={},Object(i.a)(c,r.WTOKEN,"TBzotLU9grj5J8pYZ5AWwNAwfHrRBRw3a9"),Object(i.a)(c,r.WAVE,"TF47n2KqnMyLwaU1UHcZE3XchsWyvh1mPy"),c)),Object(i.a)(s,o.TESTNET,(a={},Object(i.a)(a,r.WTOKEN,"TE5YV5Rm4itpoK3MNftPtEATBozHrptgrG"),Object(i.a)(a,r.WAVE,"TMdJB3jUA3uPpYAD3mvPiMHoQEAFgE46ry"),a)),s)},123:function(n,t,e){"use strict";e.d(t,"a",(function(){return W})),e.d(t,"c",(function(){return M})),e.d(t,"b",(function(){return J}));var c=e(31),a=e.n(c),s=e(3),r=e(42),o=e(43),i=e(4),A=e(0),b=e(25),l=e(17);var u=function(){return Object(l.c)((function(n){return n.application}))},O=e(122),d=function(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:O.b.TESTNET;return t!==O.b.UNNET?O.c[t][n]:""},j=function(n){var t=Object(A.useState)(null),e=Object(i.a)(t,2),c=e[0],a=e[1],s=Object(b.a)().isConnect,r=d(n),o=u().emitTronLinkEvent;return Object(A.useEffect)((function(){try{s&&window.tronWeb&&window.tronWeb.isAddress(r)&&window.tronWeb.contract().at(r).then((function(n){a(n)}))}catch(n){a(null)}}),[s,window.tronWeb,r,o]),Object(A.useMemo)((function(){return c||null}),[c])},W=function(n){var t=d(n),e=Object(A.useState)(null),c=Object(i.a)(e,2),a=c[0],s=c[1],r=Object(b.a)().isConnect;return Object(A.useEffect)((function(){try{r&&window.tronWeb&&window.tronWeb.isAddress(t)&&window.tronWeb.contract().at(t).then((function(n){s(n)}),(function(){s(null)}))}catch(n){s(null)}}),[r,t]),Object(A.useMemo)((function(){return a||null}),[a])},M=function(n,t,e){var c=Object(b.a)().isConnect,a=u().emitTronLinkEvent,s=j(t);return Object(A.useCallback)((function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];try{window.tronWeb&&s&&s[n].apply(s,Object(o.a)(t)).call().then((function(n){n&&e(null,n)})).catch((function(n){e(n,null)}))}catch(c){e(c,null)}}),[n,t,e,s,a,c])},J=function(n,t,e){var c=Object(b.a)().isConnect,i=u().emitTronLinkEvent,l=j(t);return Object(A.useCallback)(function(){var t=Object(r.a)(a.a.mark((function t(c,r,i){var A,b;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:try{window.tronWeb&&l&&(r&&l[r]().watch((function(n,t){i&&i(n,t)})),A=c.send?c.send:{},b=c.params?c.params:[],console.log("sendParams",A),l[n].apply(l,Object(o.a)(b)).send(Object(s.a)({},A)).then((function(n){n&&e(null,n)})).catch((function(n){e(n,null)})))}catch(a){e(a,null)}case 1:case"end":return t.stop()}}),t)})));return function(n,e,c){return t.apply(this,arguments)}}(),[n,t,e,l,i,c])}},130:function(n,t,e){},133:function(n,t,e){"use strict";e.r(t);var c=e(4),a=e(1),s=e(0),r=(e(130),e(24)),o=e(45),i=e.p+"static/media/ball_disabled.f41943da.png",A=e(6),b=e.n(A),l=e(123),u=e(122),O=e(18),d=e(121);t.default=function(n){var t=n.history,e=Object(s.useState)([]),A=Object(c.a)(e,2),j=A[0],W=A[1],M=Object(s.useState)(!1),J=Object(c.a)(M,2),y=J[0],E=J[1],h=Object(l.a)(u.a.WAVE),f=Object(d.a)().t;return Object(s.useEffect)((function(){if(E(!0),h){var n=window.tronWeb,t=n.address,e=n.BigNumber,c="410000000000000000000000000000000000000000";h.allClubs().call().then((function(n){E(!1),W(n.map((function(n){var a="41".concat(n.substr(2,40)),s="41".concat(n.substr(42,40));return{owner:a===c?"":t.fromHex(a),player:s===c?"":t.fromHex(s),rewardA:e("0x".concat(n.substr(82,64))).div(e(1e6)).toString(),rewardB:e("0x".concat(n.substr(146))).div(e(1e6)).toString()}})))}),(function(){E(!1)}))}}),[h]),Object(a.jsxs)("div",{className:"p-clubs",children:[Object(a.jsxs)("div",{className:"title",children:[Object(a.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAigAAABPCAMAAAD2vc58AAABTVBMVEUAAAAAAAAAAAAAAAAAAAAAAAAJWyMAAAAAAAAAAAAAAAAAAAAAAAAAAAAJWyMDHgsAAAAJWyMITx4ELBEJWyMHShwIWiIAAAAGPRcFMRMIWiIJWyMAAAAJWyMJWCEFOBUJWyMBDwYJWyMJWyMJWyMJWyMJWyMHSBwJWyMJWyMBCAMIWiIIUx8JWyMJWyMEJw4ITR4CFAcJWyMJWyMJWyMJWyMFNBQJWyMJWyMJWyMJWyMJWyMDGgoIWiIIWiIJWyMCGgkJWyMJWyMIWSIJWyMJWyMGRRoHSRwIUyAGQRkBEQYJWiIHRBoGPRgIUh8DJA4HRhsIVSEGORYFNRQDJQ4DJQ4EKRAEMRMEKRAELxIGPRcGPxgFNxUEKA8FNxX///8JWyO908R8qIre6eLv9PDO3tNLh16dvaetyLYqcUCMsphrnXsZZjI6fE9bkmy2qVQyAAAAX3RSTlMAv4xZprJ4c5kzf2YNTMPQGUX02uXwhybn3SNsQCr94tHI9Y5/Owfu1GfEn/i8fNbzy1UzGMDf3kOvOhHOzashw7KJdlzwwuHX1bb5657rvbyY3cSofbOQmcvJqm0pNxVYEwYAAByjSURBVHja7FlLb9QwEA4gVUJIKyqtOFBVKk+xQEGiIF4CxPPOBY6TGduxHWf3/x+JHxvHtdMlSCwXPgnSxq9vJuNvxm5Vxs0eZ2fVf/zHJI5Xn06XtcPt00+fDm9Wf4J7Bz3uVf8xz2kpVsdJ89mNRe3x8pHvcHi/+kc4O3pQn8fyybiHJxuxuJG35UMj7vfGnR29P7JOeP7s5sWuOlwdHq9Wx7289SK3y6+f3p/ePTh6//7dnaP3nw5Wn549e/a8mo9pjtHK3AVlZCP7vv3+6Rc4cD+/GrfeuV1neDHqcVQX8OhfOOxtTjUoy53jrQsXeevifmzL8ORG/vZrcMJrF0qjXfPmpJ7CclkvT9+9dOst3LfJQrqE17+lhzM4lq08efM7Ul0YeXcUJ0lD3uOsLmP/Djtcxv66x3o9Dm3vq0fFqK6m25a/YdKTbYo6meGIxVRDLmq7sJjBsWxlfVLtxovSwKgYcZNmPaZZ7t9hMd460yIp5FwAYttqvVUVu53qIu5XWVtHPXT9mzh5Zmf4XP8VPDjaoSczOAYrc9zbLSi7BWNNKYzvEVkq8GDk0dQe+3JYTIDrxhjBATkHBw6aU1CWPlIO+0cDCSzXw6qaasvR2GVU45ywGULJhuHH/kkJGtPUxtTaRmsedR0laBUSNUoJqlVLpt1sNnHyGYIyzbFsJVD/7qDKkXvYgCIiOwURAdrw22a1lW3mkMD1OF1FtUVIoffusEMvfK0STClLlzNwUIgcNsa1HlU3+/81EYlCoBzYzwwD1KAokMAowRU1BKYnxzZk9JDmbV3AwUMgMgRCYGC9I6lGQuFIIQF4Qrox1CJuh7QAwJA2qgGUChQCNXp3DTGHo1cUCWPg7ymKVewWxmhdTh8LDoMUzZDa70WWEbh3h71dunhTknFkwpMABwUcFEdXr9x+4wJFwQjcBuGzKpiyJhp8oVygZN6RCMCl5GCYaoUiwI6C4FlFMYQY3YWjXYvDS9x6ULfbzgKxZehbCQkQBQgOTFDTOcOfX6AoczhWj8qBsvO48MF6mOVSVB+PShjKIsFh5UsjioITss7eHfbF7ROGXA5c2PDgnDdcdHa0C5TEqWiDwVXKQW2iMbyoKJI5nRJgAFEKBlxwUTuc9v9CuOd2r3m+1Ygw9hc82N1ygtayBuBCSuEM/zh94zCL493vWaBA2Cu7M0/XQgJlfBSE3JPPDLJzkuKFrDnfaPbtsA+3/aZCFiePUcqBOHDpGFtrRwRacnVyldcoPMa8jJaR9gGthAICwVjozKkOYFC2G1Mvrb3dCGM4YoKhG+ZZCsXJk/w4eWkyj6PdU/oPapQHfpV85HAJcxLKiNQFzN6vFUsjtn+HfbQNwq7NoQC0b4dv2dUNiZTt/RgoeY3SrNckshkRCDjflkKMUVc7pD35lN2+MyIOPTCODGY4WQApBbka7fNUeTaPY556QGc1Svlo1YlSoCyGW6Rz0iaIaB2KlBe5bxjbs8PCsVQqEVfKwKVkQSFSArj71CNGprdbYgJovAPabTrmUAZSbneH0VJEcW4o8+soUMgtkQdTijKT45+lnuUgRJkdx+NiKa0BmfKKclxKS/t32AN3GBTAJgOFMWDYrgu1qZvywCEPonDk7ohIZaQQQILwkwhguM2irt7KgDK3ey1GPFCg7xgecYsxYLy7QFIWcznWJleUHReaq3KcQChSoupsEhKSyInOjWRREe5Y9u2wt7HwiFwYSxfnjDPyisKT9+vk/mHUMNgysq/RUgWpY4HV8GBd7Jwj9QWmqzFERRJ5tNtOPxJZMhdIymyO9XpuoLw5KduGxh2QA57XDlkl4iHzA9E+HRbOtVryVCc6rSVBAk4lwk0WKAOYDjFPLKghIbijvYgRHCHz2ixPviy3OzSIFv2xLxuKCtwOeTuhKHM5zleUkynTMMk9r51VVHSwLhB5uT+HxZsyIeKSpgvkZKIyIlvNMU6xoS3qMAsROS4KoRUgBHhJj2Z4UFMo2Pyvo5cqszs22TZEBJG7TFjhO5uoM+dyrPXMQLnnBnGYkJQng6S8LmmE12yU0eXQonP7u/067K51lBDFdEJjEhgoh2WYIhLU0QDXbMjf3Frh3pa/Mf0zIxC4ZS997I0+g+jy0x6Cv2qMqsZd/g3s5JCeUUmjG5CmJSGVhBSqvSBQFnM5bmkKqgPyC7d8K3rRSuEPhstzXHhy9MmuDVpT+4D99ni/Djv1Hz9iZL8e8UCpC2HZjMWkmJbS4mwjgTYNKDp/xpKusmvZODLJIKkWCBEYA84YWVPRmGyDMAxhTE3jD6JsEF+l2s0FH3M2Rw35qefppS2uTCgKFq87hLbH3ytXrly6PPzpryM+rlsdd62NVmkRfPtHvVeH5YECuh6QSJIppR4aQZbqLYDS5N25xMaZ3TxtWoN5+8BWRrqjtda17uqEXLb37CYN1TkPmYMpUtbwn1evVwXM5FiuUW5dCrhc5fh8LlA0qWRXPn7YD7wWJCXoW5qe2kKF+/QXMdfVOzUMwylDHMcUe++9xBBLgFgSW0JiSbyQ2EmadPH9H8FJ2jRNi+hLsTjgX9LEdpyfR3yc4ssqjLJjA7LnoEzTXT3meV5ZE9CAZTPMbJiQfwlmIUFNyUzJPaWFQrT5RCo30CUpH6F4sJfbdHMrv6gEpojNT6tN23ak2/hgJo8eUqDiga5nsaGkBc3a12fgF+cmNjOPR5vSY+spOZ205Nstu/miCns8dgmBouARYVWMGoMqpgxFSlqMJq9RTgS/mDAOUfDtJoecEzxGdCmVG5z/g1QpvgLyfLV16yq1lF0zeSRDUX40etewN+voeLKAuxZXHTNahcWkKkkaenG900aMSYJk6tFa28Hs6sllFUaIUsVGXFJI9yvnAbZ0lRjDZHo8HaMgNg3NeYDvdUymhhJPMCX302zqgORlBwUg4388slpv2bQ9iSFm8hiCFIOOaPTVOEZJW5bqBsPW9/2FzSVv2zenEEXo8Nd2wdNZll1aVmHHrDZkPzkC+5EQcETZ6Obk0Bi0fXzE0pTr4WVyGrIsu3pqcFoBQ3oMREr5cMvk/NfwgBy2aK6jywsnt1+1AlADDe5eZ39OyKbjCaLM5JHrOD6zc2ctpXHQuWFYoxN3caQzlPMjxxvjn2oLKKssu7Wkwnx/ALDIa7gPM5SM2SUlpxePxIojLXWR3O6/IopxyWCt7Qu3bh0YmpAQtvKbTlBViIXOnTD0y1E42ONymyhfKUm5m7es1tl645Zt8T7O5pHrsWB22vWcJbZ4garjJglAneuiwQ95xz+RxIoXOS/UsAN265/xfGGF7SfZ+7zL9qMY06YCkee6M8ucRSO743Qm4mQq6xGR/zeRadbDk2R0r3YEkTom5XYtRg0K4SdRiAYbtxlbsmxztnlLHKfM4zExFCNiQ9kzBiiNjFEpaBtR1u37IUjhJTNlnKJg2TOsgztpPF9YYTfJ94iR+0Bl9dBYFqbikNhQakT5F0OR2N+DQpVBxrwyxSCMUwrYKOWjnFhIrinczwsN0cbbF/b5tGS1iTYk0Dweg6EYjLKeKUO5wxPPE/sz2XjmNjq+Hrbd3oqNkLHO/gQBSnZ9YYU9o6cQ8DC8YBfXdlI9nvUI784921XPUETXVjVRo4EAdtIwU6RI+o9yK0mrgQaoFNhiE/QbrwSQck85LrdsXGcRpFyYzSMvGJSD4dOIci45ysMHmqI/mmBjrzEV0vZaZAqL0vYd7MmIFlfYI2IdwQ5KbKW0ibUE5H45+AuilCl/COm9plLIBoTNr3RywRKaRlLjwsTSKUxYT0HyCFHyLi8hMM1Wh6L6+jwePT78s6HsH2IDJhFyTaWUAClp5uMKpXVoedtoEeXA0gp76MQXjEbLwQWRpqckjtA1t04KEBItrTd/HdZRmGoNuYynFGSziZMzEdxOUTmNpL6fz9u7YFqSGwElrMP9mHW03n4oQpS5PPKi37wiSndWVpsmLwQLNmIoJoaUw1m2aZM3srSWEo/lb5wgt5ZVWMjJfkkjFMQX1UJ2apLNsK6AWHeuxxaUxwz5FyoMoZhizmhDTcEx7WG9KgFgQnjBFEOmOrlrN6GfwGAffRFAg0ahm8ol9u+90JvX6+1xYnJ6Lo+8Dp5Ko7ZblxTcIsCKASiJhxUlWfTuao8/uNOW4roU9+zcsyaVL66wm/vdTL+wVHaBDsZ6PICs276BEdeze6qOQjx0KFtAEp15ZXlUR/BDAbUangBgyCDIDbIPAmXUgCEVylIJ9OWkUxZCbQy/3rSONnM2jxxnuJ7z1gx7M+rUC0jaGFetCy81MAkor/1Se/+Dwk7c4y2sSqGYscaSEKT4VbvweLqOUviHUitEzcZJAqk76j8GKIdKYsBypkM1mP2FpGZSkfewOPrhe7byLnfLxmzVr6QcncXjVD/KisKLhEJZpEY5bSjMF2eDmZ0N4qVn79E2J8rVhRX20H2Z/8EN7qlBTdbSeh8pRZt9yV/+bhNtZi8YyKIrF7V9SzqSioYT/YVDK1Mz1YUfniDJrXBKbjHe4qVy3mYVLZhu3BZFm7N4pNyumECUTX8o9jwXX/COch06Xnkh5MBQ7tOmrLaHVInnkLBBHJxdZwFRFlTYeT5GWKENUMIM0jKRoIbwNx3TlVnfySToz77nlb12VI2j5X5gkpATPPAzZDVMyC0hRBh90ujqZ182bsnG72N2zeLxVJL2SGco602OomretSSTA4cvsVUa3jrwVS+prkuSP5BxaPRja+bp1JIKe8inqAFhZHzL8KtujSEtQKeGIoqYOySSqjVm4V2/EmBqTnDnY7N+5mioEqTteJOzX4yPyy0AoOqavAIpis694FmgCFFm8fj2+mR6vNUZSn/ui4N6gvQN58M5VG0hhah1YZeDOmPkebepE+PkggojQJmmSgSEEgaYLOuOe19izrsSnq8Ed5ec9bhj1NL3iAso7exCOe2djkrdfvLcslHxMSqi86H9DXh7UALjJQb/aGl7dOpn8fiN1v2VGsqTLLu9j8KM269ODL5cJqOsG3jDfbdPYyKcuRUZyjFnYkliffbntg17HO7cXVJhobgjgKi0OxzIJK1VBWKfuSoOZg2WAga3x4i9b3CIEihDo3ntcwBT+y/QE6JgdAWv2wkSmd+l22tadXA0gWFFua1pr1M2rzZtWm86FN8ez+FxTYii028nnDxgK/n29wf8qf8Pu+4m2YvSHHlT5MFMgqqeUJRDRdC06qY7FRwgXf+RYjshypIKe2n76WAYdRz5zONvooHwAhVCloN+ur1t9SevCbhD08QIomgaABrtJSp1c/oo9tie1Wvag8AJGMy93CKR+zBtCQKIgKQlD6RDaCEAsGzbyEj0rcnt8Qwet9/vnUxaBKu64eO0a8PNxH9oj/WGGdpWROPNs62Zb4lrWyptfwh0eEmFXSGkUkm49frHkfuhKUp6jMqbqN+ayri6JkvhB05ayNOk27/dHtP4QHX7w727GzZmtAcVliA6gMO2EMhHKUkdA/2CnuV3tU/aiM0bByWxWTz+Zu66e6WGYfglaWk5OPaeYu8tgRAggdh7DzHEJU2vpXB8/z+JM5u6FA6kg99jvLuX17Ndx3Ec2yXXe4vU+7FlE3Y0bO+Z6AyWgxlzmpIhi4IURW+NGMk/LFNgOHIIwb8AvI/hagkT3Mfp5+2sQSkaaLQRdeVCESOMx4SghC0zOKRMYHzr5ftkq7BONhzS0HitXe5Un5onq0YxFqKRnOnfHgO+2n891thMn2E0QqGZ2qAbZauDRYFQA47gmkDp6iUKzCtKZ3PT3vogRQEnpapNySlMDBHG2gq7Shf7VCKoEB+6CXtePKA/ObqYw4T+8mUm5zOY2J5hIAMN5jb5dN+ZPZGVLBTvuqTtActonrCtKMNtARqNue/c6aJsZAPFEQVXa4swsUoXPfEGeBh87oJuWUj+EOi+uDPd5QtsvWHGe0TStihwNgy5bepT6+g9l1o7l/ZARFnDQsyMgPUPiq7O37uzGfyyk0prN14HpQ0Whbfk/7lpeFPXBYerlg1XL7/yqp7PTLb5nCtYKuySuzeH+7kx3n5KbmpYXifZ1glOQNu0CI0kSvLz7lvtStnV/9wEX4KZHQTeFeSOLJx8HxyH5QvssNaHWvrqdFtLIhQ4L2RQoVLa2oyo64E0wUAh7W/KWtSwlxTiO64hE6KZBWYp+5STFkCrZDdqzkMxlO4oAMT5sFVdeTnJ2kuanMOrCRDzNGGrRgg7FqDRWRTc6yGQ7L7HnYGG4VOF0kAWbGCF5d6GYK7+M4GdCHWxuGmChAvayVJ9/24Wk6rxxHgJ1e4FaPI3UYgBHwW8pDTLGctIBMy3r44McHwDBPQiLNz8MHzjjB74odBlKpQQsKMxDi9AI/JRHJUYWFHwb4ivovAJ/XPvPiKLEmXGk4CHSxXYYaBIoIY9iCtZNtZGfK8w92WIdddflUWZVc03f9TTvQnPGImAFGUYheM7UAtowgq+2STbVVjG+UrUcWkBGpFFGUBvHCrYbVl0ufJhfOvM4iqajkVJby9XYKfBKHV5l93Xklfym2/VUUpES9Hyy75aL2cDXPpLxG8FwR9CEqYwGiWBa5JGrAzBW1JecxsZAP9Lh8HD3ZTtgLWdPRlLMtQeZhEazaWb0g8VQ4qCk+cAhawKpSsSHfjZ+zYO2+MBizIm2bIFdlQfVw+nSsmyqvWtf2TSfCQaEN4pGzE1+72NG9Ck8ht0Bki1A5Dov9Sw4htcNoN8A3jBOXLiFZK71kiieqYkp0hTji5A41gvPdOmcrUXDR9UlFkcP/Ft8CxEE016e2ZrivMOmtTS8ucW5cqyBbZT+5y48U6I1emTnilg+wN3BiQlbtgiXYonN0VKDOu8Cfl5ZCl4jAkcZa/SWsWl7xr3S77xe0c6Sy6ejMkq1kktWojGzgahlnJQUarosspwRWh+8rHUnwpOq5ngiAkDBkOWK7CdWs0r2W0L6VQBipbB2dKJlI+MQZW1CS7WdgyXZvUpwe3/OoelZ9Px8b1YWIX46pM3UsYmo2QVJSSnYz17O9UHMmIqLiLhzqtWKCM7EJZczosu30k+poSMV8dxlEVodD6KjCxFH8l6Qn0vB1u+RwtSYID2NEyDTaTLJswYM+X1SxfYAZNdJu3lcS4MN37szZSQ40f0YGV7JQQMGrtBrAuu8+JqoWIJptfZx9U9FiUq1AWWU0IzBnFpY/9qYCRiUjq+LRs8WFKhhrujiypsapP3cCW8mqRgFChbFZuUhWikT7AzW3pr2g4cmKogUeJ2bCenG05Oz/50swXq2d87wCiKx+jG8gV20HbAljYVo80edFh2vfR1XcZZ5xipjytrs5+S0JuwkRxatxRm+IlJ1jVpTbeiOzO6GnrdyZ6dHbeGi3f5bo/jjfXN/Em2IsofgJnjVGKdjdhLWYTG0Q4UCbe510XhMhOkuUM9jcbAyuocRjeJBT7NPUcoYxPXCHxQUf6JwHa6DhWNZpiHWFIjZt/8g1gI4OpZG7JvqkIUOrWBc6F0pq45r2E04AQjKbYoPE50yDoldd8LidKaKyBG2MbIBRAXfLOeJXcgf/cthTQ0Oh6oFBygMZRAlbHv23BpRVaVIGVwXYyiVEhRnpB2epqwt4aHPt8fmAKEuXAVWBkrSv5vBHag9awOLr6WvNTnkdXcueiXVaOmrcRgo/Pa6y9QgMgFhxZQTfW9bpy/dmJrniAnqUCzddSxKFXLoEvDr9LdopgJ1Ze+0XFizl0TG3jlILkIE4REhzelYkO46FKieJ9ETsoiNJ72KejQHRCuWgPrhU5NUMLl8PvyMxTy4ky476Eip//e1L6chm41rQOEKIGBnv4aCftXAjuPnlWGHm63KyVOUzb4nV7ROnuCLzP82FY99u4UYXC29mOmj2TVpJsJyOad+/cB4ezLz7eU3tfPHmrDn7mllNKtkTO7AI2bbN9Le1AM3RzAbx8EPoMOh0YoE82FSifwUcN0/TOBDTx0btNjsEA0SWGXaPDmxR4bo8bMbHuc5macTX/CsgAoE7sSPbvhr/CEEoPr0x7s6S/S2vL7NO7WpR1/QeBdEluUCo0457Tg9JCi5WyyZIHFuHJoBVaWDRvzzJehpuPcfJvt+nhvCii/YSGPtXE0JgVfjqDZanFrAcaPbO5h+xVN7BR4NsXY6+YHW4n2x7+m0Wd5fZn+MdYkJMB1W8MKOmZsK8pmRnSxJQsMP/P04L2Le88eOTvdcOTIkW1ndJk9CTC8prlKnzkEq1XzHai4uH3bkQ1T+AJmcpI61bqj1ck/r/f5a0bQTQg2pfW80GuXbsMxP/wBnG1zsHnvWhN2Drh96qLz8yjgWVeGD+9EMkZPKf0dGne31uLWL207CSQBqervyUd7VHLCSfUGvBM/9nbcPTX6UsdsnfNShoKrg6cOHrgGojiwAvD4FWlj6QLDWJ2RGGn3dUqzdLXZqMxrXy50HL5sHSJxoFsndGW49LrRhEY3YQjOSkOC+9Xta8na7Vevblffu/cB6gOpvjKjY0rN0gj+1+jC+hbeXW/XM01GA0A04ieNnj62Wz9KHB4CfuHdqtwPZeQnGBkwGq890y8m7fJlEosYUmcRKInA/gOBrc5zMoQ0z8Z6qdrvzOfFzoDAd76KjVppDWFSDSuKYQUYsVcZIIcaOf5o78x524bBMPxdLE8B3LS4QFE0RadO6dAOTQcvHQP0D3QpuvT/rzUlShZ9SE6cAIakJ4dixZa+y69ISyKFaLiugEdjnJm28e2XExO+es05XJ5GC8UWIZIP7QfiKXyf7pONfqDaBEdEj8O03ETAInUGH1Z6s1Ic5U513yL7UUiPDB74DQXowYI4kTHqDmFaT/p9uK4Ap/2+zMa3SUwKKuxwSo0WSuFDDLFtrza3RnwF8FOhsaDtQJL4JgIWtEIs9VDl34rQ8H5klSwpP5v/u/wcUu3Rx6jdoqotZIpgCVcThSJnjn6EPab3UXvaYU5rVUUkE34/00bQpXFKTpnc2LApdNoCfN4PonZf5kaOxTaogQMbAHsbAQtG7Tdf7t7Qprg+7t/vZjwNhQp946SgE0KHuyUrNBLOVmqAUdglRwonVed3doP2SsrsshASaTumpPopihImC6XA9Goqg3Q1Mm144Iz0H4j/yVOI4biNwWOBvZWARa/ypRim6PO46nBYh+Y2/18oZFzbn1KeSLwiEWapziXBM08kQWEJ7b4pCxcd+j18HvkKCix1oixEzHDI820MWNLEXqS7MiEJcy4Ug0Nkf+okz17J5XaO8sFYYG8mYCGwF8y7ylLh2YbjsexSK+W718KS6kQTMRnnHJGzYezdSjDKRgrHG391MobTa9sUEO3bZiObtqNBvsJGiMbhEE8qh0ybFGVEt1txLD2SJXk/Zz/n1BDzSfuoVC57OwHbEZiJK0MmFRbpOpycCvdvKhRgFxFFExOzJq83zsexJAhzuFTVjajWX/YiYrlC8gpJkt+585YedSjic1E2RJorKLjCxkRkZsK0VZdcl+bSBERL6fUKWQS7Ru/REF4f37V3NR/nxh11MJhNcoBbwu0E7CKaGaN3P4+prECgJzRfL4+FZDVbsLxbVHW/PnF2h7UdUsNLsWHOUayYOdYWnsi3d90U93025hmwbdbOLSQElkW0cDV3b+7axGmYM/nM1PsHSJgAi6KK8HJQhDnTnJl6v4UGv4GV5xIdzJqH7eP2If9dz9zX1yXq5QjyzOXzlQl6MeGbeYvs1XGL0ZRVUq4iMCyEmmDlCuxiugO6hpUrWIykxLWVsnIRaw955SJWRZkh/wH2H5roX+ls7gAAAABJRU5ErkJggg==",alt:""}),Object(a.jsx)("div",{className:"back",onClick:function(){t.goBack()}})]}),y?Object(a.jsx)(r.e,{className:"hold-empty"}):j.length>0?Object(a.jsx)("div",{className:"list",children:j.map((function(n,t){var e=n.owner,c=n.player,s=n.rewardA,A=n.rewardB,l=!!e,u=!!(l&&c&&A);return Object(a.jsxs)("div",{children:[Object(a.jsxs)(r.a,{children:[Object(a.jsx)("div",{className:"c-tag",children:f(l?"ignited":"stay_lit")}),Object(a.jsx)("div",{className:"ball",children:Object(a.jsx)("img",{src:l?o.a:i,alt:""})})]}),l?Object(a.jsx)("div",{className:"address",children:Object(O.e)(e)}):Object(a.jsx)("div",{className:"empty"}),Object(a.jsx)("div",{className:b()("balance",{disabled:!l}),children:Object(a.jsxs)("strong",{children:[s," RTX"]})}),u&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"address",children:Object(O.e)(c)}),Object(a.jsx)("div",{className:"balance",children:Object(a.jsxs)("strong",{children:[A," RTX"]})})]})]},t)}))}):Object(a.jsx)(r.h,{className:"hold-empty"})]})}}}]);