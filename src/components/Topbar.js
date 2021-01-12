import React, { memo } from 'react';
import Popup from 'reactjs-popup';
import MembersList from '../components/MembersList';

const Topbar = ({ chat }) => {
  return (
    <div className='topbar'>
      <div className='burger'>
        <span> </span>
        <span> </span>
        <span> </span>
      </div>
      {chat && (
        <div className='topbar__content'>
          <h2>James H</h2>
          {chat && (
            <Popup
              trigger={() => <span>{chat?.members?.length} members</span>}
              closeOnDocumentClick
              // on={['hover']}
              position='bottom center'
            >
              <MembersList members={chat?.members} />
            </Popup>
          )}
        </div>
      )}
    </div>
  );
};

export default memo(Topbar);
