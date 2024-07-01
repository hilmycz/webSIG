"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8770],{58371:function(t,e,n){var r=n(41564),o=n(51541),s=n(77833),a=n(40878),i=n(30470),l=n(86858),u=n(44090),c=n(28487),d=n(45090),w=n(37246),g=n(72961);const f=[null],p=(0,w.Dm)(f,{nd:function(t,e){const n=e[e.length-1];n.ndrefs.push(t.getAttribute("ref")),t.hasAttribute("lon")&&t.hasAttribute("lat")&&(n.flatCoordinates.push(parseFloat(t.getAttribute("lon"))),n.flatCoordinates.push(parseFloat(t.getAttribute("lat"))))},tag:m}),h=(0,w.Dm)(f,{node:function(t,e){const n=e[0],r=e[e.length-1],s=t.getAttribute("id"),i=[parseFloat(t.getAttribute("lon")),parseFloat(t.getAttribute("lat"))];r.nodes[s]=i;const l=(0,w.eY)({tags:{}},b,t,e);if(!(0,d.p)(l.tags)){const t=new a.A(i);(0,g.hX)(t,!1,n);const e=new o.A(t);void 0!==s&&e.setId(s),e.setProperties(l.tags,!0),r.features.push(e)}},way:function(t,e){const n=t.getAttribute("id"),r=(0,w.eY)({id:n,ndrefs:[],flatCoordinates:[],tags:{}},p,t,e);e[e.length-1].ways.push(r)}});class A extends l.A{constructor(){super(),this.dataProjection=(0,c.Jt)("EPSG:4326")}readFeaturesFromNode(t,e){if(e=this.getReadOptions(t,e),"osm"==t.localName){const n=(0,w.eY)({nodes:{},ways:[],features:[]},h,t,[e]);for(let t=0;t<n.ways.length;t++){const r=n.ways[t],a=r.flatCoordinates;if(!a.length)for(let t=0,e=r.ndrefs.length;t<e;t++){const e=n.nodes[r.ndrefs[t]];(0,u.X$)(a,e)}let l;l=r.ndrefs[0]==r.ndrefs[r.ndrefs.length-1]?new i.Ay(a,"XY",[a.length]):new s.A(a,"XY"),(0,g.hX)(l,!1,e);const c=new o.A(l);void 0!==r.id&&c.setId(r.id),c.setProperties(r.tags,!0),n.features.push(c)}if(n.features)return n.features}return[]}}const b=(0,w.Dm)(f,{tag:m});function m(t,e){e[e.length-1].tags[t.getAttribute("k")]=t.getAttribute("v")}var y=A,k=n(29810),v=n(87240),x=n(55238),F=n(88292),P=n(44689),X=n(38276),z=n(21133),C=n(23986),E=n(12185),D=n(27542);let I=null;const M={amenity:{parking:new F.Ay({stroke:new P.A({color:"rgba(170, 170, 170, 1.0)",width:1}),fill:new X.A({color:"rgba(170, 170, 170, 0.3)"})})},building:{".*":new F.Ay({zIndex:100,stroke:new P.A({color:"rgba(246, 99, 79, 1.0)",width:1}),fill:new X.A({color:"rgba(246, 99, 79, 0.3)"})})},highway:{service:new F.Ay({stroke:new P.A({color:"rgba(255, 255, 255, 1.0)",width:2})}),".*":new F.Ay({stroke:new P.A({color:"rgba(255, 255, 255, 1.0)",width:3})})},landuse:{"forest|grass|allotments":new F.Ay({stroke:new P.A({color:"rgba(140, 208, 95, 1.0)",width:1}),fill:new X.A({color:"rgba(140, 208, 95, 0.3)"})})},natural:{tree:new F.Ay({image:new z.A({radius:2,fill:new X.A({color:"rgba(140, 208, 95, 1.0)"}),stroke:null})})}},S=new k.A({format:new y,loader:function(t,e,n,r,o){const s=(0,c.DI)(t,n,"EPSG:4326"),a=new XMLHttpRequest;a.open("POST","https://overpass-api.de/api/interpreter"),a.addEventListener("load",(function(){const t=(new y).readFeatures(a.responseText,{featureProjection:I.getView().getProjection()});S.addFeatures(t),r(t)})),a.addEventListener("error",o);const i="(node("+s[1]+","+Math.max(s[0],-180)+","+s[3]+","+Math.min(s[2],180)+");rel(bn)->.foo;way(bn);node(w)->.foo;rel(bw););out meta;";a.send(i)},strategy:D.Qk}),T=new C.A({source:S,style:function(t){for(const e in M){const n=t.get(e);if(void 0!==n)for(const t in M[e])if(new RegExp(t).test(n))return M[e][t]}return null}}),Y=new E.A({source:new x.A({attributions:'<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',url:"https://api.maptiler.com/maps/satellite/{z}/{x}/{y}.jpg?key=get_your_own_D6rA4zTHduk6KOKTXzGB",tileSize:512,maxZoom:20})});I=new r.A({layers:[Y,T],target:document.getElementById("map"),view:new v.Ay({center:[739218,5906096],maxZoom:19,zoom:17})})}},function(t){var e;e=58371,t(t.s=e)}]);
//# sourceMappingURL=vector-osm.js.map