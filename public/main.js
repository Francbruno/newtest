let myinput = document.querySelector('#myinput')
let mybtn = document.querySelectorAll('.mybtn')
mybtn[0].addEventListener('click',()=>{
    let vall = myinput.value
    let url = `http://localhost:8000/api/${vall}`
    
    async function fter(){
        let res = await fetch(url)
        let data = await res.json()
        document.body.after(data.name)
    }fter()
})