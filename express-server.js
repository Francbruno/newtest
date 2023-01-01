let express = require('express')
let app = express()
let cors = require('cors')
app.use(cors())
app.use(express.static(__dirname+'/public'))
let PORT = 8000

const schools = {
    'agai':{
        name: 'agai primary school',
        location: 'fegge onitsha',
        quality: 'verylow'
    },
    'dengram':{
        name: 'Dennis memmorial grammar school',
        location: 'odoakpu onitsha',
        quality: 'very high'
    },
    'comprehensive':{
        name: 'comprehensive secondary school',
        location: 'okpoko ogbaru',
        quality: 'low'
    },
    'unknown':{
        name: 'unknown',
        location: 'unknown',
        quality: 'unknown'
    }
}

app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/index.html')
})

app.get('/api/:schoolName',(req,res)=>{
    let schoolname = req.params.schoolName
    if(schools[schoolname]){
        res.json(schools[schoolname])
    }else{
        res.json(schools['unknown'])
    }
})

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`)
})