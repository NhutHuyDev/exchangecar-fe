import { Button, Popover, Typography, Box, ButtonGroup } from '@mui/material'
import { useState } from 'react'

function PopoverFilter({ filterName, children}) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  return (
    <>
      <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        {filterName}
      </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}

      >
        <Typography
          variant='h6'
          textAlign={'center'}
          color={'#999'}
          sx={{ padding: '10px 10px 0 10px', fontSize: '18px' }}>
          {filterName}
        </Typography>
        {children}
      </Popover>
    </>
  )
}

export default PopoverFilter