import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import './Drawer.css'
// import List from '@mui/material/List';
// import Divider from '@mui/material/Divider';
// import ListItem from '@mui/material/ListItem';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
// import MailIcon from '@mui/icons-material/Mail';
import { Link } from 'react-router-dom'
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import { keyframes } from '@mui/system';
import { MdClose } from "react-icons/md";
import { VscDiffAdded } from "react-icons/vsc";
import { FiMinusSquare } from "react-icons/fi";


const theme = createTheme();

const drawerFlowInAnimation = keyframes`
  0% { transform: translateX(-100%); }
  5% { transform: translateX(-95%); }
  10% { transform: translateX(-90%); }
  15% { transform: translateX(-85%); }
  20% { transform: translateX(-80%); }
  25% { transform: translateX(-75%); }
  30% { transform: translateX(-70%); }
  35% { transform: translateX(-65%); }
  40% { transform: translateX(-60%); }
  45% { transform: translateX(-55%); }
  50% { transform: translateX(-50%); }
  55% { transform: translateX(-45%); }
  60% { transform: translateX(-40%); }
  65% { transform: translateX(-35%); }
  70% { transform: translateX(-30%); }
  75% { transform: translateX(-25%); }
  80% { transform: translateX(-20%); }
  85% { transform: translateX(-15%); }
  90% { transform: translateX(-10%); }
  95% { transform: translateX(-5%); }
  100% { transform: translateX(0); }
`;

const drawerFlowOutAnimation = keyframes`
  0% { transform: translateX(0); }
  5% { transform: translateX(-5%); }
  10% { transform: translateX(-10%); }
  15% { transform: translateX(-15%); }
  20% { transform: translateX(-20%); }
  25% { transform: translateX(-25%); }
  30% { transform: translateX(-30%); }
  35% { transform: translateX(-35%); }
  40% { transform: translateX(-40%); }
  45% { transform: translateX(-45%); }
  50% { transform: translateX(-50%); }
  55% { transform: translateX(-55%); }
  60% { transform: translateX(-60%); }
  65% { transform: translateX(-65%); }
  70% { transform: translateX(-70%); }
  75% { transform: translateX(-75%); }
  80% { transform: translateX(-80%); }
  85% { transform: translateX(-85%); }
  90% { transform: translateX(-90%); }
  95% { transform: translateX(-95%); }
 100% { transform: translateX(-100%);}
`;

const CustomDrawer = styled(({ isClosing, ...other }) =>
  <Drawer {...other} />)
  (({ theme, isClosing }) => ({
    '& .MuiDrawer-paper': {
      width: 320,
      transform: isClosing ? 'translateX(0)' : 'translateX(-100%)',
      animation: isClosing ? `${drawerFlowOutAnimation} 0.3s ease-out forwards` : `${drawerFlowInAnimation} 0.3s ease-out forwards`,
    },
  }));




function CategoryOpen({ isCategoryOpen, setCategoryOpen }) {


  const [isClosing, setIsClosing] = useState(false);
  const [submenuIndex, setSubmenuIndex] = useState(null)


  const handleClick = (index, subIndex) => {
    if (index) {
      openSubmenu(subIndex)
    } else {
      setSubmenuIndex(null)
    }

  };

  const openSubmenu = (subIndex) => {

    if (submenuIndex === subIndex) {


      switch (subIndex) {

        case 0: setSubmenuIndex(null)
          break;

        case 1: setSubmenuIndex(0)
          break;

        case 2: setSubmenuIndex(0)
          break;

        case 3: setSubmenuIndex(0)
          break;

        default:
          break;
      }
    } else {
      setSubmenuIndex(subIndex)
    }
  }

  const toggleDrawer = (newOpen) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    if (!newOpen) {
      setIsClosing(true);
      setTimeout(() => {
        setCategoryOpen(false);
        setIsClosing(false);
      }, 300); // Duration of the closing animation
    } else {
      setCategoryOpen(true);
    }
  };

  const DrawerList = (
    <Box sx={{ width: 320 }} role="presentation" >
      <div className='flex w-full bg-gray-50 items-center justify-between '>
        <Typography variant="h6" sx={{ fontWeight: 'bold', p: 2, }}>
          Shop by Category
        </Typography>
        <MdClose className='size-7 text-gray-600  margin cursor-pointer' onClick={toggleDrawer(false)} />
      </div>


      <ul className='drawershowing-list'>
        <li className='list-none items-center  flex cursor-pointer '>
          <Link to={'/'} className=" w-[90%] link">
            <Button className='drawershowing-list-button justify-start '>
              Fashion
            </Button>
          </Link>
          {
            (submenuIndex === 0 || submenuIndex === 1 || submenuIndex === 2 || submenuIndex === 3)
              ? (<FiMinusSquare className='justify-end margin w-[10%] ' onClick={() => handleClick(false, 0)} />)
              : (<VscDiffAdded className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 0)} />)
          }

        </li>
        {
          (submenuIndex === 0 || submenuIndex === 1 || submenuIndex === 2 || submenuIndex === 3) &&
          (
            <li className='list-none flex cursor-pointer items-center '>
              <Link to={'/'} className=" w-[90%] link submenuIndex-padding">
                <Button className='drawershowing-list-button justify-start '>
                  Apparel
                </Button>
              </Link>
              {
                (submenuIndex === 1)
                  ? (<FiMinusSquare className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 1)} />)
                  : (<VscDiffAdded className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 1)} />)


              }
            </li>
          )
        }
        {
          (submenuIndex === 1) &&
          (
            <ul>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[90%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Smart Table
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Crepe T-Shirt
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Leather Watch
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding '>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Rolling Diamond
                  </Button>
                </Link>

              </li>
            </ul>
          )
        }
        {
          (submenuIndex === 0 || submenuIndex === 1 || submenuIndex === 2 || submenuIndex === 3) &&
          (
            <li className='list-none flex cursor-pointer items-center '>
              <Link to={'/'} className=" w-[90%] link submenuIndex-padding">
                <Button className='drawershowing-list-button justify-start '>
                  Outerwear
                </Button>
              </Link>
              {
                (submenuIndex === 2)
                  ? (<FiMinusSquare className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 2)} />)
                  : (<VscDiffAdded className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 2)} />)


              }
            </li>
          )
        }
        {
          (submenuIndex === 2) &&
          (
            <ul>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[90%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Wooden Chair
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Sneakers Shoes
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Purse
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding '>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Xbox Controller
                  </Button>
                </Link>

              </li>
            </ul>
          )
        }

        {
          (submenuIndex === 0 || submenuIndex === 1 || submenuIndex === 2 || submenuIndex === 3) &&
          (
            <li className='list-none flex cursor-pointer items-center '>
              <Link to={'/'} className=" w-[90%] link submenuIndex-padding">
                <Button className='drawershowing-list-button justify-start '>
                  Footwear
                </Button>
              </Link>
              {
                (submenuIndex === 3)
                  ? (<FiMinusSquare className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 3)} />)
                  : (<VscDiffAdded className='justify-end margin w-[10%] ' onClick={() => handleClick(true, 3)} />)


              }
            </li>
          )
        }
        {
          (submenuIndex === 3) &&
          (
            <ul>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[90%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Leather Watch
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Cabinet Table
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding'>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Headphones
                  </Button>
                </Link>

              </li>
              <li className='list-none items-center  flex cursor-pointer innerSubmenuIndex-padding '>
                <Link to={'/'} className=" w-[100%] link">
                  <Button className='drawershowing-list-button justify-start '>
                    Sunglasses
                  </Button>
                </Link>

              </li>
            </ul>
          )
        }

        <li className='list-none flex cursor-pointer items-center '>
          <Link to={'/'} className=" w-[90%] link ">
            <Button className='drawershowing-list-button justify-start '>
              Jewellery
            </Button>
          </Link>
        </li>

      </ul>
    </Box>
  );

  return (

    <ThemeProvider theme={theme}>
      <div>
        <CustomDrawer open={isCategoryOpen} onClose={toggleDrawer(false)} isClosing={isClosing}>
          {DrawerList}
        </CustomDrawer>
      </div>
    </ThemeProvider>
  );
}

export default CategoryOpen;
