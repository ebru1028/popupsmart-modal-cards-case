import { useSelector } from 'react-redux';
import appearanceSlice from '../../redux/appearanceSlice';
import contentSlice from '../../redux/contentSlice';

export default function Modal1() {
    const appearance = useSelector((state) => state.appearance);
    const content = useSelector((state) => state.content.content1);

    return (
        <div className={`right ${appearance.position}`}>
            <div className={`size ${appearance.size}`}>
                <div className='modal-1'>
                    <div className='inner'>
                        <div className='m-left'>
                            <h1>{content.title}</h1>
                            <p>{content.subTitle}</p>
                            <form>
                                <input
                                    type='text'
                                    name='reply_to'
                                    placeholder={content.fullName}
                                    value=""
                                />
                                <input
                                    type='text'
                                    name='reply_to'
                                    placeholder={content.email}
                                    value=""
                                />
                                <button className={`${appearance.color}`} type="submit">{content.buttonTitle}</button>
                            </form>
                            <span>
                                {content.policyText}
                            </span>
                        </div>

                        <div className='m-right'>
                            <img src="/images/sign-up-img.jpg" alt="" />
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
