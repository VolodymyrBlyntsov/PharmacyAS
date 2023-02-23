import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from 'react-router-dom';

const Drugs = () => {
    const [drugs, setDrugs] = useState([])

    useEffect(() => {
        const fetchAllDrugs = async () => {
            try {
                const res = await axios.get("http://localhost:8800/drugs")
                setDrugs(res.data)
                console.log(res)
            } catch (error) {
                console.log(error)
            }
        }
        fetchAllDrugs()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete("http://localhost:8800/drugs/"+id)
            window.location.reload()
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>Pharmacy</h1>
            <div className="drugs">
                {drugs.map(drug => (
                    <div className='drug' key={drug.id}>
                        {drug.cover && <img src={drug.cover} alt="" />}
                        <h2>{drug.title}</h2>
                        <p>{drug.desc}</p>
                        <span>{drug.price}</span>
                        <button className='delete' onClick={() => handleDelete(drug.id)}>Delete</button>
                        <button className='update'>Update</button>
                    </div>
                ))}
            </div>
            <button>
                <Link to="/add">
                    Add New Drug
                </Link>
            </button>
        </div>
    )
}

export default Drugs