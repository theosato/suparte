import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';

const useStyles = makeStyles({
  root: {
    width: 375
  },
});

export default function LabelBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState('home');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
      <BottomNavigationAction label="Home" value="home" icon={<HomeIcon />} />
      <BottomNavigationAction label="Search" value="search" icon={<SearchIcon />} />
      <BottomNavigationAction label="Cart" value="cart" icon={<ShoppingCartOutlinedIcon />} />
      <BottomNavigationAction label="Favorite" value="favorite" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="Profile" value="profile" icon={<PersonOutlineOutlinedIcon />} />
    </BottomNavigation>
  );

}
