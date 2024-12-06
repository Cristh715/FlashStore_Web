import { React } from 'react';
import "./Category.css"
import { ArrowCircleRight } from '@phosphor-icons/react';
import { Link } from 'react-router-dom';


const Category = ({ category, children }) => {
    return (
        <article className="category" >
            <div className='category-img'>
                <img src={`./img/categories/${category}.webp`} alt={category}></img>
            </div>
            <div className='category-description'>
                <div className="category-title">
                    {children}
                    <h3>{category}</h3>
                </div>
                <p>¿Buscas un nuevo smartphone?<br></br>Conoce nuestras ofertas</p>
            </div>
            <div className='category-btn'>
                <Link to={`/catalogo/${category.toLowerCase()}`} className='category-go'>Ver catálogo
                    <ArrowCircleRight size={32} color="#017cfe" weight="duotone" />
                </Link>
            </div>
        </article>
    )
}

export default Category;