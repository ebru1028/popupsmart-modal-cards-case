import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSettingsAndCode } from '../../redux/settingsAndCodeSlice';

export default function SettingsAndCode() {

    const content1 = useSelector(state => state.content.content1);
    const content2 = useSelector(state => state.content.content2);
    const content3 = useSelector(state => state.content.content3);
    const appearance = useSelector(state => state.appearance);

    const selectedTemplate = useSelector((state) => state.templates.item);

    const dispatch = useDispatch();

    const [webhookUrl, setWebhookUrl] = useState("");
    const [sendForm, setSendForm] = useState(false);
    const [sendData, setSendData] = useState(false);
    const [code, setCode] = useState("");

    const [sendFormIsChecked, setSendFormIsChecked] = useState();
    const [sendClickDataIsChecked, setSendClickDataIsChecked] = useState();

    useEffect(() => {
        dispatch(setSettingsAndCode({
            webhookUrl,
            sendForm,
            sendData
        }))
    }, [sendForm, sendData])

    useEffect(() => {
        setCode("");
    }, [selectedTemplate])

    const getYourCodeHandle = () => {

        if (selectedTemplate.modalType === 'modal-1') {
            setCode(`<script type="text/javascript" src="https://popupsmart.com/freechat.js"></script><script> window.start.init({ title: "${content1.title}", message: "${content1.subTitle}", color: "${appearance.color}", position: "${appearance.position}", placeholder: ${content1.fullName}"", button: "${content1.buttonTitle}"})</script>`);
        }
        else if (selectedTemplate.modalType === 'modal-2') {
            setCode(`<script type="text/javascript" src="https://popupsmart.com/freechat.js"></script><script> window.start.init({ title: "${content2.title}", message: "${content2.description}", color: "${appearance.color}", position: "${appearance.position}", button1: "${content1.buttonTitle1}", button2: "${content1.buttonTitle2}"})</script>`);
        }
        else if (selectedTemplate.modalType === 'modal-3') {
            setCode(`<script type="text/javascript" src="https://popupsmart.com/freechat.js"></script><script> window.start.init({ title: "${content3.title}", message: "${content3.description}", color: "${appearance.color}", position: "${appearance.position}", button: "${content3.buttonTitle}"})</script>`);
        }
    }

    const copyCode = (e) => {
        navigator.clipboard.writeText(code)
    }

    return (
        <div>

            <div className='settings-and-code'>
                <div className='sub-title'>
                    <div className='grey-circle'>
                        5
                    </div>
                    <h2>Settings and Code</h2>
                </div>
                <div className='content'>
                    <h3>Webhook to Send data</h3>
                    <p>
                        Enter youe Webhook URL <br />
                        You can  create a simple one with <a href="#!">make.com</a>
                    </p>

                    <input type='text' className='content-input' placeholder='Your Webhook URL' defaultValue={webhookUrl} onChange={(e) => setWebhookUrl(e.target.value)} />

                    <ul className='checkbox-items'>
                        <li>
                            <input type="checkbox" defaultChecked={false} name="chk" id="" defaultValue={false} onClick={(e) => setSendFormIsChecked(!sendFormIsChecked)} />
                            Send form submissions
                        </li>
                        <li>
                            <input type="checkbox" defaultChecked={false} name="chk" id="" defaultValue={false} onClick={(e) => setSendClickDataIsChecked(!sendClickDataIsChecked)} />
                            Send click data
                        </li>
                    </ul>

                </div>

            </div>

            <div className='submit-btn'>
                <a href="#!" className='btn-get-code' onClick={(getYourCodeHandle)}>Get your Code </a>

                {
                    code.length > 0 && <>

                        <div className='code'>
                            <textarea value={code}></textarea>
                            <div className='btn-inner'>
                                <a href="#!" className='btn-copy' onClick={copyCode}>Copy the code</a>
                            </div>
                        </div>

                        <div className='info-text'>
                            <img src='/images/info-icon.png' alt='' />
                            <p>
                                Copy and paste the embed code above just before the
                                closing tag of your website template file.
                            </p>
                        </div>
                    </>

                }
            </div>
        </div>
    )
}
