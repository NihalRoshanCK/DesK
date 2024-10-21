import{_ as v,i as C,D as _,p as r,o as u,c as p,j as k,n as w,k as x,e as t,w as l,a as B,g as n,t as y,v as F,C as g,F as U}from"./index.479023b3.js";import{F as h}from"./FileUploader.0edb71b8.js";const I={name:"InsertImage",props:["editor"],expose:["openDialog"],data(){return{addVideoDialog:{url:"",file:null,show:!1}}},components:{Button:C,Dialog:_,FileUploader:h},methods:{openDialog(){this.addVideoDialog.show=!0},onVideoSelect(i){let e=i.target.files[0];!e||(this.addVideoDialog.file=e)},addVideo(i){this.editor.chain().focus().insertContent(`<video src="${i}"></video>`).run(),this.reset()},reset(){this.addVideoDialog=this.$options.data().addVideoDialog}}},N={class:"flex items-center space-x-2"},S=["src"];function A(i,e,L,P,o,a){const s=r("Button"),V=r("FileUploader"),f=r("Dialog");return u(),p(U,null,[k(i.$slots,"default",w(x({onClick:a.openDialog}))),t(f,{options:{title:"Add Video"},modelValue:o.addVideoDialog.show,"onUpdate:modelValue":e[2]||(e[2]=d=>o.addVideoDialog.show=d),onAfterLeave:a.reset},{"body-content":l(()=>[t(V,{"file-types":"video/*",onSuccess:e[0]||(e[0]=d=>o.addVideoDialog.url=d.file_url)},{default:l(({file:d,progress:c,uploading:m,openFileSelector:D})=>[B("div",N,[t(s,{onClick:D},{default:l(()=>[n(y(m?`Uploading ${c}%`:o.addVideoDialog.url?"Change Video":"Upload Video"),1)]),_:2},1032,["onClick"]),o.addVideoDialog.url?(u(),F(s,{key:0,onClick:()=>{o.addVideoDialog.url=null,o.addVideoDialog.file=null}},{default:l(()=>e[3]||(e[3]=[n(" Remove ")])),_:2},1032,["onClick"])):g("",!0)])]),_:1}),o.addVideoDialog.url?(u(),p("video",{key:0,src:o.addVideoDialog.url,class:"mt-2 w-full rounded-lg",type:"video/mp4",controls:""},null,8,S)):g("",!0)]),actions:l(()=>[t(s,{variant:"solid",onClick:e[1]||(e[1]=d=>a.addVideo(o.addVideoDialog.url))},{default:l(()=>e[4]||(e[4]=[n(" Insert Video ")])),_:1}),t(s,{onClick:a.reset},{default:l(()=>e[5]||(e[5]=[n("Cancel")])),_:1},8,["onClick"])]),_:1},8,["modelValue","onAfterLeave"])],64)}var j=v(I,[["render",A]]);export{j as default};
