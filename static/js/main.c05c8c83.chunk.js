(this["webpackJsonpmy-todo-app"]=this["webpackJsonpmy-todo-app"]||[]).push([[0],{34:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var o=n(1),c=n(0),r=n.n(c),a=n(9),s=n.n(a),i=(n(34),n(19)),l=n(13);var u=function(e){var t=Object(c.useState)(""),n=Object(l.a)(t,2),r=n[0],a=n[1];return Object(o.jsxs)("form",{className:"form-container",onSubmit:function(t){t.preventDefault(),e.handleAddTodo(r),a("")},children:[Object(o.jsx)("input",{type:"text",placeholder:"Add Todo...",className:"input-text",value:r,onChange:function(e){a(e.target.value)}}),Object(o.jsx)("input",{type:"submit",value:"Submit",className:"input-submit"})]})},d=n(3),h=n(4),j=n(6),p=n(5),b=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){return Object(o.jsx)("header",{className:"header-container",children:Object(o.jsx)("h1",{className:"header-title",children:"Simple Todo App"})})}}]),n}(r.a.Component),m=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this,t=this.props.todo,n=t.id,c=t.title,r=t.completed;return Object(o.jsxs)("li",{className:"todo-item",children:[Object(o.jsx)("input",{type:"checkbox",checked:r,onChange:function(){return e.props.handleChange(n)}}),Object(o.jsx)("span",{className:r?"completed":null,children:c}),Object(o.jsxs)("button",{className:"btn-style",onClick:function(){return e.props.handleDelete(n)},children:[" ","X"," "]})]})}}]),n}(r.a.Component),O=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(){return Object(d.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{children:Object(o.jsx)("ul",{children:this.props.todos.map((function(t){return Object(o.jsx)(m,{todo:t,handleChange:e.props.handleChange,handleDelete:e.props.handleDelete},t.id)}))})})}}]),n}(r.a.Component),f=n(14),v=n.n(f),x=n(12),y=n(11),C=function(e){Object(j.a)(n,e);var t=Object(p.a)(n);function n(e){var o;return Object(d.a)(this,n),(o=t.call(this,e)).submitThemeColor=o.submitThemeColor.bind(Object(y.a)(o)),o}return Object(h.a)(n,[{key:"componentWillReceiveProps",value:function(e){console.log("UNSAFE_componentWillReceiveProps: "+JSON.stringify(e)),document.documentElement.style.setProperty("--main-color",e.themeColor.color)}},{key:"submitThemeColor",value:function(e){e&&(console.log("handleChangeTheme"),this.props.saveColorTheme(e))}},{key:"render",value:function(){var e=this;return Object(o.jsx)("div",{className:"footer",children:Object(o.jsxs)("div",{className:"vertical-center",children:[Object(o.jsx)("span",{children:"Choose Theme "}),Object(o.jsx)("button",{onClick:function(){return e.submitThemeColor("#ff0000")},className:"dot red"}),Object(o.jsx)("button",{onClick:function(){return e.submitThemeColor("#0000ff")},className:"dot blue"}),Object(o.jsx)("button",{onClick:function(){return e.submitThemeColor("#678c89")},className:"dot gray"})]})})}}]),n}(r.a.Component),g=Object(x.b)((function(e){return{themeColor:e.color}}),(function(e){return{dispatch:e,saveColorTheme:function(t){return e(function(e){return{type:"CHANGE_THEME",payload:{color:e}}}(t))}}}))(C);var N=function(){var e=Object(c.useState)({todos:[]}),t=Object(l.a)(e,2),n=t[0],r=t[1];return Object(c.useEffect)((function(){v.a.get("https://jsonplaceholder.typicode.com/todos",{params:{_limit:5}}).then((function(e){return r({todos:e.data})}))}),[]),Object(o.jsxs)("div",{className:"container",children:[Object(o.jsx)(b,{}),Object(o.jsx)(u,{handleAddTodo:function(e){var t={title:e,completed:!1};v.a.post("https://jsonplaceholder.typicode.com/todos",t).then((function(e){r({todos:[].concat(Object(i.a)(n.todos),[e.data])})}))}}),Object(o.jsx)(O,{todos:n.todos,handleChange:function(e){r({todos:n.todos.map((function(t){return t.id===e&&(t.completed=!t.completed),t}))})},handleDelete:function(e){v.a.delete("https://jsonplaceholder.typicode.com/todos/".concat(e)).then((function(t){return r({todos:Object(i.a)(n.todos.filter((function(t){return t.id!==e})))})}))}}),Object(o.jsx)(g,{})]})},T=n(7),k={color:"#FFFFFF"};var E=Object(T.b)({color:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return console.log("themeReducer: "+JSON.stringify(e)),Object.assign({},e,{color:t.payload.color});default:return k}}}),S=Object(T.c)(E);s.a.render(Object(o.jsx)(x.a,{store:S,children:Object(o.jsx)(N,{})}),document.getElementById("root"))}},[[58,1,2]]]);
//# sourceMappingURL=main.c05c8c83.chunk.js.map