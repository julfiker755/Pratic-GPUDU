import React from 'react';
import { CiEdit } from 'react-icons/ci';
import { MdDelete } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
const Card = ({chocalates,handledelete}) => {
    const navigate=useNavigate()
    const {_id,name,country, category}=chocalates
    return (
        <>
            <tr className="border-b dark:border-neutral-500">
                <td className="whitespace-nowrap px-1 py-1 font-medium">
                    <img className='!w-[100px] !h-[80px] rounded-md' src="https://media.istockphoto.com/id/1388645967/photo/pensive-thoughtful-contemplating-caucasian-young-man-thinking-about-future-planning-new.jpg?b=1&s=170667a&w=0&k=20&c=iSQUfWESVgOxHtV5X7lrNxxzaf4b7fMrmI3dXxrFNbQ=" alt="" />
                </td>
                <td className="whitespace-nowrap px-6 py-4">{name}</td>
                <td className="whitespace-nowrap px-6 py-4">{country}</td>
                <td className="whitespace-nowrap px-6 py-4">{category}</td>
                <td className="whitespace-nowrap px-6 py-4 space-x-2">
                    <button onClick={()=>navigate(`/update/${_id}`)} className='btn btn-sm btn-primary'><CiEdit size={25} /></button>
                    <button onClick={()=>handledelete(_id)} className='btn btn-sm btn-success'><MdDelete size={25} /></button>
                </td>
            </tr>
        </>
    );
};

export default Card;