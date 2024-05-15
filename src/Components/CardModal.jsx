import React,{useState}from 'react';
import './CardModal.css';
import BlogCard from './BlogCard';

const CardModal=()=>{
    const[isModalOpen,setModalOpen]=useState(false);
    const openModal=()=>{
        setModalOpen(true);
    };
    const closeModal=()=>{
        setModalOpen(false);
    };
    return (
        <div>
          <div className="card" onClick={openModal}>
            <h2>
               {BlogCard.title}
            </h2>
            <image alt='Blog.image'/>
            <p>{BlogCard.description}</p>
           
          </div>
          {isModalOpen && (
            <div className="modal">
              <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
              </div>
            </div>
          )}
        </div>
      );
    };
    
    export default CardModal;