
import express from 'express';
const app = express();
import morgan from 'morgan';
import * as dotenv from 'dotenv';
dotenv.config();

app.use(express.json());
app.use(morgan('dev'));
app.use(express.urlencoded({ extended: false }));

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
  }

  const port = process.env.PORT || 5100;
  
  import employeeRouter from './routers/EmployeeRouter.js';

//   app.use('/api/crm/employees',employeeRouter);
// app.use('/api/crm/employees',employeeRouter);


// app.use('/api/crm/employees/:id',employeeRouter);

// app.use('/api/crm/employees/:id',employeeRouter);

//  app.use('/api/crm/employees/:id',employeeRouter);

 

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.post('/',(req,res)=>{
    console.log(req);
   res.json({message:' Data received', data:req.body});
});


//  app.use('*', (req, res) => {
//   res.status(404).json({ msg: 'Route not found' });
// });

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: 'something went wrong' });
});


app.use('/',employeeRouter);




app.listen(port, () => {
  console.log(`Server listening on PORT ${port}....`);
});