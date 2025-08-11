import { useFormik } from 'formik'
import * as Yup from 'yup'

import './App.css'

function App() {

  interface IFormdata {
    companyname: string;
    websiteurl: string;
    firstname: string;
    lastname: string;
    email: string;
    jobtitle: string;
  };

  const formik = useFormik({
    initialValues :{
      companyname: '',
      websiteurl: '',
      firstname: '',
      lastname: '',
      email: '',
      jobtitle: '',
    },

    validationSchema: Yup.object({
      companyname: Yup.string()
        .required('Company name required'),

      websiteurl: Yup.string()
        .required("Website url required"),

      firstname: Yup.string()
        .max(10, 'Must be 10 or less')
        .required('Firstname is required'),

      lastname: Yup.string()
        .max(10, 'Must be 10 or less')
        .required('Lastname is required'),

      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required'),

      jobtitle: Yup.string()
        .required('Job title is required')

    }),

    onSubmit: (values: IFormdata) => {
      setTimeout(()=>{
          alert('Form submitted')
          console.log(values)
          
        }, 1000)
    }
  });

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <form onSubmit={formik.handleSubmit} className="space-y-6">

        <div>
          <label htmlFor="companyname" className="block text-sm font-medium text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            id='companyname'
            {...formik.getFieldProps('companyname')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.companyname && formik.errors.companyname ? 'border-red-500' : ''}`}
          />
          {(formik.touched.companyname && formik.errors.companyname) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.companyname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="websiteurl" className="block text-sm font-medium text-gray-700">
            Website URL
          </label>
          <input
            type="text"
            id='websiteurl'
            {...formik.getFieldProps('websiteurl')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.websiteurl && formik.errors.websiteurl ? 'border-red-500' : ''}`}
          />
          {(formik.touched.websiteurl && formik.errors.websiteurl) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.websiteurl}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
            First Name
          </label>
          <input
            type="text"
            id='firstname'
            {...formik.getFieldProps('firstname')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.firstname && formik.errors.firstname ? 'border-red-500' : ''}`}
          />
          {(formik.touched.firstname && formik.errors.firstname) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.firstname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
            Last Name
          </label>
          <input
            type="text"
            id='lastname'
            {...formik.getFieldProps('lastname')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.lastname && formik.errors.lastname ? 'border-red-500' : ''}`}
          />
          {(formik.touched.lastname && formik.errors.lastname) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.lastname}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="text"
            id='email'
            {...formik.getFieldProps('email')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.email && formik.errors.email ? 'border-red-500' : ''}`}
          />
          {(formik.touched.email && formik.errors.email) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.email}</p>
          ) : null}
        </div>

        <div>
          <label htmlFor="jobtitle" className="block text-sm font-medium text-gray-700">
            Job Title
          </label>
          <input
            type="text"
            id='jobtitle'
            {...formik.getFieldProps('jobtitle')}
            className={`mt-1 block w-full rounded-md border-gray-300 shadow-sm 
              focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm
              ${formik.touched.jobtitle && formik.errors.jobtitle ? 'border-red-500' : ''}`}
          />
          {(formik.touched.jobtitle && formik.errors.jobtitle) ? (
            <p className="mt-1 text-sm text-red-600">{formik.errors.jobtitle}</p>
          ) : null}
        </div>

        <button
          type='submit'
          className="w-full bg-indigo-600 text-white py-2 rounded-md text-lg font-semibold
            hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Submit
        </button>

      </form>
    </div>
  );
}

export default App;
