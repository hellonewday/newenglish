(this["webpackJsonpnew-english"]=this["webpackJsonpnew-english"]||[]).push([[0],{102:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),o=a.n(r);a(79),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(28),i=a(29),u=a(31),s=a(32),m=a(67),d=a(11),h=a(30),g=a(62),p=a(45),E=(a(80),a(26)),b=a.n(E),f=a(131),v=a(135),y=a(136),w=a(145),k=a(137),C=a(144),j=a(138);var O=function(){var e=Object(n.useState)(!0),t=Object(p.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),c=Object(p.a)(o,2),i=c[0],u=c[1],s=Object(n.useState)({}),m=Object(p.a)(s,2),d=m[0],E=m[1],O=function(e){E(Object(g.a)({},d,Object(h.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){b.a.get("https://blog-api-98.herokuapp.com/blogs").then((function(e){console.log(e.data.data),u(e.data.data.filter((function(e){return"English"===e.genre})))})).catch((function(e){console.log(e.response)}))}),[]),l.a.createElement("div",{style:{height:"100vh",backgroundColor:a?"white":"black"}},l.a.createElement(f.a,{maxWidth:"md"},l.a.createElement("div",{style:{paddingTop:30,color:a?"black":"white"}},l.a.createElement(v.a,{container:!0,style:{display:"flex",justifyContent:"space-between"},alignItems:"center",spacing:1,component:"title"},l.a.createElement(v.a,{item:!0},l.a.createElement(y.a,{variant:"h3"},l.a.createElement("b",null,"New English!")),l.a.createElement(y.a,{variant:"h6"},"H\u1ecdc ti\u1ebfng Anh d\xe0nh cho ng\u01b0\u1eddi m\u1edbi c\xf9ng Maximusss")),l.a.createElement(v.a,null,"Dark",l.a.createElement(w.a,{color:"secondary",checked:a,onChange:function(){r(!a)},name:"color"}),"Light")),l.a.createElement(k.a,null),l.a.createElement("div",{className:"data",style:{paddingTop:10}},i.length>0?i.map((function(e){return l.a.createElement("div",null,l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.created_at))})):l.a.createElement("h3",{style:{textAlign:"center"}},"Ch\u01b0a c\xf3 n\u1ed9i dung n\xe0o \u1edf \u0111\xe2y")),l.a.createElement(k.a,null),l.a.createElement("div",{className:"subscribe",style:{paddingTop:10,textAlign:"center"}},l.a.createElement("h2",null,"Subscribe to New English Blog"),l.a.createElement("p",null,"Receive latest news and posts from your mailbox."),l.a.createElement(C.a,{label:"Your name",name:"name",type:"text",style:{backgroundColor:a?"":"white"},variant:"outlined",fullWidth:!0,onChange:O}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,{label:"Email",name:"email",type:"email",variant:"outlined",style:{backgroundColor:a?"":"white"},fullWidth:!0,onChange:O}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{onClick:function(e){e.preventDefault(),console.log(d)},color:a?"primary":"secondary",fullWidth:!0,variant:"contained"},"Subscribe")))))},S=a(66),x=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:null,image:null,content:null},e.handleEditorChange=function(t,a){e.setState({content:t})},e.handleChange=function(t){e.setState({title:t.target.value})},e.handleFileChange=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("image",e.state.image),a.append("genre","English"),a.append("title",e.state.title),a.append("desc","Description"),a.append("content",e.state.content),b.a.post("https://blog-api-98.herokuapp.com/blogs",a).then((function(e){e.data.success&&alert("Upload successfully"),window.location.reload()})).catch((function(e){return console.log(e.response)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(C.a,{fullWidth:!0,label:"Title",variant:"outlined",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"file",onChange:this.handleFileChange,style:{width:"100%",border:"1px solid gainsboro",padding:"10px 0px 10px 2px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(S.a,{apiKey:"oaknz0i9nteit4h5806mvsazgv7wd4n8agw7s7rfmjjzaiby",initialValue:"<p>This is the initial content of the editor</p>",init:{height:500,menubar:!0,selector:"textarea",plugins:["advlist autolink lists link image charmap print preview anchor hr anchor pagebreak","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect  | bold italic backcolor |                    alignleft aligncenter alignright alignjustify |                    bullist numlist outdent indent | removeformat | media",toolbar_mode:"floating"},onEditorChange:this.handleEditorChange}),l.a.createElement("br",null),l.a.createElement(j.a,{onClick:this.handleSubmit,variant:"contained",color:"secondary",fullWidth:!0},"Send"))}}]),a}(n.Component),D=a(139),W=a(140),A=a(141),T=a(142),I=a(143);function L(e){var t=e.data,a=e.onDelete;return l.a.createElement(f.a,null,l.a.createElement(D.a,null,l.a.createElement(W.a,null,l.a.createElement(A.a,null,l.a.createElement(T.a,null,"Id"),l.a.createElement(T.a,null,"Title"),l.a.createElement(T.a,null,"Comments"),l.a.createElement(T.a,null,"Likes"),l.a.createElement(T.a,null,"Thao t\xe1c"))),l.a.createElement(I.a,null,t.map((function(e){return l.a.createElement(A.a,{key:e.id},l.a.createElement(T.a,null,e.id),l.a.createElement(T.a,null,e.title),l.a.createElement(T.a,null,e.comments.length),l.a.createElement(T.a,null,e.likes),l.a.createElement(T.a,null,l.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){return a(e.id)}},"X\xf3a")))})))))}var N=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:null,password:null,data:[]},e.handleDelete=function(t){b.a.delete("https://blog-api-98.herokuapp.com/blogs/".concat(t)).then((function(a){if(a.data.success){var n=e.state.data.filter((function(e){return e.id!==t}));e.setState({data:n}),alert("Deleted")}else alert("Error")})).catch((function(e){console.log(e.response)}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),"nguyenquochung"===e.state.username&&"nguyenduclong"===e.state.password?(alert("Welcome!"),window.localStorage.setItem("auth",!0),window.location.reload()):alert("Wrong username or password")},e.handleLogout=function(){window.localStorage.removeItem("auth"),window.location.reload()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://blog-api-98.herokuapp.com/blogs").then((function(t){e.setState({data:t.data.data.filter((function(e){return"English"===e.genre}))})})).catch((function(e){return console.log(e.response)}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Admin "),window.localStorage.getItem("auth")?l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome Admin!"),l.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:this.handleLogout},"Logout"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(x,null),l.a.createElement("h1",null,"Posts"),l.a.createElement(L,{data:this.state.data,onDelete:this.handleDelete})):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(C.a,{label:"Username",name:"username",type:"text",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement(C.a,{label:"Password",name:"password",type:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{type:"submit",color:"primary",variant:"contained"},"Login"),l.a.createElement(k.a,null)))}}]),a}(n.Component),z=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,{basename:"."},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:O}),l.a.createElement(d.a,{exact:!0,path:"/admin",component:N})))}}]),a}(n.Component);o.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},74:function(e,t,a){e.exports=a(102)},79:function(e,t,a){},80:function(e,t,a){}},[[74,1,2]]]);
//# sourceMappingURL=main.08761e2f.chunk.js.map