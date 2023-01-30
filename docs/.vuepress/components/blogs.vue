<template>
    <div class="blogs">
        <!-- <button @click="getMediumData">Show Data</button> -->
        <div id="medium_data" ref="medium_data"></div>
    </div>
</template>
  
<script>
// import apis from '@/apiList';
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
        intervalTime: 1000
      };
    },
    created: function() {
        // auto call function
        this.apiCallInterval = setInterval(() => {
            this.credentials.index += 1;
            this.intervalTime = this.credentials.index >= 0 ? 100 : 1000;
            this.getRequestCall(this.url, this.credentials);
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
        generateUrl(_url, _params) {
            return `${_url}?username=${_params.username}&index=${_params.index}`;
        }, 
        getRequestCall(_url, _data) {
            _url = this.generateUrl(_url, _data)
            console.log('url: ', _url);
            // create an XMLHTTPRequest object
            let req = new XMLHttpRequest();
            // pass the method 'GET', url
            req.open("GET", _url);
            req.onload = (() => {
                // Request finished. Do processing here.
                if (req.readyState === XMLHttpRequest.DONE) {
                    if (req.status === 200) {
                        if(req.responseXML) {
                            this.$refs.medium_data.append(this.uiFormat(_data.index, req.response))
                        } else {
                            this.clearFunctionCall()
                        }
                        // console.log(JSON.parse(req.response));
                    } else {
                        this.clearFunctionCall()
                        console.log(`Request failed with status code ${req.status} from url ${req.responseURL}`);
                    }
                }
            });
            req.onerror = (error =>{
                this.clearFunctionCall()
                console.log(`Request failed with error ${error.type}`);
            });
            // send request
            req.send();
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