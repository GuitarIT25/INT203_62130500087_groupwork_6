    const app = {
        data() {
            return {
              
                firstname:'Supphakit ',
                lastname:'Theppong',
                role: 'developer'
                
            }
        }
    }
    mountedApp = Vue.createApp(app).mount('#app');