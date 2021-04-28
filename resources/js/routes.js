import VueRouter from 'vue-router';
import Home from './components/pages/Home.vue'

let routes = [
    {
        path: '/',
        component: Home,
        name: 'Home',
    },
]

const router = new VueRouter({
    mode: "history",
    hash: false,
    linkActiveClass: 'is-active',
    routes,
    scrollBehavior: function(to, from, savedPosition) {
        if (to.hash) {
            let currentElement = document.querySelector(to.hash);
            if(currentElement !== null) {
                currentElement.classList.add("focus-text");
                setTimeout(function() {
                    currentElement.classList.remove("focus-text");
                }, (4*1000));
            }
        } else {
            return { x: 0, y: 0 }
        }
    },
});

// router.beforeEach((to, from, next) => {
//     let token = document.querySelector('meta[name="api-token"]').getAttribute('content');
//     if (to.name == 'Help' || token) {
        
//     } else {
//         window.location.href = '/login'
//     }
// })

export default router;
