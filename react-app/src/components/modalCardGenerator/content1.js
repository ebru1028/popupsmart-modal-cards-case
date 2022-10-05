import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setContent1 } from '../../redux/contentSlice';

export default function Content1() {
    const content = useSelector((state) => state.content.content1);
    const dispatch = useDispatch();

    const [title, setTitle] = useState(content.title);
    const [subTitle, setSubTitle] = useState(content.subTitle);
    const [fullName, setFullName] = useState(content.fullName);
    const [email, setEmail] = useState(content.email);
    const [buttonTitle, setButtonTitle] = useState(content.buttonTitle);
    const [policyText, setPolicyText] = useState(content.policyText);
   
    useEffect(() => {
        dispatch(setContent1({
            title,
            subTitle,
            fullName,
            email,
            buttonTitle,
            policyText
        }));
    }, [title,subTitle, fullName, email, buttonTitle, policyText])

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
                    defaultValue={subTitle}
                    onChange={(e) => { setSubTitle(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={fullName}
                    onChange={(e) => { setFullName(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={email}
                    onChange={(e) => { setEmail(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={buttonTitle}
                    onChange={(e) => { setButtonTitle(e.target.value); }}
                />
                <input className='content-input'
                    type='text'
                    name='reply_to'
                    placeholder=''
                    defaultValue={policyText}
                    onChange={(e) => { setPolicyText(e.target.value); }}
                />
            </div>
        </div>
    )
}
