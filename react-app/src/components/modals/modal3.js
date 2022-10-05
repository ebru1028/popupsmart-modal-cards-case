import { useSelector } from 'react-redux';
import appearanceSlice from '../../redux/appearanceSlice';
import contentSlice from '../../redux/contentSlice';

export default function Modal3() {
    const appearance = useSelector((state) => state.appearance);
    const content = useSelector((state) => state.content.content3);

    return (
        <div className={`right ${appearance.position}`}>
            <div className={`size ${appearance.size}`}>
                <div className='modal-3'>
                    <div className='inner'>

                        <img src='/images/services-icon-1.png' alt=''/>

                        <h1>{content.title}</h1>

                        <p>{content.description}</p>

                        <button className={`${appearance.color}`} type="submit">{content.buttonTitle}</button>
                    </div>


                    <a href="#!" className='btn-close'>
                        <i className="fa-solid fa-xmark"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
