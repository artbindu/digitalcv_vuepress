<template>
    <div class="blogs">
        <!-- <button @click="getMediumData">Show Data</button> -->
        <div id="medium_data" ref="medium_data"></div>
    </div>
</template>
  
<script>
// import apis from '@/apiList';
// import axios from "axios";
  export default {
    el: '#blogs',
    data() {
      return {
        url: 'https://medium-story.vercel.app/api',
        credentials: {
            username: '@artbindu',
            index: -1
        },
        apiCallInterval: null,
        intervalTime: 1000,
        maxApiCall: 5
      };
    },
    created: function() {
        // auto call function
        this.apiCallInterval = setInterval(() => {
            this.credentials.index += 1;
            if (this.credentials.index >= this.maxApiCall) {
                this.clearFunctionCall();
            }
            this.intervalTime = this.credentials.index >= 0 ? 100 : 1000;
            this.getXMLHttpRequestCall(this.url, this.credentials);
            // this.getAxiosCall(this.url, this.credentials);
        }, this.intervalTime);
    },
    methods: {
        uiFormat(id, htmlData) {
            var g = document.createElement('div');
            g.setAttribute("id", `id${id}`);
            g.innerHTML = htmlData + '<br>';
            return g;
        },
        clearFunctionCall() {
            this.credentials.index = -1;
            clearInterval(this.apiCallInterval);
        },
        getUrl(_url, _params) {
            return `${_url}?username=${_params.username}&index=${_params.index}`;
        },
        getXMLHttpRequestCall(_url, _data) {
            // create an XMLHTTPRequest object
            let req = new XMLHttpRequest();
            // pass the method 'GET', url
            req.open("GET", this.getUrl(_url, _data));
            req.onload = (() => {
                // Request finished. Do processing here.
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) {
                        if(req.responseXML) {
                            this.$refs.medium_data.append(this.uiFormat(_data.index, req.response));
                        } else {
                            this.clearFunctionCall();
                        }
                    } else {
                        this.clearFunctionCall();
                        console.log(`Request failed with status code ${req.status} from url ${req.responseURL}`);
                    }
                }
            });
            req.onerror = (error =>{
                this.clearFunctionCall();
                console.log(`Request failed with error ${error.type}`);
            });
            // send request
            req.send();
        },
        getAxiosCall(_url, _data) {
            _url = this.getUrl(_url, _data);
            debugger;
            axios.get(_url)
                .then((res) => {
                    if (res && res.status === 200 && res.request && res.request.responseXML) {
                        // console.log(`BM: res= `, res.data);
                        this.$refs.medium_data.append(this.uiFormat(_data.index, res.data))
                    } else {
                        clearFunctionCall();
                        // console.log(`BM: Invalid Response with status code: ${res.status}`);
                    }
                })
                .catch((error) => {
                    this.clearFunctionCall();
                    // console.log(`BM: ${error.message} from url ${error.request?.responseURL}`);
                });
        }
    }
  };
</script>
  
<style scoped>
  .counter {
    display: inline-block;
    margin-left: 30%;
  }
  
  button {
    display: inline-block;
    padding: 20px;
    margin: 10px;
    font-weight: bold;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px rgb(11, 11, 114);
  }
  
  h1 {
    text-align: center;
  }
</style>