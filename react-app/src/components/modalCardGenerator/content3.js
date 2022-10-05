import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContent3 } from '../../redux/contentSlice';

export default function Content3() {
    const content = useSelector((state) => state.content.content3);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(content.title);
    const [description, setDescription] = useState(content.description);
    const [buttonTitle, setButtonTitle] = useState(content.buttonTitle);

    useEffect(() => {
        dispatch(setContent3({
            title,
            description,
            buttonTitle,
        }));
    }, [title, description, buttonTitle])


    return (
        <div className='content'>
            <div className='sub-title'>
                <div className='grey-circle'>
                    3
                </div>
                <h2>Content</h2>
            </div>

            <div className='edit-content'>
                <p>Edit your content</p>

                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={title}
                    onChange={(e) => { setTitle(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={description}
                    onChange={(e) => { setDescription(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={buttonTitle}
                    onChange={(e) => { setButtonTitle(e.target.value); }}
                />

                <div className='upload-logo'>
                    <p>Upload Logo</p>

                    <div className='item'>
                        <input id="logo-file" type="file" />

                        <div className='inner'>
                            <div className="bg-upload" handle-file-element="#logo-file">
                                <img src="/images/img-icon.png" alt='' />
                            </div>

                        </div>

                        <div className='inner'>
                            <a href='#!' className='btn-upload' handle-file-element="#logo-file">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                Drop your image here or <span>upload</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
