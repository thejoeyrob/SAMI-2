/* View bearing rotates display only. All project and export geometry stays geographic. */
window.SAMIBearing=function(map,viewport,onChange){
'use strict';
const el=map.getContainer();let bearing=0,size=0,dragStart=null,gesture=null,resizeRaf=0,lastView='',rotationLocked=false;
const rotate=(p,a)=>{a*=Math.PI/180;return L.point(p.x*Math.cos(a)-p.y*Math.sin(a),p.x*Math.sin(a)+p.y*Math.cos(a))};
const view=()=>viewport.getBoundingClientRect();
function resize(){const r=view(),key=Math.round(r.width)+'x'+Math.round(r.height);if(key===lastView&&size){apply();return}lastView=key;size=Math.ceil(Math.hypot(r.width,r.height))+4;el.style.width=size+'px';el.style.height=size+'px';el.style.left=(r.width-size)/2+'px';el.style.top=(r.height-size)/2+'px';el.style.transformOrigin='50% 50%';map.invalidateSize({pan:false,animate:false});apply();}
function scheduleResize(){cancelAnimationFrame(resizeRaf);resizeRaf=requestAnimationFrame(resize)}
function apply(){el.style.transform='rotate('+bearing+'deg)';el.style.setProperty('--counter-bearing',-bearing+'deg');}
function set(value,save=true){bearing=((Number(value)||0)%360+360)%360;if(Math.abs(bearing-360)<.01)bearing=0;apply();if(save)onChange?.(bearing);map.fire('bearingchange',{bearing});}
function fromScreen(x,y){const r=view(),q=rotate(L.point(x-r.left-r.width/2,y-r.top-r.height/2),-bearing);return q.add([size/2,size/2]);}
function toScreen(point){const r=view(),p=rotate(L.point(point).subtract([size/2,size/2]),bearing);return p.add([r.left+r.width/2,r.top+r.height/2]);}
map.mouseEventToContainerPoint=e=>fromScreen(e.clientX,e.clientY);
map.getBearing=()=>bearing;map.setBearing=set;
const d=map.dragging?._draggable;
if(d){d.on('dragstart',()=>{dragStart=d._startPos.clone()});d.on('predrag',()=>{if(!dragStart)return;d._newPos=dragStart.add(rotate(d._newPos.subtract(dragStart),-bearing));});d.on('dragend',()=>dragStart=null);}
map.on('layeradd',e=>{const marker=e.layer;if(!(marker instanceof L.Marker)||!marker.options.draggable)return;requestAnimationFrame(()=>{const d=marker.dragging?._draggable;if(!d||d._samiBearing)return;d._samiBearing=true;let start;d.on('dragstart',()=>start=d._startPos.clone());d.on('predrag',()=>{if(start)d._newPos=start.add(rotate(d._newPos.subtract(start),-bearing))});});});
const angle=t=>Math.atan2(t[1].clientY-t[0].clientY,t[1].clientX-t[0].clientX)*180/Math.PI;
viewport.addEventListener('touchstart',e=>{if(e.touches.length===2&&!rotationLocked)gesture={angle:angle(e.touches),bearing};},{passive:true});
viewport.addEventListener('touchmove',e=>{if(gesture&&e.touches.length===2){set(gesture.bearing+angle(e.touches)-gesture.angle,false);e.preventDefault();}},{passive:false});
viewport.addEventListener('touchend',e=>{if(gesture&&e.touches.length<2){gesture=null;onChange?.(bearing);}},{passive:true});
viewport.addEventListener('touchcancel',()=>{gesture=null;onChange?.(bearing);},{passive:true});
const observer=new ResizeObserver(scheduleResize);observer.observe(viewport);resize();
return{set,get:()=>bearing,setLocked:v=>{rotationLocked=!!v;gesture=null;},getLocked:()=>rotationLocked,resize,fromScreen,toScreen,visibleCorners:()=>{const r=view();return[[r.left,r.top],[r.right,r.top],[r.right,r.bottom],[r.left,r.bottom]].map(([x,y])=>map.containerPointToLatLng(fromScreen(x,y)))} };
};
