import Vue from 'vue'
import axios from 'axios'

//axios.defaults.baseURL = 'https://cursovuejs-28901-default-rtdb.firebaseio.com/'
//axios.defaults.headers.common['Authorization'] = 'abc123'
//axios.defaults.headers.get['Accepts'] = 'application/json'

Vue.use({
    install(Vue){
       // Vue.prototype.$http = axios
       Vue.prototype.$http = axios.create({
            baseURL:'https://api.vagalume.com.br/search.php?',
    
       })

       Vue.prototype.$http.interceptors.request.use(config => {
      
            return config
        })


    }
})