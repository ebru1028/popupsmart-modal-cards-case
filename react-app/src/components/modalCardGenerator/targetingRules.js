import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setTargeting } from '../../redux/targetingSlice';
import { MultiSelect } from "react-multi-select-component";

const languages = [
    { label: "English", value: "english" },
    { label: "French", value: "french" },
    { label: "Türkçe", value: "turkish" },
];

export default function TargetingRules() {
    const dispatch = useDispatch();
    const targeting = useSelector((state) => state.targeting.item);

    const [visitorDeviceIsChecked, setvisitorDeviceIsChecked] = useState(false);
    const [afterXsecondsIsChecked, setAfterXsecondsIsChecked] = useState(false);
    const [afterScrollIsChecked, setAfterScrollIsChecked] = useState(false);
    const [trafficSourceIsChecked, setTrafficSourceIsChecked] = useState(false);
    const [browserLanguageIsChecked, setBrowserLanguageIsChecked] = useState(false);
    const [exitIntentTargetingIsChecked, setExitIntentTargetingIsChecked] = useState(false);

    const [visitorDeviceSelected, setVisitorDeviceSelected] = useState("");
    const [afterXseconds, setAfterXseconds] = useState("");
    const [afterScroll, setAfterScroll] = useState("");
    const [trafficSource, setTrafficSource] = useState("");
    const [browserLanguageText, setBrowserLanguageText] = useState([]);

    useEffect(() => {
        
        dispatch(setTargeting({
            visitorDeviceSelected,
            afterXseconds,
            afterScroll,
            trafficSource,
            browserLanguageText,
            exitIntentTargetingIsChecked
        }));

    }, [visitorDeviceSelected, afterXseconds, afterScroll, trafficSource, browserLanguageText, exitIntentTargetingIsChecked])


    return (
        <div className='targeting-rules'>
            <div className='sub-title'>
                <div className='grey-circle'>
                    4
                </div>
                <h2>Targeting Rules</h2>
            </div>

            <div className='content'>
                
                <div className='switch-item'>
                    <span className='switch-title'>Visitor Device</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={visitorDeviceIsChecked} onChange={(e) => setvisitorDeviceIsChecked(!visitorDeviceIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>

                {
                    visitorDeviceIsChecked === true &&
                    <ul className='visitor-device-items'>
                        <li>
                            <input type="radio" name="chk" id="one" defaultValue="Desktop" onClick={((e) => setVisitorDeviceSelected("desktop"))} />
                            <i className="fa-solid fa-desktop"></i>
                            Desktop
                        </li>
                        <li>
                            <input type="radio" name="chk" id="one" defaultValue="Mobile" onClick={((e) => setVisitorDeviceSelected("mobile"))} />
                            <i className="fa-solid fa-mobile-screen-button"></i>
                            Mobile
                        </li>
                    </ul>
                }

                <div className='switch-item'>
                    <span className='switch-title'> After X seconds</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={afterXsecondsIsChecked} onChange={(e) => setAfterXsecondsIsChecked(!afterXsecondsIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>

                {
                    afterXsecondsIsChecked === true &&
                    <input type='text' className='content-input' placeholder='After x seconds' defaultValue={targeting.afterXseconds} onChange={(e) => setAfterXseconds(e.target.value)} />
                }

                <div className='switch-item'>
                    <span className='switch-title'>After % Scroll</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={afterScrollIsChecked} onChange={(e) => setAfterScrollIsChecked(!afterScrollIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>

                {
                    afterScrollIsChecked === true &&
                    <input type='text' className='content-input' placeholder='After & Scroll' defaultValue={targeting.afterScroll} onChange={(e) => setAfterScroll(e.target.value)} />
                }

                <div className='switch-item'>
                    <span className='switch-title'>Traffic Source</span>
                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={trafficSourceIsChecked} onChange={(e) => setTrafficSourceIsChecked(!trafficSourceIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>

                {
                    trafficSourceIsChecked === true &&
                    <input type='text' className='content-input' placeholder='Traffic Source' efaultValue={targeting.trafficSource} onChange={(e) => setTrafficSource(e.target.value)} />
                }

                <div className='switch-item'>
                    <span className='switch-title'>Browser Language</span>

                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={browserLanguageIsChecked} onChange={(e) => setBrowserLanguageIsChecked(!browserLanguageIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>

                {
                    browserLanguageIsChecked === true &&

                    <div>
                        <MultiSelect
                            options={languages}
                            value={browserLanguageText}
                            onChange={setBrowserLanguageText}
                            labelledBy="Select"
                        />
                    </div>
                }

                <div className='switch-item'>
                    <span className='switch-title'>Exit Intent Targeting</span>

                    <label className="switch">
                        <input type="checkbox" defaultChecked={false} defaultValue={exitIntentTargetingIsChecked} onChange={(e) => setExitIntentTargetingIsChecked(!exitIntentTargetingIsChecked)} />
                        <div className="slider"></div>
                    </label>
                </div>


            </div>
        </div>
    )
}
