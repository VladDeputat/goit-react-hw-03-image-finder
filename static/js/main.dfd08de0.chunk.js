(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{10:function(e,t,a){e.exports={ImageGalleryItem:"ImageGalleryItem_ImageGalleryItem__3AbNr",ImageGalleryItemImage:"ImageGalleryItem_ImageGalleryItemImage__oSPS4"}},11:function(e,t,a){e.exports={Overlay:"Modal_Overlay__1oX-_",Modal:"Modal_Modal__2_PXQ"}},23:function(e,t,a){e.exports={ImageGallery:"ImageGallery_ImageGallery__1zrzW"}},25:function(e,t,a){e.exports={loader:"Loader_loader__3Uae2"}},26:function(e,t,a){e.exports={Button:"Button_Button__1ZiaG"}},31:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(21),c=a.n(o),i=(a(31),a(12)),s=a(4),l=a(5),u=a(7),m=a(6),h=(a(32),a(22)),d=a.n(h),g={searchImg:function(e){var t=e.query,a=void 0===t?"":t,n=e.page,r=void 0===n?1:n;return d.a.get("https://pixabay.com/api/?q=".concat(a,"&page=").concat(r,"&key=").concat("20734664-af4acccafc6bb35b2dfeb891d","&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.data.hits}))}},p=a(8),b=a.n(p),j=a(0),f=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:""},e.onHandleChange=function(t){e.setState({query:t.target.value})},e.onHandleSubmit=function(t){t.preventDefault(),e.props.onSubmit(e.state.query)},e}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("header",{className:b.a.Searchbar,children:Object(j.jsxs)("form",{className:b.a.SearchForm,onSubmit:this.onHandleSubmit,children:[Object(j.jsx)("button",{type:"submit",className:b.a.SearchFormButton,children:Object(j.jsx)("span",{className:b.a.SearchFormButtonLabel,children:"Search"})}),Object(j.jsx)("input",{className:b.a.SearchFormInput,name:"query",type:"text",value:this.state.query,autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",onChange:this.onHandleChange})]})})}}]),a}(n.Component),y=a(23),O=a.n(y),I=a(10),v=a.n(I),S=function(e){var t=e.src,a=e.alt,n=e.largeImg,r=e.onClick;return Object(j.jsx)("li",{className:v.a.ImageGalleryItem,children:Object(j.jsx)("img",{src:t,alt:a,className:v.a.ImageGalleryItemImage,onClick:function(){return r(n,a)}})})},_=function(e){var t=e.items,a=e.onClick;return Object(j.jsx)("ul",{className:O.a.ImageGallery,children:t.map((function(e){return Object(j.jsx)(S,{src:e.webformatURL,alt:e.id,largeImg:e.largeImageURL,onClick:a},e.id)}))})},x=a(24),k=a.n(x),C=a(25),L=a.n(C),w=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)(k.a,{className:L.a.loader,type:"ThreeDots",color:"#3f51b5",height:100,width:100,timeout:3e3})}}]),a}(n.Component),F=a(26),q=a.n(F),G=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return Object(j.jsx)("button",{type:"button",onClick:this.props.onClick,className:q.a.Button,children:"Load more"})}}]),a}(n.Component),N=a(11),M=a.n(N),B=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).hendleKeyDown=function(t){"Escape"===t.code&&e.props.onClose()},e.handleClick=function(t){t.currentTarget===t.target&&e.props.onClose()},e}return Object(l.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.hendleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.hendleKeyDown)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:M.a.Overlay,onClick:this.handleClick,children:Object(j.jsx)("div",{className:M.a.Modal,children:Object(j.jsx)("img",{src:this.props.src,alt:this.props.alt})})})}}]),a}(n.Component),U=function(e){Object(u.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",images:[],page:1,isLoading:!1,modalIsOpen:!1,modalLargeImageURL:"",modalImgid:"",error:""},e.submitHandler=function(t){e.setState({query:t})},e.getItems=function(){var t=e.state,a=t.query,n=t.page;g.searchImg({query:a,page:n}).then((function(t){e.setState((function(e){return{images:[].concat(Object(i.a)(e.images),Object(i.a)(t))}}))})).catch((function(t){return e.setState({error:t})})).finally((function(){e.setState({isLoading:!1}),e.state.page>1&&window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"})}))},e.openModal=function(t,a){e.setState({modalLargeImageURL:t,modalImgid:a,modalIsOpen:!0})},e.closeModal=function(){e.setState({modalLargeImageURL:"",modalImgid:"",modalIsOpen:!1})},e.addPage=function(){e.setState((function(e){return{page:e.page+1}}))},e}return Object(l.a)(a,[{key:"componentDidUpdate",value:function(e,t){this.state.query!==t.query&&(this.setState({images:[],page:1,isLoading:!0}),this.getItems()),this.state.page!==t.page&&this.getItems()}},{key:"render",value:function(){var e=this.state,t=e.images,a=e.isLoading,n=e.modalLargeImageURL,r=e.modalImgid,o=e.modalIsOpen;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(f,{onSubmit:this.submitHandler}),Object(j.jsx)(_,{items:this.state.images,onClick:this.openModal}),a&&Object(j.jsx)(w,{}),t.length>0&&Object(j.jsx)(G,{onClick:this.addPage}),o&&Object(j.jsx)(B,{src:n,alt:r,onClose:this.closeModal})]})}}]),a}(n.Component);c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(U,{})}),document.getElementById("root"))},8:function(e,t,a){e.exports={Searchbar:"Searchbar_Searchbar__YdA5S",SearchForm:"Searchbar_SearchForm__MtWRr",SearchFormButton:"Searchbar_SearchFormButton__17DjU",SearchFormButtonLabel:"Searchbar_SearchFormButtonLabel__i9vHU",SearchFormInput:"Searchbar_SearchFormInput__z2kYt"}}},[[72,1,2]]]);
//# sourceMappingURL=main.dfd08de0.chunk.js.map