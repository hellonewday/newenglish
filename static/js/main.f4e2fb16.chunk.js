(this["webpackJsonpnew-english"]=this["webpackJsonpnew-english"]||[]).push([[0],{101:function(e,t,a){e.exports=a(172)},106:function(e,t,a){},107:function(e,t,a){},154:function(e,t){},172:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r);a(106),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var o=a(21),i=a(22),u=a(26),s=a(28),m=a(34),d=a(11),h=a(23),p=a(85),E=a(52),g=(a(107),a(16)),b=a.n(g),f=a(203),v=a(204),y=a(205),k=a(214),w=a(206),C=a(213),j=a(207),O=a(86),S=a.n(O),x=a(90),D=a.n(x),W=a(91),N=a.n(W);function A(e){var t=e.color;return l.a.createElement("div",{style:{textAlign:"center",padding:6,backgroundColor:t?"#282c35":"white",color:t?"white":"black"}},l.a.createElement("p",null,"New English 2020"),l.a.createElement("div",{style:{display:"flex",justifyContent:"space-evenly",color:t?"white":"black"}},l.a.createElement("a",{className:"link-route",style:{color:t?"white":"black"},href:"https://github.com/hellonewday/newenglish","aria-hidden":"true",alt:"link"},l.a.createElement(S.a,null)),l.a.createElement("a",{href:"https://facebook.com/maximusss1",className:"link-route",style:{color:t?"white":"black"},"aria-hidden":"true",alt:"link"},l.a.createElement(D.a,null)),l.a.createElement("a",{className:"link-route",style:{color:t?"white":"black"},href:"https://www.youtube.com/channel/UC6kMfrq-k7Jb-S398t-Ho-Q","aria-hidden":"true",alt:"link"},l.a.createElement(N.a,null))))}var T=function(){var e=Object(n.useState)(!0),t=Object(E.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)([]),o=Object(E.a)(c,2),i=o[0],u=o[1],s=Object(n.useState)({}),d=Object(E.a)(s,2),g=d[0],O=d[1],S=function(e){O(Object(p.a)({},g,Object(h.a)({},e.target.name,e.target.value)))};return Object(n.useEffect)((function(){b.a.get("https://blog-api-98.herokuapp.com/blogs").then((function(e){console.log(e.data.data),u(e.data.data.filter((function(e){return"English"===e.genre})))})).catch((function(e){console.log(e.response)}))}),[]),l.a.createElement("div",null,l.a.createElement("div",{style:{height:"90vh",backgroundColor:a?"whitesmoke":"#282c35"}},l.a.createElement(f.a,{maxWidth:"md"},l.a.createElement("div",{style:{paddingTop:30,color:a?"black":"white"}},l.a.createElement(v.a,{container:!0,style:{display:"flex",justifyContent:"space-between"},alignItems:"center",spacing:1,component:"title"},l.a.createElement(v.a,{item:!0},l.a.createElement(y.a,{variant:"h3"},l.a.createElement("b",null,"New English!")),l.a.createElement(y.a,{variant:"h6"},"H\u1ecdc ti\u1ebfng Anh d\xe0nh cho ng\u01b0\u1eddi m\u1edbi c\xf9ng Maximusss")),l.a.createElement(v.a,null,"Dark",l.a.createElement(k.a,{color:"secondary",checked:a,onChange:function(){r(!a)},name:"color"}),"Light")),l.a.createElement(w.a,null),l.a.createElement("div",{className:"data",style:{paddingTop:10}},i.length>0?i.map((function(e){return l.a.createElement("article",{style:{padding:10}},l.a.createElement("header",null,l.a.createElement(m.b,{style:{color:a?"black":"white"},className:"link-route",to:"/post/".concat(e.id)},l.a.createElement("h1",null,e.title))),l.a.createElement("p",null,e.description),l.a.createElement("small",null,e.created_at))})):l.a.createElement("h3",{style:{textAlign:"center"}},"Ch\u01b0a c\xf3 n\u1ed9i dung n\xe0o \u1edf \u0111\xe2y")),l.a.createElement(w.a,null),l.a.createElement("div",{className:"subscribe",style:{paddingTop:10,textAlign:"center"}},l.a.createElement("h2",null,"Subscribe to New English Blog"),l.a.createElement("p",null,"Receive latest news and posts from your mailbox."),l.a.createElement(C.a,{label:"Your name",name:"name",type:"text",style:{backgroundColor:a?"":"white"},variant:"outlined",fullWidth:!0,onChange:S}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,{label:"Email",name:"email",type:"email",variant:"outlined",style:{backgroundColor:a?"":"white"},fullWidth:!0,onChange:S}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{onClick:function(e){e.preventDefault(),b.a.post("https://blog-api-98.herokuapp.com/subscribers",g).then((function(e){"Success"===e.data.message&&alert("Thanks for the sub!")})).catch((function(e){alert(e.response.data.message)}))},color:a?"primary":"secondary",fullWidth:!0,variant:"contained"},"Subscribe"))))),l.a.createElement(A,{color:a}))},I=a(94),L=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={title:null,image:null,content:null,description:null},e.handleEditorChange=function(t,a){e.setState({content:t})},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleFileChange=function(t){e.setState({image:t.target.files[0]})},e.handleSubmit=function(t){t.preventDefault();var a=new FormData;a.append("image",e.state.image),a.append("genre","English"),a.append("title",e.state.title),a.append("desc",e.state.description),a.append("content",e.state.content),a.append("created_at",Date.now()),b.a.post("https://blog-api-98.herokuapp.com/blogs",a).then((function(e){e.data.success&&alert("Upload successfully"),window.location.reload()})).catch((function(e){return console.log(e.response)}))},e}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(f.a,null,l.a.createElement(C.a,{fullWidth:!0,label:"Title",name:"title",variant:"outlined",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(C.a,{fullWidth:!0,label:"Description",name:"description",variant:"outlined",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("input",{type:"file",onChange:this.handleFileChange,style:{width:"100%",border:"1px solid gainsboro",padding:"10px 0px 10px 2px"}}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(I.a,{apiKey:"oaknz0i9nteit4h5806mvsazgv7wd4n8agw7s7rfmjjzaiby",initialValue:"<p>This is the initial content of the editor</p>",init:{height:500,menubar:!0,selector:"textarea",plugins:["advlist autolink lists link image charmap print preview anchor hr anchor pagebreak","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount"],toolbar:"undo redo | formatselect  | bold italic backcolor |                    alignleft aligncenter alignright alignjustify |                    bullist numlist outdent indent | removeformat | media",toolbar_mode:"floating"},onEditorChange:this.handleEditorChange}),l.a.createElement("br",null),l.a.createElement(j.a,{onClick:this.handleSubmit,variant:"contained",color:"secondary",fullWidth:!0},"Send"))}}]),a}(n.Component),M=a(208),R=a(209),_=a(210),z=a(211),B=a(212);function F(e){var t=e.data,a=e.onDelete;return l.a.createElement(f.a,null,l.a.createElement(M.a,null,l.a.createElement(R.a,null,l.a.createElement(_.a,null,l.a.createElement(z.a,null,"Id"),l.a.createElement(z.a,null,"Title"),l.a.createElement(z.a,null,"Comments"),l.a.createElement(z.a,null,"Likes"),l.a.createElement(z.a,null,"Thao t\xe1c"))),l.a.createElement(B.a,null,t.map((function(e){return l.a.createElement(_.a,{key:e.id},l.a.createElement(z.a,null,e.id),l.a.createElement(z.a,null,e.title),l.a.createElement(z.a,null,e.comments.length),l.a.createElement(z.a,null,e.likes),l.a.createElement(z.a,null,l.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){return a(e.id)}},"X\xf3a")))})))))}function J(e){var t=e.data,a=e.onRemove;return l.a.createElement(f.a,null,l.a.createElement(M.a,null,l.a.createElement(R.a,null,l.a.createElement(_.a,null,l.a.createElement(z.a,null,"Id"),l.a.createElement(z.a,null,"Name"),l.a.createElement(z.a,null,"Email"),l.a.createElement(z.a,null,"Thao t\xe1c"))),l.a.createElement(B.a,null,t.map((function(e){return l.a.createElement(_.a,{key:e._id},l.a.createElement(z.a,null,e._id),l.a.createElement(z.a,null,e.name),l.a.createElement(z.a,null,e.email),l.a.createElement(z.a,null,l.a.createElement(j.a,{variant:"contained",color:"secondary",onClick:function(){return a(e.id)}},"X\xf3a")))})))))}var U=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={username:null,password:null,data:[],subs:[]},e.handleDelete=function(t){b.a.delete("https://blog-api-98.herokuapp.com/blogs/".concat(t)).then((function(a){if(a.data.success){var n=e.state.data.filter((function(e){return e.id!==t}));e.setState({data:n}),alert("Deleted")}else alert("Error")})).catch((function(e){console.log(e.response)}))},e.handleRemove=function(e){b.a.delete("https://blog-api-98.herokuapp.com/blogs/".concat(e)).then((function(e){e.data.success&&alert("Deleted successfully")})).catch((function(e){alert("Delete failed"),console.log(e.response)}))},e.handleChange=function(t){e.setState(Object(h.a)({},t.target.name,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),console.log(e.state),"nguyenquochung"===e.state.username&&"nguyenduclong"===e.state.password?(alert("Welcome!"),window.localStorage.setItem("auth",!0),window.location.reload()):alert("Wrong username or password")},e.handleLogout=function(){window.localStorage.removeItem("auth"),window.location.reload()},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://blog-api-98.herokuapp.com/blogs").then((function(t){e.setState({data:t.data.data.filter((function(e){return"English"===e.genre}))})})).catch((function(e){return console.log(e.response)})),b.a.get("https://blog-api-98.herokuapp.com/subscribers").then((function(t){e.setState({subs:t.data.data})}))}},{key:"render",value:function(){return l.a.createElement("div",{style:{textAlign:"center"}},l.a.createElement("h1",null,"Admin "),window.localStorage.getItem("auth")?l.a.createElement("div",null,l.a.createElement("h1",null,"Welcome Admin!"),l.a.createElement(j.a,{variant:"outlined",color:"secondary",onClick:this.handleLogout},"Logout"),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(L,null),l.a.createElement("h1",null,"Posts"),l.a.createElement(F,{data:this.state.data,onDelete:this.handleDelete}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement("h1",null,"Subscribers"),l.a.createElement(J,{data:this.state.subs,onRemove:this.handleRemove})):l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement(C.a,{label:"Username",name:"username",type:"text",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement(C.a,{label:"Password",name:"password",type:"password",onChange:this.handleChange}),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(j.a,{type:"submit",color:"primary",variant:"contained"},"Login"),l.a.createElement(w.a,null)))}}]),a}(n.Component),q=a(93),H=a.n(q),P=a(92),X=a.n(P),K=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(o.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(e=t.call.apply(t,[this].concat(l))).state={data:{}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;b.a.get("https://blog-api-98.herokuapp.com/blogs/".concat(this.props.match.params.id)).then((function(t){e.setState({data:t.data.data[0]}),console.log(e.state.data)})).catch((function(e){console.log(e.response)}))}},{key:"render",value:function(){var e=this.state.data;return l.a.createElement("div",{style:{padding:10}},l.a.createElement(f.a,{style:{}},l.a.createElement(m.b,{className:"link-route",to:"/"},l.a.createElement(H.a,null)),l.a.createElement("h1",null,e.title),l.a.createElement("h4",null,e.description),l.a.createElement("br",null),l.a.createElement(w.a,null),l.a.createElement("br",null),l.a.createElement("div",null," ",X()(e.content))))}}]),a}(n.Component),Q=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(o.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return l.a.createElement(m.a,{basename:"./"},l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/",component:T}),l.a.createElement(d.a,{exact:!0,path:"/admin",component:U}),l.a.createElement(d.a,{exact:!0,path:"/post/:id",component:K})))}}]),a}(n.Component);c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[101,1,2]]]);
//# sourceMappingURL=main.f4e2fb16.chunk.js.map