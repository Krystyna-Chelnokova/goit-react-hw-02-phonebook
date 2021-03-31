(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{12:function(t,e,n){t.exports={filterLabel:"FilterContacts_filterLabel__bDn-P"}},18:function(t,e,n){},22:function(t,e,n){"use strict";n.r(e);var a=n(2),c=n.n(a),o=n(10),r=n.n(o),i=(n(18),n(13)),s=n(3),u=n(4),l=n(6),b=n(5),m=n(11),d=n(8),h=n.n(d),j=n(0),f=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.target,a=n.name,c=n.value;t.setState(Object(m.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),console.log(t.state),t.props.onSubmit(t.state),t.props.onSubmits(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("form",{className:h.a.contactForm,onSubmit:this.handleSubmit,children:[Object(j.jsxs)("label",{children:["Name"," ",Object(j.jsx)("input",{type:"text",name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{children:["Number"," ",Object(j.jsx)("input",{type:"text",name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{className:h.a.addContBut,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),p=n(1),C=n.n(p),O=n(9),v=n.n(O);function x(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:v.a.contactList,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:v.a.contactItem,children:[a," ",c,Object(j.jsx)("button",{type:"button",onClick:function(){return n(e)},children:"Delete"})]},e)}))})}x.prototype={contacts:C.a.arrayOf(C.a.shape({id:C.a.string.isRequired,name:C.a.string.isRequired,number:C.a.number.isRequired})).isRequired,onDeleteContact:C.a.func};var g=n(12),y=n.n(g);function S(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("label",{className:y.a.filterLabel,children:["Filter by the name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})}S.prototype={value:C.a.string,onChange:C.a.func};var _=n(24),L=function(t){Object(l.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(s.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.formSubmitHandler=function(t){console.log(t)},t.addContact=function(e){var n=e.name,a=e.number;if(t.state.contacts.find((function(t){return t.name.toLowerCase()===n.toLowerCase()})))alert("".concat(n," is already in contacts!!!"));else{var c={id:Object(_.a)(),name:n,number:a};t.setState((function(t){var e=t.contacts;return{contacts:[c].concat(Object(i.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e.target.value})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter,a=n.toLowerCase(),c=e.filter((function(t){return t.name.toLowerCase().includes(a)}));return Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsx)(f,{onSubmit:this.formSubmitHandler,onSubmits:this.addContact}),Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsx)(S,{value:n,onChange:this.changeFilter}),Object(j.jsx)(x,{contacts:c,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(L,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contactForm:"AddForm_contactForm__27qLg",addContBut:"AddForm_addContBut__2TATM"}},9:function(t,e,n){t.exports={contactList:"ContactsList_contactList__3IBLM",contactItem:"ContactsList_contactItem__W4k85"}}},[[22,1,2]]]);
//# sourceMappingURL=main.292f4fed.chunk.js.map