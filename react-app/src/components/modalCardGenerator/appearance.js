import { useSelector, useDispatch } from 'react-redux';
import { setSize, setPosition, setColor } from '../../redux/appearanceSlice';

//Modals
import Modal1 from '../modals/modal1';
import Modal2 from '../modals/modal2';
import Modal3 from '../modals/modal3';

export default function Appearance() {
    const appearance = useSelector((state) => state.appearance);
    const selectedTemplate = useSelector((state) => state.templates.item);

    const dispatch = useDispatch();

    const handleSizeChange = (size) => {
        dispatch(setSize(size));
    };

    const handlePositionChange = (position) => {
        dispatch(setPosition(position));
    };

    const handleColorChange = (color) => {
        dispatch(setColor(color));
        console.log(appearance.color);
    };


    return (
        <div className='appearance'>
            <div className='left'>
                <div className='sub-title'>
                    <div className='grey-circle'>
                        2
                    </div>
                    <h2>Appearance <span>(Size, colors, logo)</span></h2>
                </div>

                <div className='size'>
                    <p>Size</p>
                    <ul className='size-items'>
                        <li><a href="#!" className={`${appearance.size === "small" ? 'selected' : ''} `} onClick={(e) => handleSizeChange("small")}>Small</a></li>
                        <li><a href="#!" className={`${appearance.size === "medium" ? 'selected' : ''} `} onClick={(e) => handleSizeChange("medium")}>Medium</a></li>
                        <li><a href="#!" className={`${appearance.size === "large" ? 'selected' : ''} `} onClick={(e) => handleSizeChange("large")}>Large</a></li>
                    </ul>
                </div>

                <div className='position'>
                    <p>Position</p>
                    <ul className='position-items'>
                        <li>
                            <input type="radio" name="position" defaultValue="left1" checked={appearance.position === "left1"} onClick={(e) => handlePositionChange("left1")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="center1" checked={appearance.position === "center1"} onClick={(e) => handlePositionChange("center1")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="right1" checked={appearance.position === "right1"} onClick={(e) => handlePositionChange("right1")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="left2" checked={appearance.position === "left2"} onClick={(e) => handlePositionChange("left2")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="center2" checked={appearance.position === "center2"} onClick={(e) => handlePositionChange("center2")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="right2" checked={appearance.position === "right2"} onClick={(e) => handlePositionChange("right2")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="left3" checked={appearance.position === "left3"} onClick={(e) => handlePositionChange("left3")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="center3" checked={appearance.position === "center3"} onClick={(e) => handlePositionChange("center3")} />
                        </li>
                        <li>
                            <input type="radio" name="position" defaultValue="right3" checked={appearance.position === "right3"} onClick={(e) => handlePositionChange("right3")} />
                        </li>
                    </ul>
                </div>

                <div className='color'>
                    <p>Colors</p>
                    <ul className='color-items'>
                        <li>
                            <input className='bg-black' type="radio" name="color" defaultValue="black" onClick={(e) => handleColorChange("black")} />
                        </li>
                        <li>
                            <input className='bg-orange' type="radio" name="color" defaultValue="orange" onClick={(e) => handleColorChange("orange")} />
                        </li>
                        <li>
                            <input className='bg-dark-grey' type="radio" name="color" defaultValue="dark-grey" onClick={(e) => handleColorChange("dark-grey")} />
                        </li>
                        <li>
                            <input className='bg-grey' type="radio" name="color" defaultValue="grey" onClick={(e) => handleColorChange("grey")} />
                        </li>
                        <li>
                            <input className='bg-white' type="radio" name="color" defaultValue="white" onClick={(e) => handleColorChange("white")} />
                        </li>
                        <li>
                            <input className='bg-purple' type="radio" name="color" defaultValue="purple" onClick={(e) => handleColorChange("purple")} />
                        </li>
                    </ul>
                </div>

                <div className='popup-upload-img'>
                    <p>Upload</p>

                    <div className='item'>
                        <input id="popup-img" type="file" />

                        <div className='inner'>
                            <div className="bg-upload" handle-file-element="#popup-img">
                                <img src="/images/img-icon.png" alt='' />
                            </div>

                        </div>
                        <div className='inner'>
                            <a href='#!' className='btn-upload' handle-file-element="#popup-img">
                                <i className="fa-solid fa-cloud-arrow-up"></i>
                                Drop your image here or <span>upload</span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>

             {selectedTemplate.modalType === "modal-1" &&
                 <Modal1/>
             }
             {selectedTemplate.modalType === "modal-2" &&
                  <Modal2/>
             }
             {selectedTemplate.modalType === "modal-3" &&
                  <Modal3/>
             }

        </div>
    )
}
