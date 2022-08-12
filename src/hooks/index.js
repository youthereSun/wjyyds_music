import {onMounted, onUnmounted} from 'vue'

const useLazyLoadImg =(el)=>{
    let observer;
    onMounted(()=>{
        let callback=(entries)=>{
            entries.forEach(v=>{
                const {target,isIntersecting} =v
                if(isIntersecting){
                    target.src=target.getAttribute('lazy_src')
                    observer.unobserve(target)
                }
            })
        }
        observer= new IntersectionObserver(callback);
        observer.observe(el.value)
    })

    onUnmounted(()=>{
        observer.disconnect()
    })

}

export {useLazyLoadImg}