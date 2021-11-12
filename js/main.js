window.onload = () =>{
    if('serviceWorker' in navigator){
        navigator.serviceWorker('./sw.js')
    }
}