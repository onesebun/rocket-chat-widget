import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import ChatIcon from '@mui/icons-material/Chat';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import Badge from '@mui/material/Badge';

import Draggable from 'react-draggable';

function RocketChatWidget({ iframeSrc, anchor, tooltip, closeText, rootStyle }) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [count, setCount] = React.useState(0);
  const [isDragging, setIsDragging] = React.useState(false);

  const onMessageReceivedFromIframe = event => {
    // console.log("onMessageReceivedFromIframe", state, event);
    if (!state[anchor] && event.data.eventName === 'new-message') {
      setCount(prev => prev + 1)
    }
  };

  React.useEffect(() => {
    if (state[anchor]) {
      setCount(0)
    }
  }, [state])

  const addIframeListener = () =>
    window.addEventListener("message", onMessageReceivedFromIframe);
  const removeIframeListener = () =>
    window.removeEventListener("message", onMessageReceivedFromIframe);

  React.useEffect(() => {
    addIframeListener();
    return () => {
      removeIframeListener();
    };
  }, []);

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{
        width: anchor === 'top' || anchor === 'bottom' ? 'auto' : '100vw',
        maxWidth: anchor === 'top' || anchor === 'bottom' ? 'auto' : 550,
        height: '100vh',
        display: 'flex',
        flexDirection: 'column'
      }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <iframe
        src={iframeSrc}
        style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
        title="Rocket.chat"
      />
      <Button>{closeText}</Button>
    </Box>
  );

  return (
    <div style={rootStyle}>
      <React.Fragment key={anchor}>
        <Draggable
          axis="both"
          onClick={e => console.log(e)}
          onStart={() => setIsDragging(false)}
          onDrag={() => setIsDragging(true)}
          onStop={() => setIsDragging(false)}
        >
          <Tooltip title={tooltip} placement="top">
            <IconButton
              disabled={isDragging}
              onClick={toggleDrawer(anchor, true)}
              // size="small"
              sx={{ ml: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Badge color="secondary" badgeContent={count}>
                <ChatIcon />
              </Badge>
            </IconButton>
          </Tooltip>
        </Draggable>

        <SwipeableDrawer
          anchor={anchor}
          open={state[anchor]}
          onClose={toggleDrawer(anchor, false)}
          onOpen={toggleDrawer(anchor, true)}
          ModalProps={{
            keepMounted: true,
          }}
        >
          {list(anchor)}
        </SwipeableDrawer>
      </React.Fragment>
    </div>
  );
}

RocketChatWidget.propTypes = {
  iframeSrc: PropTypes.string.isRequired,
  rootStyle: PropTypes.object,
  anchor: PropTypes.string,
  tooltip: PropTypes.string,
  closeText: PropTypes.string
}

RocketChatWidget.defaultProps = {
  anchor: 'right',
  tooltip: 'Chat',
  closeText: 'Close',
  rootStyle: { right: 10, bottom: 10, position: 'absolute' }
};

export default RocketChatWidget;