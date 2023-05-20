import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from './Card';
import axios from 'axios';
import Swal from 'sweetalert2'

const Tableitem = () => {
    const navigate = useNavigate()
    const [chocalate, setchocalate] = useState([])
    useEffect(() => {
        const getdata = async () => {
            await axios.get('http://localhost:5050/chocalate')
                .then(data => setchocalate(data.data))
        }
        getdata()
    }, [])
    //  handledelete
    const handledelete = async (id) => {
        Swal.fire({
            title: 'Are you sure? Delete',
            text: "You won't be able to revert this!",
            icon: 'info',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Delete!!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.delete(`http://localhost:5050/chocalate/${id}`)
                    .then(data => {
                        const chocalateall=chocalate.filter(c=>c._id !== id)
                        setchocalate(chocalateall)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted success!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })

            }
        })

    }
    return (
        <div className='container mx-auto py-4'>
            <button onClick={() => navigate("/add")} className='btn btn-primary capitalize my-[50px]'>+New Chocolate</button>
            <div className="flex flex-col">
                <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
                        <div className="overflow-hidden">
                            <table className="min-w-full text-left text-sm lg:text-xl font-light">
                                <thead className="border-b font-medium dark:border-neutral-500 bg-blue-950">
                                    <tr>
                                        <th scope="col" className="px-6 py-4">Image</th>
                                        <th scope="col" className="px-6 py-4">Name</th>
                                        <th scope="col" className="px-6 py-4">Country/Factory</th>
                                        <th scope="col" className="px-6 py-4">Category</th>
                                        <th scope="col" className="px-6 py-4">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {chocalate.map(all => <Card chocalates={all} handledelete={handledelete} key={all._id}></Card>)}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Tableitem;