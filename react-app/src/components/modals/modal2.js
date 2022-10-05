import { useSelector } from 'react-redux';
import appearanceSlice from '../../redux/appearanceSlice';
import contentSlice from '../../redux/contentSlice';

export default function Modal2() {
    const appearance = useSelector((state) => state.appearance);
    const content = useSelector((state) => state.content.content2);

    return (
        <div className={`right ${appearance.position}`}>
            <div className={`size ${appearance.size}`}>
                <div className='modal-2'>
                    <div className='inner'>
                        <h1>{content.title}</h1>
                        <p>{content.description}</p>

                        <div className='btn-group'>
                            <button className={`${appearance.color}`} type="submit">{content.buttonTitle1}</button>
                            <button className={`${appearance.color}`} type="submit">{content.buttonTitle2}</button>
                        </div>

                    </div>

                    <a href="#!" className='btn-close'>
                        <i className="fa-solid fa-xmark"></i>
                    </a>
                </div>
            </div>
        </div>
    )
}
