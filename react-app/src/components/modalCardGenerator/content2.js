import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContent2 } from '../../redux/contentSlice';

export default function Content2() {
    const content = useSelector((state) => state.content.content2);
    const dispatch = useDispatch();
    
    const [title, setTitle] = useState(content.title);
    const [description, setDescription] = useState(content.description);
    const [buttonTitle1, setButtonTitle1] = useState(content.buttonTitle1);
    const [buttonTitle2, setButtonTitle2] = useState(content.buttonTitle2);

    useEffect(() => {
        dispatch(setContent2({
            title,
            description,
            buttonTitle1,
            buttonTitle2,
        }));
    }, [title,description,buttonTitle1,buttonTitle2])


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
                    defaultValue={buttonTitle1}
                    onChange={(e) => { setButtonTitle1(e.target.value); }}
               
                /><input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={buttonTitle2}
                    onChange={(e) => { setButtonTitle2(e.target.value); }}
                />
            </div>
        </div>
    )
}
