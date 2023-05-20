import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import axios from 'axios';
import Swal from 'sweetalert2'

const Update = () => {
    const navigate = useNavigate()
    const [user,setuser]=useState({
        name:"",
        country:"",
        category:"",
    })
    const [show,setshow]=useState(true)
     const {id}=useParams()
     console.log(user)
    useEffect(() => {
        const getdata = async () => {
            await axios.get(`http://localhost:5050/chocalate/${id}`)
            .then(data => setuser({
                name:data.data.name,
                country:data.data.country,
                category:data.data.category,
            }))
        }
        getdata()
    }, [])
 
    // handleinput
    const handleinput=event=>{
        const {name,value}=event.target
        setuser(current=>{
            return { ...current,[name]:value };
        })
    }
    const handlefrom=async(e)=>{
        e.preventDefault()
        // http://localhost:5050/chocalate
       const {data}=await axios.put(`http://localhost:5050/chocalate/${id}`,user)
       if(data.acknowledged){
        Swal.fire({
            title: 'Successfull!',
            text: 'Data Update success',
            icon: 'success',
            confirmButtonText: 'Ok'
          })
       }
    }
    return (
        <div className='container mx-auto py-4'>
            <button onClick={() => navigate("/")} className='btn btn-success capitalize my-[50px]'><BiArrowBack />All Chocolates</button>
            <div className='bg-[#1965a0] px-[200px] py-5 rounded-xl'>
                <div className='text-center'>
                    <h1 className='text-3xl font-bold text-[red]'>{show ? 'Update Chocolates':'New Chocolates' }</h1>
                    <p>Use the below faorm to create a new product</p>
                </div>
                <form onSubmit={handlefrom} className='space-y-4'>
                    <div>
                        <h1 className='text-xl text-white'>Name</h1>
                        <input onChange={(e)=>handleinput(e)} type="text" value={user.name} name="name" placeholder="Type here name" className="input input-bordered input-info w-full max-w-screen" />
                    </div>
                    <div>
                        <h1 className='text-xl text-white'>Country</h1>
                        <input onChange={(e)=>handleinput(e)} type="text" value={user.country} name="country" placeholder="Type here Country" className="input input-bordered input-info w-full max-w-screen" />
                    </div>
                    <div>
                        <h1 className='text-xl text-white'>Category</h1>
                        <select onChange={(e)=>handleinput(e)} defaultValue={user.category} name="category" className="select select-accent w-full max-w-screen">
                            <option selected>Select Your Category</option>
                            <option>Premium</option>
                            <option>No Premium</option>
                        </select>
                    </div>
                    <button  className='w-full max-w-screen btn btn-info my-2'>{show ? 'Update':'Add' }</button>
                </form>
            </div>
        </div>
    );
};

export default Update;