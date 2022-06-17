const express=require("express")
const app=express()
const port=3000
const bodyParser=require('body-parser')
const array=[];

app.use(bodyParser.json())

app.post('/addEmployee', (req,res) => {
	const data = req.body
	array.push(data)
	res.send(array)
})

app.put('/updateEmployee', (req,res) => {
	const data = req.body.name
	emp = array.find((e) => e.name === data)
	if(!emp)
		{
			res.send("No Employee Record Found")
		}
	else
		{
			emp.combany = "surfboard"
		res.send(emp)
	}
})

app.delete('/deleteEmployee',(req,res) => {
	const data = req.body.name
	emp = array.find((e) => e.name ===data)
	if(!emp)
	{
		re.send("No Employee Record Found")
	}
	else
	{
		pos=array.indexOf(emp)
                del=array.splice(pos,1)
		res.send(array)
	}
})

app.get('getEmployee',(req,res) => {
	const data = req.body.name
	emp = array.find((e) => e.name === data)
	res.send(emp)
})



app.listen(port,() => {
	console.log('App Listen to Port'+port)
})
