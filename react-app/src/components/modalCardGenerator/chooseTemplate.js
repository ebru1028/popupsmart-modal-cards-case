import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Pagination from "react-js-pagination";

import { fetchTemplates, selectTemplate } from '../../redux/templateSlice';

import Appearance from './appearance';
import Content1 from './content1';
import Content2 from './content2';
import Content3 from './content3';
import TargetingRules from './targetingRules';
import SettingAndCode from './settingsAndCode';

export default function ChooseTemplate() {
    const templates = useSelector((state) => state.templates.items);
    const selectedTemplate = useSelector((state) => state.templates.item);
    const dispatch = useDispatch();

    //Choose Template State
    const [activePage, setActivePage] = useState(1);

    useEffect(() => {
        dispatch(fetchTemplates(1));
    }, [dispatch]);

    const handlePageChange = (pageNumber) => {
        dispatch(fetchTemplates(pageNumber));
        setActivePage(pageNumber);
    };

    const setSelectedTemplate = (id) => {
        dispatch(selectTemplate(id));
    };

    return (
        <>
            <div className='chosee-template'>
                <div className='sub-title'>
                    <div className='grey-circle'>
                        1
                    </div>
                    <h2>Choose your template</h2>
                </div>

                <div className='templates'>
                    {
                        templates.map((item) =>
                            <div className='item' key={item.id}>
                                <div className="inner">
                                    <img src={`${item.img}`} alt="" />

                                    <div className='overlay'>
                                        <div className='content'>
                                            <a href="#!" className='btn-select-template' onClick={(e) => setSelectedTemplate(item.id)}>Select template</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

                <Pagination
                    totalItemsCount={36}
                    onChange={handlePageChange}
                    activePage={activePage}
                    itemsCountPerPage={12}
                    pageRangeDisplayed={3}
                />
            </div>

            {
                selectedTemplate.modalType?.length > 0  &&
                <>
                    <Appearance />

                    {selectedTemplate.modalType === "modal-1" &&
                        <Content1 />
                    }

                    {selectedTemplate.modalType === "modal-2" &&
                        <Content2 />
                    }

                    {selectedTemplate.modalType === "modal-3" &&
                        <Content3 />
                    }

                    <TargetingRules />

                    <SettingAndCode />
                </>
            }

        </>
    )
}
