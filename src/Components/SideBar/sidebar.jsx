import React, { useContext, useState } from 'react';
import './sidebar.css';
import { assets } from '../../assets/assets';
import { Context } from '../../Context/Context';

const Sidebar = () => {
    const [extended, setExtended] = useState(false);
    const { onSent, previousPrompt, setRecentPrompt ,newChat} = useContext(Context);
    const loadPrompt=async(prompt)=>{
        setRecentPrompt(prompt)
         await onSent(prompt)
    }
    return (
        <div className="sidebar">
            <div className="top">
                <img onClick={() => setExtended(prev => !prev)} className='menu' src={assets.menu_icon} alt="Menu" />
                <div onClick={()=>newChat()} className="new-chat">
                    <img src={assets.plus_icon} alt="" />
                    {extended ? <p>New Chat</p> : null}
                </div>
                {extended &&
                    <div className="recent">
                        <p className="recent-title">Recent</p>
                        {previousPrompt.map((item, index) => (
                            <div onClick={()=>loadPrompt({item})}key={index} className="recent-entry">
                                <img src={assets.message_icon} alt="Message" />
                                <p>{item.slice(0,18)} ...</p>
                            </div>
                        ))}
                    </div>
                }
            </div>
            <div className="bottom">
                <div className="bottom-item recent-entry">
                    <img src={assets.question_icon} alt="Help" />
                    {extended ? <p>Help</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.history_icon} alt="Activity" />
                    {extended ? <p>Activity</p> : null}
                </div>
                <div className="bottom-item recent-entry">
                    <img src={assets.setting_icon} alt="Settings" />
                    {extended ? <p>Settings</p> : null}
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
