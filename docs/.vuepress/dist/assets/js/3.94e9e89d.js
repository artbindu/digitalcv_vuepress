(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{252:function(e,t,i){},273:function(e,t,i){"use strict";i(252)},280:function(e,t,i){"use strict";i.r(t);var a={el:"#blogs",data:()=>({url:"https://medium-story.vercel.app/api",credentials:{username:"@artbindu",index:-1},apiCallInterval:null,intervalTime:1e3,maxApiCall:5}),created:function(){this.apiCallInterval=setInterval(()=>{this.credentials.index+=1,this.credentials.index>=this.maxApiCall&&this.clearFunctionCall(),this.intervalTime=this.credentials.index>=0?100:1e3,this.getXMLHttpRequestCall(this.url,this.credentials)},this.intervalTime)},methods:{uiFormat(e,t){var i=document.createElement("div");return i.setAttribute("id","id"+e),i.innerHTML=t+"<br>",i},clearFunctionCall(){this.credentials.index=-1,clearInterval(this.apiCallInterval)},getUrl:(e,t)=>`${e}?username=${t.username}&index=${t.index}`,getXMLHttpRequestCall(e,t){let i=new XMLHttpRequest;i.open("GET",this.getUrl(e,t)),i.onload=()=>{i.readyState===XMLHttpRequest.DONE&&(200===i.status?i.responseXML?this.$refs.medium_data.append(this.uiFormat(t.index,i.response)):this.clearFunctionCall():(this.clearFunctionCall(),console.log(`Request failed with status code ${i.status} from url ${i.responseURL}`)))},i.onerror=e=>{this.clearFunctionCall(),console.log("Request failed with error "+e.type)},i.send()},getAxiosCall(e,t){e=this.getUrl(e,t),axios.get(e).then(e=>{e&&200===e.status&&e.request&&e.request.responseXML?this.$refs.medium_data.append(this.uiFormat(t.index,e.data)):clearFunctionCall()}).catch(e=>{this.clearFunctionCall()})}}},s=(i(273),i(14)),l=Object(s.a)(a,(function(){var e=this._self._c;return e("div",{staticClass:"blogs"},[e("div",{ref:"medium_data",attrs:{id:"medium_data"}})])}),[],!1,null,"2e71e280",null);t.default=l.exports}}]);