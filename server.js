const express = require('express')
const app=express()
const port=3000
const bodyParser=require('body-parser')
const arr=[];
 //Takling an empty array

app.use(bodyParser.json())

//This function is to add the employeee in array
app.post('/addEmployee',(req,res)=>{
	const data=(req.body);
	
	//Adding the body in the data
	
	//const result = text.upperCase()
	
	add=arr.filter((e)=>e.name===data.name )
	 
	// It is for finding the name is already present or not
	
	console.log(add)
	if(add.length <= 0)

	//If the length is more than 0 can be added
	
	{
  	arr.push(data);
	}
	else
	{
	 res.send("Already the data found")
	}
	res.send (arr)
})

//this function is to get an employee details from an array by using the id,name or email
app.get('/getEmployee',(req,res)=>{
	console.log(req.query)
	let val;
	if(req.query.id)
	
		//If the id is given to find the element in data

	{
		const data=(req.query.id)
        	val=arr.find((e)=>e.id ===parseInt (data))
               //Parseint is if this argument is not a string, then it is converted

	
	}
	if(req.query.name)

		//If the name is given to find the element in data
	
	{
	const data=(req.query.name);
		
		const result=data.toUpperCase();
		val=arr.find((e)=>e.name.toUpperCase()=== (result)) 
	     //Changing the letter to uppercase
	
	}
	if(req.query.email)
	
           //If the email is given to find the element in data
	
	{
	const data=(req.query.email)
	val=arr.find((e)=>e.email === (data))
	}
	if(!val)
       
             //If the value is not equal
	{
		res.send("No Employee Record is Found")
	}
	else
	{
	res.send(val)
	}
})

 //This function is used to update the employee.We can undate the specific employee by there id , name or email
app.put('/updateEmployee',(req,res)=>{
               if (req.query.id)
		{
			const data=(req.query.id)
				emp=arr.find((e)=>e.id === (data))
		}
		if(req.query.name)
		{
		const data=(req.query.name)
			const result =data.toUpperCase
		emp=arr.find
			( (e)=>
				{
					return e.name === (data)
				}	)
		}
		if(req.query.email)
		{
		const data=(req.query.email)
		emp=arr.find((e)=>e.email=== (data))
		}
		if(!emp)

			//If the value is not equal to emp

		{
			res.send("No Employee Records Found")
		}else
		{
	          //emp.company="surfboard"
		//Primt company=Surfboard in the body
                //const keys = Object.keys(req.body)
		//	emp[keys[0]]=req.body[keys[0]];
	// To add the keys to the body
			const keys = Object.kgit eys(req.body)
			const key=keys[0]
			emp[key]=req.body[key]
		res.send(emp)
		}
	})

//This function is use to see all the details of the employee present in the array
app.get('/all',(req,res)=>{
	res.send(arr)
	//To print all the data present in the array
})

app.delete('/deleteEmployee',(req,res)=>{
	if(req.query.id)
	{
		const data=(req.query.id)
		emp=arr.find((e)=>e.id === (data))
	}
	if(req.query.name)
	{
	const data=(req.query.name )
	emp=arr.find((e)=>e.name === (data))
	}
	if(req.query.email)
	{
	const data=(req.query.email)
	emp=arr.find((e)=>e.email === (data))
	}
	if(!emp)
                  {
                          res.send("No Employee Records Found")
                  }
	else
	{
		pos=arr.indexOf(emp)
		//To know the position
	   del=arr.splice(pos,1)
		//delete the element from an array
	res.send(arr)
	}
})				

app.listen(port,()=>{
	//Telling the app to lisition the porti
	console.log('Example app: listening on the port }'+port)
})														
